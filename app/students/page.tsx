"use client";

import Button from "@/components/Button";
import List from "@/components/List";
import SearchBar from "@/components/SearchBar";
import { School } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const schools = [
  { id: 1, name: "Dr. Haddis" },
  { id: 2, name: "Bole Community" },
  { id: 3, name: "Addis Raey" },
  { id: 4, name: "Misrak Dil" },
  { id: 5, name: "Bole Highschool" },
];

const students = [
  {
    id: "1",
    name: "Abel Tadesse",
    username: "abeltadesse",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "abel.tadesse@example.et",
    phone: "+251-91-000-0001",
    status: "Active",
    enrolledDate: "January 15, 2019",
  },
  {
    id: "2",
    name: "Meklit Alemu",
    username: "meklitalemu",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "meklit.alemu@example.et",
    phone: "+251-92-000-0002",
    status: "Inactive",
    enrolledDate: "March 20, 2020",
  },
  {
    id: "3",
    name: "Yared Bekele",
    username: "yaredbekele",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "yared.bekele@example.et",
    phone: "+251-93-000-0003",
    status: "Active",
    enrolledDate: "May 10, 2021",
  },
  {
    id: "4",
    name: "Samrawit Hailu",
    username: "samrawithailu",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "samrawit.hailu@example.et",
    phone: "+251-94-000-0004",
    status: "Active",
    enrolledDate: "February 8, 2017",
  },
  {
    id: "5",
    name: "Fitsum Kebede",
    username: "fitsumkebede",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "fitsum.kebede@example.et",
    phone: "+251-95-000-0005",
    status: "Inactive",
    enrolledDate: "October 12, 2016",
  },
  {
    id: "6",
    name: "Mahiya Yohannes",
    username: "mahiyayohannes",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "mahiya.yohannes@example.et",
    phone: "+251-96-000-0006",
    status: "Active",
    enrolledDate: "April 5, 2022",
  },
  {
    id: "7",
    name: "Henok Tesfaye",
    username: "henoktesfaye",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "henok.tesfaye@example.et",
    phone: "+251-97-000-0007",
    status: "Inactive",
    enrolledDate: "August 30, 2018",
  },
  {
    id: "8",
    name: "Saron Worku",
    username: "saronworku",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "saron.worku@example.et",
    phone: "+251-91-000-0008",
    status: "Active",
    enrolledDate: "June 18, 2020",
  },
  {
    id: "9",
    name: "Dawit Abebe",
    username: "dawitabebe",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "dawit.abebe@example.et",
    phone: "+251-92-000-0009",
    status: "Active",
    enrolledDate: "September 1, 2015",
  },
  {
    id: "10",
    name: "Lensa Mohammed",
    username: "lensamohammed",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "lensa.mohammed@example.et",
    phone: "+251-93-000-0010",
    status: "active",
    enrolledDate: "July 25, 2021",
  },
  {
    id: "11",
    name: "Tewodros Getachew",
    username: "tewodrosgetachew",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "tewodros.getachew@example.et",
    phone: "+251-94-000-0011",
    status: "Active",
    enrolledDate: "March 3, 2016",
  },
  {
    id: "12",
    name: "Selamawit Girma",
    username: "selamawitgirma",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "selamawit.girma@example.et",
    phone: "+251-95-000-0012",
    status: "Active",
    enrolledDate: "December 10, 2017",
  },
  {
    id: "13",
    name: "Eyob Desta",
    username: "eyobdesta",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "eyob.desta@example.et",
    phone: "+251-96-000-0013",
    status: "Inactive",
    enrolledDate: "April 22, 2020",
  },
  {
    id: "14",
    name: "Bethelhem Fikru",
    username: "bethelhemfikru",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "bethelhem.fikru@example.et",
    phone: "+251-97-000-0014",
    status: "Active",
    enrolledDate: "January 14, 2019",
  },
  {
    id: "15",
    name: "Kebede Mesfin",
    username: "kebedemesfin",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "kebede.mesfin@example.et",
    phone: "+251-91-000-0015",
    status: "Inactive",
    enrolledDate: "November 11, 2016",
  },
  {
    id: "16",
    name: "Sara Mengistu",
    username: "saramengistu",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "sara.mengistu@example.et",
    phone: "+251-92-000-0016",
    status: "Active",
    enrolledDate: "May 27, 2021",
  },
  {
    id: "17",
    name: "Nahom Kassahun",
    username: "nahomkassahun",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "nahom.kassahun@example.et",
    phone: "+251-93-000-0017",
    status: "Inactive",
    enrolledDate: "February 6, 2018",
  },
  {
    id: "18",
    name: "Marta Habte",
    username: "martahabte",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "marta.habte@example.et",
    phone: "+251-94-000-0018",
    status: "Active",
    enrolledDate: "October 9, 2019",
  },
  {
    id: "19",
    name: "Haimanot Tesema",
    username: "haimanottesema",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "haimanot.tesema@example.et",
    phone: "+251-95-000-0019",
    status: "Active",
    enrolledDate: "August 14, 2020",
  },
  {
    id: "20",
    name: "Solomon Wondimu",
    username: "solomonwondimu",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "solomon.wondimu@example.et",
    phone: "+251-96-000-0020",
    status: "active",
    enrolledDate: "April 2, 2017",
  },
  {
    id: "21",
    name: "Rahel Gizachew",
    username: "rahelgizachew",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "rahel.gizachew@example.et",
    phone: "+251-97-000-0021",
    status: "Active",
    enrolledDate: "June 29, 2022",
  },
  {
    id: "22",
    name: "Brook Mulugeta",
    username: "brookmulugeta",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "brook.mulugeta@example.et",
    phone: "+251-91-000-0022",
    status: "Active",
    enrolledDate: "September 7, 2015",
  },
  {
    id: "23",
    name: "Hewan Alemayehu",
    username: "hewanalemayehu",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "hewan.alemayehu@example.et",
    phone: "+251-92-000-0023",
    status: "Inactive",
    enrolledDate: "July 19, 2016",
  },
  {
    id: "24",
    name: "Mulu Habtom",
    username: "muluhabtom",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "mulu.habtom@example.et",
    phone: "+251-93-000-0024",
    status: "Active",
    enrolledDate: "December 28, 2018",
  },
  {
    id: "25",
    name: "Tsion Ayalew",
    username: "tsionayalew",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "tsion.ayalew@example.et",
    phone: "+251-94-000-0025",
    status: "Active",
    enrolledDate: "May 1, 2023",
  },
];

