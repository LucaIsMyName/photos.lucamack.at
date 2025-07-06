import { useParams } from "react-router-dom";
import { galleries } from "../galleries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { marked } from 'marked';

import "swiper/swiper-bundle.css";

const Gallery = () => {
  const { slug } = useParams<{ slug: string }>();
  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) {
    return <div className="py-10 text-left font-bold">Gallery not found.</div>;
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          {gallery.title || gallery.name}
        </h1>
        {gallery.description && (
          <div
            className="text-lg leading-8 max-h-24 overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: marked(gallery.description) }}
          />
        )}
      </div>

      {gallery.images.length > 0 ? (
        <div className="w-full flex-grow min-h-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop={true}
            className="h-full w-full">

            {gallery.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-full p-12">
                  <img
                    src={`/content/${gallery.slug}/${image}`}
                    alt={`${gallery.title || gallery.name} - ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="text-left">This gallery has no images yet.</p>
      )}
    </div>
  );
};

export default Gallery;
