import { motion } from "framer-motion";
import { ScrollSection } from "./ScrollSection";
import { MapPin, Train, Bus, Car, Clock } from "lucide-react";

export function Location() {
  return (
    <ScrollSection id="location" className="relative section-rhythm bg-transparent text-ivory grain overflow-hidden">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-balance">
            Know your <span className="editorial-italic text-gold">way!</span>
          </h2>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-ivory/60">
            SRM Institute of Science and Technology, Kattankulathur
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-start">
          
          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] lg:h-[650px] rounded-2xl overflow-hidden border border-ivory/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] sticky top-32"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.31305459385!2d80.0401831750242!3d12.82303298748386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay to give the map a slight tint matching our theme */}
            <div className="absolute inset-0 bg-midnight-deep/20 pointer-events-none mix-blend-multiply" />
          </motion.div>

          {/* Directions Column */}
          <div className="flex flex-col gap-6">
            
            {/* Card 1: Railway Station */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-ivory/10 bg-midnight-deep/40 backdrop-blur-md p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Train className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ivory">From Chennai Central Railway Station</h3>
                </div>
              </div>

              <div className="space-y-6">
                <DirectionItem 
                  icon={<Car />} 
                  title="By Taxi/Cab"
                  desc="60-75 minutes, approx. ₹900-1200. (Fastest and most convenient option)"
                />
                <DirectionItem 
                  icon={<Train />} 
                  title="By Suburban Train"
                  desc="Take an EMU from Chennai Central / Beach Station → Tambaram → change to a local train towards Chengalpattu, get down at Potheri Station. SRM IST is a short walk or auto ride from Potheri."
                />
                <DirectionItem 
                  icon={<Bus />} 
                  title="By Bus"
                  desc="MTC/SETC buses towards Chengalpattu / Mahabalipuram via GST Road. Get down at SRM College / Potheri stop."
                />
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ivory/5 border border-ivory/10 text-xs text-ivory/70">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Est. Travel Time: 1.5-2 hours (public transport)</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Airport */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-ivory/10 bg-midnight-deep/40 backdrop-blur-md p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="h-12 w-12 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ivory">From Chennai International Airport</h3>
                </div>
              </div>

              <div className="space-y-6">
                <DirectionItem 
                  icon={<Car />} 
                  title="By Taxi/Cab"
                  desc="30-45 minutes, approx. ₹600-900. (Fastest and most convenient option)"
                />
                <DirectionItem 
                  icon={<Train />} 
                  title="By Suburban Train"
                  desc="From Tirusulam Station (near airport) → Tambaram → Chengalpattu line to Potheri Station → short walk/auto to campus."
                />
                <DirectionItem 
                  icon={<Bus />} 
                  title="By Bus"
                  desc="Airport buses towards Tambaram / Chengalpattu. Get down at SRM College / Potheri."
                />
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ivory/5 border border-ivory/10 text-xs text-ivory/70">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Est. Travel Time: 45-60 minutes (depending on traffic)</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </ScrollSection>
  );
}

function DirectionItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 shrink-0 text-ivory/40 [&>svg]:w-5 [&>svg]:h-5">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-ivory/90 mb-1">{title}</p>
        <p className="text-sm text-ivory/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
