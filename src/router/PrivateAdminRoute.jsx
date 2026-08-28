import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const PrivateAdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1 className="text-2xl">Loading...</h1>;
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but not admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateAdminRoute;