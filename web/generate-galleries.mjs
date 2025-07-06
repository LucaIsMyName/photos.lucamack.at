import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import heicConvert from 'heic-convert';
import sharp from 'sharp';
import { ExifTool } from 'exiftool-vendored';

const CWD = process.cwd();

const contentDir = path.join(CWD, 'content');
const targetFile = path.resolve(CWD, 'src/galleries.ts');
const publicDir = path.resolve(CWD, 'public');
const publicContentDir = path.resolve(publicDir, 'content');

const responsiveSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

async function generateGalleries() {
  const exiftool = new ExifTool();
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  if (!fs.existsSync(publicContentDir)) {
    fs.mkdirSync(publicContentDir);
  }

  const directories = fs.readdirSync(contentDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const galleryPromises = directories.map(async (name) => {
    const galleryDir = path.join(contentDir, name);
    const publicGalleryDir = path.join(publicContentDir, name);

    if (!fs.existsSync(publicGalleryDir)) {
      fs.mkdirSync(publicGalleryDir, { recursive: true });
    }

    const files = fs.readdirSync(galleryDir);

    for (const file of files) {
      const sourcePath = path.join(galleryDir, file);
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      let processPath = sourcePath;
      let outputExt = ext;

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
        const filename = file.replace(/\.heic$/i, '.jpg');
        let latitude = null;
        let longitude = null;

        try {
          const tags = await exiftool.read(sourcePath);
          if (tags && tags.GPSLatitude && tags.GPSLongitude) {
            latitude = tags.GPSLatitude;
            longitude = tags.GPSLongitude;
          }
        } catch (err) {
          console.error('Error reading exif for', file, err);
        }

        return { filename, latitude, longitude };
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

    return { name, slug: name, title, description, images: uniqueImageFilesData };
  });

  const galleries = await Promise.all(galleryPromises);
  const fileContent = `// This file is auto-generated. Do not edit.\n\nexport const galleries = ${JSON.stringify(galleries, null, 2)};\n`;
  fs.writeFileSync(targetFile, fileContent, 'utf-8');
  console.log(`Successfully generated galleries.ts with ${galleries.length} galleries.`);
  await exiftool.end();
}

generateGalleries().catch(error => {
  console.error('An unexpected error occurred during script execution:', error);
  process.exit(1);
});
