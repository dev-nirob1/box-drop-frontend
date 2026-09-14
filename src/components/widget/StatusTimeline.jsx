import { FiCheck } from "react-icons/fi";
import Label from "../ui/Label";
import Span from "../ui/Span";

const StatusTimeline = ({ steps }) => {
  return (
    <div>
      {steps.map((step, index) => {
        const isLineActive = step.complete && steps[index + 1]?.complete;

        return (
          <div key={step.status} className="relative flex gap-4 pb-8 last:pb-0">
            {/* Connecting line */}
            {index !== steps.length - 1 && (
              <div
                className={
                  isLineActive
                    ? "absolute left-3.75 top-8 h-full w-0.5 bg-accent"
                    : "absolute left-3.75 top-8 h-full w-0.5 bg-secondary/15"
                }
              />
            )}

            {/* Dot */}
            <div
              className={
                step.complete
                  ? "z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white"
                  : "z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary"
              }
            >
              {step.complete && <FiCheck className="text-sm" />}
            </div>

            {/* Content */}
            <div className="pt-1">
              <Label
                className={step.complete ? "text-primary" : "text-secondary"}
              >
                {step.status}
              </Label>
              {step.date && (
                <Span className="mt-0.5 block">
                  {new Date(step.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </Span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatusTimeline;