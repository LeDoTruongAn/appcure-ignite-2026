import BrandLogo from "./BrandLogo";
import MsFlag from "./MsFlag";
import { eventMeta } from "@/data/ignite";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 sm:flex-row sm:items-center sm:px-6">
        <BrandLogo to={eventMeta.path} />
        <div className="flex items-center gap-2 text-xs text-white/30">
          <MsFlag />
          <span>
            {eventMeta.name} · {eventMeta.venue} · {eventMeta.datesLong}
          </span>
        </div>
        <span className="text-xs text-white/20">appcure.io{eventMeta.path}</span>
      </div>
    </footer>
  );
}
