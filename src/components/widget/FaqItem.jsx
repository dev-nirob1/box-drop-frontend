import { FiPlus } from "react-icons/fi";
import { cn } from "../../utils/cn";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const FaqItem = ({ faq, isOpen, onClick }) => {
  const { question, answer } = faq;
  return (
    <div className="border-b border-secondary/15 py-5">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
      >
        <Heading as={5}>{question}</Heading>

        <FiPlus
          className={cn(
            "shrink-0 text-2xl text-accent transition-transform duration-300",
            isOpen && "rotate-45",
          )}
        />
      </button>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <Paragraph>{answer}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
