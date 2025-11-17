import { Helmet } from 'react-helmet-async';
import { siteMetadata, StructuredData } from '../seo/metadata';

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile' | 'product' | 'service' | string;
  keywords?: string[];
  structuredData?: StructuredData;
}

const buildUrl = (path?: string) => {
  if (!path) return siteMetadata.siteUrl;
  try {
    return new URL(path, siteMetadata.siteUrl).toString();
  } catch {
    return siteMetadata.siteUrl;
  }
};

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  keywords,
  structuredData,
}) => {
  const metaTitle = title
    ? `${title} | ${siteMetadata.siteName}`
    : `${siteMetadata.siteName} | ${siteMetadata.siteTagline}`;
  const metaDescription = description ?? siteMetadata.description;
  const metaUrl = buildUrl(canonical);
  const metaImage = image ?? siteMetadata.defaultImage;
  const metaKeywords = (keywords ?? siteMetadata.keywords).join(', ');
  const jsonLd = structuredData ? JSON.stringify(structuredData) : null;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={metaUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteMetadata.siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {jsonLd && (
        <script type="application/ld+json">
          {jsonLd}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;

