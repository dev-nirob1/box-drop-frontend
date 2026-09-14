import { cn } from "../../utils/cn";

const Divider = ({ text, className }) => {
  return (
    <div className={cn("my-6 flex items-center", className)}>
      <div className="h-px flex-1 bg-secondary/30" />

     {text&& (
        <span className="text-sm text-secondary mx-4">
          {text}
        </span>
      )}

      <div className="h-px flex-1 bg-secondary/30" />
    </div>
  );
};

export default Divider;