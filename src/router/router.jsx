import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import { authRoutes } from "./authRoutes";
import { dashboardRoutes } from "./dashboardRoutes";

import { adminRoutes } from "./adminRoutes";
import TrackingPage from "../pages/Front/TrackingPage";
import LandingPage from "../pages/Front/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/track/:trackingId",
        element: <TrackingPage />,
      },
    ],
  },
  authRoutes,
  dashboardRoutes,
  adminRoutes,
]);