export default function page() {
  const [active, setActive] = useState<number>(1);
  const [shuffledStudents, setShuffledStudents] = useState(students);
  useEffect(() => {
    setShuffledStudents((prev) => prev.sort(() => Math.random() - 0.5));
  }, [active]);
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-[var(--heading)]">
        Students
      </h1>
      <p className="text-gray-600 flex gap-2 items-center mt-2">
        Manage students &mdash; register , edit and enroll students.
      </p>

      <nav className="mt-10">
        <ul className="flex items-center gap-4">
          {schools.map((school) => (
            <li key={school.id}>
              <button
                className={`px-3 py-2 hover:bg-gradient-to-r border hover:from-green-500 hover:to-emerald-600 hover:text-white rounded-full flex gap-1 items-center ${
                  active === school.id
                    ? "text-white bg-gradient-to-r from-green-500 to-emerald-600"
                    : "text-green-700 bg-white border-green-400"
                }`}
                onClick={() => setActive(school.id)}
              >
                <School size={16} />
                <span>{school.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-between items-center mt-10">
        <SearchBar placeholder="Search student..." onSearch={() => {}} />
        <Button
          text="+ Add New"
          onClick={() => {
            router.push("/students/new");
            return;
          }}
        />
      </div>
      <List
        items={students}
        errMess="Try adding some students to see them here."
      />
    </div>
  );
}
