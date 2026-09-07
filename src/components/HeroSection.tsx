import MsFlag from "./MsFlag";
import { eventMeta, heroStats } from "@/data/ignite";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,102,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full sm:h-[600px] sm:w-[600px]"
        style={{ background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
        <div className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/70 sm:mb-8 sm:px-4 sm:py-2 sm:text-xs">
          <MsFlag />
          <span className="truncate">
            {eventMeta.name} · Showcase Booth
          </span>
        </div>

        <h1 className="animate-rise delay-1 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-tighter text-white">
          Application
          <br />
          <span className="text-[var(--accent-bright)]">modernisation</span>
          <br />
          at full speed.
        </h1>

        <p className="animate-rise delay-2 mt-6 max-w-lg text-base leading-relaxed text-white/50 sm:mt-8 sm:text-lg">
          Come and see us at the appCURE booth at {eventMeta.name}. Live application capture,
          automated remediation, and Azure-native delivery — from legacy to production in minutes.
        </p>

        <div className="animate-rise delay-3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
          <a href="#register" className="btn-primary w-full justify-center sm:w-auto">
            Book a demo slot
          </a>
          <a href="#agenda" className="btn-ghost w-full justify-center sm:w-auto">
            View agenda
          </a>
        </div>

        <div className="animate-rise delay-4 mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:mt-16 sm:grid-cols-4 sm:gap-8 sm:pt-10">
          {heroStats.map((s) => (
            <div key={s.l}>
              <div className="mb-1 text-base font-bold text-white sm:text-xl">{s.v}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/35 sm:text-xs">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
