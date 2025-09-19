#!/usr/bin/env node
/**
 * Simple sitemap generator for a static Vite SPA deployment.
 * Looks for a SITE_URL environment variable (e.g. https://www.example.com)
 * Falls back to http://localhost:5173 if not provided.
 */
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Accept either SITE_URL or VITE_SITE_URL for convenience
const RAW_URL = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://www.example.com';
const SITE_URL = RAW_URL.replace(/\/$/, '');

// Maintain the route list manually (excluding dynamic product-detail/:id)
const routes = [
  '/',
  '/tyres',
  '/about',
  '/gallery',
  '/contact',
  '/tradesection',
  '/social',
  '/testmonials',
  '/export-section',
  '/agriequipments',
  '/agrijourney',
  '/socialfootprints'
];

const now = new Date().toISOString();
const urls = routes.map(r => `  <url>\n    <loc>${SITE_URL}${r}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${r === '/' ? '1.0' : '0.7'}</priority>\n  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

// Write to dist for deployment and public for local preview
const distDir = resolve(__dirname, '../dist');
try { if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true }); } catch {}
writeFileSync(resolve(distDir, 'sitemap.xml'), xml, 'utf8');

// Also write to public root to be served directly if hosting copies it verbatim
writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml, 'utf8');

console.log(`Sitemap generated with ${routes.length} routes at ${SITE_URL}`);
