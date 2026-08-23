import { cn } from "../../utils/cn";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";


const SectionHeader = ({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "mx-auto mb-12 max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-base text-accent font-bold">
          {badge}
        </span>
      )}

      <Heading as={3} className="mb-4">
        {title} {highlight && <span className="text-accent">{highlight}</span>}
      </Heading>

      {description && <Paragraph>{description}</Paragraph>}
    </div>
  );
};

export default SectionHeader;