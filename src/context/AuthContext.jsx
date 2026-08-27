import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    const res = await axios.post("http://localhost:3000/api/users", userInfo);
    return res?.data;
  };

  const logout = async () => {
    const res = await axios.post(
      "http://localhost:3000/api/auth/logout",
      {},
      { withCredentials: true },
    );
    setUser(null);

    return res.data;
  };

  useEffect(() => {
    const currentUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/me", {
          withCredentials: true,
        });
        console.log(res?.data);
        setUser(res.data.user);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setUser(null);
        setLoading(false);
      }
    };

    currentUser();
  }, []);

  const value = {
    user,
    setUser,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
