import { Reveal, RevealGroup, Heading, Body } from "./Reveal";

const markers = [
  { v: "300+", l: "Delegates" },
  { v: "20+", l: "States represented" },
  { v: "4", l: "Programme days" },
  { v: "National", l: "IEEE CS flagship" },
];

export function About() {
  return (
    <section id="about" className="relative section-rhythm bg-transparent overflow-hidden">
      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24 items-start">
          {/* Oversized chapter numeral */}
          <Reveal direction="up" distance={32} className="relative">
            <p className="text-[10px] uppercase tracking-[0.3em] text-emerald">Chapter 01</p>
            <p
              aria-hidden
              className="display-mega text-ivory/[0.06] select-none mt-4"
              style={{ lineHeight: 0.85 }}
            >
              01
            </p>
            <p className="mt-6 font-display italic text-xl text-ivory/70 max-w-xs">
              India's flagship IEEE Computer Society Congress.
            </p>
          </Reveal>

          <RevealGroup className="lg:pt-10">
            <Heading className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance">
              More than a conference —
              <span className="editorial-italic text-emerald"> a national gathering</span> of
              ideas, innovation, culture and community.
            </Heading>

            <Body className="mt-10 prose-measure text-[17px] leading-[1.75] text-ivory/75 space-y-5">
              <p>
                AICSSYC brings together students, young professionals, researchers,
                entrepreneurs, industry leaders and IEEE volunteers from across the
                country to exchange knowledge, build meaningful connections and
                celebrate the future of computing.
              </p>
              <p>
                Across four days of keynotes, workshops, technical sessions,
                leadership experiences, networking opportunities and cultural
                showcases, delegates become part of a community shaping the next
                generation of technology and innovation.
              </p>
            </Body>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 hairline-top pt-8">
              {markers.map((m) => (
                <div key={m.l}>
                  <p className="font-display text-3xl md:text-4xl text-ivory leading-none">{m.v}</p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-slate-mist">{m.l}</p>
                </div>
              ))}
            </div>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
