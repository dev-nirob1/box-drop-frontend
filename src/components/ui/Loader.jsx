// components/ui/Loader.jsx
const Loader = ({ fullScreen = false }) => {
  const spinner = (
    <div className="flex items-center justify-center gap-3">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-secondary/20 border-t-accent" />
      <span className="text-sm text-secondary">Loading...</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Loader;
