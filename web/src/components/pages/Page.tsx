import { useParams } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { pages } from "../../pages";
import { marked } from "marked";
import type { Page } from "../../types";
import { CONFIG } from "../../config";
import NotFoundPage from "./NotFound";
import SeoHead from "../ui/SeoHead";

const Page = () => {
  const { theme } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const page: Page | undefined = pages.find((p: Page) => p.slug === slug);

  if (!page) {
    return (
      <NotFoundPage
        title="Seite nicht gefunden"
        text="Seite nicht gefunden"
      />
    );
  }

  return (
    <div>
      <SeoHead
        title={`${page.title} | ${CONFIG.meta.title}`}
        description={`${page.content.replaceAll("\n", " ").replaceAll("#", "").replaceAll("\\", "").replaceAll("  ", " ").trim().substring(0, 145) + "..."}`}
      />

      <div className="px-4  md:pl-8  md:px-0 pt-0 pt-3">
        <div
          className="flex flex-col items-start"
          data-wysiwyg>
          <div
            className={`w-full md:max-w-[calc(var(--content-width)/2)] text-sm md:text-lg leading-8 my-4 leading-tight prose ${theme === "dark" ? "prose-invert" : ""}`}
            dangerouslySetInnerHTML={{ __html: marked(page.content) }}></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
