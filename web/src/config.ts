/** Still to be implemented */

export const CONFIG = {
  author: "Luca Mack",
  description: "Luca Mack | Fotos",
  url: "https://photos.lucamack.at",
  meta: {
    title: "Luca Mack",
  },
  theme: {
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
  systemMessages: {
    noImagesFound: "Es scheint, dass keine Bilder gefunden wurden.",
    noGalleriesFound: "Es scheint, dass keine Galerien gefunden wurden.",
    noPagesFound: "Es scheint, dass keine Seiten gefunden wurden.",
    noMapFound: "Es scheint, dass keine Karte gefunden wurde.",
    noThemeFound: "Es scheint, dass kein Theme gefunden wurde.",
    noGalleryFound: "Es scheint, dass keine Galerie gefunden wurde.",
    noImageFound: "Es scheint, dass kein Bild gefunden wurde.",
    noPageFound: "Es scheint, dass keine Seite gefunden wurde.",
  },
};
