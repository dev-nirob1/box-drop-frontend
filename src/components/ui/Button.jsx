import { cn } from "../../utils/cn";

const variantStyles = {
  primary: "bg-accent text-white",
  secondary:
    "bg-white text-primary hover:bg-accent hover:border-accent hover:text-white",
};

const Button = ({
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-6 py-3 rounded font-medium cursor-pointer transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
