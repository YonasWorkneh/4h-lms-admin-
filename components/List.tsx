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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";

export default function List({
  items = [],
  errMess = "Try adding some users to see them here.",
  onEnroll,
  onBulkEnroll,
  courses = [],
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentItems = items.slice(indexOfFirstUser, indexOfLastUser);

  // Handle individual item selection
  const handleItemSelect = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(currentItems.map((item: any) => item.id));
    }
    setSelectAll(!selectAll);
  };

  // Handle individual enrollment
  const handleIndividualEnroll = (studentId: string, courseId: string) => {
    if (onEnroll) {
      onEnroll(studentId, courseId);
    }
  };

  // Handle bulk enrollment
  const handleBulkEnroll = (courseId: string) => {
    if (onBulkEnroll && selectedItems.length > 0) {
      onBulkEnroll(selectedItems, courseId);
      setSelectedItems([]);
      setSelectAll(false);
    }
  };

  return (
    <div className="container p-4 px-0">
      {/* Bulk Actions Bar */}
      {selectedItems.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                {selectedItems.length} student
                {selectedItems.length !== 1 ? "s" : ""} selected
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Select onValueChange={handleBulkEnroll}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select course to enroll" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course: any) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedItems([]);
                  setSelectAll(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white/70 rounded-lg shadow overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[40px_1fr_150px_150px_40px] items-center border-b py-3 px-4 text-sm font-medium text-gray-500">
          <Checkbox
            id="select-all"
            aria-label="Select all students"
            className="accent-green-600"
            checked={selectAll}
            onCheckedChange={handleSelectAll}
          />
          <div>Name</div>
          <div>Status</div>
          <div>Registered</div>
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
                  checked={selectedItems.includes(item.id)}
                  onCheckedChange={() => handleItemSelect(item.id)}
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
                    <DropdownMenuItem className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>Enroll in Course</span>
                      <Select
                        onValueChange={(courseId) =>
                          handleIndividualEnroll(item.id, courseId)
                        }
                      >
                        <SelectTrigger className="w-48 ml-2">
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course: any) => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </DropdownMenuItem>
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
