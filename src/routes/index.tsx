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
import { Footer } from "@/components/site/Footer";

const title = "Convergence 2026 — IEEE Flagship Technology Congress · Lisbon";
const description =
  "Five days for the researchers, engineers and founders building the systems that everything else runs on. October 14–18, 2026 · Lisbon Congress Centre.";

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
          name: "Convergence 2026 — IEEE Flagship Technology Congress",
          startDate: "2026-10-14",
          endDate: "2026-10-18",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Lisbon Congress Centre",
            address: "Praça das Indústrias, 1300-307 Lisboa, Portugal",
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
      </main>
      <Footer />
    </div>
  );
}
