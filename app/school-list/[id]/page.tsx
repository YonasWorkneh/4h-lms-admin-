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
    <div>
      <Button
        text="Back"
        styles="!rounded-full px-6 py-1 mb-6"
        onClick={() => router.back()}
      />
      <div>
        <h1 className="text-3xl font-bold mb-2 text-[var(--heading)]">
          Bole Community School
          {/* will be replaced by dynamic value */}
        </h1>
        <p className="text-gray-600 flex gap-2 items-center mt-2">
          <MapPin />
          <span>BL_03_690 Street, Bole</span>
        </p>
      </div>
      {/* main-content */}
      <div className="mt-10">
        {/* sidebar */}
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <button
                className={`px-3 py-2 hover:bg-gradient-to-r border hover:from-green-500 hover:to-emerald-600 hover:text-white rounded-full flex gap-1 items-center ${
                  active === "students"
                    ? "text-white bg-gradient-to-r from-green-500 to-emerald-600"
                    : "text-green-700 bg-white border-green-400"
                }`}
                onClick={() => setActive("students")}
              >
                <Users size={16} />
                <span>Students</span>
              </button>
            </li>
            <li>
              <button
                className={`px-3 py-2 hover:bg-gradient-to-r border hover:from-green-500 hover:to-emerald-600 hover:text-white rounded-full flex gap-1 items-center ${
                  active === "instructors"
                    ? "text-white bg-gradient-to-r from-green-500 to-emerald-600"
                    : "text-green-700 bg-white border-green-400"
                }`}
                onClick={() => setActive("instructors")}
              >
                <ShieldUser size={16} />
                <span>Instructors</span>
              </button>
            </li>
            <li>
              <button
                className={`px-3 py-2 hover:bg-gradient-to-r border hover:from-green-500 hover:to-emerald-600 hover:text-white rounded-full flex gap-1 items-center ${
                  active === "courses"
                    ? "text-white bg-gradient-to-r from-green-500 to-emerald-600"
                    : "text-green-700 bg-white border-green-400"
                }`}
                onClick={() => setActive("courses")}
              >
                <GraduationCap size={18} />
                <span>Courses</span>
              </button>
            </li>
          </ul>
        </nav>
        {active === "students" ? (
          <div className="mt-5">
            <div className="flex justify-between items-center">
              <SearchBar placeholder="Search students..." onSearch={() => {}} />
              <Button
                text="+ Add New"
                onClick={() => {
                  router.push("/student/new");
                  return;
                }}
              />
            </div>
            <StudentList />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
