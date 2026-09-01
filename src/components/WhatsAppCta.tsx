import type { ReactNode, MouseEvent } from "react";
import { eventWhatsappUrl } from "../data/eventData";
import { trackCtaClick, type CtaSource } from "../lib/tracking";

type Props = {
  /** Which CTA this is, used as the Meta Pixel breakdown label. */
  source: CtaSource;
  /** Appended to the prefilled WhatsApp message. */
  context?: string;
  /** Deal value in IDR, sent with the conversion where it is known. */
  value?: number;
  className?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

/**
 * WhatsApp link that reports the click to the Meta Pixel before handing over
 * to WhatsApp. Every CTA on the event pages goes through this so no button is
 * left untracked and the labels stay consistent.
 */
const WhatsAppCta = ({
  source,
  context,
  value,
  className,
  children,
  onClick,
}: Props) => (
  <a
    href={eventWhatsappUrl(context)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      trackCtaClick(source, value);
      onClick?.(e);
    }}
    className={className}>
    {children}
  </a>
);

export default WhatsAppCta;
