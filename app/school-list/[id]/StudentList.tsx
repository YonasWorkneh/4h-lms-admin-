"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  email: string;
  phone: string;
  status: "Active" | "Inactive";
  enrolledDate: string;
}

const students = [
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
    id: "9",
    name: "Betehel Ayele",
    username: "betehelayele",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "betehel.ayele@example.et",
    phone: "+251-92-000-0009",
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

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // You can adjust this number
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentStudents = students.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container p-4 px-0">
      <div className="bg-white/70 rounded-lg shadow overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[40px_1fr_150px_150px_40px] items-center border-b py-3 px-4 text-sm font-medium text-gray-500">
          <Checkbox
            id="select-all"
            aria-label="Select all students"
            className="accent-green-600"
          />
          <div>Name</div>
          <div>Status</div>
          <div>Enrolled</div>
          <div className="sr-only">Actions</div>
        </div>

        {/* Table Rows */}
        {currentStudents.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-[40px_1fr_150px_150px_40px] items-center border-b py-3 px-4 hover:bg-gray-50 cursor-pointer"
          >
            <Checkbox
              id={`select-user-${user.id}`}
              aria-label={`Select user ${user.name}`}
            />
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-500">@{user.email}</div>
              </div>
            </div>
            <div
              className={`text-sm font-medium ${
                user.status === "Active" ? "text-green-600" : "text-red-600"
              }`}
            >
              {user.status}
            </div>
            <div className="text-sm text-gray-700">{user.enrolledDate}</div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View User</DropdownMenuItem>
                <DropdownMenuItem>Edit User</DropdownMenuItem>
                <DropdownMenuItem>Delete User</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="flex items-center justify-between px-4 py-3 border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={`${
                  currentPage === page
                    ? "bg-green-600 hover:bg-green-700"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
