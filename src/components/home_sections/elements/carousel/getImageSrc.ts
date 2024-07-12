/**
 * Returns the source URL for the image to be displayed in the carousel slide.
 * If no image URL is provided, it returns the URL for a default image.
 * The image URL is constructed based on the type and imageUrl parameters.
 *
 * @param {string} type - The type of the image (optional).
 * @param {string} imageUrl - The URL of the image (optional).
 * @returns {string} - The source URL for the image.
 */
export const getImageSrc = (type: 'events' | 'stores', imageUrl: string) => {
  let basePath = '/src/images';
  const DEFAULT_FOLDER = 'stores';

  if (!imageUrl) return `${basePath}/404.png`;

  let folder = type ? `${type}` : DEFAULT_FOLDER;

  return `${basePath}/${folder}/${imageUrl}`;
};
