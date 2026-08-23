// components/widgets/HowItWorksCard.jsx
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Image from "../ui/Image";

const HowItWorksCard = ({ item }) => {
  const { step, image, title, description } = item;

  return (
    <div className="border border-secondary/5 rounded-md bg-white transition-all duration-500 hover:-translate-y-2">
      <div className="relative mb-5">
        <div className="h-48 overflow-hidden rounded-t-md">
          <Image src={image} alt={title} className="h-full" />
        </div>

        <div className="absolute -bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-heading font-bold text-white ring-4 ring-white">
          {step}
        </div>
      </div>

     <div className="px-3 pb-4">
         <Heading as={5} className="mb-1">
        {title}
      </Heading>
      <Paragraph>{description}</Paragraph>
     </div>
    </div>
  );
};

export default HowItWorksCard;
