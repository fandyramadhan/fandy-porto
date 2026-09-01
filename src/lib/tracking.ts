// Meta Pixel conversion tracking.
//
// The base pixel in index.html only fires PageView. This adds the event that
// actually matters for the ads: someone tapping a CTA to open WhatsApp.
//
// "Lead" is used because Meta exposes it as a campaign optimisation goal, so
// the ad account can learn to find people who actually make contact rather
// than people who merely land on the page. `content_name` records which
// button was tapped, which shows up as a breakdown in Events Manager.

type FbqParams = Record<string, string | number>;

declare global {
  interface Window {
    fbq?: (
      command: string,
      eventName: string,
      params?: FbqParams,
      options?: { eventID?: string },
    ) => void;
  }
}

/** Where a CTA lives, so clicks can be told apart in reporting. */
export type CtaSource =
  | "navbar"
  | "navbar-mobile"
  | "hero"
  | "problem-section"
  | "event-types"
  | "showreel"
  | "pricing-source-only"
  | "pricing-terima-beres"
  | "pricing-premium"
  | "scarcity-banner"
  | "faq"
  | "final-cta"
  | "promo-popup"
  | "mobile-sticky-bar"
  | "portfolio-cta";

/**
 * Report a WhatsApp CTA click to the Meta Pixel.
 *
 * Silently does nothing when the pixel is absent — blocked by an ad blocker,
 * still loading, or running on a preview build — so tracking can never break
 * the link the visitor actually clicked.
 */
export const trackCtaClick = (source: CtaSource, value?: number) => {
  try {
    window.fbq?.("track", "Lead", {
      content_name: source,
      content_category: "website-event",
      ...(value ? { value, currency: "IDR" } : {}),
    });
  } catch {
    // Never let analytics interrupt navigation.
  }
};
