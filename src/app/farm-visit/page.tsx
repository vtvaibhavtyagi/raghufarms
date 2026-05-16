import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FarmVisitHero from "@/components/farm-visit/FarmVisitHero";
import ActivitiesSection from "@/components/farm-visit/ActivitiesSection";
import PlanYourVisit from "@/components/farm-visit/PlanYourVisit";
import GallerySection from "@/components/farm-visit/GallerySection";
import FaqSection from "@/components/farm-visit/FaqSection";

export const metadata: Metadata = {
  title: "Farm Visit — Raghu Organic Farm",
  description:
    "Plan your visit to Raghu Organic Farm. Enjoy guided farm tours, pick your own produce, meet farm animals, and experience farm-to-table cooking. Book your farm visit today!",
};

export default function FarmVisitPage() {
  return (
    <>
      <Navbar />
      <main>
        <FarmVisitHero />
        <ActivitiesSection />
        <PlanYourVisit />
        <GallerySection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
