import { cn } from "../../utils/cn";

const Image = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn("w-full h-auto object-cover", className)}
      {...props}
    />
  );
};

export default Image;