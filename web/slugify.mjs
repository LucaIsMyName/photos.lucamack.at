/**
 * Shared slug helpers used by generate-galleries.mjs and the React app.
 * - Gallery folder slugs: underscores, German umlaut expansion (must match deployed URLs).
 * - Image URL segments: hyphens, NFD accent stripping (must match routes + useImage).
 */

/** @param {string} text */
export function slugifyGalleryFolder(text) {
  return String(text)
    .normalize('NFC')
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/ /g, '_');
}

/** @param {string} text */
export function slugifyImageStem(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
