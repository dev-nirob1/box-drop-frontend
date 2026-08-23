// components/sections/HowItWorks.jsx
import Container from "../ui/Container";
import SectionHeader from "../widget/SectionHeader";
import HowItWorksCard from "../widget/HowItWorksCard";

const steps = [
  {
    id: 1,
    step: 1,
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=300&q=60",
    title: "Book pickup",
    description: "Schedule a pickup online with your parcel details.",
  },
  {
    id: 2,
    step: 2,
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&q=60",
    title: "Parcel picked up",
    description: "Courier collects your parcel from your address.",
  },
  {
    id: 3,
    step: 3,
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300&q=60",
    title: "In transit",
    description: "Track live location updates as it moves.",
  },
  {
    id: 4,
    step: 4,
    image:
      "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=300&q=60",
    title: "Delivered",
    description: "Parcel reaches its destination safely.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-secondary/5">
      <Container>
        <SectionHeader
          badge="How It Works"
          title="From Pickup to"
          highlight="Delivery"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <HowItWorksCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
