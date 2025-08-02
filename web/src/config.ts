/**
 * Configuration object for the application.
 * 
 * @property {string} author - The author of the application.
 * @property {string} description - The description of the application.
 * @property {string} url - The URL of the application.
 * @property {Object} meta - The meta information of the application.
 * @property {Object} theme - The theme of the application.
 * @property {Object} mapbox - The mapbox configuration of the application.
 * @property {Object} systemMessages - The system messages of the application.
 */
export const CONFIG = {
  author: "Luca Mack",
  description: "Luca Mack | Fotos",
  url: "https://photos.lucamack.at",
  meta: {
    title: "Luca Mack",
  },
  theme: {
    border: {
      default: "border border-neutral-500/50 border-dotted",
      top: "border-t border-neutral-500/50 border-dotted",
      bottom: "border-b border-neutral-500/50 border-dotted",
      left: "border-l border-neutral-500/50 border-dotted",
      right: "border-r border-neutral-500/50 border-dotted",
      x: "border-x border-neutral-500/50 border-dotted",
      y: "border-y border-neutral-500/50 border-dotted",
    },
    headline: {
      one: "text-4xl md:text-5xl"
    },
    light: {
      text: {
        primary: "text-red-600",
      },
    },
    dark: {
      text: {
        primary: "text-red-300",
      },
    },
  },
  mapbox: {
    accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
    style: {
      dark: "mapbox://styles/luma1992/cmcrpf414029501qx4b4fa2jx",
      light: "mapbox://styles/luma1992/cmcrp4svj045g01r17lvz89bx",
    },
  },
  // not used right now
  systemMessages: {
    noImagesFound: "Es scheint, dass keine Bilder gefunden wurden.",
    noGalleriesFound: "Es scheint, dass keine Fotoserie gefunden wurden.",
    noPagesFound: "Es scheint, dass keine Seiten gefunden wurden.",
    noMapFound: "Es scheint, dass keine Karte gefunden wurde.",
    noThemeFound: "Es scheint, dass kein Theme gefunden wurde.",
    noGalleryFound: "Es scheint, dass keine Fotoserie gefunden wurde.",
    noImageFound: "Es scheint, dass kein Bild gefunden wurde.",
    noPageFound: "Es scheint, dass keine Seite gefunden wurde.",
  },
};
