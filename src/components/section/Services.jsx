import { FiZap, FiTruck, FiClock } from "react-icons/fi";

import Container from "../ui/Container";
import SectionHeader from "../widget/SectionHeader";
import ServicesCard from "../widget/ServicesCard";

const services = [
  {
    id: 1,
    icon: FiZap,
    title: "Express Delivery",
    subtitle: "Fastest delivery option",
    description:
      "Get your packages delivered within 24 hours to any major location.",
    features: [
      "24–48 hours delivery",
      "Real-time tracking",
      "Priority handling",
      "Full insurance",
    ],
  },
  {
    id: 2,
    icon: FiTruck,
    title: "Standard Delivery",
    subtitle: "Best value for regular shipments",
    description:
      "Reliable delivery within 3–5 business days at affordable rates.",
    features: [
      "3–5 business days",
      "Cost-effective",
      "Door-to-door service",
      "Package tracking",
    ],
  },
  {
    id: 3,
    icon: FiClock,
    title: "Same Day Delivery",
    subtitle: "When time matters most",
    description: "Same day delivery for urgent packages within city limits.",
    features: [
      "Same day delivery",
      "Live tracking",
      "Urgent handling",
      "Safe & secure",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-secondary/5">
      <Container>
        {/* Section Heading */}
        <SectionHeader
          badge="Our Services"
          title="Fast, Reliable & "
          highlight="Secure Delivery"
        />

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServicesCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
