"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface Event {
  id: number;
  title: string;
  date: Date;
  time?: string;
  description?: string;
}

interface CalendarGridProps {
  currentDate: Date;
  events: Event[];
  onDateClick: (date: Date) => void;
  onEventClick: (id: number) => void;
}

export default function CalendarGrid({
  currentDate,
  events,
  onDateClick,
  onEventClick,
}: CalendarGridProps) {
  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get first day of month and how many days in month
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  // Get previous month's last days
  const prevMonth = new Date(year, month - 1, 0);
  const daysInPrevMonth = prevMonth.getDate();

  const days = [];
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [detailOpened, setDetailOpened] = useState(false);

  // Previous month's trailing days
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, daysInPrevMonth - i),
      isCurrentMonth: false,
      isToday: false,
    });
  }

  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    days.push({
      date,
      isCurrentMonth: true,
      isToday: date.toDateString() === today.toDateString(),
    });
  }

  // Next month's leading days
  const remainingDays = 42 - days.length; // 6 rows × 7 days
  for (let day = 1; day <= remainingDays; day++) {
    days.push({
      date: new Date(year, month + 1, day),
      isCurrentMonth: false,
      isToday: false,
    });
  }

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
  };

  return (
    <div className="flex-1 p-4 py-0">
      {/* Day headers */}
      <div className="grid grid-cols-7">
        {dayNames.map((day) => (
          <div
            key={day}
            className="p-2 text-xs font-medium text-gray-600 text-center"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-0 border border-gray-200">
        {days.map((day, index) => {
          const dayEvents = getEventsForDate(day.date);

          return (
            <div
              key={index}
              onClick={() => onDateClick(day.date)}
              className={cn(
                "min-h-[120px] p-2 border-r border-b border-gray-200 cursor-pointer hover:bg-green-50 transition-colors",
                !day.isCurrentMonth && "text-gray-400 bg-green-50/50",
                day.isToday && "bg-green-50"
              )}
            >
              <div
                className={cn(
                  "text-sm font-medium mb-1",
                  day.isToday &&
                    "w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs"
                )}
              >
                {day.date.getDate()}
              </div>

              {/* Events */}
              <div className="space-y-1">
                {dayEvents.map((event) => (
                  <div className="flex gap-2 items-center">
                    <span className="text-xs">{event.time?.split("-")[0]}</span>
                    <div
                      key={event.id}
                      className="text-xs p-1 w-[100px] bg-green-600 text-white rounded truncate"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick(event.id);
                      }}
                    >
                      {event.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
