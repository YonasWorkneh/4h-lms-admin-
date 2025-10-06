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
import React, { useState } from "react";

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
    setSelectedItems((prev) => {
      const newSelection = prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId];

      // Update selectAll state based on new selection
      const currentPageItemIds = currentItems.map((item: any) => item.id);
      const isCurrentPageFullySelected = currentPageItemIds.every((id) =>
        newSelection.includes(id)
      );
      setSelectAll(isCurrentPageFullySelected && currentPageItemIds.length > 0);

      return newSelection;
    });
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectAll) {
      // If currently selecting all, deselect all items
      setSelectedItems([]);
      setSelectAll(false);
    } else {
      // If not selecting all, select all items from current page
      const currentPageItemIds = currentItems.map((item: any) => item.id);
      setSelectedItems(currentPageItemIds);
      setSelectAll(true);
    }
  };

  // Update selectAll state based on current page selection
  const isCurrentPageFullySelected = currentItems.every((item: any) =>
    selectedItems.includes(item.id)
  );

  // Update selectAll checkbox state
  React.useEffect(() => {
    setSelectAll(isCurrentPageFullySelected && currentItems.length > 0);
  }, [selectedItems, currentItems, isCurrentPageFullySelected]);

  // Reset selectAll state when page changes
  React.useEffect(() => {
    setSelectAll(false);
  }, [currentPage]);

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
    <div className="container p-2 sm:p-4 px-0">
      {/* Bulk Actions Bar */}
      {selectedItems.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              <span className="text-xs sm:text-sm font-medium text-green-800">
                {selectedItems.length} student
                {selectedItems.length !== 1 ? "s" : ""} selected
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Select onValueChange={handleBulkEnroll}>
                <SelectTrigger className="w-full sm:w-48 lg:w-64 text-xs sm:text-sm">
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
                className="w-full sm:w-auto text-xs sm:text-sm"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white/70 rounded-lg shadow overflow-hidden">
        {/* Desktop Table Header - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-[40px_1fr_150px_150px_40px] items-center border-b py-3 px-4 text-sm font-medium text-gray-500">
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

        {/* Mobile Header - Visible on mobile */}
        <div className="md:hidden flex items-center justify-between border-b py-3 px-4">
          <Checkbox
            id="select-all-mobile"
            aria-label="Select all students"
            className="accent-green-600"
            checked={selectAll}
            onCheckedChange={handleSelectAll}
          />
          <span className="text-sm font-medium text-gray-500">Students</span>
          <div className="w-8"></div> {/* Spacer for alignment */}
        </div>

        {/* No Items UI */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-gray-500 px-4">
            <p className="text-base sm:text-lg font-medium">No items found</p>
            <p className="text-xs sm:text-sm text-center">{errMess}</p>
          </div>
        ) : (
          <>
            {/* Desktop Table Rows */}
            <div className="hidden md:block">
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
                      <div className="font-medium text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500">@{item.email}</div>
                    </div>
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      item.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </div>
                  <div className="text-sm text-gray-700">
                    {item.enrolledDate}
                  </div>
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
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden space-y-2">
              {currentItems.map((item: any) => (
                <div
                  key={item.id}
                  className="border-b border-gray-100 p-4 hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id={`select-item-mobile-${item.id}`}
                      aria-label={`Select item ${item.name}`}
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => handleItemSelect(item.id)}
                      className="mt-1"
                    />
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarImage
                        src={item.avatar || "/placeholder.svg"}
                        alt={item.name}
                      />
                      <AvatarFallback>{item.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900 text-sm truncate">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {item.email}
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="text-xs">
                              View User
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-xs">
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-xs flex items-center gap-2">
                              <GraduationCap className="h-3 w-3" />
                              <span>Enroll in Course</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-xs">
                              Delete User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <div
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            item.status === "Active"
                              ? "text-green-700 bg-green-100"
                              : "text-red-700 bg-red-100"
                          }`}
                        >
                          {item.status}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.enrolledDate}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-full sm:w-auto text-xs sm:text-sm"
              >
                <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Previous
              </Button>

              {/* Desktop Pagination */}
              <div className="hidden sm:flex items-center gap-1 lg:gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={`text-xs lg:text-sm ${
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

              {/* Mobile Pagination */}
              <div className="sm:hidden flex items-center gap-2">
                <span className="text-xs text-gray-500">
                  Page {currentPage} of {totalPages}
                </span>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="w-full sm:w-auto text-xs sm:text-sm"
              >
                Next
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
