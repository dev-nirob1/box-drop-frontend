import DashboardLayout from "../layout/DashboardLayout";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminParcelEdit from "../pages/Admin/AdminParcelEdit";
import AdminUsers from "../pages/Admin/AdminUsers";

export const adminRoutes = {
  element: <DashboardLayout />,
  children: [
    {
      path: "/admin",
      element: <AdminDashboard />,
    },
    {
      path: "/admin/parcels/:id",
      element: <AdminParcelEdit />,
    },
    {
      path: "/admin/users",
      element: <AdminUsers />,
    },
  ],
};