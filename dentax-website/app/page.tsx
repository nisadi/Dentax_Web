import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import WhyDentax from "@/components/sections/WhyDentax";
import RolePlatform from "@/components/sections/RolePlatform";
import FeaturesOverview from "@/components/sections/FeaturesOverview";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyDentax />
      <RolePlatform />
      <FeaturesOverview />
    </main>
  );
}
