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
    <li className="bg-white list-none rounded-md shadow-md shadow-[#c8c7c793]">
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
          {title}
        </h1>
        <p className="text-">
          {description?.length > 40
            ? `${description?.slice(0, 40)}..`
            : description}
          .
        </p>
        {/* <div className="flex justify-between items-center mt-3">
          <div className="space-x-2 flex items-center">
            <Calendar />
            <span className="text-sm">{start}</span>
          </div>
        </div> */}
        <Link href={`/course-list/${title.toLowerCase().split(" ").join("")}`}>
          <Button text="Details" styles="mt-4" />
        </Link>
      </div>
    </li>
  );
}
