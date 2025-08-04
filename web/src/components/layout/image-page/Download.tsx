import { CONFIG } from "../../../config";
import { cn } from "../../../utils/cn";
import { getImageUrl } from "../../../utils/image";
import CopyButton from "../../ui/CopyButton";
import Href from "../../ui/Href";

const Download = ({ gallery, image }: { gallery: any; image: any }) => {
  return (
    <div className="flex-1">
      <h3 className="text-base mb-2">URLs</h3>
      <div className="grid grid-cols-1 md:grid-cols-[100px,1fr] gap-x-4 gap-y-3 text-sm">
        <div className={`text-[10px] tracking-wider font-mono pt-4 ${CONFIG.theme.border.top}`}>Original</div>
        <div className={cn(`w-full justify-between flex items-center gap-2 font-mono pb-4 ${CONFIG.theme.border.bottom}`)}>
          <Href
            href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), "original")}
            hasDecoration={false}
            className={cn("truncate font-mono text-[11px] max-w-[calc(100%-40px)]")}>
            {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), "original")}`}
          </Href>
          <CopyButton
            className=""
            textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), "original")}`}
          />
        </div>

        <div className="text-[10px] tracking-wider font-mono">1440 px</div>
        <div className={cn(`w-full justify-between flex items-center gap-2 font-mono pb-4 ${CONFIG.theme.border.bottom}`)}>
          <Href
            href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 1440)}
            hasDecoration={false}
            className={cn("truncate font-mono text-[11px] max-w-[calc(100%-40px)]")}>
            {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 1440)}`}
          </Href>
          <CopyButton textToCopy={window.location.href} />
        </div>

        <div className="text-[10px] tracking-wider font-mono">640 px</div>
        <div className={cn(`w-full justify-between flex items-center gap-2 font-mono pb-4 ${CONFIG.theme.border.bottom}`)}>
          <Href
            href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 640)}
            hasDecoration={false}
            className={cn("truncate font-mono text-[11px] max-w-[calc(100%-40px)]")}>
            {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 640)}`}
          </Href>
          <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 640)}`} />
        </div>
        <div className="text-[10px] tracking-wider font-mono">380 px</div>
        <div className={cn(`w-full justify-between flex items-center gap-2 font-mono pb-4 ${CONFIG.theme.border.bottom}`)}>
          <Href
            href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 380)}
            hasDecoration={false}
            className={cn("truncate font-mono text-[11px] max-w-[calc(100%-40px)]")}>
            {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 380)}`}
          </Href>
          <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 380)}`} />
        </div>
        <div className="text-[10px] tracking-wider font-mono">160 px</div>
        <div className={cn(`w-full justify-between flex items-center gap-2 font-mono pb-4 ${CONFIG.theme.border.bottom}`)}>
          <Href
            href={getImageUrl(gallery.slug, image.filename.replaceAll(" ", "_"), 160)}
            hasDecoration={false}
            className={cn("truncate font-mono text-[11px] max-w-[calc(100%-40px)]")}>
            {`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 160)}`}
          </Href>
          <CopyButton textToCopy={`${CONFIG.url}${getImageUrl(gallery.slug, encodeURI(image.filename.replaceAll(" ", "_")), 160)}`} />
        </div>
      </div>
    </div>
  );
};

export default Download;
