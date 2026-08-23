import { Link } from "react-router";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import Image from "../ui/Image";

const CTA = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&q=60"
              alt="call to action image"
            />
          </div>

          {/* Primary color tint */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-6 px-6 py-16 md:px-10">
            <div className="max-w-md">
              <Heading as={1} className="text-white capitalize">
                Ready to ship with confidence?
              </Heading>
              <Paragraph className="text-white/70 text-lg my-3">
                Create an account and start tracking your parcels in real time,
                today.
              </Paragraph>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/register">
                <Button variant="primary">Get Started</Button>
              </Link>
              <Link to="/track">
                <Button variant="secondary">Track a Parcel</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
