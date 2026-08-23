import { NavLink } from "react-router";
import { FiPackage, FiUser, FiUsers, FiGrid, FiLogOut } from "react-icons/fi";
import { cn } from "../../utils/cn";
import Heading from "../ui/Heading";

// role পরিবর্তন করে user/admin sidebar টেস্ট করতে পারবে
const role = "user"; // "user" | "admin"

const userLinks = [
  { to: "/dashboard", label: "My Parcels", icon: FiPackage },
  //   { to: "/dashboard/profile", label: "Profile", icon: FiUser },
];

const adminLinks = [
  { to: "/admin", label: "All Parcels", icon: FiGrid },
  { to: "/admin/users", label: "Users", icon: FiUsers },
];

const DashboardSidebar = () => {
  const links = role === "admin" ? adminLinks : userLinks;

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-secondary/10 bg-white">
      {/* Logo */}
      <div className="border-b border-secondary/10 px-6 py-5">
        <Heading as={4}>BoxDrop</Heading>
      </div>

      {/* Nav links */}
      <nav className="flex-1 space-y-1 px-3 py-5">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent/10 text-accent"
                  : "text-secondary hover:bg-secondary/5 hover:text-primary",
              )
            }
          >
            <link.icon className="text-lg" />
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
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
  );
};

export default DashboardSidebar;
