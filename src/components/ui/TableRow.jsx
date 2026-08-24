const TableRow = ({
  children,
  gridCols = "md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_0.8fr]",
  // gridCols = "md:grid-cols-[1fr_1.2fr_1.2fr_1fr_1fr_0.8fr_1fr_0.8fr_0.8fr]",
  className = "",
}) => {
  return (
    <div
      className={`grid text-sm gap-3 border-b border-secondary/10 px-5 py-4 transition-colors last:border-0 hover:bg-secondary/5 ${gridCols} md:items-center md:gap-4 md:py-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default TableRow;