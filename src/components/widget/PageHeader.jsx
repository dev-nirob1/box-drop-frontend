import { cn } from "../../utils/cn";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const PageHeader = ({ title, description, className }) => {
  return (
    <div className={cn(className)}>
      <Heading as={3} className="mb-1">
        {title}
      </Heading>
      {description && <Paragraph>{description}</Paragraph>}
    </div>
  );
};

export default PageHeader;
