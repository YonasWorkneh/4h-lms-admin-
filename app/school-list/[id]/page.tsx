"use client";

import Button from "@/components/Button";
import { File, GraduationCap, MapPin, ShieldUser, Users } from "lucide-react";
import Link from "next/link";
// import SchoolCard from "@/components/SchoolCard";
// import SearchBar from "@/components/SearchBar";
// import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import StudentList from "@/components/List";
import SearchBar from "@/components/SearchBar";

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [active, setActive] = useState("students");

  return (
    <div className="min-h-screen">
      <Button
        text="Back"
        styles="!rounded-full px-6 py-1 mb-4 sm:mb-6"
        onClick={() => router.back()}
      />

      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[var(--heading)]">
          Bole Community School
          {/* will be replaced by dynamic value */}
        </h1>
        <p className="text-gray-600 flex gap-2 items-center mt-2 text-sm sm:text-base">
          <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
          <span>BL_03_690 Street, Bole</span>
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6 sm:mb-8">
        <nav>
          <ul className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
            <li className="flex-1 sm:flex-none">
              <button
                className={`w-full sm:w-auto px-3 py-2 hover:bg-gradient-to-r border hover:from-green-500 hover:to-emerald-600 hover:text-white rounded-full flex gap-1 items-center justify-center sm:justify-start text-sm sm:text-base transition-colors ${
                  active === "students"
                    ? "text-white bg-gradient-to-r from-green-500 to-emerald-600"
                    : "text-green-700 bg-white border-green-400"
                }`}
                onClick={() => setActive("students")}
              >
                <Users size={14} className="sm:w-4 sm:h-4" />
                <span>Students</span>
              </button>
            </li>
            <li className="flex-1 sm:flex-none">
              <button
                className={`w-full sm:w-auto px-3 py-2 hover:bg-gradient-to-r border hover:from-green-500 hover:to-emerald-600 hover:text-white rounded-full flex gap-1 items-center justify-center sm:justify-start text-sm sm:text-base transition-colors ${
                  active === "instructors"
                    ? "text-white bg-gradient-to-r from-green-500 to-emerald-600"
                    : "text-green-700 bg-white border-green-400"
                }`}
                onClick={() => setActive("instructors")}
              >
                <ShieldUser size={14} className="sm:w-4 sm:h-4" />
                <span>Instructors</span>
              </button>
            </li>
            <li className="flex-1 sm:flex-none">
              <button
                className={`w-full sm:w-auto px-3 py-2 hover:bg-gradient-to-r border hover:from-green-500 hover:to-emerald-600 hover:text-white rounded-full flex gap-1 items-center justify-center sm:justify-start text-sm sm:text-base transition-colors ${
                  active === "courses"
                    ? "text-white bg-gradient-to-r from-green-500 to-emerald-600"
                    : "text-green-700 bg-white border-green-400"
                }`}
                onClick={() => setActive("courses")}
              >
                <GraduationCap size={14} className="sm:w-4 sm:h-4" />
                <span>Courses</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {active === "students" && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-full sm:w-auto sm:flex-1 sm:max-w-md">
                <SearchBar
                  placeholder="Search students..."
                  onSearch={() => {}}
                />
              </div>
              <Button
                text="+ Add New"
                styles="w-full sm:w-auto whitespace-nowrap"
                onClick={() => {
                  router.push("/student/new");
                  return;
                }}
              />
            </div>
            <StudentList onEnroll={() => {}} onBulkEnroll={() => {}} />
          </div>
        )}

        {active === "instructors" && (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <ShieldUser className="h-12 w-12 mb-4 text-gray-400" />
            <h3 className="text-lg font-medium mb-2">Instructors</h3>
            <p className="text-sm text-center">
              Instructor management coming soon...
            </p>
          </div>
        )}

        {active === "courses" && (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <GraduationCap className="h-12 w-12 mb-4 text-gray-400" />
            <h3 className="text-lg font-medium mb-2">Courses</h3>
            <p className="text-sm text-center">
              Course management coming soon...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
