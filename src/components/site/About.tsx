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
              India's national gathering of the computing community.
            </p>
          </Reveal>

          <RevealGroup className="lg:pt-10">
            <Heading className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-ivory text-balance">
              A congress, not a conference —
              <span className="editorial-italic text-emerald"> a four-day argument</span> about
              what the next decade of computing should be.
            </Heading>

            <Body className="mt-10 prose-measure text-[17px] leading-[1.75] text-ivory/75">
              <p>
                AICSSYC convenes students, young professionals, researchers and
                practitioners from every region of India — under the IEEE
                Computer Society's Student &amp; Young Professional programme — to
                exchange ideas, build collaborations and shape what gets built next.
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
