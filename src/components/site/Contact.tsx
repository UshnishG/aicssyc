import { Instagram, Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import atharvPhoto from "@/assets/poc/atharv.png.asset.json";

const pointsOfContact = [
  {
    name: "Atharv Dorle",
    role: "Technical Head",
    phone: "+91 83197 73605",
    phoneHref: "+918319773605",
    photo: atharvPhoto.url,
  },
];

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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pointsOfContact.map((poc) => (
                <article
                  key={poc.name}
                  className="group relative overflow-hidden rounded-sm border border-ivory/10 bg-midnight-deep/40 backdrop-blur-sm p-6 transition hover:border-gold/40"
                >
                  <div className="flex items-center gap-5">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-ivory/15 bg-midnight-deep">
                      <img
                        src={poc.photo}
                        alt={`${poc.name} — ${poc.role}`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-gold/80">
                        {poc.role}
                      </p>
                      <p className="mt-1.5 font-display text-xl text-ivory truncate">
                        {poc.name}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`tel:${poc.phoneHref}`}
                    className="mt-6 flex items-center justify-between gap-3 border-t border-ivory/10 pt-5 text-ivory/85 transition hover:text-gold"
                  >
                    <span className="flex items-center gap-3">
                      <Phone size={16} className="text-gold" />
                      <span className="tracking-wide">{poc.phone}</span>
                    </span>
                    <span className="text-ivory/40 group-hover:text-gold transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
