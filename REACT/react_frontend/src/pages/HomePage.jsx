// src/pages/HomePage.jsx
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome Back 👋</h1>
        <p className="text-lg text-gray-700 mb-6">Hello, <strong>{user?.name}</strong></p>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
