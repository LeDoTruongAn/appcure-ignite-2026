import { Link } from "react-router";
import { logos } from "@/assets/logos";

type BrandLogoProps = {
  to?: string;
  className?: string;
};

/**
 * Responsive brand mark:
 * - Mobile: compact icon (light-logo)
 * - Desktop: full white wordmark
 */
export default function BrandLogo({ to = "/", className = "" }: BrandLogoProps) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-sm ${className}`}
      aria-label="appCURE home"
    >
      <img
        src={logos.markOnDark}
        alt=""
        width={70}
        height={64}
        className="h-8 w-auto md:hidden"
        decoding="async"
      />
      <img
        src={logos.wordmarkOnDark}
        alt="appCURE"
        width={189}
        height={64}
        className="hidden md:block h-8 w-auto lg:h-9"
        decoding="async"
      />
    </Link>
  );
}
