"use client";

import Button from "@/components/Button";
import {
  User,
  UserLock,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import List from "@/components/List";

const volunteers = [
  {
    id: "6",
    name: "Ahadu Sefefe",
    username: "ahadusefefe",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "ahadu.sefefe@example.et",
    phone: "+251-92-000-0006",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "7",
    name: "Lidya Sefefe",
    username: "lidyasefefe",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "lidya.sefefe@example.et",
    phone: "+251-92-000-0007",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "8",
    name: "Bethelhem Tefera",
    username: "bethelhemtefera",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "bethelhem.tefera@example.et",
    phone: "+251-92-000-0008",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "10",
    name: "Abigya Ayele",
    username: "abigyaayele",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "abigya.ayele@example.et",
    phone: "+251-92-000-0010",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "11",
    name: "Yeabsira Solomon",
    username: "yeabsirasolomon",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "yeabsira.solomon@example.et",
    phone: "+251-92-000-0011",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "12",
    name: "Bereket",
    username: "bereket",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "bereket@example.et",
    phone: "+251-92-000-0012",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "13",
    name: "Lewi Binyam",
    username: "lewibinyam",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "lewi.binyam@example.et",
    phone: "+251-92-000-0013",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "14",
    name: "Yanet Binyam",
    username: "yanetbinyam",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "yanet.binyam@example.et",
    phone: "+251-92-000-0014",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "15",
    name: "Yedi Binyam",
    username: "yedibinyam",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "yedi.binyam@example.et",
    phone: "+251-92-000-0015",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "16",
    name: "Gelila Yohannes",
    username: "gelilayohannes",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "gelila.yohannes@example.et",
    phone: "+251-92-000-0016",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "17",
    name: "Bethelehem Yohannes",
    username: "bethelehemyohannes",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "bethelehem.yohannes@example.et",
    phone: "+251-92-000-0017",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "18",
    name: "Beti Chung",
    username: "betichung",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "beti.chung@example.et",
    phone: "+251-92-000-0018",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "19",
    name: "Eyob Mulugeta",
    username: "eyobmulugeta",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "eyob.mulugeta@example.et",
    phone: "+251-92-000-0019",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "20",
    name: "Eyoab Samson",
    username: "eyoabsamson",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "eyoab.samson@example.et",
    phone: "+251-92-000-0020",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "21",
    name: "Fekadeselassie Melaku",
    username: "fekadeselassiemelaku",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "fekadeselassie.melaku@example.et",
    phone: "+251-92-000-0021",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "22",
    name: "Babi Melaku",
    username: "babimelaku",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "babi.melaku@example.et",
    phone: "+251-92-000-0022",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "23",
    name: "Nahom Temam",
    username: "nahomtemam",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "nahom.temam@example.et",
    phone: "+251-92-000-0023",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "24",
    name: "Beminet Zewdu",
    username: "beminetzewdu",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "beminet.zewdu@example.et",
    phone: "+251-92-000-0024",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
];

const admins = [
  {
    id: "1",
    name: "Beza Tesfaye",
    username: "bezatesfaye",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "beza.tesfaye@example.et",
    phone: "+251-92-000-0001",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "6",
    name: "Mahlet",
    username: "mahlet",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "mahlet@example.et",
    phone: "+251-92-000-0003",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "2",
    name: "Yonatan",
    username: "yonatan",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "yonatan@example.et",
    phone: "+251-92-000-0002",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "3",
    name: "Wube",
    username: "wube",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "wube@example.et",
    phone: "+251-92-000-0003",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "4",
    name: "Bisrat Yohannes",
    username: "bisratyohannes",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "bisrat.yohannes@example.et",
    phone: "+251-92-000-0004",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "5",
    name: "Mekdes",
    username: "mekdes",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "mekdes@example.et",
    phone: "+251-92-000-0005",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "9",
    name: "Betehel Ayele",
    username: "betehelayele",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "betehel.ayele@example.et",
    phone: "+251-92-000-0009",
    status: "Active",
    enrolledDate: "July 3, 2018",
  },
];

const tabs = [
  { id: 1, name: "Admins", icon: UserLock },
  { id: 2, name: "Non-Admins", icon: User },
];

export default function Page() {
  const router = useRouter();
  const [active, setActive] = useState(1);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-2 text-[var(--heading)]">
          Volunteers
        </h1>
        <p className="text-gray-600 flex gap-2 items-center mt-2">
          Manage volunteers &mdash; add , edit and remove volunteers.
        </p>
      </div>
      {/* main-content */}
      <div className="mt-10">
        <nav>
          <ul className="flex items-center gap-4">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`px-3 py-2 hover:bg-gradient-to-r border hover:from-green-500 hover:to-emerald-600 hover:text-white rounded-full flex gap-1 items-center ${
                    active === tab.id
                      ? "text-white bg-gradient-to-r from-green-500 to-emerald-600"
                      : "text-green-700 bg-white border-green-400"
                  }`}
                  onClick={() => setActive(tab.id)}
                >
                  {<tab.icon size={16} />}
                  <span>{tab.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* sidebar */}

        <div className="mt-10">
          <div className="flex justify-between items-center">
            <SearchBar placeholder="Search volunteer..." onSearch={() => {}} />
            <Button
              text="+ Add New"
              onClick={() => {
                router.push("/volunteer-list/new");
                return;
              }}
            />
          </div>
          <List items={active === 1 ? admins : volunteers} />
        </div>
      </div>
    </div>
  );
}
