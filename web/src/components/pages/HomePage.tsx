import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { galleries } from "../../galleries";
import type { Gallery, Image as ImageType } from "../../types";
import Image from "../ui/Image";
import { cn } from "../../utils/cn";
import { getImageUrl } from "../../utils/image";
import { CONFIG } from "../../config";
import Href from "../ui/Href";
import { slugify } from "../../utils/slugify";

const HomePage = () => {
  const [randomImage, setRandomImage] = useState<{ gallery: Gallery; image: ImageType } | null>(null);

  useEffect(() => {
    const galleriesWithImages = galleries.filter((g) => g.images && g.images.length > 0);
    if (galleriesWithImages.length > 0) {
      const randomGallery = galleriesWithImages[Math.floor(Math.random() * galleriesWithImages.length)];
      const randomImageObject = randomGallery.images[Math.floor(Math.random() * randomGallery.images.length)];
      setRandomImage({ gallery: randomGallery, image: randomImageObject });
    }
  }, []);

  const getImageDetails = () => {
    if (!randomImage) {
      return null;
    }

    const src = getImageUrl(randomImage.gallery.slug, randomImage.image.filename);
    return {
      src,
      alt: randomImage.image.alt || "",
      width: randomImage.image.width,
      height: randomImage.image.height,
      slug: randomImage.gallery.slug,
    };
  };

  const imageDetails = getImageDetails();

  return (
    <div className="h-full w-full relative overflow-hidden">
      <title>{`Fotos | ${CONFIG.meta.title}`}</title>
      <meta
        name="title"
        content={`Fotos | ${CONFIG.meta.title}`}
      />
      <meta
        name="description"
        content={`Momente und Fotoserien von ${CONFIG.meta.title}.`}
      />

      <div className={cn("absolute inset-0 py-12 pb-24 px-8 md:p-20 lg:p-24")}>
        {imageDetails ? (
          <>
            <Link
              to={`/gallery/${imageDetails.slug}`}
              className="block w-full h-full">
              <Image
                src={imageDetails.src}
                alt={(imageDetails.src.split("/").pop()?.replace(".jpg", "") + " / " || "") + "Fotoserie: " + (galleries.find((g) => g.slug === imageDetails.slug)?.title || "")}
                width={imageDetails.width || 1920}
                height={imageDetails.height || 1080}
                sizes="100vw"
                loading="eager"
                className={cn("object-contain w-full h-full")}
              />
            </Link>
            <section className="absolute md:text-right bottom-0 right-0 left-0 p-4 md:pr-8 md:py-6 text-balance">
              <div className=" md:mx-auto md:text-xs leading-5">
                <Href
                  className="max-w-[50vh] md:max-w-[65ch]"
                  to={`/gallery/${imageDetails.slug}/image/${slugify(imageDetails.src.split("/").pop()?.replaceAll("_", "-").replace(".jpg", "") || "")}`}>
                  {imageDetails.src.split("/").pop()?.replace(".jpg", "").replaceAll("_", " ")}
                </Href>{" "}
                aus der Fotoserie <Href to={`/gallery/${imageDetails.slug}`}>{galleries.find((g) => g.slug === imageDetails.slug)?.title}</Href>
              </div>
            </section>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">Lade Foto...</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
