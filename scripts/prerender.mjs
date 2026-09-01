// Writes a static HTML entry per route listed in src/data/seoRoutes.json.
//
// The app is a client-rendered SPA, so index.html ships the portfolio's own
// title and Open Graph tags. Google eventually runs the JS and sees the real
// values, but WhatsApp, Facebook, LinkedIn and X never do — they read the raw
// HTML and would show "Senior Product Designer" for a link to /event.
//
// Vercel serves a matching file from the filesystem before applying the SPA
// rewrite, so dist/event/index.html is what a crawler gets for /event, while
// client-side navigation still goes through React Router as before.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const { siteUrl, routes } = JSON.parse(
  readFileSync(join(root, "src/data/seoRoutes.json"), "utf8"),
);
const template = readFileSync(join(dist, "index.html"), "utf8");

const escape = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Replace a <meta> tag's content, or append the tag when it is missing. */
const setMeta = (html, attr, name, content) => {
  const pattern = new RegExp(
    `(<meta[^>]*\\s${attr}=["']${name}["'][^>]*\\scontent=["'])[^"']*(["'])`,
    "i",
  );
  if (pattern.test(html)) {
    return html.replace(pattern, `$1${escape(content)}$2`);
  }
  return html.replace(
    "</head>",
    `    <meta ${attr}="${name}" content="${escape(content)}" />\n  </head>`,
  );
};

let written = 0;

for (const [path, meta] of Object.entries(routes)) {
  const url = `${siteUrl}${path}`;
  const image = meta.image.startsWith("http")
    ? meta.image
    : `${siteUrl}${meta.image}`;

  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escape(meta.title)}</title>`);
  html = html.replace(/<html([^>]*)\slang=["'][^"']*["']/i, `<html$1 lang="${meta.lang}"`);

  html = setMeta(html, "name", "title", meta.title);
  html = setMeta(html, "name", "description", meta.description);

  html = setMeta(html, "property", "og:type", meta.type);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:title", meta.title);
  html = setMeta(html, "property", "og:description", meta.description);
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "property", "og:image:alt", meta.imageAlt);
  html = setMeta(html, "property", "og:locale", meta.locale);

  html = setMeta(html, "name", "twitter:url", url);
  html = setMeta(html, "name", "twitter:title", meta.title);
  html = setMeta(html, "name", "twitter:description", meta.description);
  html = setMeta(html, "name", "twitter:image", image);
  html = setMeta(html, "name", "twitter:image:alt", meta.imageAlt);

  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${url}" />`,
  );

  const outDir = join(dist, path.replace(/^\//, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  written += 1;
  console.log(`prerendered ${path} -> dist${path}/index.html`);
}

console.log(`prerender: ${written} route(s) written`);
