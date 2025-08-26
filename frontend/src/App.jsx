import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import DashboardHome from "./pages/dashboard/DashboardHome";
// import UserProvider from "./context/userContext";

const App = () => {
  return (
    // <UserProvider>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<DashboardHome />} />
      </Routes>
    </Router>
    // </UserProvider>
  );
};

export default App;
