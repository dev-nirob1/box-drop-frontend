import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import LandingPage from "../pages/LandingPage";
import { authRoutes } from "./authRoutes";
import { dashboardRoutes } from "./dashboardRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  authRoutes,
  dashboardRoutes,
]);
