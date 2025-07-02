// src/pages/LoginPage.jsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const { user } = useAuth();

  if (user) return <Navigate to="/" />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h1>
        <LoginForm />
        <p className="text-sm text-gray-500 text-center mt-4">
          Use <span className="font-semibold">test@example.com</span> / <span className="font-semibold">password</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
