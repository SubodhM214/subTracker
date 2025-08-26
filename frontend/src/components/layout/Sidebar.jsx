import React from "react";
import { BellIcon, HandCoins, LayoutDashboard, LogOut, X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay on small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-white p-6 space-y-6 z-50 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        {/* Header with Close button*/}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200"
            onClick={toggleSidebar}
          >
            <X />
          </button>
        </div>

        <ul className="space-y-4">
          <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
            <div className="flex gap-2 items-center">
              <LayoutDashboard size={18} />
              Dashboard
            </div>
          </li>
          <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
            <div className="flex gap-2 items-center">
              <HandCoins size={18} />
              Subscriptions
            </div>
          </li>
          <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
            <div className="flex gap-2 items-center">
              <BellIcon size={18} />
              Upcoming
            </div>
          </li>
          <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
            <div className="flex gap-2 items-center">
              <LogOut size={18} />
              Logout
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
