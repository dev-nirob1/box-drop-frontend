const TableData = ({
  label,
  children,
  align = "left",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-between md:block ${
        align === "right" ? "md:text-right" : ""
      } ${className}`}
    >
      {/* Mobile label */}
      <span className="text-xs font-semibold uppercase tracking-wide text-secondary/60 md:hidden">
        {label}
      </span>

      {/* Data */}
      <div>{children}</div>
    </div>
  );
};

export default TableData;