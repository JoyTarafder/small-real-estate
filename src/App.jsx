import FeatureSection from "./components/FeatureSections";
import HeroSection from "./components/HeroSection";
import InnovationSection from "./components/InnovativeSection";
import PropertiesSection from "./components/PropertiesSection";
import "./index.css";

export default function App() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <PropertiesSection />
      <InnovationSection />
    </>
  );
}
