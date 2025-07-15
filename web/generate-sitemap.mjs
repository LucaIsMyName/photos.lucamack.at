import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const apiDir = path.join(publicDir, 'api');
const pagesContentDir = path.join(__dirname, 'content/pages');

const BASE_URL = "https://photos.lucamack.at";

function getGalleries() {
  const galleriesPath = path.join(apiDir, 'galleries.json');
  if (!fs.existsSync(galleriesPath)) {
    console.error('galleries.json not found.');
    return [];
  }
  const galleriesFile = fs.readFileSync(galleriesPath);
  return JSON.parse(galleriesFile);
}

function getPages() {
  if (!fs.existsSync(pagesContentDir)) {
    return [];
  }
  return fs.readdirSync(pagesContentDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

function getImages() {
    const imagesPath = path.join(apiDir, 'images.json');
    if (!fs.existsSync(imagesPath)) {
        console.error('images.json not found.');
        return [];
    }
    const imagesFile = fs.readFileSync(imagesPath);
    return JSON.parse(imagesFile);
}

function generateSitemap() {
  const galleries = getGalleries();
  const pageSlugs = getPages();
  const images = getImages();

  const urls = [
    { loc: BASE_URL, changefreq: 'daily', priority: '1.0' },
    { loc: `${BASE_URL}/map`, changefreq: 'monthly', priority: '0.5' },
    { loc: `${BASE_URL}/list`, changefreq: 'monthly', priority: '0.5' },
    { loc: `${BASE_URL}/timeline`, changefreq: 'monthly', priority: '0.5' },
  ];

  galleries.forEach(gallery => {
    if (gallery && gallery.slug) {
        urls.push({ loc: `${BASE_URL}/gallery/${gallery.slug}`, changefreq: 'weekly', priority: '0.8' });
    }
  });

  pageSlugs.forEach(slug => {
    urls.push({ loc: `${BASE_URL}/page/${slug}`, changefreq: 'monthly', priority: '0.7' });
  });

  images.forEach(image => {
    if (image && image.name) {
      const imageName = image.name.replace(/\.[^/.]+$/, "");
      urls.push({ loc: `${BASE_URL}/image/${imageName}`, changefreq: 'yearly', priority: '0.6' });
    }
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
