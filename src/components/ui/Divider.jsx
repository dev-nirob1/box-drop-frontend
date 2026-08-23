import { cn } from "../../utils/cn";

const Divider = ({ text = "OR", className }) => {
  return (
    <div className={cn("my-6 flex items-center gap-4", className)}>
      <div className="h-px flex-1 bg-secondary/30" />

      <span className="text-sm text-secondary">
        {text}
      </span>

      <div className="h-px flex-1 bg-secondary/30" />
    </div>
  );
};

export default Divider;