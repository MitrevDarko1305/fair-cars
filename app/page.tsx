import Image from "next/image";
import VehicleRequestHero from "./components/hero";
import MarqueeTrack from "./components/marqueetrack";
import { FeaturesSection } from "./components/feature-section";
import { BackgroundTextSection } from "./components/background-image";
import VehicleFleetSection from "./components/vehicle-fleet-section";
import BlogSection from "./components/blog-section";

export default function Home() {
  return (
    <>
      <VehicleRequestHero />
      <MarqueeTrack />
      <FeaturesSection />
      <BackgroundTextSection />
      <VehicleFleetSection />
      <BlogSection />
    </>
  );
}


