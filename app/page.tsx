import Image from "next/image";
import VehicleRequestHero from "./components/hero";
import MarqueeTrack from "./components/marqueetrack";
import { FeaturesSection } from "./components/feature-section";
import { BackgroundTextSection } from "./components/background-image";
import VehicleFleetSection from "./components/vehicle-fleet-section";
import BlogSection from "./components/blog-section";
import FounderSection from "./components/founder";
import TestimonialsSections from "./components/testimonial";
import { FaqSection } from "./components/faq";
import { CtaSection } from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <VehicleRequestHero />
      <MarqueeTrack />
      <FeaturesSection />
      <BackgroundTextSection />
      <VehicleFleetSection />
      <BlogSection />
      <FounderSection />
      <TestimonialsSections />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}


