import Container from "./components/ui/Container";
import Heading from "./components/ui/Heading";
import Paragraph from "./components/ui/Paragraph";

function App() {
  return (
    <>
      <Container>
        <Heading as={1} className="mb-4">
          Welcome to Box Drop!
        </Heading>
        <Paragraph>
          This is a simple React application that demonstrates the use of custom
          components and styling.
        </Paragraph>
      </Container>
    </>
  );
}

export default App;
