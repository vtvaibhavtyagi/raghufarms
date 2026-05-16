import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import OurStorySection from "@/components/home/OurStorySection";
import ProductsPreview from "@/components/home/ProductsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FarmVisitCTA from "@/components/home/FarmVisitCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <OurStorySection />
        <ProductsPreview />
        <FarmVisitCTA />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
