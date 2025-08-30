import { CONFIG } from "../../../config";
import { cn } from "../../../utils/cn";
import { Link, useLocation } from "react-router-dom";
import Href from "../../ui/Href";
import { parseCreateDate } from "../../../utils/date";
import CopyButton from "../../ui/CopyButton";
import { useTheme } from "../../../contexts/ThemeContext";
import { getImageUrl } from "../../../utils/image";

const Subheading = ({ image, gallery }: { image: any; gallery: any }) => {
  const { theme } = useTheme();
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;

  return (
    <>
      <div className={`flex w-full justify-between items-center gap-4 mt-4 ${CONFIG.theme.border.top} pt-8`}>
        <div className="flex justify-start items-center gap-1 text-[11px] leading-[20px]">
          <div className={cn(`flex-1 flex justify-between w-full items-center gap-4  ${theme === "dark" ? "" : ""}`)}>
            <Link to={`/gallery/${gallery.slug}`}>
              <img
                src={getImageUrl(gallery.slug, encodeURI(gallery.images[0].filename.replaceAll(" ", "_")), 160)}
                alt={gallery.title}
                className="w-16 h-16 md:w-24 md:h-24 object-cover"
              />
            </Link>
            <div>
              <div className="text-[11px] font-mono truncate">
                Serie:{" "}
                <Href
                  to={`/gallery/${gallery.slug}`}
                  className=""
                  hasDecoration={true}>
                  {gallery.title}
                </Href>
              </div>
              {image.createDate && parseCreateDate(image.createDate) && (
                <div className="text-[11px] font-mono truncate">
                  Datum:{" "}
                  <Href
                    to={`/app/timeline?scrollTo=${parseCreateDate(image.createDate)?.toISOString().split("T")[0]}`}
                    className={cn("")}>
                    {parseCreateDate(image.createDate) &&
                      new Date(parseCreateDate(image.createDate)!).toLocaleDateString("de-DE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </Href>
                </div>
              )}
            </div>
          </div>
        </div>
        <CopyButton
          className=" min-h-4 min-w-4 sm:flex-row-reverse"
          iconToRight={false}
          textToCopy={currentUrl}>
          <span className="text-[11px] text-nowrap hidden sm:block truncate font-mono">Link Kopieren</span>
        </CopyButton>
      </div>
    </>
  );
};

export default Subheading;
