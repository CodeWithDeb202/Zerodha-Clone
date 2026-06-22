import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL, LANDING_URL } from "../config";

const AuthContext = createContext({
  user: null,
  isCheckingAuth: true,
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Backend reads the auth cookie and returns the logged-in user.
        const { data } = await axios.post(
          `${API_URL}/verify`,
          {},
          { withCredentials: true }
        );

        if (data.status && data.user) {
          setUser(data.user);
          return;
        }

        window.location.href = `${LANDING_URL}/login`;
      } catch (err) {
        console.error("Session verification failed:", err);
        window.location.href = `${LANDING_URL}/login`;
      } finally {
        setIsCheckingAuth(false);
      }
    };

    verifyUser();
  }, []);

  const logout = async () => {
    try {
      // Clears the token cookie so the dashboard becomes protected again.
      await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    } finally {
      setUser(null);
      window.location.href = LANDING_URL;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isCheckingAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
