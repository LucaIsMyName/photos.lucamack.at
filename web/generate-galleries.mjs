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

const responsiveSizes = [380, 640, 1440];
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
            createDate = tags.DateTimeOriginal || tags.CreateDate;
            const comment = tags.UserComment || tags.ImageDescription || tags.Description || tags.Comment;
            alt = typeof comment === 'string' && comment.trim() !== '' ? comment.trim() : null;
          }
        } catch (err) {
          console.error('Error reading exif for', file, err);
        }

        const googleMapsUrl = latitude && longitude ? `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}` : null;
        return { filename, latitude, longitude, createDate, googleMapsUrl, alt };
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
      .map(img => (img.createDate ? img.createDate.toDate() : null))
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

    let title = name;
    let description = '';
    const mdPath = path.join(galleryDir, 'index.md');

    if (fs.existsSync(mdPath)) {
      const mdContent = fs.readFileSync(mdPath, 'utf-8');
      const h1Match = mdContent.match(/^#\s+(.*)/m);
      if (h1Match) title = h1Match[1].trim();
      const paragraphs = mdContent.split('\n\n');
      const firstParagraph = paragraphs.find(p => p.trim() && !p.trim().startsWith('#'));
      if (firstParagraph) description = firstParagraph.trim();
    }

        return { name, slug: gallerySlug, title, description, images: uniqueImageFilesData, timeframe, imageCount };
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

generateGalleries().catch(error => {
  console.error('An unexpected error occurred during script execution:', error);
  process.exit(1);
});
