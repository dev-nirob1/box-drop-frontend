const TableHeader = ({
  children,
  // gridCols = "md:grid-cols-[1fr_1.2fr_1.2fr_1fr_1fr_0.8fr_1fr_0.8fr_0.8fr]",
  gridCols = "md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_0.8fr]",

  className = "",
}) => {
  return (
    <div
      className={`hidden md:grid ${gridCols} items-center gap-4 border-b border-secondary/10 bg-secondary/5 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-secondary ${className}`}
    >
      {children}
    </div>
  );
};

export default TableHeader;