import { useEffect } from "react";

type Meta = {
  title: string;
  description?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Overrides <html lang> and og:locale while the route is mounted. */
  lang?: string;
  /** Route-specific social preview image (absolute path or full URL). */
  image?: string;
  imageAlt?: string;
};

const SITE_URL =
  (import.meta.env?.VITE_SITE_URL as string | undefined) ??
  "https://fandyramadhan.com";

const setMeta = (
  name: string,
  content: string,
  attr: "name" | "property" = "name",
) => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setCanonical = (path: string) => {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  const url = path.startsWith("http")
    ? path
    : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  link.setAttribute("href", url);
  setMeta("og:url", url, "property");
  setMeta("twitter:url", url);
};

const JSON_LD_ROUTE_ID = "route-json-ld";

const setJsonLd = (data: Record<string, unknown> | Record<string, unknown>[]) => {
  let tag = document.getElementById(JSON_LD_ROUTE_ID) as HTMLScriptElement | null;
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.id = JSON_LD_ROUTE_ID;
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
};

const removeJsonLd = () => {
  const tag = document.getElementById(JSON_LD_ROUTE_ID);
  if (tag) tag.remove();
};

export function useDocumentMeta({
  title,
  description,
  canonicalPath,
  jsonLd,
  lang,
  image,
  imageAlt,
}: Meta) {
  useEffect(() => {
    const prevTitle = document.title;
    const prevLang = document.documentElement.lang;
    document.title = title;
    setMeta("title", title);
    setMeta("og:title", title, "property");
    setMeta("twitter:title", title);

    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, "property");
      setMeta("twitter:description", description);
    }

    if (canonicalPath) {
      setCanonical(canonicalPath);
    }

    if (lang) {
      document.documentElement.lang = lang;
      setMeta("og:locale", lang.replace("-", "_"), "property");
    }

    if (image) {
      const url = image.startsWith("http") ? image : `${SITE_URL}${image}`;
      setMeta("og:image", url, "property");
      setMeta("twitter:image", url);
      if (imageAlt) {
        setMeta("og:image:alt", imageAlt, "property");
        setMeta("twitter:image:alt", imageAlt);
      }
    }

    if (jsonLd) {
      setJsonLd(jsonLd);
    } else {
      removeJsonLd();
    }

    return () => {
      document.title = prevTitle;
      if (lang) document.documentElement.lang = prevLang;
      removeJsonLd();
    };
  }, [title, description, canonicalPath, jsonLd, lang, image, imageAlt]);
}
