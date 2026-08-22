import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import Input from "../ui/Input";

const stats = [
  { value: "10K+", label: "Parcels delivered" },
  { value: "50+", label: "Cities covered" },
  { value: "24/7", label: "Live support" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.avif')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />

      <Container className="relative z-10 pt-40 lg:pt-52 pb-16">
        <Heading as={1} className="max-w-[500px] text-white uppercase">
          Track your parcel, anytime, anywhere
        </Heading>

        <Paragraph className="mt-4 max-w-md text-lg text-white">
          Enter your tracking ID and see exactly where your package is right
          now.
        </Paragraph>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 max-w-lg bg-white rounded p-2 flex gap-2"
        >
          <Input
            type="text"
            name="trackingId"
            placeholder="Enter tracking ID"
            className="flex-1 border-0 focus:ring-0"
          />
          <Button type="submit" variant="primary" className="shrink-0">
            Track Parcel
          </Button>
        </form>

        <div className="mt-10 flex gap-4 text-center md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Heading as={4} className="text-white">
                {stat.value}
              </Heading>
              <Paragraph className="text-sm text-white/70">
                {stat.label}
              </Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
