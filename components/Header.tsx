"use client";
import React from "react";
import { Search, Mail, Bell } from "lucide-react";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathName = usePathname();
  const isLogin = pathName.includes("login");
  return (
    <div
      className={`bg-white border-b border-gray-100 px-8 py-4 ${
        isLogin && "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <SearchBar
          showIcon={true}
          placeholder="Search courses, schools, ..."
          onSearch={() => {}}
        />
        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Beza Tesfaye</p>
              <p className="text-xs text-gray-500">beza.tesfaye@asfwa.edu</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">BT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
