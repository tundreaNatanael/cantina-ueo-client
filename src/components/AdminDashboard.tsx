import { useAuth } from "../contexts/AuthContext";

export default function AdminDashboard() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-background-100 border border-background-200 p-6 rounded-lg mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-text-900 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-text-600">
                Hello, {user?.user_metadata?.full_name || user?.email}!
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-secondary-600 hover:bg-secondary-700 text-secondary-50 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-primary-500 text-primary-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
            <p className="text-primary-100">
              Manage users, menus, and system settings
            </p>
          </div>

          <div className="bg-secondary-600 text-secondary-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">User Management</h2>
            <p className="text-secondary-100">View and manage all users</p>
          </div>

          <div className="bg-accent-500 text-accent-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Reports</h2>
            <p className="text-accent-100">View system analytics and reports</p>
          </div>
        </div>
      </div>
    </div>
  );
}
