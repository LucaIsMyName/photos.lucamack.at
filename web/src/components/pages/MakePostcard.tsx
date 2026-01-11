import { useState, useMemo, useRef, useCallback, useEffect, forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";
import { toJpeg } from "html-to-image";
import { galleries } from "../../galleries";
import type { Image as ImageType } from "../../types";
import { RefreshCcw, Download, ChevronDown, Check } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import * as Select from "@radix-ui/react-select";
import * as Slider from "@radix-ui/react-slider";
import { cn } from "../../utils/cn";
import { getImageUrl } from "../../utils/image";
import { CONFIG } from "../../config";
import SeoHead from "../ui/SeoHead";

type PostcardStyle = "single" | "two" | "four";
type PostcardSize = "A4" | "A5" | "A6";
type Orientation = "portrait" | "landscape";

const sizeDimensions: Record<PostcardSize, { width: number; height: number }> = {
  A6: { width: 105, height: 148 }, // mm
  A5: { width: 148, height: 210 }, // mm
  A4: { width: 210, height: 297 }, // mm
};

const MakePostcard = () => {
  const { theme } = useTheme();
  const postcardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<PostcardStyle>("four");
  const [size, setSize] = useState<PostcardSize>("A6");
  const [orientation, setOrientation] = useState<Orientation>("portrait");
  const [selectedGallery, setSelectedGallery] = useState<string>("all");
  const [images, setImages] = useState<(ImageType & { gallery: string })[]>([]);
  const [text, setText] = useState("");
  type TextAlign = "top-left" | "top-right" | "bottom-left" | "bottom-right";
  const [textAlign, setTextAlign] = useState<TextAlign>("bottom-right");
  const [textColor, setTextColor] = useState<"white" | "black">("white");
  const [fontFamily, setFontFamily] = useState(`'Geom', sans-serif`);
  const [fontSize, setFontSize] = useState(24);
  const [textPadding, setTextPadding] = useState(24);
  const [loading, setLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const textImageIndex = useMemo(() => {
    if (style === "single") return 0;
    if (style === "four") {
      if (textAlign === "top-left") return 0;
      if (textAlign === "top-right") return 1;
      if (textAlign === "bottom-left") return 2;
      if (textAlign === "bottom-right") return 3;
    }
    if (style === "two") {
      if (orientation === "portrait") {
        return textAlign.startsWith("top") ? 0 : 1;
      } else {
        return textAlign.endsWith("left") ? 0 : 1;
      }
    }
    return 0;
  }, [style, textAlign, orientation]);

  const textAlignClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 text-right",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0 text-right",
  };

  const allImages = useMemo(() => {
    if (selectedGallery === "all") {
      return galleries.flatMap((g) => (g.images || []).map((image) => ({ ...image, gallery: g.slug })));
    }
    const gallery = galleries.find((g) => g.slug === selectedGallery);
    if (!gallery || !gallery.images) {
      return [];
    }
    return gallery.images.map((image) => ({ ...image, gallery: gallery.slug }));
  }, [selectedGallery]);

  const generatePostcard = useCallback(() => {
    setLoading(true);
    const numImages = style === "single" ? 1 : style === "two" ? 2 : 4;
    if (allImages.length === 0) {
      setImages([]);
      setLoading(false);
      return;
    }
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    const selectedImages = shuffled.slice(0, numImages);
    setImages(selectedImages as any);
  }, [allImages, style]);

  useEffect(() => {
    generatePostcard();
  }, [generatePostcard]);

  const handleImageLoad = () => {
    const allImageElements = postcardRef.current?.querySelectorAll("img");
    if (allImageElements && allImageElements.length > 0) {
      const allLoaded = Array.from(allImageElements).every((img) => img.complete && img.naturalHeight !== 0);
      if (allLoaded) {
        setLoading(false);
      }
    }
  };

  const handleDownload = useCallback(() => {
    if (postcardRef.current === null) {
      console.error("Postcard element not found");
      return;
    }
    setIsDownloading(true);
    toJpeg(postcardRef.current, { cacheBust: true, quality: 1, pixelRatio: 6 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `postkarte-${style}Images-${size}-${orientation}Format-${new Date().toISOString().replaceAll(",", "").replaceAll(":", "").replaceAll("-", "")}.jpg`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to create postcard image", err);
      })
      .finally(() => {
        setIsDownloading(false);
      });
  }, [style, size, orientation]);

  const postcardAspectRatio = useMemo(() => {
    const dimensions = sizeDimensions[size];
    return orientation === "portrait" ? `${dimensions.width}/${dimensions.height}` : `${dimensions.height}/${dimensions.width}`;
  }, [size, orientation]);

  return (
    <div className="p-4 md:p-8 h-screen flex flex-col">
      <SeoHead
        title="Postkarten Generator"
        description="Postkarten Generator"
        imageUrl={`${CONFIG.url}${getImageUrl(galleries[0].slug, encodeURI(galleries[0].images[0].filename.replaceAll(" ", "_")), 640)}`}
        noIndex={true}
        hasOg={false}
        hasTwitter={false}
      />
      <h1 className="text-3xl font-bold mb-4 sr-only">Postkarten Generator</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-grow">
        <div className="md:col-span-1 space-y-4 flex flex-col justify-center">
          <h2 className="sr-only text-xl font-semibold">Optionen</h2>
          <div className="grid grid-cols-2 gap-4 ">
            <Field label="Galerie">
              <StyledSelect
                
                value={selectedGallery}
                onValueChange={setSelectedGallery}
                placeholder="Galerie wählen">
                <SelectItem value="all">Alle Bilder</SelectItem>
                {galleries.map((g) => (
                  <SelectItem
                    key={g.slug}
                    value={g.slug}
                    className="truncate">
                    {g.title}
                  </SelectItem>
                ))}
              </StyledSelect>
            </Field>

            <Field label="Stil">
              <StyledSelect
                value={style}
                onValueChange={(v) => setStyle(v as PostcardStyle)}
                placeholder="Stil wählen">
                <SelectItem value="single">Ein Bild</SelectItem>
                <SelectItem value="two">Zwei Bilder</SelectItem>
                <SelectItem value="four">Vier Bilder</SelectItem>
              </StyledSelect>
            </Field>
          </div>

          <div className="mt-2">
            <button
              onClick={generatePostcard}
              disabled={loading || isDownloading}
              className={` block border w-full px-2 py-2 text-sm ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} flex gap-2 items-center justify-center disabled:opacity-30`}>
              <RefreshCcw className="min-w-4 min-h-4 h-4 w-4" />
              Neue Bilder generieren
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <Field label="Größe">
              <StyledSelect
                value={size}
                onValueChange={(v) => setSize(v as PostcardSize)}
                placeholder="Größe wählen">
                <SelectItem value="A6">A6</SelectItem>
                <SelectItem value="A5">A5</SelectItem>
                <SelectItem value="A4">A4</SelectItem>
              </StyledSelect>
            </Field>

            <Field label="Orientierung">
              <StyledSelect
                value={orientation}
                onValueChange={(v) => setOrientation(v as Orientation)}
                placeholder="Orientierung wählen">
                <SelectItem value="portrait">Hochformat</SelectItem>
                <SelectItem value="landscape">Querformat</SelectItem>
              </StyledSelect>
            </Field>

            <Field label="Text Position">
              <StyledSelect
                value={textAlign}
                onValueChange={(v) => setTextAlign(v as TextAlign)}
                placeholder="Position wählen">
                <SelectItem value="top-left">Oben Links</SelectItem>
                <SelectItem value="top-right">Oben Rechts</SelectItem>
                <SelectItem value="bottom-left">Unten Links</SelectItem>
                <SelectItem value="bottom-right">Unten Rechts</SelectItem>
              </StyledSelect>
            </Field>

            <Field label="Text Farbe">
              <StyledSelect
                value={textColor}
                onValueChange={(v) => setTextColor(v as "white" | "black")}
                placeholder="Farbe wählen">
                <SelectItem value="white">Weiss</SelectItem>
                <SelectItem value="black">Schwarz</SelectItem>
              </StyledSelect>
            </Field>

            <div className="col-span-2">
              <Field label="Schriftart">
                <StyledSelect
                  value={fontFamily}
                  onValueChange={setFontFamily}
                  placeholder="Schriftart wählen">
                  <SelectItem value={`'Garamond', serif`}>Serif</SelectItem>
                  <SelectItem value={`'Schibsted Grotesk', sans-serif`}>Sans-serif</SelectItem>
                  <SelectItem value={`'Chivo Mono', monospace`}>Monospace</SelectItem>
                  <SelectItem value={`Comic Sans MS`}>Comic Sans</SelectItem>
                  <SelectItem value={`cursive`}>Cursive</SelectItem>
                </StyledSelect>
              </Field>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-1 gap-y-6 mt-2">
            <Field label={`Schriftgrösse (${fontSize}px)`}>
              <StyledSlider
                value={[fontSize]}
                onValueChange={([val]) => setFontSize(val)}
                min={8}
                max={128}
                step={1}
              />
            </Field>

            <Field label={`Textabstand (${textPadding}px)`}>
              <StyledSlider
                value={[textPadding]}
                onValueChange={([val]) => setTextPadding(val)}
                min={0}
                max={128}
                step={1}
              />
            </Field>
          </div>

          <div className="col-span-2 mt-2">
            <Field label="Text">
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={cn("w-full p-2 border h-24 resize-none focus:outline-none focus:ring-2", theme === "dark" ? "border-white bg-black text-white focus:ring-red-300" : "border-black bg-white text-black focus:ring-red-600")}
                placeholder="Postkarten Text"
              />
            </Field>
          </div>

          <div className="col-span-2 flex gap-4 items-center mt-0">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={cn(" w-full mt-4 px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 flex gap-2 items-center justify-center", theme === "dark" ? "bg-white text-black hover:bg-neutral-200 focus:ring-offset-black focus:ring-red-300" : "bg-black text-white hover:bg-neutral-800 focus:ring-offset-white focus:ring-red-600")}>
              <Download className="min-w-4 min-h-4 h-4 w-4" />
              Download
            </button>
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col">
          <h2 className="text-xl font-semibold mb-4 sr-only">Vorschau</h2>
          <div className="w-full lg:mb-0 mb-8 lg:rotate-[2deg] xl:scale-[1.25]  lg:max-w-[clamp(320px,33vw,380px)]  mx-auto flex-grow flex items-center justify-center">
            <div
              ref={postcardRef}
              className={cn(`relative select-none shadow-[5px_5px_0px_rgba(0,0,0,0.2)] grid gap-2 p-2 border w-full`, theme === "dark" ? "bg-white" : "bg-white")}
              style={{
                aspectRatio: postcardAspectRatio,
                gridTemplateColumns: style === "single" ? "1fr" : style === "two" && orientation === "portrait" ? "1fr" : "repeat(2, 1fr)",
                gridTemplateRows: style === "single" ? "1fr" : style === "two" && orientation === "landscape" ? "1fr" : "repeat(2, 1fr)",
              }}>
              {loading && (
                <div className={`absolute bg-white inset-0 flex items-center justify-center z-10 ${theme === "dark" ? "text-black bg-opacity-50" : "bg-white bg-opacity-75"}`}>
                  <p>Laden ...</p>
                </div>
              )}
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full overflow-hidden relative">
                  <img
                    src={image.gallery ? getImageUrl(image.gallery, image.filename.replaceAll(" ", "_"), 1440) : ""}
                    alt={image.alt || ""}
                    className="w-full h-full object-cover"
                    onLoad={handleImageLoad}
                  />
                  {text && index === textImageIndex && (
                    <div
                      className={`absolute leading-[0.9] ${textColor === "white" ? "text-white" : "text-black"} ${textAlignClasses[textAlign]}`}
                      style={{
                        fontFamily: fontFamily,
                        fontSize: `${fontSize}px`,
                        padding: `${textPadding}px`,
                      }}>
                      {text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div>
      <label className={`block text-xs opacity-70 truncate mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}>{label}</label>
      {children}
    </div>
  );
};

const StyledSelect = ({ children, ...props }: Select.SelectProps & { children: React.ReactNode; placeholder: string }) => {
  const { theme } = useTheme();
  return (
    <Select.Root {...props}>
      <Select.Trigger className={cn("cursor-pointer w-full text-sm flex justify-between items-center p-0 truncate focus:outline-none focus:ring-2", theme === "dark" ? "bg-black border-white text-white focus:ring-red-300" : "bg-white border-black text-black focus:ring-red-600")}>
        <Select.Value placeholder={props.placeholder} />
        <Select.Icon>
          <ChevronDown className="h-4 w-4" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={5}
          className={cn("w-[calc(100vw-4rem)] max-h-[33vh] shadow-[2px_2px_0px_rgba(0,0,0,0.2)] border z-50 md:w-auto md:min-w-[var(--radix-select-trigger-width)] md:max-w-md", theme === "dark" ? "bg-black text-white border-white" : "bg-white text-black border-black")}>
          <Select.Viewport className="p-1">{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = forwardRef<ElementRef<typeof Select.Item>, ComponentPropsWithoutRef<typeof Select.Item>>(({ className, children, ...props }, ref) => {
  const { theme } = useTheme();
  return (
    <Select.Item
      ref={ref}
      className={cn("text-xs p-2 flex items-center gap-8 justify-between relative select-none cursor-pointer focus:outline-none", theme === "dark" ? "hover:bg-neutral-800 focus:bg-red-300 focus:text-black" : "hover:bg-neutral-100 focus:bg-red-600 focus:text-white", className)}
      {...props}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="">
        <Check className="h-4 w-4" />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

const StyledSlider = (props: Slider.SliderProps) => {
  const { theme } = useTheme();
  return (
    <Slider.Root
      className="relative flex items-center select-none touch-none w-full h-5"
      {...props}>
      <Slider.Track className={`cursor-pointer relative grow h-[3px] ${theme === "dark" ? "bg-neutral-700" : "bg-neutral-200"}`}>
        <Slider.Range className={`absolute h-full ${theme === "dark" ? "bg-white" : "bg-black"}`} />
      </Slider.Track>
      <Slider.Thumb
        className={cn("cursor-grab active:cursor-grabbing block w-4 h-4 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2", theme === "dark" ? "bg-white border-white focus:ring-offset-black focus:ring-red-300" : "bg-black border-black focus:ring-offset-white focus:ring-red-600")}
        aria-label="Lautstärke"
      />
    </Slider.Root>
  );
};

export default MakePostcard;
