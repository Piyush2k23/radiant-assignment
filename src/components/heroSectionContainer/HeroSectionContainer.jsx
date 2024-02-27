import "./heroSectionContainer.scss";
import HeroSection from "../heroSection/HeroSection";
import FeaturesSection from "../featuresSection/FeaturesSection";
import ServiceSection from "../servicesSection/ServicesSection";
import NewsLetter from "../newsletter/NewsLetter";

const HeroSectionContainer = () => {
  return (
    <div className="layout-container">
      <HeroSection />
      <FeaturesSection />
      <ServiceSection />
      <NewsLetter />
    </div>
  );
};

export default HeroSectionContainer;
