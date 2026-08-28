import { FiMenu, FiLogOut, FiUser } from "react-icons/fi";
import { useSidebar } from "../../hooks/useSidebar";
import Heading from "../ui/Heading";
import { useAuth } from "../../hooks/useAuth";

const DashboardTopbar = () => {
  const { toggleSidebar } = useSidebar();
  const { user, logout } = useAuth();
console.log(user)
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
        <Heading as={5}>
          {user?.role === "admin" ? user?.role : user?.phone}
        </Heading>
      </div>

      {/* User info + logout */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent cursor-pointer ">
            <FiUser className="text-lg" />
          </div>
        </div>

        <button
          onClick={logout}
          type="button"
          className="flex items-center gap-2 rounded-md border  px-3 py-2 text-sm font-medium transition-colors border-accent/30 bg-accent/10 text-accent cursor-pointer"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </header>
  );
};

export default DashboardTopbar;
