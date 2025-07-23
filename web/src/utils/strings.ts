/**
 * Encodes a string to be used in a URL
 * @param str The string to encode
 * @returns The encoded string
 */
export function uriEncoded(str: string) {
  return encodeURIComponent(str);
}

/**
 * Decodes a string that was encoded with uriEncoded
 * @param str The string to decode
 * @returns The decoded string
 */
export function uriDecoded(str: string) {
  return decodeURIComponent(str);
}

/**
 * Replaces all spaces in a string with a specified character
 * @param str The string to replace spaces in
 * @param replaceWidth The character to replace spaces with, default is "_"
 * @returns The string with spaces replaced
 */
export function noSpaces(str: string, replaceWidth = "_") {
  return str.replace(/\s/g, replaceWidth);
}

/**
 * Replaces all underlines in a string with a specified character
 * @param str The string to replace underlines in
 * @param replaceWidth The character to replace underlines with, default is "_"
 * @returns The string with underlines replaced
 */
export function noUnderlines(str: string, replaceWidth = "_") {
  return str.replace(/_/g, replaceWidth);
}