import logoAsset from "@/assets/aicssyc-logo.png.asset.json";

const quickNav = [
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "Passes", href: "#tickets" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-midnight-deep/85 text-ivory grain overflow-hidden border-t border-white/10 backdrop-blur-sm">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-editorial py-16 md:py-20">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 md:gap-10">
          <div>
            <img src={logoAsset.url} alt="AICSSYC 2026" className="h-14 w-auto object-contain" />
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-gold/80">A flagship of</p>
            <p className="mt-2 font-display text-lg text-ivory/90">IEEE Computer Society SYP</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-mist mb-5">Venue</p>
            <p className="text-ivory text-sm leading-relaxed">
              TP Ganesan Auditorium<br />
              SRM IST, Kattankulathur<br />
              Tamil Nadu, India
            </p>
            <p className="mt-4 text-sm text-ivory/70">8 – 11 October 2026</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-mist mb-5">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:ieeecomputersocietysrmist@gmail.com" className="text-ivory/75 hover:text-gold break-words transition">ieeecomputersocietysrmist@gmail.com</a></li>
              <li><a href="https://www.instagram.com/ieeecs_srmist/" target="_blank" rel="noopener noreferrer" className="text-ivory/75 hover:text-gold transition">@ieeecs_srmist</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-mist mb-5">Navigate</p>
            <ul className="space-y-2 text-sm">
              {quickNav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/75 hover:text-gold transition">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-ivory/60">
          <p>© 2026 AICSSYC · IEEE Computer Society SYP</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory transition">Code of conduct</a>
            <a href="#" className="hover:text-ivory transition">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
