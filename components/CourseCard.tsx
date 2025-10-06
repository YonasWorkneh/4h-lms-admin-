import { Calendar, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function CourseCard({
  title,
  description,
  img,
  numStuds,
  start,
  end,
}: {
  img: string;
  title: string;
  description: string;
  numStuds: number;
  start: string;
  end: string;
}) {
  return (
    <li className="bg-white list-none rounded-md shadow-md shadow-[#c8c7c793] hover:shadow-lg transition-shadow duration-200">
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
          {title}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
          {description?.length > 40
            ? `${description?.slice(0, 40)}..`
            : description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
            <Users className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-medium">{numStuds} students</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>{start}</span>
          </div>
        </div>

        <Link href={`/course-list/${title.toLowerCase().split(" ").join("")}`}>
          <Button text="Details" styles="mt-2 sm:mt-4 w-full sm:w-auto" />
        </Link>
      </div>
    </li>
  );
}
