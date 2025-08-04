import { CONFIG } from "../../config";

const SeoHead = ({ title, description, imageUrl = `${CONFIG.url}/content/galleries/arsenal/Altes_Backsteingeb%C3%A4ude-1440w.jpg`, hasTwitter = true, hasOg = true, noIndex = false, ogType = "website" }: { title?: string; description?: string; imageUrl?: string; hasTwitter?: boolean; hasOg?: boolean; ogType?: string; noIndex?: boolean }) => {
  return (
    <>
      <title>{title ? title : CONFIG.author}</title>
      {description && (
        <meta
          name="description"
          content={description}
        />
      )}
      {imageUrl && (
        <meta
          name="image"
          content={imageUrl}
        />
      )}
      {noIndex && (
        <meta
          name="robots"
          content="noindex, nofollow"
        />
      )}
      {hasTwitter && (
        <>
          {imageUrl && (
            <meta
              name="twitter:card"
              content="summary_large_image"
            />
          )}
          <meta
            name="twitter:title"
            content={title ? title : CONFIG.author}
          />
          {description && (
            <meta
              name="twitter:description"
              content={description}
            />
          )}
          {imageUrl && (
            <meta
              name="twitter:image"
              content={imageUrl}
            />
          )}
        </>
      )}
      {hasOg && (
        <>
          <meta
            name="og:title"
            content={title ? title : CONFIG.author}
          />
          {description && (
            <meta
              name="og:description"
              content={description}
            />
          )}
          <meta
            name="og:type"
            content={ogType}
          />
          <meta
            name="og:url"
            content={window.location.href}
          />
          {imageUrl && (
            <meta
              name="og:image"
              content={imageUrl}
            />
          )}
        </>
      )}
    </>
  );
};

export default SeoHead;
