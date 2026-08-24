const TableContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`overflow-hidden rounded border border-secondary/10 bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default TableContainer;
