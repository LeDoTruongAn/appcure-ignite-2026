export default function MsFlag({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 21 21"
      fill="none"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="10" height="10" fill="#F25022" />
      <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
      <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
      <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
    </svg>
  );
}
