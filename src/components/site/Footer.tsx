import { Link } from "@tanstack/react-router";
import siteConfig from "@/data/site-config.json";

const quickNav = siteConfig.navigation;

export function Footer() {
  return (
    <footer className="relative bg-transparent text-ivory grain overflow-hidden border-t border-white/10 backdrop-blur-sm">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-editorial py-16 md:py-20">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 md:gap-10">
          <div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6">
              <img src="/logo.png" alt="AICSSYC 2026" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
              <div className="h-8 sm:h-10 md:h-12 w-px bg-white/20"></div>
              <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer">
                <img src="https://www.srmist.edu.in/wp-content/uploads/2022/01/srm-logo-white.svg" alt="SRM IST" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
              </a>
              <div className="h-8 sm:h-10 md:h-12 w-px bg-white/20"></div>
              <img src="/srm.png" alt="SRM Seal" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
            </div>
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
              <li><a href="https://www.instagram.com/ieeecs_srmist/" target="_blank" rel="noopener noreferrer" className="text-ivory/75 hover:text-gold transition">@ieeecs_srmist (IG)</a></li>
              <li><a href="https://www.instagram.com/ieeecssyp/" target="_blank" rel="noopener noreferrer" className="text-ivory/75 hover:text-gold transition">@ieeecssyp (IG)</a></li>
              <li><a href="https://www.linkedin.com/company/ieee-computer-society-syp" target="_blank" rel="noopener noreferrer" className="text-ivory/75 hover:text-gold transition">IEEE CS SYP (IN)</a></li>
              <li><a href="https://www.linkedin.com/company/ieee-computer-society-srmist" target="_blank" rel="noopener noreferrer" className="text-ivory/75 hover:text-gold transition">IEEE CS SRMIST (IN)</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-mist mb-5">Navigate</p>
            <ul className="space-y-2 text-sm">
              {quickNav.map((l) => {
                const isHash = l.href.startsWith("#");
                return isHash ? (
                  <li key={l.href}>
                    <Link to="/" hash={l.href.slice(1)} className="text-ivory/75 hover:text-gold transition">{l.label}</Link>
                  </li>
                ) : (
                  <li key={l.href}>
                    <a href={l.href} className="text-ivory/75 hover:text-gold transition">{l.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-xs text-ivory/60">
          <p>© 2026 AICSSYC · IEEE Computer Society SYP</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
            <Link to="/code-of-conduct" className="hover:text-ivory transition">Code of conduct</Link>
            <Link to="/privacy" className="hover:text-ivory transition">Privacy</Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
