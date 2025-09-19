import { useEffect } from 'react';

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
  useEffect(() => {
    const fullTitle = title === 'Brown Kudi' ? title : `${title} | Brown Kudi`;
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
    document.title = fullTitle;

    const managedSelector = 'data-managed-seo';
    // Cleanup any previously injected tags
    document.head.querySelectorAll(`[${managedSelector}="true"]`).forEach(n => n.remove());

    function add(name, attrs) {
      const el = document.createElement(name);
      Object.entries(attrs).forEach(([k,v]) => { if (v != null) el.setAttribute(k, v); });
      el.setAttribute(managedSelector, 'true');
      document.head.appendChild(el);
      return el;
    }

    add('meta', { name: 'description', content: description });
    add('meta', { property: 'og:title', content: fullTitle });
    add('meta', { property: 'og:description', content: description });
    add('meta', { property: 'og:type', content: 'website' });
    if (canonical) add('meta', { property: 'og:url', content: canonical });
    if (image) add('meta', { property: 'og:image', content: image });
    add('meta', { name: 'twitter:card', content: 'summary_large_image' });
    add('meta', { name: 'twitter:title', content: fullTitle });
    add('meta', { name: 'twitter:description', content: description });
    if (image) add('meta', { name: 'twitter:image', content: image });
    if (canonical) add('link', { rel: 'canonical', href: canonical });
    if (noIndex) add('meta', { name: 'robots', content: 'noindex,follow' });

    const sdArray = Array.isArray(structuredData) ? structuredData : (structuredData ? [structuredData] : []);
    sdArray.forEach(obj => {
      const script = add('script', { type: 'application/ld+json' });
      script.textContent = JSON.stringify(obj);
    });
  }, [title, description, canonical, image, noIndex, structuredData, lang]);

  return null;
}
