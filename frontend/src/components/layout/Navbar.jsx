import { Menu } from "lucide-react";
import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 shadow">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2  hover:bg-gray-200"
          onClick={toggleSidebar}
        >
          <Menu />
        </button>
        <h1 className="text-lg font-bold">SubTracker</h1>
      </div>

      <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center cursor-pointer">
        <span className="text-sm">U</span>
      </div>
    </div>
  );
};

export default Navbar;
