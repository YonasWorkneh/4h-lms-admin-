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

const students: User[] = [
  {
    id: "1",
    name: "Abebe Bekele",
    username: "abebeb",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "abebe.bekele@example.et",
    phone: "+251-91-123-4567",
    status: "Active",
    enrolledDate: "February 5, 2020",
  },
  {
    id: "2",
    name: "Meseret Tadesse",
    username: "meserett",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "meseret.tadesse@example.et",
    phone: "+251-91-987-6543",
    status: "Active",
    enrolledDate: "October 10, 2019",
  },
  {
    id: "3",
    name: "Tewodros Alemu",
    username: "tewodrosa",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "tewodros.alemu@example.et",
    phone: "+251-92-456-7890",
    status: "Inactive",
    enrolledDate: "July 3, 2018",
  },
  {
    id: "4",
    name: "Hana Kebede",
    username: "hanak",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "hana.kebede@example.et",
    phone: "+251-91-234-5678",
    status: "Active",
    enrolledDate: "March 15, 2021",
  },
  {
    id: "5",
    name: "Sisay Mekonnen",
    username: "sisaym",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "sisay.mekonnen@example.et",
    phone: "+251-93-876-5432",
    status: "Active",
    enrolledDate: "January 11, 2020",
  },
  {
    id: "6",
    name: "Lily Fikadu",
    username: "lilyf",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "lily.fikadu@example.et",
    phone: "+251-94-567-8901",
    status: "Inactive",
    enrolledDate: "May 22, 2017",
  },
  {
    id: "7",
    name: "Yonas Worku",
    username: "yonasw",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "yonas.worku@example.et",
    phone: "+251-91-345-6789",
    status: "Active",
    enrolledDate: "September 8, 2016",
  },
];

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // You can adjust this number
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
            className="grid grid-cols-[40px_1fr_150px_150px_40px] items-center border-b py-3 px-4 hover:bg-gray-50"
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
                className={`${currentPage === page ? "bg-green-600" : ""}`}
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
