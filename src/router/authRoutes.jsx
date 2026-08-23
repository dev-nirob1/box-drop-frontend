import AuthLayout from "../layout/AuthLayout";

export const authRoutes = {
  element: <AuthLayout />,
  children: [
    {
      path: "/login",
      element: <div>Login Page</div>,
    },
    {
      path: "/register",
      element: <div>Register Page</div>,
    },
  ],
};
