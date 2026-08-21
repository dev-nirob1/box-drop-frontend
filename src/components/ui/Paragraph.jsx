import { cn } from "../../utils/cn";

const Paragraph = ({ children, className }) => {
  return (
    <p
      className={cn("text-base", "text-primary", "leading-relaxed font-body", className)}
    >
      {children}
    </p>
  );
};

export default Paragraph;
