import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable SEO component.
 * Props:
 * - title: Page title (suffix added automatically)
 * - description: Meta description
 * - canonical: Absolute canonical URL
 * - image: Social sharing image (absolute URL)
 * - noIndex: If true, adds noindex
 * - structuredData: JSON-LD object or array of objects
 */
export default function SEO({
  title = 'Brown Kudi',
  description = 'Brown Kudi – Quality tyres, agriculture equipment, and global trade solutions.',
  canonical,
  image,
  noIndex = false,
  structuredData,
  lang = 'en'
}) {
  const fullTitle = title === 'Brown Kudi' ? title : `${title} | Brown Kudi`;

  const sd = Array.isArray(structuredData) ? structuredData : (structuredData ? [structuredData] : []);

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {noIndex && <meta name="robots" content="noindex,follow" />}
      {sd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </Helmet>
  );
}
