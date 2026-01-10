import { cn } from "../../../utils/cn";
import { X, Eye, Layers } from "lucide-react";

const Legend = ({ galleryColors, legendToggleRef, setIsLegendOpen, isLegendOpen, legendRef, theme, galleries, hiddenGalleries, handleLegendToggle, showWalks, setShowWalks }: any) => {
  return (
    <>
      <button
        ref={legendToggleRef}
        onClick={() => setIsLegendOpen(!isLegendOpen)}
        className={cn("border gap-2 z-50 absolute top-4 right-4 p-2 flex items-center", theme === "dark" ? "bg-black text-white" : "bg-white text-black")}
        aria-label="Legende Ein- oder Ausschalten">
        <span className="text-xs ml-1">Legende</span>
        <Layers size={16} />
      </button>

      {isLegendOpen && (
        <div
          ref={legendRef}
          className={cn("border z-[100000] absolute top-12 right-4 p-4 w-[calc(100%-2rem)] max-h-[60vh] overflow-y-auto md:w-auto md:max-w-lg", theme === "dark" ? "bg-black text-white" : "bg-white text-black")}>
          <button
            onClick={() => setIsLegendOpen(false)}
            className="absolute top-2 right-2 p-1"
            aria-label="Legende schließen">
            <X className="h-4 w-4" />
          </button>
          <h3 className="font-bold text-lg mb-2">Legende</h3>
          <h4 className="text-[11px] mb-4 opacity-90">Fotoserie via Farbe, Klick auf Galerie um zu verstecken oder einzublenden</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm mb-4">
            {galleries.map((gallery: any) => (
              <li
                key={gallery.slug}
                className={`group flex items-center justify-between gap-2 cursor-pointer transition-opacity ${hiddenGalleries.has(gallery.slug) ? "opacity-50 hover:opacity-100" : ""}`}
                onClick={() => handleLegendToggle(gallery.slug)}>
                <div className="flex items-center gap-2 truncate">
                  <div className={cn(`w-3 h-3 min-w-3 min-h-3 flex-shrink-0 border ${galleryColors.get(gallery.slug)}`, theme === "dark" ? "border-white" : "border-black")} />
                  <span className="truncate text-xs">{gallery.title}</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">{hiddenGalleries.has(gallery.slug) ? <Eye size={12} /> : <X size={12} />}</div>
              </li>
            ))}
          </ul>
          
          {/* Walks toggle */}
          <div className={cn("border-t pt-4 mt-4", theme === "dark" ? "border-neutral-700" : "border-neutral-300")}>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showWalks}
                onChange={(e) => setShowWalks(e.target.checked)}
                className="cursor-pointer"
              />
              <span className="text-sm">Spaziergänge anzeigen</span>
            </label>
            <p className="text-[11px] mt-1 opacity-70">
              Zeigt Linien zwischen Fotos, die am selben Tag aufgenommen wurden (max. 1h Abstand)
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Legend;
