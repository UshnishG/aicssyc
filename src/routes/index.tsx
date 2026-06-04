import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Themes } from "@/components/site/Themes";
import { Speakers } from "@/components/site/Speakers";
import { Agenda } from "@/components/site/Agenda";
import { WhyAttend } from "@/components/site/WhyAttend";
import { Tickets } from "@/components/site/Tickets";
import { Sponsors } from "@/components/site/Sponsors";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { CallToAction } from "@/components/site/CallToAction";
import { Footer } from "@/components/site/Footer";

const title = "AICSSYC 2026 — IEEE CS SYP Congress · SRM IST, Kattankulathur";
const description =
  "The All India Computer Society Student & Young Professional Congress 2026. Theme: Where Agent Meets Humans. October 8 – 11, 2026 at TP Ganesan Auditorium, SRM IST.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "AICSSYC 2026 — IEEE Computer Society SYP Congress",
          startDate: "2026-10-08",
          endDate: "2026-10-11",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "TP Ganesan Auditorium, SRM Institute of Science and Technology",
            address: "Kattankulathur, Tamil Nadu, India",
          },
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-ivory text-midnight min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Themes />
        <Speakers />
        <Agenda />
        <WhyAttend />
        <Tickets />
        <Sponsors />
        <FAQ />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
