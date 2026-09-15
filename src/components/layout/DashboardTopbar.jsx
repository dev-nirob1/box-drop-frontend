import { FiMenu, FiLogOut, FiUser } from "react-icons/fi";

import { useSidebar } from "../../hooks/useSidebar";
import { useAuth } from "../../hooks/useAuth";

import Heading from "../ui/Heading";

const DashboardTopbar = () => {
  const { toggleSidebar } = useSidebar();
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-secondary/10 bg-white px-4 py-4 lg:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleSidebar}
          className="cursor-pointer text-2xl text-primary lg:hidden"
        >
          <FiMenu />
        </button>

        <div>
          <p className="text-xs text-secondary/60">
            {user?.role === "admin" ? "Admin Panel" : "Welcome back"}
          </p>

          <Heading as={5} className="mt-0.5">
            {user?.role === "admin" ? "Administrator" : user?.name}
          </Heading>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-3 sm:flex">
          <div className="text-right">
            <p className="text-sm font-semibold text-primary">
              {user?.name}
            </p>
            <p className="text-xs capitalize text-secondary/60">
              {user?.role}
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
            <FiUser className="text-lg" />
          </div>
        </div>

        <button
          onClick={logout}
          type="button"
          className="flex cursor-pointer items-center gap-2 rounded-md border border-accent/20 bg-accent/5 px-3 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
        >
          <FiLogOut />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default DashboardTopbar;

