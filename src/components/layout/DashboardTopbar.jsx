import { FiMenu } from "react-icons/fi";
// import { useSidebar } from "../../context/SidebarContext";
import Heading from "../ui/Heading";

const DashboardTopbar = () => {
//   const { toggleSidebar } = useSidebar();

  return (
    <header className="flex items-center justify-between border-b border-secondary/10 bg-white px-4 py-4 lg:px-6">
      {/* Mobile hamburger */}
      <button
        type="button"
        className="text-2xl text-primary lg:hidden cursor-pointer"
        >
          {/* onClick={toggleSidebar} */}
        <FiMenu />
      </button>

      {/* Page title (optional, empty on lg) */}
      <div className="hidden lg:block" />

      {/* User info */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 font-heading text-sm font-bold text-accent">
          N
        </div>
        <Heading as={5} className="mb-0">
          Nirob
        </Heading>
      </div>
    </header>
  );
};

export default DashboardTopbar;