import DashboardLayout from "../layout/DashboardLayout";
import ParcelDetail from "../pages/Dashboard/ParcelDetail";
import UserDashboard from "../pages/Dashboard/UserDashboard";

export const dashboardRoutes = {
  element: <DashboardLayout />,
  children: [
    {
      path: "/dashboard",
      element: < UserDashboard/>,
    },
    {
      path: "/dashboard/parcel/:id",
      element: <ParcelDetail />,
    },
  ],
};