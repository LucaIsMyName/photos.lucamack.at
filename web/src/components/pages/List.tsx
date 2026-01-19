import { useMemo, useState, useEffect, useRef, useCallback } from "react";



import { useSearch, useNavigate } from "@tanstack/react-router";


import { useTheme } from "../../contexts/ThemeContext";


import { slugify } from "../../utils/slugify";


import { galleries } from "../../galleries";


import { parseCreateDate } from "../../utils/date";


import type { Image as ImageType, Gallery } from "../../types";


import { CONFIG } from "../../config";


import { cn } from "../../utils/cn";


import { getImageUrl } from "../../utils/image";


import Href from "../ui/Href";


import HorizontalScroller from "../ui/HorizontalScroller";


import { Clock, MapPin } from "lucide-react";


import { Link } from "@tanstack/react-router";


import { Download, Image } from "lucide-react";


import useDebounce from "../../hooks/useDebounce";


import SortFilterBar from "../ui/SortFilterBar";


import SeoHead from "../ui/SeoHead";





const List = () => {


  const search = useSearch({ strict: false });
  const navigate = useNavigate();
  
  // Helper to update search params
  const setSearchParams = useCallback((newParams: Record<string, string | undefined>, options?: { replace?: boolean }) => {
    navigate({
      // @ts-expect-error - Search schema types not fully inferred until route tree is generated
      search: (prev: any) => ({ ...prev, ...newParams }),
      replace: options?.replace,
    });
  }, [navigate]);






  const [activeTab, setActiveTab] = useState<"images" | "galleries">((search?.tab as "images" | "galleries") || "images");
  const [searchTerm, setSearchTerm] = useState((search?.search as string) || "");
  const [sortKey, setSortKey] = useState<"createDate" | "galleryTitle">((search?.sortBy as "createDate" | "galleryTitle") || "createDate");
  const [gallerySortKey, setGallerySortKey] = useState<"title" | "createDate">((search?.gallerySortBy as "title" | "createDate") || "title");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">((search?.sortOrder as "asc" | "desc") || "desc");
  const [startDate, setStartDate] = useState((search?.startDate as string) || "");
  const [endDate, setEndDate] = useState((search?.endDate as string) || "");





  // Incremental loading state


  const [visibleImageCount, setVisibleImageCount] = useState(50);


  const loadMoreRef = useRef<HTMLDivElement>(null);


  const isLoadingMore = useRef(false);





  const debouncedSearchTerm = useDebounce(searchTerm, 300);


  const debouncedStartDate = useDebounce(startDate, 300);


  const debouncedEndDate = useDebounce(endDate, 300);





  const { theme } = useTheme();





  useEffect(() => {
    const params: Record<string, string | undefined> = {};





    if (activeTab !== "images") params.tab = activeTab;


    if (debouncedSearchTerm) params.search = debouncedSearchTerm;


    if (sortKey !== "createDate") params.sortBy = sortKey;


    if (gallerySortKey !== "title") params.gallerySortBy = gallerySortKey;


    if (sortOrder !== "desc") params.sortOrder = sortOrder;


    if (debouncedStartDate) params.startDate = debouncedStartDate;


    if (debouncedEndDate) params.endDate = debouncedEndDate;





    setSearchParams(params, { replace: true });





    // Reset visible count when search params change


    setVisibleImageCount(50);


  }, [activeTab, debouncedSearchTerm, sortKey, gallerySortKey, sortOrder, debouncedStartDate, debouncedEndDate, setSearchParams]);





  const handleClearFilters = () => {


    setSearchTerm("");


    setSortKey("createDate");


    setGallerySortKey("title");


    setSortOrder("desc");


    setStartDate("");


    setEndDate("");


    setVisibleImageCount(50); // Reset visible count when filters are cleared


  };





  const allImages = useMemo(() => {


    const images: (ImageType & { galleryTitle: string; gallerySlug: string; index: number })[] = [];


    galleries.forEach((gallery) => {


      gallery.images?.forEach((image, index) => {


        images.push({ ...image, galleryTitle: gallery.title, gallerySlug: gallery.slug, index: index + 1 } as any);


      });


    });


    return images;


  }, []);





  const filteredAndSortedImages = useMemo(() => {


    let filtered = allImages;





    if (searchTerm) {


      const searchWords = searchTerm.toLowerCase().split(" ").filter(Boolean);


      if (searchWords.length > 0) {


        filtered = filtered.filter((image) => {


          const searchableText = `${image.galleryTitle.toLowerCase()} ${image.filename ? image.filename.toLowerCase() : ""}`;


          return searchWords.every((word: string) => searchableText.includes(word));


        });


      }


    }





    if (startDate) {


      const start = new Date(startDate);


      start.setHours(0, 0, 0, 0);


      filtered = filtered.filter((image) => {


        const imageDate = parseCreateDate(image.createDate);


        return imageDate && imageDate >= start;


      });


    }





    if (endDate) {


      const end = new Date(endDate);


      end.setHours(23, 59, 59, 999);


      filtered = filtered.filter((image) => {


        const imageDate = parseCreateDate(image.createDate);


        return imageDate && imageDate <= end;


      });


    }





    return [...filtered].sort((a, b) => {


      const aValue = sortKey === "createDate" ? parseCreateDate(a.createDate) : a.galleryTitle;


      const bValue = sortKey === "createDate" ? parseCreateDate(b.createDate) : b.galleryTitle;





      if (aValue === null) return 1;


      if (bValue === null) return -1;





      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;


      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;


      return 0;


    });


  }, [allImages, searchTerm, sortKey, sortOrder, startDate, endDate, debouncedStartDate, debouncedEndDate]);





  // Get only the visible subset of images


  const visibleImages = useMemo(() => {


    return filteredAndSortedImages.slice(0, visibleImageCount);


  }, [filteredAndSortedImages, visibleImageCount]);





  // Intersection observer for infinite scrolling


  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {


    const [entry] = entries;


    if (entry.isIntersecting && !isLoadingMore.current) {


      isLoadingMore.current = true;





      // Add a small delay to prevent rapid loading


      setTimeout(() => {


        setVisibleImageCount(prev => {


          const newCount = prev + 50;


          return Math.min(newCount, filteredAndSortedImages.length);


        });


        isLoadingMore.current = false;


      }, 300);


    }


  }, [filteredAndSortedImages.length]);





  // Set up the intersection observer


  useEffect(() => {


    const observer = new IntersectionObserver(handleObserver, {


      root: null,


      rootMargin: '0px',


      threshold: 0.1,


    });





    if (loadMoreRef.current) {


      observer.observe(loadMoreRef.current);


    }





    return () => {
      const currentRef = loadMoreRef.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };


  }, [handleObserver]);





  const filteredAndSortedGalleries = useMemo(() => {


    let filtered: (Gallery & { createDate?: string | Date | null })[] = galleries.map((g) => {
      // Transform images to fix colorData types
      const transformedImages = g.images?.map((img: any) => {
        if (img.colorData?.dominantColors) {
          return {
            ...img,
            colorData: {
              ...img.colorData,
              dominantColors: img.colorData.dominantColors.map((color: any) => ({
                ...color,
                rgb: Array.isArray(color.rgb) && color.rgb.length >= 3 
                  ? [color.rgb[0], color.rgb[1], color.rgb[2]] as [number, number, number]
                  : [0, 0, 0] as [number, number, number],
                percentage: typeof color.percentage === 'string' 
                  ? parseFloat(color.percentage) 
                  : (typeof color.percentage === 'number' ? color.percentage : 0),
              })),
            },
          };
        }
        return img;
      });

      return {
        ...g,
        images: transformedImages || g.images,
        createDate: g.images?.[0]?.createDate,
      };
    });





    if (searchTerm) {


      const lowerCaseSearchTerm = searchTerm.toLowerCase();


      filtered = filtered.filter((gallery) => {


        const titleMatch = gallery.title.toLowerCase().includes(lowerCaseSearchTerm);


        const imageMatch = gallery.images.some((image) => image.filename.toLowerCase().includes(lowerCaseSearchTerm));


        return titleMatch || imageMatch;


      });


    }





    if (startDate || endDate) {


      const start = startDate ? new Date(startDate) : null;


      if (start) start.setHours(0, 0, 0, 0);


      const end = endDate ? new Date(endDate) : null;


      if (end) end.setHours(23, 59, 59, 999);





      filtered = filtered.filter((gallery) => {


        return allImages


          .filter((image) => {


            const imageCreateDate = parseCreateDate(image.createDate);


            const sDate = startDate ? new Date(startDate) : null;


            const eDate = endDate ? new Date(endDate) : null;





            if (sDate && imageCreateDate && imageCreateDate < sDate) {


              return false;


            }


            if (eDate && imageCreateDate && imageCreateDate > eDate) {


              return false;


            }





            return true; // Search term is already handled above


          })


          .some((image) => image.gallerySlug === gallery.slug);


      });


    }





    return [...filtered].sort((a, b) => {


      const aValue = gallerySortKey === "createDate" ? parseCreateDate(a.createDate) : a.title;


      const bValue = gallerySortKey === "createDate" ? parseCreateDate(b.createDate) : b.title;





      if (aValue === null) return 1;


      if (bValue === null) return -1;





      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;


      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;


      return 0;


    });


  }, [searchTerm, gallerySortKey, sortOrder, startDate, endDate, allImages]);





  const galleryRandomImages = useMemo(() => {


    const imageMap: { [key: string]: ImageType | null } = {};


    galleries.forEach((gallery) => {


      if (gallery.images && gallery.images.length > 0) {
        const randomImage = gallery.images[Math.floor(Math.random() * gallery.images.length)] as any;
        
        // Transform image to fix colorData types
        let transformedImage = randomImage;
        if (randomImage.colorData?.dominantColors) {
          transformedImage = {
            ...randomImage,
            colorData: {
              ...randomImage.colorData,
              dominantColors: randomImage.colorData.dominantColors.map((color: any) => ({
                ...color,
                rgb: Array.isArray(color.rgb) && color.rgb.length >= 3 
                  ? [color.rgb[0], color.rgb[1], color.rgb[2]] as [number, number, number]
                  : [0, 0, 0] as [number, number, number],
                percentage: typeof color.percentage === 'string' 
                  ? parseFloat(color.percentage) 
                  : (typeof color.percentage === 'number' ? color.percentage : 0),
              })),
            },
          };
        }
        
        imageMap[gallery.slug] = transformedImage as ImageType;


      } else {


        imageMap[gallery.slug] = null;


      }


    });


    return imageMap;


  }, []);





  const imageSortOptions = [


    { value: "createDate", label: "Datum" },


    { value: "galleryTitle", label: "Name" },


  ];





  const gallerySortOptions = [


    { value: "title", label: "Name" },


    { value: "createDate", label: "Datum" },


  ];





  return (


    <div className="p-4 md:px-8">


      <SeoHead


        title={`Liste aller Fotos und Fotoserien | ${CONFIG.meta.title}`}


        description="Eine Liste aller Fotos und Fotoserien. Sortierbar und Filterbar."


        imageUrl={`${CONFIG.url}${getImageUrl(galleries[0].slug, encodeURI(galleries[0].images[0].filename.replaceAll(" ", "_")), 640)}`}


      />


      <div className={`flex gap-4 ${CONFIG.theme.border.bottom}`}>


        <button


          className={cn(`${CONFIG.theme.headline.one} py-2 sm:py-4 ${activeTab === "images" ? (theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : theme === "dark" ? "text-white" : "text-black"}`)}


          onClick={() => setActiveTab("images")}


          aria-label="Show images"


          aria-pressed={activeTab === "images"}>


          Fotos


        </button>


        <button


          className={cn(`${CONFIG.theme.headline.one} py-2 sm:py-4 ${activeTab === "galleries" ? (theme === "dark" ? `${CONFIG.theme.dark.text.primary}` : `${CONFIG.theme.light.text.primary}`) : theme === "dark" ? "text-white" : "text-black"}`)}


          onClick={() => setActiveTab("galleries")}


          aria-label="Show galleries"


          aria-pressed={activeTab === "galleries"}>


          Serien


        </button>


      </div>





      {activeTab === "images" && (


        <div className="">


          <HorizontalScroller className={`items-center ${CONFIG.theme.border.bottom} py-5 `}>


            <SortFilterBar


              searchTerm={searchTerm}


              setSearchTerm={setSearchTerm}


              sortKey={sortKey}


              setSortKey={setSortKey}


              sortOptions={imageSortOptions}


              sortOrder={sortOrder}


              setSortOrder={setSortOrder}


              startDate={startDate}


              setStartDate={setStartDate}


              endDate={endDate}


              setEndDate={setEndDate}


              onClearFilters={handleClearFilters}


            />


          </HorizontalScroller>


          <div className="py-4 text-xs">


            {filteredAndSortedImages.length} {filteredAndSortedImages.length === 1 ? "Foto" : "Fotos"} gefunden


            {visibleImageCount < filteredAndSortedImages.length && (


              <span className="ml-2 text-gray-500">(Zeige {visibleImageCount} von {filteredAndSortedImages.length})</span>


            )}


          </div>


          <div className="flex flex-col lg:flex-row lg:flex-wrap">


            {visibleImages.map((image) => (


              <div


                className="w-full lg:w-1/2"


                key={`${image.gallerySlug}-${image.filename}`}>


                <div className="flex lg:flex-row items-center gap-4 py-2">


                  <Link


                    className="block min-w-24 min-h-24 lg:w-24 lg:h-24 flex-shrink-0"


                    to="/gallery/$gallerySlug/image/$slug"
                    params={{ gallerySlug: image.gallerySlug, slug: slugify(image.filename.replace(/\.[^/.]+$/, "")) }}>


                    <img


                      loading="lazy"


                      src={getImageUrl(image.gallerySlug, image.filename.replaceAll(" ", "_"), 160)}


                      alt={image.alt || `${image.galleryTitle} - ${image.filename}`}


                      width={128}


                      height={128}


                      className={cn(`${theme === "dark" ? "text-white bg-white/10" : "text-black bg-black/10"} lg:w-24 lg:h-24 min-w-24 min-h-24 w-24 h-24 object-cover `)}


                    />


                  </Link>


                  <div className="text-sm md:pr-4">


                    <Link to="/gallery/$gallerySlug/image/$slug" params={{ gallerySlug: image.gallerySlug, slug: slugify(image.filename.replace(/\.[^/.]+$/, "")) }}>


                      <h3 className="truncate text-base">{image.filename.replaceAll(".jpg", "")}</h3>


                    </Link>


                    <div className="flex items-center  space-x-2  flex-wrap">


                      <p className="flex items-center gap-1 text-[11px] mt-1">


                        <Image size={12} />


                        <Href to={`/gallery/${image.gallerySlug}`}>{image.galleryTitle}</Href>


                      </p>


                      <p className="flex items-center gap-1 text-[11px] mt-1">


                        <Clock size={12} />{" "}


                        <Href


                          hasDecoration={true}


                          to={`/app/timeline?scrollTo=${parseCreateDate(image.createDate)?.toISOString().split("T")[0]}`}>


                          {/*parseCreateDate(image.createDate)?.toLocaleString("de-AT") || "Ungültiges Datum"*/}


                          {parseCreateDate(image.createDate) &&


                            new Date(parseCreateDate(image.createDate)!).toLocaleDateString("de-DE", {


                              year: "numeric",


                              month: "long",


                              day: "numeric",


                            })}


                        </Href>


                      </p>


                      <p className="flex items-center gap-1 text-[11px] mt-1">


                        {image.latitude && image.longitude ? (


                          <>


                            <MapPin size={12} />


                            <Href


                              target="_self"


                              className=""


                              href={`/app/map?gallery=${image.gallerySlug}&image=${slugify(image.filename.replace(/\.[^/.]+$/, ""))}`}>


                              {`${image.latitude.toFixed(3)}, ${image.longitude.toFixed(3)}`}


                            </Href>


                          </>


                        ) : (


                          <>


                            <MapPin size={12} />


                            <span className="truncate">N/A</span>


                          </>


                        )}


                      </p>


                      <Href


                        className="flex items-center gap-1 text-[11px] mt-1"


                        href={getImageUrl(image.gallerySlug, image.filename.replaceAll(" ", "_"), "original")}


                        download>


                        <Download size={12} />


                        <span className="">Download</span>


                      </Href>


                    </div>


                  </div>


                </div>


              </div>


            ))}


            {/* Load more trigger element */}


            {visibleImageCount < filteredAndSortedImages.length && (


              <div


                ref={loadMoreRef}


                className="w-full py-6 text-center text-xs text-neutral-500 font-mono"


              >


                Weitere Fotos werden geladen...


              </div>


            )}


          </div>


        </div>


      )}





      {activeTab === "galleries" && (


        <div>


          <HorizontalScroller className={`items-center  ${CONFIG.theme.border.bottom} py-5 `}>


            <SortFilterBar


              searchTerm={searchTerm}


              setSearchTerm={setSearchTerm}


              sortKey={gallerySortKey}


              setSortKey={setGallerySortKey}


              sortOptions={gallerySortOptions}


              sortOrder={sortOrder}


              setSortOrder={setSortOrder}


              startDate={startDate}


              setStartDate={setStartDate}


              endDate={endDate}


              setEndDate={setEndDate}


              onClearFilters={handleClearFilters}


            />


          </HorizontalScroller>


          <div className="py-4 text-xs">


            {filteredAndSortedGalleries.length} {filteredAndSortedGalleries.length === 1 ? "Fotoserie" : "Fotoserien"} gefunden


          </div>


          <div className="flex flex-col lg:flex-row lg:flex-wrap">


            {filteredAndSortedGalleries.map((gallery, index) => {


              const randomImage = galleryRandomImages[gallery.slug];





              return (


                <div


                  className="w-full lg:w-1/2"


                  key={index}>


                  <Link


                    to={`/gallery/${gallery.slug}`}


                    className="flex lg:flex-row items-center gap-4 py-2">


                    {randomImage ? (


                      <img


                        loading="lazy"


                        src={getImageUrl(gallery.slug, randomImage.filename.replaceAll(" ", "_"), 160)}


                        alt={gallery.title}


                        width={128}


                        height={128}


                        className={cn(`${theme === "dark" ? "text-white bg-white/10" : "text-black bg-black/10"} lg:w-24 lg:h-24 min-w-24 min-h-24 w-24 h-24 object-cover `)}


                      />


                    ) : (


                      <div className="lg:w-24 lg:h-24 w-24 h-24 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">


                        <span className="text-xs text-gray-500">Kein Bild</span>


                      </div>


                    )}


                    <div className="text-sm">


                      <h3 className="truncate text-lg ">{gallery.title}</h3>


                      <p className="truncate text-xs">{gallery.images?.length || 0} Bilder</p>


                      <p className="truncate text-xs">Datum: {parseCreateDate(gallery.createDate)?.toLocaleDateString() || "N/V"}</p>


                    </div>


                  </Link>


                  {index < filteredAndSortedGalleries.length - 1 && ""}


                </div>


              );


            })}


          </div>


        </div>


      )}


    </div>


  );


};





export default List;
