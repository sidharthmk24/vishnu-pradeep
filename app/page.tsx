import NewHero from "@/components/home/NewHero";
import About from "@/components/home/About";
import BrandValues from "@/components/home/BrandValues";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWork from "@/components/home/FeaturedWork";
import SpeakingTeaser from "@/components/home/SpeakingTeaser";
import CTABanner from "@/components/ui/CTABanner";

export default function Home() {
  return (
    <>
      <NewHero />
      <About />
      <BrandValues />
      <ServicesPreview />
      <FeaturedWork />
      <SpeakingTeaser />
      <CTABanner />
    </>
  );
}
