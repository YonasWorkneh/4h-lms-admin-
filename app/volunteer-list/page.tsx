"use client";

import Button from "@/components/Button";
import { File, GraduationCap, MapPin, ShieldUser, Users } from "lucide-react";
import Link from "next/link";
// import SchoolCard from "@/components/SchoolCard";
// import SearchBar from "@/components/SearchBar";
// import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import StudentList from "../school-list/[id]/StudentList";
import SearchBar from "@/components/SearchBar";

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [active, setActive] = useState("students");

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-2 text-[var(--heading)]">
          Volunteers
          {/* will be replaced by dynamic value */}
        </h1>
        <p className="text-gray-600 flex gap-2 items-center mt-2">
          Manage volunteers &mdash; add , edit and remove volunteers.
        </p>
      </div>
      {/* main-content */}
      <div className="mt-10">
        {/* sidebar */}
        {active === "students" ? (
          <div className="mt-5">
            <div className="flex justify-between items-center">
              <SearchBar
                placeholder="Search volunteer..."
                onSearch={() => {}}
              />
              <Button
                text="+ Add New"
                onClick={() => {
                  router.push("/volunteer-list/new");
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
