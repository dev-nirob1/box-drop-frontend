import { FiCheck } from "react-icons/fi";
import Label from "../ui/Label";
import Span from "../ui/Span";

const StatusTimeline = ({ steps }) => {
  return (
    <div>
      {steps.map((step, index) => {
        const isLineActive = step.completed && steps[index + 1]?.completed;

        return (
          <div key={step.label} className="relative flex gap-4 pb-8 last:pb-0">
            {/* Connecting line */}
            {index !== steps.length - 1 && (
              <div
                className={
                  isLineActive
                    ? "absolute left-[15px] top-8 h-full w-0.5 bg-accent"
                    : "absolute left-[15px] top-8 h-full w-0.5 bg-secondary/15"
                }
              />
            )}

            {/* Dot */}
            <div
              className={
                step.completed
                  ? "z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white"
                  : "z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary"
              }
            >
              {step.completed && <FiCheck className="text-sm" />}
            </div>

            {/* Content */}
            <div className="pt-1">
              <Label
                className={
                  step.completed ? "text-primary" : "text-secondary"
                }
              >
                {step.label}
              </Label>
              {step.date && <Span className="block mt-0.5">{step.date}</Span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatusTimeline;