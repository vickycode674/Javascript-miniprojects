import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center px-4 py-10">
      {/* Glassmorphism Card */}
      <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-xl p-8 w-full max-w-md text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back 👋</h1>
        <p className="text-gray-700 text-lg mb-6">
          Hello, <strong className="text-blue-800">{user?.name}</strong>
        </p>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 text-center">
        <div className="bg-white/40 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg p-6 w-full sm:w-72">
          <h2 className="text-xl font-semibold mb-2">📝 Todo App</h2>
          <p className="text-sm text-gray-700 mb-4">Manage your daily tasks efficiently.</p>
          <button
            onClick={() => navigate("/todo")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Go to Todo ➡️
          </button>
        </div>

        <div className="bg-white/40 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg p-6 w-full sm:w-72">
          <h2 className="text-xl font-semibold mb-2">📚 Blog App</h2>
          <p className="text-sm text-gray-700 mb-4">Explore our blog posts and articles.</p>
          <button
            onClick={() => navigate("/blogs")}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-200"
          >
            Go to Blog ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
