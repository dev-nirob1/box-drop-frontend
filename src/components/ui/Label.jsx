import { cn } from "../../utils/cn";

const Label = ({ children, htmlFor, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "mb-2 block text-sm font-medium text-secondary",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;