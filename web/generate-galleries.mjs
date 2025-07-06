import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import heicConvert from 'heic-convert';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, 'content');
const targetFile = path.resolve(__dirname, 'src/galleries.ts');
const publicDir = path.resolve(__dirname, 'public');
const publicContentDir = path.resolve(publicDir, 'content');

async function generateGalleries() {
  // Create a symlink from public/content to ../content to make images accessible.
  try {
    if (!fs.existsSync(publicContentDir)) {
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
      }
      fs.symlinkSync(path.relative(publicDir, contentDir), publicContentDir, 'dir');
      console.log(`Created symlink from ${publicContentDir} to ${contentDir}`);
    }
  } catch (error) {
    if (error.code !== 'EEXIST') {
      console.warn(`Warning: Could not create symlink for content directory. Images may not load.`, error);
    }
  }

  // Generate galleries.ts with image lists.
  try {
    const directories = fs.readdirSync(contentDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    const galleryPromises = directories.map(async (name) => {
      const galleryDir = path.join(contentDir, name);
      const files = fs.readdirSync(galleryDir);

      for (const file of files) {
        if (/\.heic$/i.test(file)) {
          const heicPath = path.join(galleryDir, file);
          const jpgPath = heicPath.replace(/\.heic$/i, '.jpg');
          if (!fs.existsSync(jpgPath)) {
            console.log(`Converting ${heicPath} to ${jpgPath}...`);
            try {
              const inputBuffer = fs.readFileSync(heicPath);
              const outputBuffer = await heicConvert({
                buffer: inputBuffer,
                format: 'JPEG',
                quality: 0.9,
              });
              fs.writeFileSync(jpgPath, outputBuffer);
              console.log(`Successfully converted ${file} to JPG.`);
            } catch (e) {
              console.error(`Failed to convert ${file}:`, e);
            }
          }
        }
      }

      const updatedFiles = fs.readdirSync(galleryDir);
      const imageFiles = updatedFiles.filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file));

      let title = name; // Fallback title
      let description = '';
      const mdPath = path.join(galleryDir, 'index.md');

      if (fs.existsSync(mdPath)) {
        const mdContent = fs.readFileSync(mdPath, 'utf-8');
        const h1Match = mdContent.match(/^#\s+(.*)/m);
        if (h1Match) {
          title = h1Match[1].trim();
        }

        const paragraphs = mdContent.split('\n\n');
        const firstParagraph = paragraphs.find(p => p.trim() && !p.trim().startsWith('#'));
        if (firstParagraph) {
          description = firstParagraph.trim();
        }
      }

      return {
        name: name, // Original folder name
        slug: name, // Use folder name as slug
        title: title,
        description: description,
        images: imageFiles,
      };
    });

    const galleries = await Promise.all(galleryPromises);

    const fileContent = `// This file is auto-generated. Do not edit.\n\nexport const galleries = ${JSON.stringify(galleries, null, 2)};\n`;

    fs.writeFileSync(targetFile, fileContent, 'utf-8');
    console.log(`Successfully generated galleries.ts with ${galleries.length} galleries.`);

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`Warning: 'content' directory not found at ${contentDir}. Creating an empty galleries.ts.`);
      const fileContent = `// This file is auto-generated. Do not edit.\n// 'content' directory not found.\n\nexport const galleries = [];\n`;
      fs.writeFileSync(targetFile, fileContent, 'utf-8');
    } else {
      console.error('Error generating galleries.ts:', error);
      process.exit(1);
    }
  }
}

generateGalleries().catch(error => {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
});
