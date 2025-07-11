import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'content/pages');
const targetFile = path.join(__dirname, 'src/pages.ts');

async function generatePages() {
  if (!fs.existsSync(pagesDir)) {
    console.log('No pages directory found. Skipping page generation.');
    return;
  }

  const pageFolders = fs.readdirSync(pagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const pages = pageFolders.map(folder => {
    const pagePath = path.join(pagesDir, folder, 'index.md');
    if (!fs.existsSync(pagePath)) {
      return null;
    }

    const content = fs.readFileSync(pagePath, 'utf-8');
    const titleMatch = content.match(/^#\s+(.*)/m);
    const title = titleMatch ? titleMatch[1].trim() : folder;
    const slug = folder;

    return { title, slug, content };
  }).filter(Boolean);

  const fileContent = `// This file is auto-generated. Do not edit.\n\nimport type { Page } from './types';\n\nexport const pages: Page[] = ${JSON.stringify(pages, null, 2)};\n`;
  fs.writeFileSync(targetFile, fileContent, 'utf-8');
  console.log(`Successfully generated pages.ts with ${pages.length} pages.`);
}

generatePages().catch(error => {
  console.error('An unexpected error occurred during page generation:', error);
  process.exit(1);
});
