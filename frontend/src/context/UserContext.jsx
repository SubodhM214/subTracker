import { createContext, useEffect, useState } from "react";
// import axiosInstance from "../components/utils/axiosInstance";
// import { API_PATHS } from "../components/utils/apiPaths";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       setLoading(false);
  //       return;
  //     }
  //     try {
  //       const res = await axiosInstance.get(API_PATHS.AUTH.GET_USER);
  //       setUser(res.data.user);
  //       console.log(res.data.user);
  //     } catch (err) {
  //       console.error("Failed to fetch user:", err);
  //       localStorage.removeItem("token");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
