import { cn } from "../../../utils/cn";
import { useTheme } from "../../../contexts/ThemeContext";
import { type Image as ImageType } from "../../../types";
import { Link } from "react-router-dom";
import { slugify } from "../../../utils/slugify";
import { getImageUrl } from "../../../utils/image";
import { MapPin } from "lucide-react";

const PhotoCard: React.FC<{ title: string; image?: ImageType | any }> = ({ title, image }) => {
  const { theme } = useTheme();
  if (!image) return null;

  return (
    <div className={cn(`border  ${theme === "dark" ? "" : ""} p-0 flex flex-col`)}>
      <Link to={`/gallery/${image.gallery}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}>
        <img
          src={getImageUrl(image.gallery, image.filename.replaceAll(" ", "_"), 380)}
          alt={image.alt || title}
          className={cn("w-full h-40 object-cover")}
        />
      </Link>
      <div className="p-3 relative">
        <h3 className="text-[11px]">{title}</h3>
        <p className=" my-2 text-base leading-4 truncate">{image.filename}</p>
        <div className="flex items-center gap-2 mt-2">
          <Link
            className=""
            to={`/app/map?gallery=${image.gallery}&image=${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}>
            <MapPin size={12} />
          </Link>
          <div className="text-[11px] mt-1 flex items-center">
            <p className="truncate ">
              Lat: {image.latitude.toFixed(6)}, {image.longitude.toFixed(6)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
