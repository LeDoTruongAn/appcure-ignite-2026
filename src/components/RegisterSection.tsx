import { useState, type FormEvent } from "react";
import { eventMeta, registerBenefits } from "@/data/ignite";

type FormState = {
  name: string;
  email: string;
  company: string;
  title: string;
  notes: string;
};

const fields = [
  { label: "Full name", key: "name" as const, type: "text", placeholder: "Alex Johnson" },
  { label: "Work email", key: "email" as const, type: "email", placeholder: "alex@contoso.com" },
  { label: "Organisation", key: "company" as const, type: "text", placeholder: "Contoso Ltd" },
  { label: "Job title", key: "title" as const, type: "text", placeholder: "IT Director" },
];

export default function RegisterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    title: "",
    notes: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="register" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--accent-bright)]">
              Book a slot
            </p>
            <h2 className="font-display mb-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Reserve your 1:1 demo.
            </h2>
            <p className="mb-8 leading-relaxed text-white/50">
              Places are limited. Register now to secure a dedicated session with the appCURE engineering
              team. Tell us about your environment and we will tailor the demo to your exact requirements.
            </p>
            <ul className="space-y-4">
              {registerBenefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-white/55">
                  <span className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-2 text-xs uppercase tracking-widest text-white/30">
                Unable to attend the booth?
              </p>
              <a
                href={`mailto:${eventMeta.email}`}
                className="text-sm text-[var(--accent-bright)] transition-colors hover:text-blue-300"
              >
                {eventMeta.email}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 sm:p-8">
            {submitted ? (
              <div className="space-y-4 py-12 text-center sm:py-16">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10">
                  <span className="text-2xl text-[var(--accent-bright)]" aria-hidden="true">
                    ✓
                  </span>
                </div>
                <div className="text-xl font-bold text-white">You're registered.</div>
                <div className="text-sm text-white/50">
                  We will be in touch to confirm your slot before 17 November.
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {fields.map((f) => (
                    <div key={f.key}>
                      <label
                        htmlFor={`reg-${f.key}`}
                        className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-white/40"
                      >
                        {f.label}
                      </label>
                      <input
                        id={`reg-${f.key}`}
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        value={form[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="field"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label
                    htmlFor="reg-notes"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-white/40"
                  >
                    Your environment (optional)
                  </label>
                  <textarea
                    id="reg-notes"
                    rows={3}
                    placeholder="e.g. 300 applications migrating to AVD, App-V packages to convert, Citrix DaaS deployment..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="field resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center !rounded-lg">
                  Reserve my demo slot
                </button>
                <p className="text-center text-xs text-white/25">
                  We do not share your details. No marketing lists.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
