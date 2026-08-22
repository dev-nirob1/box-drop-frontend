import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";

const LandingPage = () => {
  return (
    <div className="bg-red-500 min-h-screen flex items-center justify-center">
      <Container>
        <Heading as={1} className="">
          Welcome to Box Drop!
        </Heading>
        <Paragraph>
          This is a simple React application that demonstrates the use of custom
          components and styling.
        </Paragraph>
      </Container>
    </div>
  );
};

export default LandingPage;
