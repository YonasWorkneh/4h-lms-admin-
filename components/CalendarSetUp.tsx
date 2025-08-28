import { Info } from "lucide-react";
import Calendar from "./Calendar";

export default function CalendarSetUp() {
  return (
    <div className="border border-green-200 bg-white/50 rounded-md p-2">
      <p className="text-green-900 font-bold text-xl flex items-center gap-4">
        <span className="text-3xl">📆</span>
        <span>Calendar Setup</span>
      </p>
      <p className="mt-4 text-sm flex gap-2 items-center mb-5">
        <Info size={18} className="text-green-900" />
        <span className="text-black/50">
          Important events and schedules in the semester.
        </span>
      </p>
      <Calendar />
    </div>
  );
}
