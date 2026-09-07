import wordmarkWhite from "./appcure-wordmark-white.png";
import markLight from "./appcure-mark-light.png";

/**
 * Brand logo assets for the Ignite SPA (dark UI).
 *
 * On-disk variants (not bundled unless imported):
 * - appcure-wordmark-navy.png  → wordmark for light backgrounds
 * - appcure-mark-black.png     → mark for light backgrounds
 */
export const logos = {
  /** Full wordmark for dark backgrounds (desktop nav / footer) */
  wordmarkOnDark: wordmarkWhite,
  /** Icon mark for dark backgrounds (mobile nav) */
  markOnDark: markLight,
} as const;
