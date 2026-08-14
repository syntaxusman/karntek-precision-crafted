import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/karntek/Cursor";
import { Nav } from "@/components/karntek/Nav";
import { Hero } from "@/components/karntek/Hero";
import { FindYourRoute } from "@/components/karntek/FindYourRoute";
import { Stats } from "@/components/karntek/Stats";
import { Positioning } from "@/components/karntek/Positioning";
import { Services } from "@/components/karntek/Services";
import { BuildingMap } from "@/components/karntek/BuildingMap";
import { CaseStudies } from "@/components/karntek/CaseStudies";
import { Insights } from "@/components/karntek/Insights";
import { CPD } from "@/components/karntek/CPD";
import { Contact } from "@/components/karntek/Contact";
import { Footer } from "@/components/karntek/Footer";

const title = "KARNTEK — Independent Fire & Building Safety Consultancy";
const description =
  "Independent UK fire and building safety expertise: FRAEW, building safety cases, fire risk assessments, compartmentation and remediation project management.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="no-cursor bg-[var(--paper)]">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <FindYourRoute />
        <Stats />
        <Positioning />
        <Services />
        <BuildingMap />
        <CaseStudies />
        <Insights />
        <CPD />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
