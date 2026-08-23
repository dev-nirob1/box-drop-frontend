import CTA from "../components/section/CTA";
import FAQ from "../components/section/FAQ";
import Hero from "../components/section/Hero";
import HowItWorks from "../components/section/HowItWorks";
import Services from "../components/section/Services";
import WhyChooseUs from "../components/section/WhyChooseUs";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <CTA />
      <FAQ />
      <HowItWorks />
      <div className="bg-red-500 min-h-screen flex items-center justify-center">
        <Container>
          <Heading as={1} className="">
            Welcome to Box Drop!
          </Heading>
          <Paragraph>
            This is a simple React application that demonstrates the use of
            custom components and styling.
          </Paragraph>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
