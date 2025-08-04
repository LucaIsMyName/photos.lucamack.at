import { Link } from "react-router-dom";
import { slugify } from "../../../utils/slugify";
import { getImageUrl } from "../../../utils/image";
import { cn } from "../../../utils/cn";

const ImagesRow = ({ images, title }: { images: any; title: string | undefined }) => {
  return (
    <div className="w-full pb-8 md:pb-0 max-w-4xl mt-8 pt-8 border-t border-neutral-500/50 border-dotted">
      <h2 className="text-base mb-4">{title || "Andere Fotos"}</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {images.map((img: any) => (
          <Link
            key={img.filename}
            to={`/gallery/${img.gallerySlug}/image/${slugify(img.filename.replace(/\.[^/.]+$/, ""))}`}
            className="relative">
            <img
              src={getImageUrl(img.gallerySlug, img.filename.replaceAll(" ", "_"), 380)}
              alt={img.filename.replaceAll("_", " ").replace(".jpg", "").trim()}
              width={160}
              height={160}
              sizes="(max-width: 768px) 50vw, 20vw"
              className={cn("aspect-square object-cover w-full h-full", img.isRandomPick && "")}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImagesRow;
