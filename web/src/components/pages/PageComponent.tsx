import { useParams } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { pages } from "../../pages";
import { marked } from "marked";
import type { Page } from "../../types";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations";

const PageComponent = () => {
  const { theme } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const page: Page | undefined = pages.find((p: Page) => p.slug === slug);

  if (!page) {
    return <div className="py-10 text-left ">Seite nicht gefunden.</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition as any}>
      <title>{`${page.title} | Luca Mack`}</title>
      <meta
        name="title"
        content={`${page.title} | Luca Mack`}
      />
      <meta
        name="description"
        content={`${page.content.replaceAll("\n", " ").replace("#", "").trim().substring(0, 160)}`}
      />
      <div className="px-4 md:px-0">
        <div
          className="flex flex-col items-start"
          data-wysiwyg>
          <div
            className={`w-full max-w-[560px] text-sm md:text-lg leading-8 my-4 leading-tight prose ${theme === "dark" ? "prose-invert" : ""}`}
            dangerouslySetInnerHTML={{ __html: marked(page.content) }}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageComponent;
