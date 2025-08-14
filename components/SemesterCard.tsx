import { School, UserCircle, Users } from "lucide-react";
import React from "react";

export default function SemesterCard() {
  const term = Math.round(Math.random() * 2) + 1;
  const sup = ["st", "nd", "rd"];
  const status = [
    {
      title: "completed",
      className: "bg-gray-400 text-white",
    },
    {
      title: "on-going",
      className: "bg-yellow-500 text-white",
    },
    {
      title: "scheduled",
      className: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
    },
  ];
  return (
    <li className="rounded-md cursor-pointer">
      {/* banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-t-md">
        <h1 className="text-white text-3xl p-4 py-10 text-center">
          <span>
            ASFWA&mdash;4H Course <span>{term}</span>
            <sup>{sup[term - 1]}</sup> term
          </span>
          <br />
          <span className="text-xl">2024/25</span>
        </h1>
      </div>
      {/* content */}
      <div className="p-4 py-10 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <School />
            <span>5 Schools</span>
          </div>
          <div className="flex gap-2 items-center">
            <Users />
            <span>300 Students</span>
          </div>
          <div className="flex gap-2 items-center">
            <UserCircle />
            <span>20+ Instructors</span>
          </div>
        </div>
        {/* status */}
        <div
          className={`rounded-full px-4 py-2 w-fit mt-4 ${
            status[term - 1].className
          }`}
        >
          {status[term - 1].title}
        </div>
      </div>
    </li>
  );
}
