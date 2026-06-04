import { useState } from "react";

const quickNav = [
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "Passes", href: "#tickets" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="relative bg-midnight-deep text-ivory grain overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-editorial py-20 md:py-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 pb-16 border-b border-white/10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">AICSSYC dispatch</p>
            <h3 className="mt-4 font-display text-3xl md:text-5xl leading-[1.05] text-balance">
              Programme updates, speaker drops and registration reminders — <em className="italic font-normal text-gold">straight to your inbox.</em>
            </h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubmitted(true);
            }}
            className="self-end w-full"
          >
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@institution.edu"
                className="flex-1 bg-transparent border border-white/20 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold rounded-sm"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold text-midnight px-6 py-3.5 text-sm font-medium hover:bg-gold-soft transition rounded-sm"
              >
                {submitted ? "Subscribed ✓" : "Subscribe"}
              </button>
            </div>
            <p className="mt-3 text-xs text-ivory/45">
              We won't share your address. Unsubscribe in one click.
            </p>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pt-16">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 inline-flex items-center justify-center rounded-sm bg-gold text-midnight font-display font-bold">
                A
              </span>
              <div>
                <p className="font-display text-lg">AICSSYC 2026</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-mist">IEEE CS · SYP Flagship</p>
              </div>
            </div>
            <p className="mt-6 text-ivory/65 leading-relaxed max-w-sm">
              The All India Computer Society Student & Young Professional Congress —
              hosted at SRM IST, Kattankulathur.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-gold">In partnership with</p>
            <p className="mt-2 font-display text-xl text-ivory/85">IEEE Computer Society</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-mist mb-5">Venue</p>
            <p className="text-ivory">TP Ganesan Auditorium</p>
            <p className="text-ivory/65 text-sm mt-1">
              SRM Institute of Science<br />and Technology<br />Kattankulathur, Tamil Nadu
            </p>
            <p className="mt-4 text-sm text-ivory/65">Oct 8 — Nov 2, 2026</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-mist mb-5">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contact@aicssyc2026.in" className="text-ivory/80 hover:text-gold">contact@aicssyc2026.in</a></li>
              <li><a href="mailto:sponsors@aicssyc2026.in" className="text-ivory/80 hover:text-gold">sponsors@aicssyc2026.in</a></li>
              <li><a href="mailto:press@aicssyc2026.in" className="text-ivory/80 hover:text-gold">press@aicssyc2026.in</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-mist mb-5">Quick nav</p>
            <ul className="space-y-2 text-sm">
              {quickNav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/80 hover:text-gold">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ivory/50">
          <p>© 2026 AICSSYC. A flagship initiative of the IEEE Computer Society Student & Young Professional programme.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory">Code of conduct</a>
            <a href="#" className="hover:text-ivory">Privacy</a>
            <a href="#" className="hover:text-ivory">LinkedIn</a>
            <a href="#" className="hover:text-ivory">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
