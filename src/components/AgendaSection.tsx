import { agenda } from "@/data/ignite";

export default function AgendaSection() {
  return (
    <section id="agenda" className="scroll-mt-20 border-y border-white/10 bg-[var(--bg-elevated)] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--accent-bright)]">Schedule</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Four days. One booth. No fuss.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {agenda.map((day) => (
            <article key={day.day} className="rounded-xl border border-white/10 bg-[var(--surface)] p-5 sm:p-6">
              <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/30">{day.label}</div>
              <div className="mb-5 border-b border-[var(--accent)]/20 pb-4 text-sm font-bold text-white">
                {day.day}
              </div>
              <ul className="space-y-3">
                {day.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug text-white/55">
                    <svg
                      className="mt-1 shrink-0 text-[var(--accent-bright)]"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 1.5 L7 5 L3.5 8.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-white/25">
          Schedule subject to change — final timings will be published closer to the event.
        </p>
      </div>
    </section>
  );
}
