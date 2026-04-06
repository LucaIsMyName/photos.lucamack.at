import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { slugifyImageStem } from './slugify.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const apiDir = path.join(publicDir, 'api');

const BASE_URL = 'https://photos.lucamack.at';
const FEED_TITLE = 'Luca Mack | Fotos';
const FEED_DESCRIPTION =
  'Neue Fotos und Fotoserien — Momente von Wien, Berlin, Salzburg, der Schweiz und darüber hinaus.';
const MAX_ITEMS = 100;
const LANGUAGE = 'de-AT';

function escapeXml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseImageDate(createDate) {
  if (createDate == null || typeof createDate !== 'string') return null;
  const d = new Date(createDate);
  return Number.isNaN(d.getTime()) ? null : d;
}

function humanImageTitle(filename, galleryTitle) {
  const stem = filename.replace(/\.[^/.]+$/, '').replaceAll('_', ' ').trim();
  return galleryTitle ? `${galleryTitle}: ${stem}` : stem;
}

function enclosureType(filename) {
  const lower = filename.toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.webp')) return 'image/webp';
  return 'image/jpeg';
}

function getGalleries() {
  const galleriesPath = path.join(apiDir, 'galleries.json');
  if (!fs.existsSync(galleriesPath)) {
    console.error('galleries.json not found. Run generate:galleries first.');
    return [];
  }
  return JSON.parse(fs.readFileSync(galleriesPath, 'utf-8'));
}

function generateFeed() {
  const galleries = getGalleries();
  /** @type {{ date: Date; title: string; link: string; enclosureUrl?: string; enclosureType?: string }[]} */
  const rawItems = [];

  for (const gallery of galleries) {
    if (!gallery?.slug || !Array.isArray(gallery.images)) continue;
    const galleryTitle = gallery.title || gallery.name || '';

    for (const image of gallery.images) {
      if (!image?.name) continue;
      const date = parseImageDate(image.createDate);
      if (!date) continue;

      const stem = image.name.replace(/\.[^/.]+$/, '');
      const link = `${BASE_URL}/gallery/${gallery.slug}/image/${slugifyImageStem(stem)}`;
      const title = humanImageTitle(image.name, galleryTitle);
      const enclosureUrl =
        image.urls && typeof image.urls.original === 'string' ? image.urls.original : undefined;

      rawItems.push({
        date,
        title,
        link,
        enclosureUrl,
        enclosureType: enclosureUrl ? enclosureType(image.name) : undefined,
      });
    }
  }

  rawItems.sort((a, b) => b.date.getTime() - a.date.getTime());
  const items = rawItems.slice(0, MAX_ITEMS);

  const now = new Date();
  const channelDate = items.length > 0 ? items[0].date : now;
  const channelPub = toRfc822(channelDate);
  const buildDate = toRfc822(now);

  const itemXml = items
    .map((it) => {
      const enc =
        it.enclosureUrl != null
          ? `\n      <enclosure url="${escapeXml(it.enclosureUrl)}" type="${escapeXml(it.enclosureType)}" />`
          : '';
      return `    <item>
      <title>${escapeXml(it.title)}</title>
      <link>${escapeXml(it.link)}</link>
      <guid isPermaLink="true">${escapeXml(it.link)}</guid>
      <pubDate>${toRfc822(it.date)}</pubDate>${enc}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${escapeXml(BASE_URL)}</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>${LANGUAGE}</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <pubDate>${channelPub}</pubDate>
    <atom:link href="${escapeXml(BASE_URL)}/feed.xml" rel="self" type="application/rss+xml" />
    <generator>photos.lucamack.at generate-feed.mjs</generator>
${itemXml}
  </channel>
</rss>
`;

  const outPath = path.join(publicDir, 'feed.xml');
  fs.writeFileSync(outPath, xml, 'utf-8');
  console.log(`RSS feed written with ${items.length} items at ${outPath}`);
}

/** @param {Date} d */
function toRfc822(d) {
  return d.toUTCString();
}

generateFeed();
