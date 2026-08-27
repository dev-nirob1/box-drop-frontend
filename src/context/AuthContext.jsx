import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (loginInfo) => {
    const res = await axios.post(
      "http://localhost:3000/api/auth/login",
      loginInfo,
      {
        withCredentials: true,
      },
    );
    return res.data;
  };

  const register = async (userInfo) => {
    const res = await axios.post(
      "http://localhost:3000/api/users",
      userInfo,
    );
    return res?.data;
  };

  const value = {
    user,
    setUser,
    login,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
