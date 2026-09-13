// components/widgets/EmptyStateCard.jsx
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";

const EmptyState = ({ title, message, buttonText, onButtonClick }) => {
  return (
    <div className="mt-12 rounded border border-secondary/10 bg-white p-8 text-center">
      <Heading as={3}>{title}</Heading>
      <Paragraph className="mt-2">{message}</Paragraph>

      {buttonText && (
        <Button type="button" variant="primary" className="mt-5" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;