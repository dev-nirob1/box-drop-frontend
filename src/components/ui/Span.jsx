import { cn } from "../../utils/cn";

const Span = ({ children, className }) => {
  return (
    <span className={cn("text-xs text-secondary/70 font-body", className)}>
      {children}
    </span>
  );
};

export default Span;