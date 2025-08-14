"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import SchoolCard from "@/components/SchoolCard";
import SearchBar from "@/components/SearchBar";
import Calendar from "@/components/Calendar";
import SemesterCard from "@/components/SemesterCard";

export default function Page() {
  const schools = [
    {
      name: "Bole Community School",
      location: "Bole, Addis Ababa",
      status: true,
      img: "/img/bolecommunity.jpeg",
      numStuds: 1200,
      id: "bc1231s",
    },
    {
      name: "Dr. Haddis Alemayehu Secondary School",
      location: "Yeka, Addis Ababa",
      status: false,
      img: "/img/haddis.jpg",
      numStuds: 50,
      id: "dhass21s",
    },
    {
      name: "Bole Secondary School",
      location: "Bole, Addis Ababa",
      status: true,
      img: "/img/bolesecondary.jpeg",
      numStuds: 100,
      id: "bss12s",
    },
    {
      name: "Addis Raey Preschool and Primary School",
      location: "Arada, Addis Ababa",
      status: true,
      img: "/img/addisraey.jpg",
      numStuds: 200,
      id: "arpp21p",
    },
    {
      name: "Misrak Dil Primary School",
      location: "Kirkos, Addis Ababa",
      status: false,
      img: "/img/misrakdil.jpeg",
      numStuds: 100,
      id: "mdps12p",
    },
    {
      name: "Lem Secondary School",
      location: "Lideta, Addis Ababa",
      status: true,
      img: "/img/lemsecondary.jpg",
      numStuds: 80,
      id: "lss123s",
    },
  ];
  const router = useRouter();
  return (
    <div>
      <div>
        <div>
          <h1 className="text-3xl font-bold mb-2 text-[var(--heading)]">
            Semester
          </h1>
          <p className="text-gray-600">
            Manage semester schedules{" "}
            <span className="text-green-700">&mdash;</span> add school, course,
            students, instructors and timeline etc.
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <SearchBar
            placeholder="Search semester by year ..."
            onSearch={() => {
              console.log("");
            }}
          />
          <Link href={"/semester/new"}>
            <Button text="+ Add New " />
          </Link>
        </div>
        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {schools.map((course, index) => (
            <SemesterCard />
          ))}
        </ul>
      </div>
    </div>
  );
}
