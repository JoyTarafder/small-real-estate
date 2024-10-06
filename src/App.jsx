import ClientSection from "./components/ClientSection";
import ContactSection from "./components/ContactSection";
import FeatureSection from "./components/FeatureSections";
import Footer from "./components/Footer";
import GetStartSection from "./components/GetStartSection";
import HeroSection from "./components/HeroSection";
import InnovationSection from "./components/InnovativeSection";
import PropertiesSection from "./components/PropertiesSection";
import QuestionSection from "./components/QuestionSection";
import "./index.css";

export default function App() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <PropertiesSection />
      <InnovationSection />
      <GetStartSection />
      <QuestionSection/>
      <ClientSection/>
      <ContactSection />
      <Footer />
    </>
  );
}
