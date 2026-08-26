import { NavLink } from "react-router";
import { FiPackage, FiGrid, FiUsers, FiLogOut, FiX } from "react-icons/fi";
import { cn } from "../../utils/cn";
import { useSidebar } from "../../hooks/useSidebar";
import Heading from "../ui/Heading";

const role = "admin";

const userLinks = [{ to: "/dashboard", label: "My Parcels", icon: FiPackage }];
const adminLinks = [
  { to: "/admin", label: "All Parcels", icon: FiGrid },
  { to: "/admin/new", label: "Add Parcel", icon: FiGrid },
  { to: "/admin/users", label: "Users", icon: FiUsers },
];

const DashboardSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const links = role === "admin" ? adminLinks : userLinks;

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-primary/40 lg:hidden"
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 flex h-screen w-64 flex-col border-r border-secondary/10 bg-white transition-transform duration-300 lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-secondary/10 px-6 py-4">
          <Heading as={4}>
            BoxDrop
          </Heading>
          <button onClick={closeSidebar} className="text-xl lg:hidden cursor-pointer">
            <FiX />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={closeSidebar}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-secondary hover:bg-secondary/5 hover:text-primary"
                )
              }
            >
              <link.icon className="text-lg" />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-secondary/10 px-3 py-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-secondary/5 hover:text-primary cursor-pointer"
          >
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;