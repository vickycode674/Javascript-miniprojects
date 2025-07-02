import { Children, createContext,useContext,useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null); // null = not logged in

    const login  = async(email,password)=>{

     // Simulate API

    if (email === "test@example.com" && password === "password") {
        const dummyUser = {email,name:"Test User"};
        setUser(dummyUser) //pasing user data to state
        return {success:true}
    }
    else{
              return { success: false, message: "Invalid credentials" };
    }
  }

  const logout = () => {
    setUser(null);
  };

return (
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
);

};

export const useAuth = () => useContext(AuthContext);




