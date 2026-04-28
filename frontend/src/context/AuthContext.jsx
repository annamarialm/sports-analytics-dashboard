import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const [userId, setUserId] = useState(
    localStorage.getItem("userId") || null
  );

  const isAuthenticated = !!token;

  const login = (newToken, newUserId) => {
    setToken(newToken);
    setUserId(newUserId);

    localStorage.setItem("token", newToken);
    localStorage.setItem("userId", newUserId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };