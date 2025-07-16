import { useParams } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { pages } from "../../pages";
import { marked } from "marked";
import type { Page } from "../../types";
import { CONFIG } from "../../config";

const PageComponent = () => {
  const { theme } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const page: Page | undefined = pages.find((p: Page) => p.slug === slug);

  if (!page) {
    return <div className="py-10 text-left ">Seite nicht gefunden.</div>;
  }

  return (
    <div>
      <title>{`${page.title} | ${CONFIG.meta.title}`}</title>
      <meta
        name="title"
        content={`${page.title} | ${CONFIG.meta.title}`}
      />
      <meta
        name="description"
        content={`${page.content.replaceAll("\n", " ").replace("#", "").trim().substring(0, 160)}`}
      />

      <div className="px-4 md:px-0 pt-0 pt-3">
        <div
          className="flex flex-col items-start"
          data-wysiwyg>
          <div
            className={`w-full max-w-[560px] text-sm md:text-lg leading-8 my-4 leading-tight prose ${theme === "dark" ? "prose-invert" : ""}`}
            dangerouslySetInnerHTML={{ __html: marked(page.content) }}></div>
        </div>
      </div>
    </div>
  );
};

export default PageComponent;
