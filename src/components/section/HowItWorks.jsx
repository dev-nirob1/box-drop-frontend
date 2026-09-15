// components/sections/HowItWorks.jsx
import Container from "../ui/Container";
import SectionHeader from "../widget/SectionHeader";
import HowItWorksCard from "../widget/HowItWorksCard";

const steps = [
  {
    id: 1,
    step: 1,
    image:
      "/images/howItWorks/booking.avif",
    title: "Book Your Parcel",
    description: "Visit a courier point and book your parcel with the required details.",
  },
  {
    id: 2,
    step: 2,
    image:
      "/images/howItWorks/onTheWay.avif",
    title: "On the Way",
    description: "Your parcel is processed and sent toward its destination.",
  },
  {
    id: 3,
    step: 3,
    image:
      "/images/howItWorks/readyToDeliver.avif",
    title: "Ready to Deliver",
    description: "Your parcel has reached the destination area and is ready for delivery.",
  },
  {
    id: 4,
    step: 4,
    image:
      "/images/howItWorks/delivered.avif",
    title: "Delivered",
    description: "Your parcel is successfully delivered to the recipient.",
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
