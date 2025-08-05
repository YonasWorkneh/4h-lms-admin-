"use client";
import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import React from "react";

export default function page() {
  const courses = [
    {
      title: "Graphics Design",
      description:
        "Master the fundamentals of visual design using tools like Photoshop and Illustrator.",
      img: "/img/graphics.jpeg",
      numStuds: 120,
      start: "2025-09-01",
      end: "2025-10-15",
    },
    {
      title: "Marketing",
      description:
        "Learn digital marketing, branding, and consumer behavior to grow any business online.",
      img: "/img/marketing.jpg",
      numStuds: 95,
      start: "2025-09-05",
      end: "2025-10-20",
    },
    {
      title: "Web Development",
      description:
        "Build dynamic websites with HTML, CSS, JavaScript, and modern frameworks.",
      img: "/img/webdev.jpg",
      numStuds: 180,
      start: "2025-09-10",
      end: "2025-11-01",
    },
    {
      title: "MIoT",
      description:
        "Explore Mobile and IoT development with real-world sensor integration and cloud control.",
      img: "/img/miot.png",
      numStuds: 70,
      start: "2025-09-12",
      end: "2025-10-30",
    },
    {
      title: "Scratch Programming",
      description:
        "Introduce kids to programming using Scratch's fun and interactive drag-and-drop interface.",
      img: "/img/scratch.jpg",
      numStuds: 150,
      start: "2025-09-03",
      end: "2025-10-10",
    },
    {
      title: "Know Your Globe",
      description:
        "An engaging journey across continents, cultures, and global challenges.",
      img: "/img/knowyourglobe.jpg",
      numStuds: 85,
      start: "2025-09-07",
      end: "2025-10-25",
    },
  ]; // sample data

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-2 text-[var(--heading)]">
          Courses
        </h1>
        <p className="text-gray-600">
          Manage courses <span className="text-green-700">&mdash;</span> create,
          edit and delete courses.
        </p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <SearchBar
          placeholder="Search for courses"
          onSearch={() => {
            console.log("");
          }}
        />
        <Link href={"/course-list/new"}>
          <Button text="+ Create New " />
        </Link>
      </div>
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            img={course.img}
            numStuds={course.numStuds}
            start={course.start}
            end={course.end}
          />
        ))}
      </ul>
    </div>
  );
}
