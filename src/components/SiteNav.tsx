import BrandLogo from "./BrandLogo";
import MsFlag from "./MsFlag";
import { eventMeta } from "@/data/ignite";

export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg)]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6">
        <BrandLogo to={eventMeta.path} />

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 text-xs text-white/40 lg:flex">
          <MsFlag />
          <span className="truncate">
            {eventMeta.name} · {eventMeta.dates} · {eventMeta.venue}
          </span>
        </div>

        <a
          href="#register"
          className="btn-primary ml-auto shrink-0 !px-4 !py-2.5 text-[11px] sm:!px-5 sm:text-xs lg:ml-0"
        >
          Book a Demo
        </a>
      </div>
    </nav>
  );
}
