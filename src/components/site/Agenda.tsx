import { Reveal, RevealGroup } from "./Reveal";
import timelineData from "@/data/timeline.json";

const days = timelineData.days;

function formatDayTitle(label: string, rawDate: string) {
  const datePart = rawDate.split("·")[0].trim();
  const [dayNum, month] = datePart.split(" ");
  return `${label} – ${dayNum} ${month ? month.slice(0, 3) : ""}`;
}

export function Agenda() {
  return (
    <section id="agenda" className="relative section-rhythm bg-transparent">
      {/* Subtle grid background to match the requested style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none"></div>

      <div className="container-editorial relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <Reveal direction="up">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-ivory font-bold mb-4">
              Event <span className="text-gold">Schedule</span>
            </h2>
            <p className="text-ivory/60 text-lg">Tentative schedule - subject to change</p>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {days.map((day, dIdx) => (
            <div key={dIdx} className="flex flex-col">
              <h3 className="text-2xl font-display text-gold mb-10">
                {formatDayTitle(day.label, day.date)}
              </h3>
              
              <ul className="relative border-l border-gold/30 space-y-10 flex-1">
                {day.blocks.map((block, bIdx) => (
                  <li key={bIdx} className="relative pl-6 md:pl-8">
                    {/* Circle marker */}
                    <div className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full bg-gold" />
                    
                    {/* Time / Room */}
                    <p className="text-xs md:text-sm font-semibold text-gold/80 mb-2 tracking-wide uppercase">
                      {block.room}
                    </p>
                    
                    {/* Title */}
                    <h4 className="text-lg font-bold text-ivory leading-tight mb-2">
                      {block.title}
                    </h4>
                    
                    {/* Description / Kind */}
                    <p className="text-sm text-ivory/60">
                      {block.kind}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealGroup>

      </div>
    </section>
  );
}
