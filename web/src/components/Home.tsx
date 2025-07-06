// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { galleries } from '../galleries';
// import type { Gallery, Image as ImageType } from '../types';
// import Image from './Image';
// import { motion, type TargetAndTransition } from 'framer-motion';
// import { pageVariants, pageTransition } from '../animations';
// import { Helmet } from 'react-helmet-async';

// const responsiveSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

// const Home = () => {
//   const [randomImage, setRandomImage] = useState<{ gallery: Gallery; image: ImageType } | null>(null);
//   const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
//   const [textStyle, setTextStyle] = useState<React.CSSProperties>({});
//   const [textInitial, setTextInitial] = useState<TargetAndTransition>({});
//   const [textAnimate, setTextAnimate] = useState<TargetAndTransition>({});


//   useEffect(() => {
//     const galleriesWithImages = galleries.filter(g => g.images && g.images.length > 0);
//     if (galleriesWithImages.length > 0) {
//       const randomGallery = galleriesWithImages[Math.floor(Math.random() * galleriesWithImages.length)];
//       const randomImageObject = randomGallery.images[Math.floor(Math.random() * randomGallery.images.length)];
//       setRandomImage({ gallery: randomGallery, image: randomImageObject });
//     }
//   }, []);

//   useEffect(() => {
//     if (dimensions) {
//       const isPortrait = dimensions.height > dimensions.width;
//       const side = Math.random() < 0.5; // true for left/top, false for right/bottom

//       const style: React.CSSProperties = {
//         position: 'absolute',
//         fontSize: 'clamp(3rem, 10vw, 8rem)',
//         fontWeight: '900',
//         color: 'white',
//         mixBlendMode: 'difference',
//         pointerEvents: 'none',
//         whiteSpace: 'nowrap',
//         zIndex: 10,
//         lineHeight: '1',
//       };

//       let initial: TargetAndTransition = {};
//       let animate: TargetAndTransition = { opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.5 } };

//       if (isPortrait) {
//         style.top = '50%';
//         style.transform = 'translateY(-50%)';
//         if (side) { // from left
//           style.left = '5%';
//           initial = { opacity: 0, x: '-100%' };
//           animate = { ...animate, x: 0 };
//         } else { // from right
//           style.right = '5%';
//           initial = { opacity: 0, x: '100%' };
//           animate = { ...animate, x: 0 };
//         }
//       } else { // landscape
//         style.left = '50%';
//         style.transform = 'translateX(-50%)';
//         if (side) { // from top
//           style.top = '10%';
//           initial = { opacity: 0, y: '-100%' };
//           animate = { ...animate, y: 0 };
//         } else { // from bottom
//           style.bottom = '10%';
//           initial = { opacity: 0, y: '100%' };
//           animate = { ...animate, y: 0 };
//         }
//       }
//       setTextStyle(style);
//       setTextInitial(initial);
//       setTextAnimate(animate);
//     }
//   }, [dimensions]);

//   const getImageDetails = () => {
//     if (!randomImage) {
//       return null;
//     }

//     const src = `/content/${randomImage.gallery.slug}/${randomImage.image.filename}`;
//     const ext = src.substring(src.lastIndexOf('.'));
//     const baseSrc = src.substring(0, src.lastIndexOf('.'));
//     const srcSet = responsiveSizes
//       .map(size => `${baseSrc}-${size}w${ext} ${size}w`)
//       .join(', ');

//     return {
//       src,
//       srcSet,
//       alt: randomImage.gallery.title || randomImage.gallery.name,
//       slug: randomImage.gallery.slug,
//     };
//   };

//   const handleImageLoad = (dims: { width: number; height: number }) => {
//     setDimensions(dims);
//   };

//   const imageDetails = getImageDetails();

//   return (
//     <motion.div
//       initial="initial"
//       animate="in"
//       exit="out"
//       variants={pageVariants}
//       transition={pageTransition as any}
//       className="h-full w-full relative"
//     >
//       <Helmet>
//         <title>Luca Mack | Photos</title>
//         <meta name="description" content="A collection of photos by Luca Mack, showcasing moments from various galleries." />
//       </Helmet>
//       <div className="h-full w-full flex items-center justify-center p-8 md:p-16">
//         {imageDetails ? (
//           <div className="relative max-w-full max-h-full">
//             <Link to={`/gallery/${imageDetails.slug}`} className="block">
//               <Image
//                 src={imageDetails.src}
//                 alt={imageDetails.alt}
//                 srcSet={imageDetails.srcSet}
//                 sizes="100vw"
//                 loading='eager'
//                 className="object-contain block max-w-full max-h-full"
//                 onImageLoad={handleImageLoad}
//               />
//             </Link>
//             {dimensions && (
//               <motion.div
//                 style={textStyle}
//                 initial={textInitial}
//                 animate={textAnimate}
//               >
//                 Luca Mack
//               </motion.div>
//             )}
//           </div>
//         ) : (
//           <div className="text-center">Lade Foto...</div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Home;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { galleries } from '../galleries';
import type { Gallery, Image as ImageType } from '../types';
import Image from './Image';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../animations';
import { Helmet } from 'react-helmet-async';

const responsiveSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

const Home = () => {
  const [randomImage, setRandomImage] = useState<{ gallery: Gallery; image: ImageType } | null>(null);

  useEffect(() => {
    const galleriesWithImages = galleries.filter(g => g.images && g.images.length > 0);
    if (galleriesWithImages.length > 0) {
      const randomGallery = galleriesWithImages[Math.floor(Math.random() * galleriesWithImages.length)];
      const randomImageObject = randomGallery.images[Math.floor(Math.random() * randomGallery.images.length)];
      setRandomImage({ gallery: randomGallery, image: randomImageObject });
    }
  }, []);

  const getImageDetails = () => {
    if (!randomImage) {
      return null;
    }

    const src = `/content/${randomImage.gallery.slug}/${randomImage.image.filename}`;
    const ext = src.substring(src.lastIndexOf('.'));
    const baseSrc = src.substring(0, src.lastIndexOf('.'));
    const srcSet = responsiveSizes
      .map(size => `${baseSrc}-${size}w${ext} ${size}w`)
      .join(', ');

    return {
      src,
      srcSet,
      alt: randomImage.gallery.title || randomImage.gallery.name,
      slug: randomImage.gallery.slug,
    };
  };

  const imageDetails = getImageDetails();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition as any}
      className="h-full w-full relative"
    >
      <Helmet>
        <title>Luca Mack | Photos</title>
        <meta name="description" content="A collection of photos by Luca Mack, showcasing moments from various galleries." />
      </Helmet>
      <div className="absolute inset-0 p-8 md:p-16">
        {imageDetails ? (
          <Link to={`/gallery/${imageDetails.slug}`} className="block w-full h-full">
            <Image
              src={imageDetails.src}
              alt={imageDetails.alt}
              srcSet={imageDetails.srcSet}
              sizes="100vw"
              loading='eager'
              className="object-contain w-full h-full"
            />
          </Link>
        ) : (
          <div className="text-center">Lade Foto...</div>
        )}
      </div>
    </motion.div>
  );
};

export default Home;