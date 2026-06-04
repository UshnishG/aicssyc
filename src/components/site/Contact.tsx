import { Instagram, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-transparent">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-emerald">
              <span className="inline-block h-px w-8 align-middle bg-emerald mr-3" />
              Contact us
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ivory text-balance">
              Questions about the congress? <em className="italic font-normal text-emerald">Reach out.</em>
            </h2>
            <p className="mt-6 text-ivory/70 max-w-md leading-relaxed">
              For delegate queries, partnership requests, press or institutional
              collaboration — the AICSSYC 2026 team responds within two working days.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:ieeecomputersocietysrmist@gmail.com"
              className="group block bg-midnight text-ivory p-8 grain transition hover:bg-midnight-deep"
            >
              <Mail size={22} className="text-gold" />
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-gold/80">Email</p>
              <p className="mt-2 font-display text-lg text-ivory break-words">
                ieeecomputersocietysrmist@gmail.com
              </p>
              <p className="mt-4 text-sm text-ivory/60 inline-flex items-center gap-2">
                Send an email
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </p>
            </a>

            <a
              href="https://www.instagram.com/ieeecs_srmist/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-transparent border border-ivory/15 p-8 transition hover:border-emerald"
            >
              <Instagram size={22} className="text-emerald" />
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-emerald">Instagram</p>
              <p className="mt-2 font-display text-lg text-ivory">
                @ieeecs_srmist
              </p>
              <p className="mt-4 text-sm text-ivory/60 inline-flex items-center gap-2">
                Follow updates
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
