import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import heicConvert from 'heic-convert';
import sharp from 'sharp';
import { ExifTool } from 'exiftool-vendored';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, 'content');
const galleriesPath = path.join(contentDir, 'galleries');
const targetFile = path.join(__dirname, 'src/galleries.ts');
const publicDir = path.join(__dirname, 'public');
const publicContentDir = path.join(publicDir, 'content');
const publicGalleriesDir = path.join(publicContentDir, 'galleries');
const apiDir = path.join(publicDir, 'api');

const responsiveSizes = [160, 380, 640, 1440];
const baseUrl = "https://photos.lucamack.at";

function slugify(text) {
  return text
    .toString()
    .normalize('NFC')
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/ /g, '_');
}

async function generateGalleries() {
  const exiftool = new ExifTool();
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  if (!fs.existsSync(publicContentDir)) {
    fs.mkdirSync(publicContentDir, { recursive: true });
  }
  if (!fs.existsSync(publicGalleriesDir)) {
    fs.mkdirSync(publicGalleriesDir, { recursive: true });
  }
  if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir, { recursive: true });
  }

  const directories = fs.readdirSync(galleriesPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const galleryPromises = directories.map(async (name) => {
    const galleryDir = path.join(galleriesPath, name);
    const gallerySlug = slugify(name);
    const publicGalleryDir = path.join(publicGalleriesDir, gallerySlug);

    if (!fs.existsSync(publicGalleryDir)) {
      fs.mkdirSync(publicGalleryDir, { recursive: true });
    }

    const files = fs.readdirSync(galleryDir);

    for (const file of files) {
      const sourcePath = path.join(galleryDir, file);
      const ext = path.extname(file);
      const base = path.basename(file, ext).replace(/ /g, '_');
      let processPath = sourcePath;
      let outputExt = ext;
      if (/\.jpe?g$/i.test(outputExt)) {
        outputExt = '.jpg';
      }

      if (/\.heic$/i.test(file)) {
        const jpgFile = `${base}.jpg`;
        const jpgPath = path.join(publicGalleryDir, jpgFile);
        outputExt = '.jpg';

        if (!fs.existsSync(jpgPath)) {
          console.log(`Converting: ${file}`);
          try {
            const inputBuffer = fs.readFileSync(sourcePath);
            const outputBuffer = await heicConvert({
              buffer: inputBuffer,
              format: 'JPEG',
              quality: 1,
            });
            fs.writeFileSync(jpgPath, outputBuffer);
            processPath = jpgPath;
          } catch (e) {
            console.error(`Failed to convert ${file}:`, e);
            continue;
          }
        } else {
          processPath = jpgPath;
        }
      }

      if (/\.(jpe?g|png|webp)$/i.test(processPath)) {
        // First, copy the original-sized image
        const originalTargetPath = path.join(publicGalleryDir, `${base}${outputExt}`);
        if (!fs.existsSync(originalTargetPath)) {
          fs.copyFileSync(processPath, originalTargetPath);
          console.log(`Copying original: ${base}${outputExt}`);
        }

        for (const size of responsiveSizes) {
          const targetFile = `${base}-${size}w${outputExt}`;
          const targetPath = path.join(publicGalleryDir, targetFile);

          if (!fs.existsSync(targetPath)) {
            try {
              console.log(`Generating: ${targetFile}`);
              await sharp(processPath)
                .resize({ width: size })
                .toFile(targetPath);
            } catch (e) {
              console.error(`Failed to generate ${targetFile}:`, e);
            }
          }
        }
      }
    }

    // Parse gallery metadata first
    let title = name;
    let description = '';
    let creator = null;
    let copyrightNotice = null;
    let creditText = null;
    let acquireLicensePage = null;
    let tags = null;
    const mdPath = path.join(galleryDir, 'index.md');

    if (fs.existsSync(mdPath)) {
      const mdContent = fs.readFileSync(mdPath, 'utf-8');
      
      // Parse frontmatter
      const frontmatterMatch = mdContent.match(/^---\n([\s\S]*?)\n---/);
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        const creatorMatch = frontmatter.match(/creator:\s*["']?(.*?)["']?$/m);
        const copyrightMatch = frontmatter.match(/copyrightNotice:\s*["']?(.*?)["']?$/m);
        const creditMatch = frontmatter.match(/creditText:\s*["']?(.*?)["']?$/m);
        const licenseMatch = frontmatter.match(/acquireLicensePage:\s*["']?(.*?)["']?$/m);
        const tagsMatch = frontmatter.match(/tags:\s*(\[.*?\])/m);
        
        if (creatorMatch) creator = creatorMatch[1].trim();
        if (copyrightMatch) copyrightNotice = copyrightMatch[1].trim();
        if (creditMatch) creditText = creditMatch[1].trim();
        if (licenseMatch) acquireLicensePage = licenseMatch[1].trim();
        if (tagsMatch) {
          try {
            tags = JSON.parse(tagsMatch[1]);
          } catch (e) {
            console.error(`Error parsing tags for ${name}:`, e);
          }
        }
      }
      
      const h1Match = mdContent.match(/^#\s+(.*)/m);
      if (h1Match) title = h1Match[1].trim();
      const paragraphs = mdContent.split('\n\n');
      const firstParagraph = paragraphs.find(p => p.trim() && !p.trim().startsWith('#') && !p.trim().startsWith('---'));
      if (firstParagraph) description = firstParagraph.trim();
    }

    const imageFilesRaw = fs.readdirSync(galleryDir).filter(file => /\.(jpe?g|png|gif|webp|heic)$/i.test(file));

    const imageFilesData = await Promise.all(
      imageFilesRaw.map(async (file) => {
        const sourcePath = path.join(galleryDir, file);
                        const filename = file.replace(/\.heic$/i, '.jpg').replace(/\.jpeg$/i, '.jpg');
        let latitude = null;
        let longitude = null;
        let createDate = null;
        let alt = null;

        try {
          const tags = await exiftool.read(sourcePath);

          if (tags) {
            if (tags.GPSLatitude && tags.GPSLongitude) {
              latitude = tags.GPSLatitude;
              longitude = tags.GPSLongitude;
            }
            const exifDate = tags.DateTimeOriginal || tags.CreateDate;
            // Convert ExifDateTime object to ISO string format
            if (exifDate) {
              createDate = exifDate.toDate().toISOString();
            }
            const comment = tags.UserComment || tags.ImageDescription || tags.Description || tags.Comment;
            alt = typeof comment === 'string' && comment.trim() !== '' ? comment.trim() : null;
          }
        } catch (err) {
          console.error('Error reading exif for', file, err);
        }

        // Google Maps URL is now generated in the frontend
        
        // Extract color data
        let colorData = null;
        try {
          const processPath = path.join(publicGalleryDir, filename.replace(/ /g, '_'));
          if (fs.existsSync(processPath)) {
            colorData = await extractColors(processPath);
          }
        } catch (err) {
          console.error('Error extracting colors for', filename, err);
        }
        
        return { 
          filename, 
          latitude, 
          longitude, 
          createDate, 
          colorData,
          ...(creator && { creator }),
          ...(copyrightNotice && { copyrightNotice }),
          ...(creditText && { creditText }),
          ...(acquireLicensePage && { acquireLicensePage }),
          ...(tags && { tags })
        };
      })
    );

    const imageFilenames = new Set();
    const uniqueImageFilesData = imageFilesData.filter(imgData => {
      if (imageFilenames.has(imgData.filename)) {
        return false;
      }
      imageFilenames.add(imgData.filename);
      return true;
    });

    const dates = uniqueImageFilesData
      .map(img => {
        if (!img.createDate) return null;
        // Handle both string format and legacy object format
        if (typeof img.createDate === 'string') {
          return new Date(img.createDate);
        } else if (img.createDate.toDate) {
          return img.createDate.toDate();
        }
        return null;
      })
      .filter(Boolean);

    let timeframe = '';
    if (dates.length > 0) {
      dates.sort((a, b) => a - b);
      const minDate = dates[0];
      const maxDate = dates[dates.length - 1];
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      const minDateStr = minDate.toLocaleDateString('de-DE', options);
      const maxDateStr = maxDate.toLocaleDateString('de-DE', options);

      if (minDate.toDateString() === maxDate.toDateString()) {
        timeframe = minDateStr;
      } else {
        timeframe = `${minDateStr} - ${maxDateStr}`;
      }
    }

    const imageCount = uniqueImageFilesData.length;

        return { 
          name, 
          slug: gallerySlug, 
          title, 
          description, 
          images: uniqueImageFilesData, 
          timeframe, 
          imageCount,
          ...(creator && { creator }),
          ...(copyrightNotice && { copyrightNotice }),
          ...(creditText && { creditText }),
          ...(acquireLicensePage && { acquireLicensePage }),
          ...(tags && { tags })
        };
  });

  const galleries = await Promise.all(galleryPromises);

  // --- Generate galleries.ts for the main website ---
  const tsFileContent = `// This file is auto-generated. Do not edit.\n\nexport const galleries = ${JSON.stringify(galleries, null, 2)};\n`;
  fs.writeFileSync(targetFile, tsFileContent, 'utf-8');
  console.log(`Successfully generated galleries.ts with ${galleries.length} galleries.`);

  // --- Generate JSON files for the external API ---
  const galleriesForJSON = JSON.parse(JSON.stringify(galleries));
  const allImagesForJSON = [];

  galleriesForJSON.forEach(gallery => {
    if (gallery.images) {
      gallery.images = gallery.images.map(image => {
        const { filename, ...restOfImage } = image;
        const ext = path.extname(filename);
        const base = path.basename(filename, ext);
        const imageUrls = {
          original: `${baseUrl}/content/galleries/${gallery.slug}/${filename.replaceAll(" ", "_")}`,
        };

        responsiveSizes.forEach(size => {
          imageUrls[`w${size}`] = `${baseUrl}/content/galleries/${gallery.slug}/${base.replaceAll(" ", "_")}-${size}w${ext}`;
        });

        const imageWithUrls = {
          ...restOfImage,
          name: filename,
          urls: imageUrls,
        };

        const imageForApi = { ...imageWithUrls, gallery: gallery.slug };
        allImagesForJSON.push(imageForApi);

        return imageWithUrls;
      });
    }
  });

  const galleriesJSONPath = path.join(apiDir, 'galleries.json');
  const imagesJSONPath = path.join(apiDir, 'images.json');

  fs.writeFileSync(galleriesJSONPath, JSON.stringify(galleriesForJSON, null, 2), 'utf-8');
  console.log(`Successfully generated galleries.json with ${galleriesForJSON.length} galleries.`);

  fs.writeFileSync(imagesJSONPath, JSON.stringify(allImagesForJSON, null, 2), 'utf-8');
  console.log(`Successfully generated images.json with ${allImagesForJSON.length} images.`);
  await exiftool.end();
}

/**
 * Extract dominant colors and calculate colorfulness from an image
 * @param {string} imagePath - Path to the image file
 * @param {number} numColors - Number of dominant colors to extract
 * @returns {Object} Object containing dominant colors and colorfulness
 */
async function extractColors(imagePath, numColors = 5) {
  try {
    // Load image and resize for faster processing
    const { data, info } = await sharp(imagePath)
      .resize(100, 100, { fit: 'inside' })
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    // Extract pixels
    const pixels = [];
    for (let i = 0; i < data.length; i += info.channels) {
      pixels.push({
        r: data[i],
        g: data[i + 1],
        b: data[i + 2],
      });
    }
    
    // Simple color quantization
    const colorCounts = {};
    pixels.forEach(pixel => {
      // Reduce precision to group similar colors (10 is the bucket size)
      const key = `${Math.floor(pixel.r/10)},${Math.floor(pixel.g/10)},${Math.floor(pixel.b/10)}`;
      colorCounts[key] = (colorCounts[key] || 0) + 1;
    });
    
    // Convert to RGB colors with counts
    const initialColors = Object.entries(colorCounts)
      .map(([key, count]) => {
        const [r, g, b] = key.split(',').map(v => parseInt(v) * 10);
        return { 
          rgb: [r, g, b], 
          hex: `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`,
          count,
          percentage: count / pixels.length
        };
      })
      .sort((a, b) => b.count - a.count);
    
    // Group similar colors using a more sophisticated approach
    // Function to calculate color distance (Euclidean distance in RGB space)
    const colorDistance = (color1, color2) => {
      return Math.sqrt(
        Math.pow(color1.rgb[0] - color2.rgb[0], 2) +
        Math.pow(color1.rgb[1] - color2.rgb[1], 2) +
        Math.pow(color1.rgb[2] - color2.rgb[2], 2)
      );
    };
    
    // Group similar colors
    const similarityThreshold = 60; // Adjust this threshold as needed
    const colorGroups = [];
    
    // Process each color
    initialColors.forEach(color => {
      // Check if this color is similar to any existing group
      const similarGroupIndex = colorGroups.findIndex(group => {
        // Compare with colors in the group
        return group.some(groupColor => colorDistance(color, groupColor) < similarityThreshold);
      });
      
      if (similarGroupIndex >= 0) {
        // Add to existing group
        colorGroups[similarGroupIndex].push(color);
      } else {
        // Create new group
        colorGroups.push([color]);
      }
    });
    
    // Select representative color from each group (the one with highest count)
    const representativeColors = colorGroups.map(group => 
      group.reduce((prev, current) => (prev.count > current.count) ? prev : current)
    );
    
    // Sort representative colors by count and take top colors
    const dominantColors = representativeColors
      .sort((a, b) => b.count - a.count)
      .slice(0, numColors)
      .map(color => ({
        rgb: color.rgb,
        hex: color.hex,
        percentage: color.percentage.toFixed(3)
      }));
    
    // Calculate colorfulness using standard deviation
    const colorfulness = calculateColorfulness(pixels).toFixed(3);
    
    return { 
      dominantColors,
      colorfulness
    };
  } catch (error) {
    console.error(`Error extracting colors from ${imagePath}:`, error);
    return { dominantColors: [], colorfulness: 0 };
  }
}

/**
 * Calculate image colorfulness using standard deviation across color channels
 * @param {Array} pixels - Array of pixel objects with r,g,b values
 * @returns {number} Colorfulness score
 */
function calculateColorfulness(pixels) {
  // Calculate standard deviation across color channels
  const rValues = pixels.map(p => p.r);
  const gValues = pixels.map(p => p.g);
  const bValues = pixels.map(p => p.b);
  
  const rStdDev = standardDeviation(rValues);
  const gStdDev = standardDeviation(gValues);
  const bStdDev = standardDeviation(bValues);
  
  // Calculate color differences (higher values indicate more colorful images)
  const rgDiff = pixels.map(p => Math.abs(p.r - p.g));
  const rbDiff = pixels.map(p => Math.abs(p.r - p.b));
  const gbDiff = pixels.map(p => Math.abs(p.g - p.b));
  
  const rgStdDev = standardDeviation(rgDiff);
  const rbStdDev = standardDeviation(rbDiff);
  const gbStdDev = standardDeviation(gbDiff);
  
  // Combine metrics (higher value = more colorful)
  return (rStdDev + gStdDev + bStdDev + rgStdDev + rbStdDev + gbStdDev) / 6;
}

/**
 * Calculate standard deviation of an array of numbers
 * @param {Array} values - Array of numbers
 * @returns {number} Standard deviation
 */
function standardDeviation(values) {
  const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
  const squareDiffs = values.map(value => Math.pow(value - avg, 2));
  const avgSquareDiff = squareDiffs.reduce((sum, val) => sum + val, 0) / squareDiffs.length;
  return Math.sqrt(avgSquareDiff);
}

generateGalleries().catch(error => {
  console.error('An unexpected error occurred during script execution:', error);
  process.exit(1);
});
