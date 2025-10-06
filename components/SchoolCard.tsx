import { Calendar, MapPin, Users } from "lucide-react";
import React from "react";
import Button from "./Button";
import Link from "next/link";

interface SchoolCardProps {
  img: string;
  name: string;
  location: string;
  numStuds: number;
  status: boolean;
  handleClick: () => void;
}

export default function SchoolCard({
  name,
  location,
  img,
  numStuds,
  status,
  handleClick,
}: SchoolCardProps) {
  return (
    <li
      className="bg-white list-none rounded-md shadow-md shadow-[#c8c7c793] cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={() => handleClick()}
    >
      <div
        className={`w-full h-48 sm:h-56 lg:h-[300px] rounded-t-md`}
        style={{
          background: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* padding wrapper */}
      <div className="px-3 py-4 sm:px-4 sm:py-5">
        <h1 className="capitalize font-bold text-[var(--heading)] text-lg sm:text-xl mb-2">
          {name}
        </h1>
        <p className="flex items-center gap-2 mt-2 sm:mt-4 text-sm sm:text-base text-gray-600">
          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-2 sm:gap-0">
          <span
            className={`${
              status
                ? "bg-gradient-to-r from-green-500 to-emerald-600"
                : "bg-gray-400"
            } px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium`}
          >
            {status ? "Active" : "Inactive"}
          </span>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
            <Users className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-bold">{numStuds}</span>
            <span>students</span>
          </div>
        </div>
      </div>
    </li>
  );
}
