// components/ui/ErrorText.jsx
import { cn } from "../../utils/cn";

const ErrorText = ({ children, className }) => {
  return (
    <p className={cn("mt-1 text-xs font-medium text-accent", className)}>
      {children}
    </p>
  );
};

export default ErrorText;