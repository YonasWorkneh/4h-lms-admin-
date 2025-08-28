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
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-between p-4 m-4 border-b border-gray-200 text-white rounded-t-md">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={onToday}
          className="text-gray-700 border-none bg-white/20 hover:bg-white/40 hover:text-white"
        >
          Today
        </Button>

        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="text-white hover:bg-white/50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="text-white hover:bg-white/50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <h2 className="text-xl font-normal text-white">{monthYear}</h2>
      </div>
    </div>
  );
}
