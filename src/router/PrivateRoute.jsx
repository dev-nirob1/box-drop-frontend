import { Navigate } from "react-router";

import { useAuth } from "../hooks/useAuth";
import Loader from "../components/ui/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader fullScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
