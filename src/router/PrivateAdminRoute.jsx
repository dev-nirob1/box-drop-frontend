import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/ui/Loader";

const PrivateAdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader fullScreen/>;
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