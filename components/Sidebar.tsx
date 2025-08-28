"use client";
import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  GraduationCap,
  FileText,
  School,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: BookOpen,
      count: null,
      href: "/",
    },
    {
      id: "course-list",
      label: "Courses",
      icon: GraduationCap,
      count: null,
      href: "/course-list",
    },
    {
      id: "school-list",
      label: "Schools",
      icon: School,
      count: null,
      href: "/school-list",
    },
    {
      id: "semester",
      label: "Semester",
      icon: Calendar,
      count: 2,
      href: "/semester",
    },
    {
      id: "volunteer-list",
      label: "Volunteers",
      icon: Users,
      href: "/volunteer-list",
    },
  ];

  const generalItems = [
    { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
    { id: "help", label: "Help", icon: HelpCircle, href: "/help" },
    { id: "logout", label: "Logout", icon: LogOut, href: "/logout" },
  ];

  const pathName = usePathname();
  const nonIndex = [
    "/settings",
    "/logout",
    "/semester",
    "/school-list",
    "/course-list",
  ];
  const isIndex = !nonIndex.includes(pathName);
  const isLogin = pathName.includes("login");
  const isLogged = localStorage.getItem("isLogged");
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (isLogged) setMount(true);
  }, [mount]);
  if (!mount) null;
  return (
    <div
      className={`w-64 bg-white h-screen shadow-sm border-r border-gray-100 flex flex-col ${
        isLogin && "hidden"
      }`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Image
            src={"/img/4h_logo.png"}
            alt="4h-logo"
            width={100}
            height={100}
          />
          <span className="text-2xl font-bold text-green-900">ASFWA</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 py-6">
        <div className="px-6">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
            MAIN MENU
          </p>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href}
                  key={item.id}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathName.includes(item.id)
                      ? "bg-green-50 text-green-700 border-r-2 border-green-600"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="px-6 mt-8">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
            GENERAL
          </p>
          <nav className="space-y-2">
            {generalItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href}
                  key={item.id}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors ${
                    pathName.includes(item.id)
                      ? "bg-green-50 text-green-700 border-r-2 border-green-600"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
