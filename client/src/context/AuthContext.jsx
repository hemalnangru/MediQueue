import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = useCallback(async () => {
    console.log("fetchCurrentUser called");
  
    const token = localStorage.getItem("token");
    console.log("Stored token:", token);
  
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }
  
    try {
      const { data } = await api.get("/auth/me");
      console.log("ME API RESPONSE:", data);
  
      setUser(data.user);
    } catch (error) {
      console.error("ME API ERROR:", error.response?.data);
  
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const login = useCallback((token, userData) => {
    localStorage.setItem("token", token);
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: !!user,
      login,
      logout,
      refreshUser: fetchCurrentUser,
    }),
    [user, loading, login, logout, fetchCurrentUser]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}