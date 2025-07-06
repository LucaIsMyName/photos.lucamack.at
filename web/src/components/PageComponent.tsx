import { useParams } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { pages } from '../pages';
import { marked } from 'marked';
import type { Page } from '../types';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../animations';
import { Helmet } from 'react-helmet-async';

const PageComponent = () => {
  const { theme } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const page: Page | undefined = pages.find((p: Page) => p.slug === slug);

  if (!page) {
    return <div className="py-10 text-left font-bold">Page not found.</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition as any}
    >
      <Helmet>
        <title>{`Luca Mack | ${page.title}`}</title>
        <meta name="description" content={`Information about ${page.title}`} />
      </Helmet>
      <div className="px-4 md:px-0">
        <div className="flex flex-col items-start" data-wysiwyg>
          {/* <h1 className="w-full max-w-[560px] text-2xl md:text-5xl pt-8 font-bold ">{page.title}</h1> */}
          <div
            className={`w-full max-w-[560px] text-lg leading-8 my-4 leading-tight prose ${theme === 'dark' ? 'prose-invert' : ''}`}
            dangerouslySetInnerHTML={{ __html: marked(page.content) }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageComponent;
