import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";

export const authRoutes = {
  element: <AuthLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <div>Register Page</div>,
    },
  ],
};
