import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-black-100">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main area */}
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="p-6 overflow-y-auto space-y-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
