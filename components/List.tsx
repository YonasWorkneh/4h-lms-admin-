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

export default function List({
  items = [],
  errMess = "Try adding some users to see them here.",
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentItems = items.slice(indexOfFirstUser, indexOfLastUser);

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

        {/* No Items UI */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <p className="text-lg font-medium">No items found</p>
            <p className="text-sm">{errMess}</p>
          </div>
        ) : (
          <>
            {/* Table Rows */}
            {currentItems.map((item: any) => (
              <div
                key={item.id}
                className="grid grid-cols-[40px_1fr_150px_150px_40px] items-center border-b py-3 px-4 hover:bg-gray-50 cursor-pointer"
              >
                <Checkbox
                  id={`select-item-${item.id}`}
                  aria-label={`Select item ${item.name}`}
                />
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={item.avatar || "/placeholder.svg"}
                      alt={item.name}
                    />
                    <AvatarFallback>{item.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">@{item.email}</div>
                  </div>
                </div>
                <div
                  className={`text-sm font-medium ${
                    item.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.status}
                </div>
                <div className="text-sm text-gray-700">{item.enrolledDate}</div>
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
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
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
                  )
                )}
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
          </>
        )}
      </div>
    </div>
  );
}
