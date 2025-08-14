"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Plus, ChevronDown } from "lucide-react";

interface Event {
  id: string;
  name: string;
  date: string;
  color: string;
}

const eventColors = [
  "bg-emerald-500",
  "bg-green-500",
  "bg-teal-500",
  "bg-lime-500",
  "bg-cyan-500",
];

// Generate sample events for current month
const generateSampleEvents = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");

  return [
    {
      id: "1",
      name: "Exercise",
      date: `${currentYear}-${currentMonth}-01`,
      color: "bg-emerald-500",
    },
    {
      id: "2",
      name: "Longer Event...",
      date: `${currentYear}-${currentMonth}-01`,
      color: "bg-teal-500",
    },
    {
      id: "3",
      name: "Event one",
      date: `${currentYear}-${currentMonth}-11`,
      color: "bg-green-500",
    },
    {
      id: "4",
      name: "Longer Event...",
      date: `${currentYear}-${currentMonth}-11`,
      color: "bg-teal-500",
    },
    {
      id: "5",
      name: "Event one",
      date: `${currentYear}-${currentMonth}-11`,
      color: "bg-lime-500",
    },
    {
      id: "6",
      name: "Event one",
      date: `${currentYear}-${currentMonth}-20`,
      color: "bg-emerald-500",
    },
    {
      id: "7",
      name: "Longer Event...",
      date: `${currentYear}-${currentMonth}-20`,
      color: "bg-teal-500",
    },
    {
      id: "8",
      name: "Longer Event...",
      date: `${currentYear}-${currentMonth}-20`,
      color: "bg-green-500",
    },
  ];
};

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>(generateSampleEvents());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [eventName, setEventName] = useState("");
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const getEventsForDate = (dateString: string) => {
    return events.filter((event) => event.date === dateString);
  };

  const handleDateClick = (day: number) => {
    const dateString = formatDate(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(dateString);
    setIsModalOpen(true);
  };

  const handleAddEvent = () => {
    if (eventName.trim() && selectedDate) {
      const newEvent: Event = {
        id: Date.now().toString(),
        name: eventName.trim(),
        date: selectedDate,
        color: eventColors[Math.floor(Math.random() * eventColors.length)],
      };
      setEvents([...events, newEvent]);
      setEventName("");
      setIsModalOpen(false);
    }
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const handleYearChange = (year: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setFullYear(year);
      return newDate;
    });
    setShowYearDropdown(false);
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      years.push(i);
    }
    return years;
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const prevMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        0
      );
      const prevMonthDay = prevMonth.getDate() - (firstDay - i - 1);
      days.push(
        <div
          key={`prev-${i}`}
          className="h-24 p-2 text-gray-400 border border-gray-100"
        >
          <div className="text-sm">{prevMonthDay}</div>
        </div>
      );
    }

    // Days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = formatDate(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const dayEvents = getEventsForDate(dateString);

      days.push(
        <div
          key={day}
          className="h-24 p-2 border border-gray-100 cursor-pointer hover:bg-green-50 transition-colors"
          onClick={() => handleDateClick(day)}
        >
          <div className="text-sm font-medium text-gray-900 mb-1">{day}</div>
          <div className="space-y-1">
            {dayEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${event.color}`}></div>
                <span className="text-xs text-gray-600 truncate">
                  {event.name}
                </span>
              </div>
            ))}
            {dayEvents.length > 3 && (
              <div className="text-xs text-gray-500">
                +{dayEvents.length - 3} more
              </div>
            )}
          </div>
        </div>
      );
    }

    // Fill remaining cells with next month's days
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    for (let day = 1; days.length < totalCells; day++) {
      days.push(
        <div
          key={`next-${day}`}
          className="h-24 p-2 text-gray-400 border border-gray-100"
        >
          <div className="text-sm">{day}</div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth("prev")}
          className="text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          {currentDate.getMonth() === 0
            ? "Dec"
            : monthNames[currentDate.getMonth() - 1]}
        </Button>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">
              {monthNames[currentDate.getMonth()]}
            </h2>
            <div className="relative">
              <button
                onClick={() => setShowYearDropdown(!showYearDropdown)}
                className="flex items-center gap-1 text-xl font-semibold hover:bg-white/20 px-2 py-1 rounded transition-colors"
              >
                {currentDate.getFullYear()}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showYearDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto min-w-[100px]">
                  {generateYearOptions().map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearChange(year)}
                      className={`block w-full px-4 py-2 text-left text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors ${
                        year === currentDate.getFullYear()
                          ? "bg-green-100 text-green-700 font-medium"
                          : ""
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsModalOpen(true)}
            className="text-white hover:bg-white/20"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth("next")}
          className="text-white hover:bg-white/20"
        >
          {currentDate.getMonth() === 11
            ? "Jan"
            : monthNames[currentDate.getMonth() + 1]}
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="border border-gray-200 rounded-b-lg overflow-hidden bg-white">
        {/* Day Headers */}
        <div className="grid grid-cols-7 bg-green-50">
          {dayNames.map((day) => (
            <div
              key={day}
              className="p-3 text-center text-sm font-medium text-green-700 border-r border-gray-200 last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 bg-white">{renderCalendarDays()}</div>
      </div>

      {/* Overlay to close dropdown */}
      {showYearDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowYearDropdown(false)}
        />
      )}

      {/* Add Event Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-green-700">Add New Event</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="date"
                className="text-sm font-medium text-gray-700"
              >
                Selected Date
              </Label>
              <Input
                id="date"
                value={
                  selectedDate
                    ? new Date(selectedDate + "T00:00:00").toLocaleDateString()
                    : ""
                }
                disabled={selectedDate ? true : false}
                className="mt-1 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
              />
            </div>
            <div>
              <Label
                htmlFor="eventName"
                className="text-sm font-medium text-gray-700"
              >
                Event Name
              </Label>
              <Input
                id="eventName"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter event name..."
                className="mt-1 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                onKeyDown={(e) => e.key === "Enter" && handleAddEvent()}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setIsModalOpen(false);
                  setEventName("");
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddEvent}
                disabled={!eventName.trim()}
                className="bg-green-600 hover:bg-green-700"
              >
                Add Event
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
