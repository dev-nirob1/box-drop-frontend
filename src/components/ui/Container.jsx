import { cn } from "../../utils/cn";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto w-[90%]",
        "sm:max-w-[540px]",
        "md:max-w-[720px]",
        "lg:max-w-[960px]",
        "xl:max-w-[1140px]",
        "2xl:max-w-[1320px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
