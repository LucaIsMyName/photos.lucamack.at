import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');
const apiDir = path.join(distDir, 'api');
const pagesContentDir = path.join(__dirname, 'content/pages');

const BASE_URL = 'https://photos.lucamack.at';

function getGalleries() {
  const galleriesPath = path.join(apiDir, 'galleries.json');
  if (!fs.existsSync(galleriesPath)) {
    console.error('galleries.json not found. Please run the gallery generation script first.');
    return [];
  }
  const galleriesFile = fs.readFileSync(galleriesPath);
  const galleries = JSON.parse(galleriesFile);
  return galleries.map(g => g.slug);
}

function getPages() {
  if (!fs.existsSync(pagesContentDir)) {
    return [];
  }
  const pageFolders = fs.readdirSync(pagesContentDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  return pageFolders;
}

function generateSitemap() {
  const gallerySlugs = getGalleries();
  const pageSlugs = getPages();

  const urls = [
    { loc: BASE_URL, changefreq: 'daily', priority: '1.0' },
    { loc: `${BASE_URL}/map`, changefreq: 'monthly', priority: '0.5' },
  ];

  gallerySlugs.forEach(slug => {
    urls.push({ loc: `${BASE_URL}/gallery/${slug}`, changefreq: 'weekly', priority: '0.8' });
  });

  pageSlugs.forEach(slug => {
    urls.push({ loc: `${BASE_URL}/page/${slug}`, changefreq: 'monthly', priority: '0.5' });
  });

  const sitemapContent = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>
  `.trim();

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent);

  console.log(`Sitemap generated with ${urls.length} URLs at ${sitemapPath}`);
}

generateSitemap();
