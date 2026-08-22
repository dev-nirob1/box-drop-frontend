import { cn } from "../../utils/cn";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full px-4 py-3 rounded border border-secondary/30 text-primary font-body placeholder:text-secondary/60",
        "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent",
        "transition-colors duration-200",
        className
      )}
      {...props}
    />
  );
};

export default Input;