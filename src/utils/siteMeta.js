// Central place to resolve the public site URL.
// Priority: VITE_SITE_URL (build-time) -> window.location.origin (runtime CSR fallback) -> https://www.example.com
export const SITE_URL = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL)
  ? import.meta.env.VITE_SITE_URL.replace(/\/$/, '')
  : (typeof window !== 'undefined' && window.location ? window.location.origin : 'https://www.example.com');
