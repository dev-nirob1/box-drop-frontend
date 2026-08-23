import CTA from "../components/section/CTA";
import FAQ from "../components/section/FAQ";
import Hero from "../components/section/Hero";
import HowItWorks from "../components/section/HowItWorks";
import Services from "../components/section/Services";
import WhyChooseUs from "../components/section/WhyChooseUs";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Services />
      <FAQ />
      <CTA />
    </>
  );
};

export default LandingPage;
