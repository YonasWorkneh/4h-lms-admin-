"use client";

import NoCourses from "@/components/NoItem";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses = [
  {
    id: "graphicsdesign",
    title: "Graphics Design",
    description:
      "Master the fundamentals of visual design using tools like Photoshop, Illustrator, and InDesign. This course covers typography, color theory, layout design, branding, and digital illustration. Students will engage in hands-on projects, creating logos, posters, social media graphics, and other real-world design assets. By the end of this course, you will have a professional portfolio showcasing your skills and understanding of design principles applied across multiple media platforms.",
    img: "/img/graphics.jpeg",
    numStuds: 120,
    start: "2025-09-01",
    end: "2025-10-15",
    lessPlan:
      "https://docs.google.com/spreadsheets/d/1ObsUplgd__N-1aKrXm6mjBfD2Li8SZHnTeX9uqi0m9k/edit?gid=0#gid=0",
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Learn the full spectrum of digital marketing, branding, consumer behavior, and marketing analytics to grow any business online. This course dives into content marketing, social media campaigns, search engine optimization (SEO), email marketing, influencer marketing, and paid advertising strategies. Students will also learn how to craft marketing strategies based on data insights, segment audiences effectively, and measure the success of campaigns. By the end, you’ll be able to create comprehensive marketing plans that drive measurable results.",
    img: "/img/marketing.jpg",
    numStuds: 95,
    start: "2025-09-05",
    end: "2025-10-20",
    lessPlan:
      "https://docs.google.com/spreadsheets/d/1ObsUplgd__N-1aKrXm6mjBfD2Li8SZHnTeX9uqi0m9k/edit?gid=0#gid=0",
  },
  {
    id: "webdevelopment",
    title: "Web Development",
    description:
      "Build dynamic, interactive, and responsive websites using HTML, CSS, JavaScript, and modern frameworks like React, Next.js, and Node.js. This course takes students from the basics of web structure to advanced frontend and backend development, including REST APIs, authentication, and database integration. You’ll learn how to create real-world projects like e-commerce sites, portfolios, and web apps, ensuring your skills are ready for professional development environments. Emphasis is placed on writing clean, maintainable code and understanding web performance optimization.",
    img: "/img/webdev.jpg",
    numStuds: 180,
    start: "2025-09-10",
    end: "2025-11-01",
    lessPlan:
      "https://docs.google.com/spreadsheets/d/1ObsUplgd__N-1aKrXm6mjBfD2Li8SZHnTeX9uqi0m9k/edit?gid=0#gid=0",
  },
  {
    id: "miot",
    title: "MIoT",
    description:
      "Explore Internet of Things (IoT) with real-world sensor integration, cloud computing, and mobile app interaction. Students will learn to program microcontrollers, integrate sensors and actuators, manage data on cloud platforms, and build connected devices that interact with mobile applications. This course combines theory with hands-on projects, such as smart home systems, wearable devices, and environmental monitoring solutions. By the end of the course, students will understand how to design, deploy, and troubleshoot IoT systems effectively.",
    img: "/img/miot.png",
    numStuds: 70,
    start: "2025-09-12",
    end: "2025-10-30",
    lessPlan:
      "https://docs.google.com/spreadsheets/d/1ObsUplgd__N-1aKrXm6mjBfD2Li8SZHnTeX9uqi0m9k/edit?gid=0#gid=0",
  },
  {
    id: "scratchprogramming",
    title: "Scratch Programming",
    description:
      "Introduce kids and beginners to programming concepts using Scratch's fun, visual, and interactive drag-and-drop interface. This course teaches logical thinking, problem-solving, animation, and game development in a playful environment. Students will create projects that include interactive stories, simple games, and animations, reinforcing coding fundamentals without requiring prior experience. By the end of this course, students will have the confidence to move to more advanced programming languages while having a strong foundation in computational thinking.",
    img: "/img/scratch.jpg",
    numStuds: 150,
    start: "2025-09-03",
    end: "2025-10-10",
    lessPlan:
      "https://docs.google.com/spreadsheets/d/1ObsUplgd__N-1aKrXm6mjBfD2Li8SZHnTeX9uqi0m9k/edit?gid=0#gid=0",
  },
  {
    id: "knowyourglobe",
    title: "Know Your Globe",
    description:
      "An engaging and comprehensive journey across continents, cultures, and global challenges. Students will explore geography, history, environmental issues, and cultural diversity through interactive projects and research-based activities. The course also emphasizes global awareness, critical thinking, and problem-solving skills as students analyze real-world scenarios and case studies. By the end, students will gain a deep understanding of the interconnectedness of the world and the ability to approach global challenges with informed perspectives.",
    img: "/img/knowyourglobe.jpg",
    numStuds: 85,
    start: "2025-09-07",
    end: "2025-10-25",
    lessPlan:
      "https://docs.google.com/spreadsheets/d/1ObsUplgd__N-1aKrXm6mjBfD2Li8SZHnTeX9uqi0m9k/edit?gid=0#gid=0",
  },
];

export default function page() {
  const { id } = useParams();
  const course = courses.find((course: any) => course.id === id);
  if (!course) return <NoCourses />;

  const { img, title, description, lessPlan } = course;
  return (
    <div className="min-h-screen">
      {/* Mobile Layout */}
      <div className="md:hidden space-y-6">
        {/* Course Image */}
        <div
          className="w-full h-48 sm:h-64 rounded-lg"
          style={{
            background: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Course Info */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-700">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>

          <Link
            href={lessPlan}
            target="_blank"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm sm:text-base underline decoration-green-600"
          >
            <LinkIcon className="text-green-700" size={16} />
            <span>Lesson plan</span>
          </Link>

          <div className="space-y-2">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Course Status
            </label>
            <Select value="1">
              <SelectTrigger
                id="term"
                className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 w-full"
              >
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Pending</SelectItem>
                <SelectItem value="2">Approved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8">
        <div
          className="w-full h-80 lg:h-96 rounded-lg"
          style={{
            background: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-700">
            {title}
          </h1>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <Link
            href={lessPlan}
            target="_blank"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 underline decoration-green-600"
          >
            <LinkIcon className="text-green-700" size={18} />
            <span>Lesson plan</span>
          </Link>

          <div className="space-y-3">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Course Status
            </label>
            <Select value="1">
              <SelectTrigger
                id="term"
                className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 w-1/2"
              >
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Pending</SelectItem>
                <SelectItem value="2">Approved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
