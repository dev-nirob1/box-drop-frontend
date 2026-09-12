import DashboardLayout from "../layout/DashboardLayout";
import ParcelDetail from "../pages/UserDashboard/ParcelDetail";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import PrivateRoute from "./PrivateRoute";

export const dashboardRoutes = {
  element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
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