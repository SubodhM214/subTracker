import { createContext, useEffect, useState } from "react";
// import axiosInstance from "../components/utils/axiosInstance";
// import { API_PATHS } from "../components/utils/apiPaths";

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  // Initialize user from localStorage if available
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

 
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
