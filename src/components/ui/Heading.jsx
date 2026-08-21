import { cn } from "../../utils/cn";

const HEADING_TAGS = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
};

const HEADING_SIZES = {
  1: "text-[length:var(--heading-1)] leading-[1.3]",
  2: "text-[length:var(--heading-2)] leading-[1.15]",
  3: "text-[length:var(--heading-3)] leading-tight",
  4: "text-[length:var(--heading-4)] leading-snug",
  5: "text-[length:var(--heading-5)] leading-snug",
};

const Heading = ({ children, as = 1, className, ...props }) => {
  const Tag = HEADING_TAGS[as] ?? "h2";
  const sizeClass = HEADING_SIZES[as] ?? HEADING_SIZES[2];

  return (
    <Tag
      className={cn("font-heading font-bold text-dark", sizeClass, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
