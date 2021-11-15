import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  let location = useLocation();

  const isAuthenticated = true;

  //   if (loading) {
  //     return <p>Checking authenticaton..</p>;
  //   }

  if (!isAuthenticated) {
    return <Navigate to="/signup" state={{ from: location }} />;
  }

  return children;
};
