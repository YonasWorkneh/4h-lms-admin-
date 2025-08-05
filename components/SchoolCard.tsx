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
      className="bg-white list-none rounded-md shadow-md shadow-[#c8c7c793] cursor-pointer"
      onClick={() => handleClick()}
    >
      <div
        className={`w-full h-[300px] rounded-t-md`}
        style={{
          background: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* padding wrapper */}
      <div className="px-4 py-5">
        <h1 className="capitalize font-bold text-[var(--heading)] text-xl">
          {name}
        </h1>
        <p className="flex items-center gap-2 mt-4">
          <MapPin />
          {location}
        </p>
        <div className="flex justify-between items-center mt-3">
          <span
            className={`${
              status
                ? "bg-gradient-to-r from-green-500 to-emerald-600"
                : "bg-gray-400"
            } p-1 px-6 rounded-full text-white`}
          >
            {status ? "active" : "In-active"}
          </span>
          <p className="space-x-2">
            <Users />
            <span className="text-sm font-bold">{numStuds}</span>
            <span>students</span>
          </p>
        </div>
      </div>
    </li>
  );
}
