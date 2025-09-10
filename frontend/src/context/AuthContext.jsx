import { createContext, useContext, useState, useEffect } from "react";
import api from "../lib/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check session on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await api.post("/refresh-token"); // tries cookie
        const { accessToken } = res.data.data;
        localStorage.setItem("accessToken", accessToken);
        const me = await api.get("/current-user");
        setUser(me.data.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = async (credentials) => {
    const res = await api.post("/login", credentials);
    const { accessToken, user } = res.data.data;
    localStorage.setItem("accessToken", accessToken);
    setUser(user);
  };

  const signup = async (formData) => {
    const res = await api.post("/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // After register, auto login
    await login({ email: formData.get("email"), password: formData.get("password") });
    return res;
  };

  const logout = async () => {
    await api.post("/logout");
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
