export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 md:py-36 bg-transparent overflow-hidden">
      <div className="container-editorial">
        <div className="grid md:grid-cols-[1fr_auto] items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald">
              <span className="inline-block h-px w-8 align-middle bg-emerald mr-3" />
              Partners & sponsors
            </p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-ivory text-balance">
              Built with the organisations <em className="italic font-normal text-emerald">our delegates already work with.</em>
            </h2>
          </div>
          <a href="mailto:ieeecomputersocietysrmist@gmail.com" className="text-sm text-ivory border-b border-ivory/30 hover:border-ivory/20 pb-0.5">
            Partnership prospectus →
          </a>
        </div>

        <div className="relative border border-ivory/15 bg-white/5 px-8 md:px-14 py-16 md:py-20 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-emerald">Partners & sponsor lineup</p>
          <p className="mt-6 font-display text-3xl md:text-5xl text-ivory leading-tight text-balance">
            To be announced soon.
          </p>
          <p className="mt-5 max-w-xl mx-auto text-ivory/80 leading-relaxed">
            Founding partners, principal sponsors and programme partners for
            AICSSYC 2026 will be unveiled in the coming weeks. To collaborate
            with the congress, write to us.
          </p>
          <a
            href="mailto:ieeecomputersocietysrmist@gmail.com"
            className="mt-8 inline-flex items-center gap-2 bg-midnight text-ivory px-6 py-3.5 text-sm font-medium hover:bg-midnight-deep transition"
          >
            Become a sponsor
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
