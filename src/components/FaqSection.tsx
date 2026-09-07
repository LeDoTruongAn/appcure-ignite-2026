import { useState } from "react";
import { faqs } from "@/data/ignite";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="border-t border-white/10 bg-[var(--bg-elevated)] py-14 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--accent-bright)]">FAQs</p>
          <h2 id="faq-heading" className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Common questions.
          </h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const open = openFaq === i;
            return (
              <div key={faq.q} className="overflow-hidden rounded-xl border border-white/10 bg-[var(--surface)]">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-white/5 sm:px-6"
                >
                  <span className="text-sm font-semibold text-white">{faq.q}</span>
                  <span
                    className={`shrink-0 text-xl text-white/30 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {open && (
                  <div className="border-t border-white/10 px-4 pb-5 pt-2 text-sm leading-relaxed text-white/50 sm:px-6">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
