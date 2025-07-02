import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Navigate } from "react-router-dom";
import { AuthProvider,useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
       <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ProtectedRoute>
              <HomePage />
          </ProtectedRoute>} />
       </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App;

