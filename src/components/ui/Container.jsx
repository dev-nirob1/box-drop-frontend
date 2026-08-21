import { cn } from "../../utils/cn";

const Container = ({ children, className }) => {
  return (
    <div className={cn("container py-16", className)}>
      {children}
    </div>
  );
};

export default Container;