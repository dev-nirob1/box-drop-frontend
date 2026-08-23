import { FiMenu, FiLogOut } from "react-icons/fi";
import { useSidebar } from "../../hooks/useSidebar";
import Heading from "../ui/Heading";

const DashboardTopbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex items-center justify-between border-b border-secondary/10 bg-white px-4 py-4 lg:px-6">
      {/* Hamburger + page title */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleSidebar}
          className="text-2xl text-primary lg:hidden cursor-pointer"
        >
          <FiMenu />
        </button>

        <Heading as={5} className="mb-0">
          Dashboard
        </Heading>
      </div>

      {/* User info + logout */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 font-heading text-sm font-bold text-accent">
            N
          </div>
          <Heading as={5} className="mb-0">
            Nirob
          </Heading>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-secondary/20 px-3 py-2 text-sm font-medium text-secondary transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-500 cursor-pointer"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </header>
  );
};

export default DashboardTopbar;