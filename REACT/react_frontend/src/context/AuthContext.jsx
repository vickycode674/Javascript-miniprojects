import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in
  const [loading, setLoading] = useState(true); // Track loading status

  // Load user from localStorage on first render (mount)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        logout();
      }
    }

    setLoading(false); // ✅ We're done loading
  }, []);

  // Login function (simulate API call)
  const login = async (email, password) => {
    if (email === "test@example.com" && password === "password") {
      const dummyUser = { email, name: "Test User" };
      const dummyToken = "abc123token";

      // Save user & token to localStorage
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("token", dummyToken);

      // Set user state
      setUser(dummyUser);

      return { success: true };
    }

    return { success: false, message: "Invalid credentials" };
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
