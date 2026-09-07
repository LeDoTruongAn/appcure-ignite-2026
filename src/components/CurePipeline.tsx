import { cureSteps } from "@/data/ignite";

export default function CurePipeline() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20" aria-labelledby="cure-heading">
      <div className="mb-8 sm:mb-12">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--accent-bright)]">
          What to see at the booth
        </p>
        <h2 id="cure-heading" className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          The full C.U.R.E. pipeline — live.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {cureSteps.map((step) => (
          <article
            key={step.id}
            className="rounded-xl border border-white/10 bg-[var(--surface)] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)]/50 sm:p-6"
          >
            <div className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--accent-bright)]">
              {step.id}
            </div>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
              {step.label}
            </div>
            <h3 className="mb-3 text-base font-bold leading-snug text-white">{step.title}</h3>
            <p className="text-sm leading-relaxed text-white/50">{step.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
