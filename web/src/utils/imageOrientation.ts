/**
 * Utility for determining image orientation based on dimensions
 */

export type ImageOrientation = 'portrait' | 'landscape' | 'square';

interface ImageDimensions {
  width: number;
  height: number;
}

/**
 * Determines image orientation based on width and height
 * @param dimensions Image dimensions with width and height
 * @returns Orientation as 'portrait', 'landscape', or 'square'
 */
export const getImageOrientation = (dimensions: ImageDimensions): ImageOrientation => {
  if (!dimensions || !dimensions.width || !dimensions.height) {
    return 'landscape'; // Default to landscape if dimensions are missing
  }
  
  const { width, height } = dimensions;
  
  if (width > height) {
    return 'landscape';
  } else if (height > width) {
    return 'portrait';
  } else {
    return 'square';
  }
};
