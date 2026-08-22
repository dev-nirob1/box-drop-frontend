import {
  FiShield,
  FiMapPin,
  FiHeadphones,
  FiDollarSign,
} from "react-icons/fi";

import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Container from "../ui/Container";

const benefits = [
  {
    icon: FiShield,
    title: "Secure Delivery",
    description: "Your packages are safe with us, always.",
  },
  {
    icon: FiMapPin,
    title: "Live Tracking",
    description: "Track your package in real-time, 24/7.",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Support",
    description: "We're here to help you anytime, anywhere.",
  },
  {
    icon: FiDollarSign,
    title: "Affordable Rates",
    description: "Best prices with no hidden charges.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded border border-gray-100 bg-white py-8 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className={`
                  flex items-center gap-4 px-4 py-4
                  lg:px-6
                  ${
                    index !== benefits.length - 1
                      ? "lg:border-r lg:border-gray-200"
                      : ""
                  }
                  ${
                    index < 2
                      ? "md:border-b md:border-gray-200 lg:border-b-0"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-accent/10">
                  <Icon className="text-3xl text-accent" />
                </div>

                {/* Content */}
                <div>
                  <Heading as={5} className="mb-1">
                    {title}
                  </Heading>

                  <Paragraph className="text-sm">{description}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;