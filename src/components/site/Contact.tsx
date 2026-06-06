import { Instagram, Mail, Phone, Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";

import contactData from "@/data/contact.json";

const pointsOfContact = contactData;

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
              <li className="border-b border-white/10">
                <a
                  href="https://www.instagram.com/ieeecssyp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-6 py-8 transition hover:pl-2"
                >
                  <span className="flex items-start gap-5">
                    <Instagram size={20} className="text-gold mt-1.5" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.28em] text-gold">Instagram</span>
                      <span className="block mt-2 font-display text-lg md:text-xl text-ivory">@ieeecssyp</span>
                    </span>
                  </span>
                  <span className="text-ivory/60 group-hover:text-gold transition-transform group-hover:translate-x-1 mt-2">
                    →
                  </span>
                </a>
              </li>
              <li className="border-b border-white/10">
                <a
                  href="https://www.linkedin.com/company/ieee-computer-society-syp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-6 py-8 transition hover:pl-2"
                >
                  <span className="flex items-start gap-5">
                    <Linkedin size={20} className="text-emerald mt-1.5" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.28em] text-emerald">LinkedIn</span>
                      <span className="block mt-2 font-display text-lg md:text-xl text-ivory">IEEE CS SYP</span>
                    </span>
                  </span>
                  <span className="text-ivory/60 group-hover:text-emerald transition-transform group-hover:translate-x-1 mt-2">
                    →
                  </span>
                </a>
              </li>
              <li className="border-b border-white/10">
                <a
                  href="https://www.linkedin.com/company/ieee-computer-society-srmist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-6 py-8 transition hover:pl-2"
                >
                  <span className="flex items-start gap-5">
                    <Linkedin size={20} className="text-gold mt-1.5" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.28em] text-gold">LinkedIn</span>
                      <span className="block mt-2 font-display text-lg md:text-xl text-ivory">IEEE CS SRMIST</span>
                    </span>
                  </span>
                  <span className="text-ivory/60 group-hover:text-gold transition-transform group-hover:translate-x-1 mt-2">
                    →
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal direction="up" distance={28} delay={0.15}>
          <div className="mt-24 lg:mt-32">
            <div className="flex items-baseline justify-between gap-8 mb-10">
              <h3 className="font-display text-[clamp(1.4rem,2.6vw,2.25rem)] leading-[1.05] tracking-tight text-ivory">
                Points of contact
                <span className="block editorial-italic text-emerald text-base md:text-lg mt-2">
                  speak to the team directly.
                </span>
              </h3>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.28em] text-gold/80">
                Direct line
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pointsOfContact.map((poc) => (
                <article
                  key={poc.name}
                  className="group relative overflow-hidden rounded-sm border border-ivory/10 bg-midnight-deep/40 backdrop-blur-sm p-6 transition hover:border-gold/40"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-gold/80">
                      {poc.role}
                    </p>
                    <p className="mt-2 font-display text-xl text-ivory truncate">
                      {poc.name}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ivory/10 pt-5 space-y-3">
                    <a
                      href={`tel:${poc.phoneHref}`}
                      className="flex items-center gap-3 text-ivory/85 transition hover:text-gold"
                    >
                      <Phone size={14} className="text-gold shrink-0" />
                      <span className="tracking-wide text-sm">{poc.phone}</span>
                    </a>
                    <a
                      href={`mailto:${poc.email}`}
                      className="flex items-center gap-3 text-ivory/70 transition hover:text-emerald"
                    >
                      <Mail size={14} className="text-emerald shrink-0" />
                      <span className="text-sm truncate">{poc.email}</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
