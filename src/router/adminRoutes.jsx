import DashboardLayout from "../layout/DashboardLayout";
import AdminAddParcel from "../pages/Admin/AdminAddParcel";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminParcelEdit from "../pages/Admin/AdminParcelEdit";
import AdminUsers from "../pages/Admin/AdminUsers";
import PrivateAdminRoute from "./PrivateAdminRoute";

export const adminRoutes = {
  element: (
    <PrivateAdminRoute>
      <DashboardLayout />
    </PrivateAdminRoute>
  ),
  children: [
    {
      path: "/admin",
      element: <AdminDashboard />,
    },
    {
      path: "/admin/new",
      element: <AdminAddParcel />,
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
