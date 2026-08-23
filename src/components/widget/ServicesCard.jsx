import { FiCheckCircle } from "react-icons/fi";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";

const ServicesCard = ({ service }) => {
  const { icon: Icon, title, description, features } = service;
  return (
    <div className="group relative overflow-hidden rounded-md border border-secondary/10 bg-white py-10 px-7">
      {/* bottom accent bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

      {/* Top */}
      <div className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded bg-accent/10">
          <Icon className="text-4xl text-accent" />
        </div>

        <Heading as={5} className="mb-1 mt-4">
          {title}
        </Heading>

        <Paragraph className="max-w-sm">{description}</Paragraph>

        {/* Features */}
        <div className="mt-6 space-y-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <FiCheckCircle className="shrink-0 text-accent" />
              <Paragraph>{feature}</Paragraph>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom-right decorative icon */}
      <div className="pointer-events-none absolute bottom-5 right-3 opacity-[0.08]">
        <Icon className="text-[170px] text-accent" />
      </div>
    </div>
  );
};

export default ServicesCard;
