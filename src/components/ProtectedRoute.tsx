import { Navigate } from "react-router-dom";

import { useAuth, type UserType } from "../contexts/AuthContext";

import LoginPage from "./LoginPage";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserType[];
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const { user, userType, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-text-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  // If specific roles are required, check if user has one of them
  if (allowedRoles && userType && !allowedRoles.includes(userType)) {
    // Redirect to user's appropriate dashboard
    const redirectPath =
      userType === "admin"
        ? "/admin"
        : userType === "scanner"
          ? "/scanner"
          : "/client";
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
}

// Component to redirect authenticated users to their role-based dashboard
export function RoleBasedRedirect() {
  const { user, userType, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-text-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  // Redirect based on user type
  if (userType === "admin") {
    return <Navigate to="/admin" replace />;
  } else if (userType === "scanner") {
    return <Navigate to="/scanner" replace />;
  } else {
    return <Navigate to="/client" replace />;
  }
}
