"use client";
import React, { useEffect, useState } from "react";
import { Search, Mail, Bell } from "lucide-react";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const Header: React.FC = () => {
  const pathName = usePathname();
  const isLogin = pathName.includes("login");

  const isLogged = localStorage.getItem("isLogged");

  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (isLogged) setMount(true);
  }, [mount]);
  if (!mount) return null;
  return (
    <div
      className={`bg-white border-b border-gray-100 px-4 lg:px-8 py-4 ${
        isLogin && "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Search Bar - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block flex-1 max-w-md">
          <SearchBar
            showIcon={true}
            placeholder="Search courses, schools, ..."
            onSearch={() => {}}
          />
        </div>

        {/* Mobile Search Icon */}
        <div className="lg:hidden">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Notifications */}
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 lg:gap-3 pl-2 lg:pl-4 border-l border-gray-200">
            {/* Desktop User Info */}
            <div className="hidden lg:block text-right">
              <p className="text-sm font-medium text-gray-900">
                {"Beza Tesfaye"}
              </p>
              <p className="text-xs text-gray-500">
                {"beza.tesfaye@asfwa.com"}
              </p>
            </div>

            {/* Mobile User Info - Just Name */}
            <div className="lg:hidden text-right">
              <p className="text-sm font-medium text-gray-900">
                {"Beza Tesfaye"}
              </p>
            </div>

            {/* User Avatar */}
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-xs lg:text-sm">
                {"BT"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
