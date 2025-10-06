"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  HelpCircle,
  Settings,
  Grid3X3,
} from "lucide-react";

interface CalendarHeaderProps {
  currentDate: Date;
  onToday: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function CalendarHeader({
  currentDate,
  onToday,
  onPrevious,
  onNext,
}: CalendarHeaderProps) {
  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-3 sm:p-4 m-2 sm:m-4 border-b border-gray-200 text-white rounded-t-md gap-3 sm:gap-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
        <Button
          variant="outline"
          onClick={onToday}
          className="text-green-900 border-none bg-white/20 hover:bg-white/40 rounded-full text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2"
        >
          Today
        </Button>

        <div className="flex items-center justify-center sm:justify-start gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="text-white hover:bg-white/50 h-8 w-8 sm:h-10 sm:w-10"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="text-white hover:bg-white/50 h-8 w-8 sm:h-10 sm:w-10"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>

      <h2 className="text-base sm:text-lg lg:text-xl font-normal text-white text-center sm:text-left">
        {monthYear}
      </h2>
    </div>
  );
}
