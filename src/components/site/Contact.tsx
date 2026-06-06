import { Instagram, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative section-rhythm bg-transparent">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
          <Reveal direction="up" distance={32}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance">
              Get in touch
              <br />
              <span className="editorial-italic text-emerald">with the organisers.</span>
            </h2>
            <p className="mt-8 text-ivory/70 leading-[1.75] prose-narrow">
              For delegate queries, partnership requests, press or institutional
              collaboration — the AICSSYC 2026 team responds within two working days.
            </p>
          </Reveal>

          <Reveal direction="up" distance={24} delay={0.1}>
            <ul className="hairline-top">
              <li className="border-b border-white/10">
                <a
                  href="mailto:ieeecomputersocietysrmist@gmail.com"
                  className="group flex items-start justify-between gap-6 py-8 transition hover:pl-2"
                >
                  <span className="flex items-start gap-5">
                    <Mail size={20} className="text-gold mt-1.5" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.28em] text-gold/80">Email</span>
                      <span className="block mt-2 font-display text-lg md:text-xl text-ivory break-words">
                        ieeecomputersocietysrmist@gmail.com
                      </span>
                    </span>
                  </span>
                  <span className="text-ivory/60 group-hover:text-gold transition-transform group-hover:translate-x-1 mt-2">
                    →
                  </span>
                </a>
              </li>
              <li className="border-b border-white/10">
                <a
                  href="https://www.instagram.com/ieeecs_srmist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-6 py-8 transition hover:pl-2"
                >
                  <span className="flex items-start gap-5">
                    <Instagram size={20} className="text-emerald mt-1.5" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.28em] text-emerald">Instagram</span>
                      <span className="block mt-2 font-display text-lg md:text-xl text-ivory">@ieeecs_srmist</span>
                    </span>
                  </span>
                  <span className="text-ivory/60 group-hover:text-emerald transition-transform group-hover:translate-x-1 mt-2">
                    →
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
