import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute, { RoleBasedRedirect } from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
import ClientDashboard from "./components/ClientDashboard";
import ScannerDashboard from "./components/ScannerDashboard";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <AuthProvider>
      <Router basename={import.meta.env.VITE_BASE_PATH || "/"}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<RoleBasedRedirect />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/client"
            element={
              <ProtectedRoute allowedRoles={["client"]}>
                <ClientDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/scanner"
            element={
              <ProtectedRoute allowedRoles={["scanner"]}>
                <ScannerDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
