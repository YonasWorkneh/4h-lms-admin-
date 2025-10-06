import { Info } from "lucide-react";
import Calendar from "./Calendar";

export default function CalendarSetUp() {
  return (
    <div className="border border-green-200 bg-white/50 rounded-md p-3 sm:p-4 lg:p-6">
      <div className="mb-4 sm:mb-6">
        <p className="text-green-900 font-bold text-lg sm:text-xl lg:text-2xl flex items-center gap-2 sm:gap-4">
          <span className="text-2xl sm:text-3xl">📆</span>
          <span>Calendar Setup</span>
        </p>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm flex gap-2 items-start sm:items-center mb-4 sm:mb-5">
          <Info
            size={16}
            className="text-green-900 flex-shrink-0 mt-0.5 sm:mt-0"
          />
          <span className="text-black/50">
            Important events and schedules in the semester.
          </span>
        </p>
      </div>
      <Calendar />
    </div>
  );
}
