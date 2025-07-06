import { useParams } from "react-router-dom";
import { galleries } from "../galleries";
import { marked } from 'marked';
import type { Gallery as GalleryType } from '../types';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const { slug } = useParams<{ slug: string }>();
  const gallery: GalleryType | undefined = galleries.find((g) => g.slug === slug);

  if (!gallery) {
    return <div className="py-10 text-left font-bold">Gallery not found.</div>;
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-4 md:px-0">
        <h1 className="text-4xl pt-10 font-bold  sm:text-5xl mb-4">
          {gallery.title || gallery.name}
        </h1>
        {gallery.description && ( 
          <div
            className="text-lg leading-8 mb-4"
            dangerouslySetInnerHTML={{ __html: marked(gallery.description) }}
          />
        )}

        {gallery.images.length > 0 ? (
          <div className="flex flex-wrap justify-center items-center pb-4">
            {gallery.images.map((image, index) => (
              <GalleryItem
                key={index}
                src={`/content/${gallery.slug}/${image}`}
                alt={`${gallery.title || gallery.name} - ${index + 1}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-left">This gallery has no images yet.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
