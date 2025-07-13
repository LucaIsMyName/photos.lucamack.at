import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { toJpeg } from "html-to-image";
import { galleries } from "../../galleries";
import type { Image as ImageType } from "../../types";
import { motion } from "framer-motion";
import { RefreshCcw, Download } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

type PostcardStyle = "single" | "two" | "four";
type PostcardSize = "A4" | "A5" | "A6";
type Orientation = "portrait" | "landscape";

const sizeDimensions: Record<PostcardSize, { width: number; height: number }> = {
  A6: { width: 105, height: 148 }, // mm
  A5: { width: 148, height: 210 }, // mm
  A4: { width: 210, height: 297 }, // mm
};

const MakePostcardPage = () => {
  const { theme } = useTheme();
  const postcardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<PostcardStyle>("four");
  const [size, setSize] = useState<PostcardSize>("A6");
  const [orientation, setOrientation] = useState<Orientation>("portrait");
  const [selectedGallery, setSelectedGallery] = useState<string>("all");
  const [images, setImages] = useState<ImageType[]>([]);
  const [text, setText] = useState("");
  type TextAlign = "top-left" | "top-right" | "bottom-left" | "bottom-right";
  const [textAlign, setTextAlign] = useState<TextAlign>("bottom-right");
  const [textColor, setTextColor] = useState<"white" | "black">("white");
  const [fontFamily, setFontFamily] = useState("serif");
  const [fontSize, setFontSize] = useState(24);
  const [textPadding, setTextPadding] = useState(32);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setImagesLoaded(false);
    const numImages = style === "single" ? 1 : style === "two" ? 2 : 4;
    if (allImages.length === 0) {
      setImages([]);
      setLoading(false);
      setImagesLoaded(true);
      return;
    }
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    const selectedImages = shuffled.slice(0, numImages);
    setImages(selectedImages);
  }, [allImages, style]);

  useEffect(() => {
    generatePostcard();
  }, [generatePostcard]);

  const handleImageLoad = () => {
    const allImageElements = postcardRef.current?.querySelectorAll("img");
    if (allImageElements && allImageElements.length > 0) {
      const allLoaded = Array.from(allImageElements).every((img) => img.complete && img.naturalHeight !== 0);
      if (allLoaded) {
        setImagesLoaded(true);
        setLoading(false);
      }
    }
  };

  const handleDownload = useCallback(() => {
    if (postcardRef.current === null || !imagesLoaded) {
      console.error("Postcard element not found or images not loaded");
      return;
    }
    setLoading(true);
    toJpeg(postcardRef.current, { cacheBust: true, quality: 0.95, pixelRatio: 3 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `postcard-${style}-${size}-${orientation}.jpg`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to create postcard image", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [style, size, orientation, imagesLoaded]);

  const postcardAspectRatio = useMemo(() => {
    const dimensions = sizeDimensions[size];
    return orientation === "portrait" ? `${dimensions.width}/${dimensions.height}` : `${dimensions.height}/${dimensions.width}`;
  }, [size, orientation]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8 h-screen flex flex-col">
      <title>Postkarten Generator | Luca Mack</title>
      <meta
        name="description"
        content="Postkarten Generator"
      />
      <meta
        name="robots"
        content="noindex"
      />
      <h1 className="text-3xl font-bold mb-4 sr-only">Postkarten Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
        <div className="md:col-span-1 space-y-4 flex flex-col justify-center">
          <h2 className="sr-only text-xl font-semibold">Optionen</h2>
          <div className="grid grid-cols-2 md:min-w-[200px] gap-4">
            <div className="col-span-2 ">
              <label
                htmlFor="gallery"
                className="block  text-xs">
                Galerie
              </label>
              <select
                id="gallery"
                value={selectedGallery}
                onChange={(e) => setSelectedGallery(e.target.value)}
                className={`mt-0.5 block w-full border p-0.5 text-xs bg-transparent ${theme === "dark" ? "border-white" : "border-black"}`}>
                <option value="all">Alle Bilder</option>
                {galleries.map((g) => (
                  <option
                    key={g.slug}
                    value={g.slug}>
                    {g.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="style"
                className="block text-xs truncate">
                Stil
              </label>
              <select
                id="style"
                value={style}
                onChange={(e) => setStyle(e.target.value as PostcardStyle)}
                className={`mt-0.5 block w-full border p-0.5 text-xs bg-transparent ${theme === "dark" ? "border-white" : "border-black"}`}>
                <option value="single">Ein Bild</option>
                <option value="two">Zwei Bilder</option>
                <option value="four">Vier Bilder</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="size"
                className="block text-xs truncate">
                Größe
              </label>
              <select
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value as PostcardSize)}
                className={`mt-0.5 block w-full border p-0.5 text-xs bg-transparent ${theme === "dark" ? "border-white" : "border-black"}`}>
                <option value="A6">A6</option>
                <option value="A5">A5</option>
                <option value="A4">A4</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="orientation"
                className="block text-xs truncate">
                Orientierung
              </label>
              <select
                id="orientation"
                value={orientation}
                onChange={(e) => setOrientation(e.target.value as Orientation)}
                className={`mt-0.5 block w-full border p-0.5 text-xs bg-transparent ${theme === "dark" ? "border-white" : "border-black"}`}>
                <option value="portrait">Hochformat</option>
                <option value="landscape">Querformat</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="textAlign"
                className="block text-xs truncate">
                Text Position
              </label>
              <select
                id="textAlign"
                value={textAlign}
                onChange={(e) => setTextAlign(e.target.value as TextAlign)}
                className={`mt-0.5 block w-full border p-0.5 text-xs bg-transparent ${theme === "dark" ? "border-white" : "border-black"}`}>
                <option value="top-left">Oben Links</option>
                <option value="top-right">Oben Rechts</option>
                <option value="bottom-left">Unten Links</option>
                <option value="bottom-right">Unten Rechts</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="textColor"
                className="block text-xs truncate">
                Text Farbe
              </label>
              <select
                id="textColor"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value as "white" | "black")}
                className={`mt-0.5 block w-full border p-0.5 text-xs bg-transparent ${theme === "dark" ? "border-white" : "border-black"}`}>
                <option value="white">Weiss</option>
                <option value="black">Schwarz</option>
              </select>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="fontFamily"
                className="block text-xs truncate">
                Schriftart
              </label>
              <select
                id="fontFamily"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className={`mt-0.5 block w-full border p-0.5 text-xs bg-transparent ${theme === "dark" ? "border-white" : "border-black"}`}>
                <option value="serif">Serif</option>
                <option value="sans-serif">Sans-Serif</option>
                <option value="monospace">Monospace</option>
                <option value="cursive">Cursive</option>
                <option value="'Comic Sans MS', 'Comic Sans', cursive">Comic Sans</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="text"
              className="block text-xs truncate">
              Text
            </label>
            <textarea
              id="text"
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={`mt-0.5 text-xs border block w-full p-1 bg-transparent ${theme === "dark" ? "border-white" : "border-black"}`}
            />
          </div>

          <div>
            <label
              htmlFor="fontSize"
              className="block text-xs truncate">
              Schriftgrösse ({fontSize}px)
            </label>
            <input
              type="range"
              id="fontSize"
              min="12"
              max="72"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full bg-white custom-range"
            />
          </div>

          <div>
            <label
              htmlFor="textPadding"
              className="block text-xs truncate">
              Textabstand ({textPadding}px)
            </label>
            <input
              type="range"
              id="textPadding"
              min="0"
              max="64"
              value={textPadding}
              onChange={(e) => setTextPadding(Number(e.target.value))}
              className="w-full custom-range"
            />
          </div>

          <div className="flex gap-4 items-center mt-4">
            <button
              onClick={generatePostcard}
              disabled={loading}
              className={`block border px-2 py-2 text-sm ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} flex gap-2 items-center disabled:opacity-30`}>
              <RefreshCcw className="min-w-4 min-h-4 h-4 w-4" /> 
            </button>
            <button
              onClick={handleDownload}
              disabled={loading || !imagesLoaded}
              className={`block flex-grow border text-center w-full px-2 py-2 text-sm ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} flex gap-2 items-center disabled:opacity-30`}>
              <Download className="min-w-4 min-h-4 h-4 w-4" />
              Download
            </button>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col">
          <h2 className="text-xl font-semibold mb-4 sr-only">Vorschau</h2>
          <div className="w-full  md:max-w-[clamp(320px,33vw,380px)]  mx-auto flex-grow flex items-center justify-center">
            <div
              ref={postcardRef}
              className={`relative select-none shadow-[0_0_2px_rgba(0,0,0,0.1)] grid gap-2 p-4 border border-black w-full ${theme === "dark" ? "bg-white" : "bg-white"}`}
              style={{
                aspectRatio: postcardAspectRatio,
                gridTemplateColumns: style === "four" || (style === "two" && orientation === "landscape") ? "repeat(2, 1fr)" : "1fr",
                gridTemplateRows: style === "four" || (style === "two" && orientation === "portrait") ? "repeat(2, 1fr)" : "1fr",
              }}>
              {loading && (
                <div className={`absolute bg-white inset-0 flex items-center justify-center z-10 ${theme === "dark" ? "text-black bg-opacity-50" : "bg-white bg-opacity-75"}`}>
                  <p>Laden ...</p>
                </div>
              )}
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full overflow-hidden">
                  <img
                    src={`/content/galleries/${image.gallery}/${image.filename}`}
                    alt={image.alt || ""}
                    className="w-full h-full object-contain"
                    onLoad={handleImageLoad}
                  />
                </div>
              ))}
              {text && (
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MakePostcardPage;
