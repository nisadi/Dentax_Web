import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import WhyDentax from "@/components/sections/WhyDentax";
import RolePlatform from "@/components/sections/RolePlatform";
import FeaturesOverview from "@/components/sections/FeaturesOverview";
import OurSolution from "@/components/sections/OurSolution";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyDentax />
      <RolePlatform />
      <FeaturesOverview />
      <OurSolution />
      <PricingSection />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
