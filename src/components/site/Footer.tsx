const quickNav = [
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "Passes", href: "#tickets" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative bg-midnight-deep text-ivory grain overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-editorial py-20 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 inline-flex items-center justify-center rounded-sm bg-gold text-ivory font-display font-bold">
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
            <p className="mt-4 text-sm text-ivory/65">8 – 11 October 2026</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-mist mb-5">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:ieeecomputersocietysrmist@gmail.com" className="text-ivory/80 hover:text-gold break-words">ieeecomputersocietysrmist@gmail.com</a></li>
              <li><a href="https://www.instagram.com/ieeecs_srmist/" target="_blank" rel="noopener noreferrer" className="text-ivory/80 hover:text-gold">@ieeecs_srmist</a></li>
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
