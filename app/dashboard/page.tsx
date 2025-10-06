"use client";

import { useEffect, useState } from "react";
import MetricCard from "@/components/MetricCard";
import CourseProgress from "@/components/CourseProgress";
import StudentList from "@/components/StudentList";
import UpcomingClasses from "@/components/UpcomingClasses";
import Loading from "../loading";
import { useRouter } from "next/navigation";

// 👇 New example placeholder components
// import YearlyOverview from "@/components/YearlyOverview";
// import TopStudents from "@/components/TopStudents";

// import AllTimeImpact from "@/components/AllTimeImpact";
// import VolunteerGrowth from "@/components/VolunteerGrowth";
// import AlumniStories from "@/components/AlumniStories";
import {
  AlumniStories,
  TeacherEngagement,
  AllTimeImpact,
  YearlyOverview,
  TopStudents,
} from "./Filter";
import PhotoDisplay from "./Photo";

const tabs = [
  { id: 1, name: "Semester" },
  { id: 2, name: "Year" },
  { id: 3, name: "All-Time" },
];

export default function Dashboard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const isAuthenticated = localStorage.getItem("isLogged");
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (isAuthenticated) {
      setMounted(true);
    } else {
      router.push("/login");
    }
  }, [isAuthenticated]);

  if (!mounted) return <Loading />;

  return (
    <div className="px-4 lg:px-0">
      {/* Dashboard Header */}
      <div className="mb-6 lg:mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[var(--heading)] mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Manage courses, students, and teaching activities with ease.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <nav className="my-6 lg:my-10">
        <div className="overflow-x-auto">
          <ul className="flex items-center gap-2 lg:gap-4 min-w-max lg:min-w-0">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`px-3 py-2 hover:bg-gradient-to-r border hover:from-green-500 hover:to-emerald-600 hover:text-white rounded-full flex gap-1 items-center whitespace-nowrap text-sm lg:text-base ${
                    active === tab.id
                      ? "text-white bg-gradient-to-r from-green-500 to-emerald-600"
                      : "text-green-700 bg-white border-green-400"
                  }`}
                  onClick={() => setActive(tab.id)}
                >
                  <span>{tab.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <MetricCard
          title="Total Courses"
          value={active === 1 ? "10" : active === 2 ? "15" : "50+"}
          change={`${active !== 3 ? "Increased from last" : ""} ${
            active === 1 ? "semester" : active === 3 ? "" : "year"
          }`}
          trend="up"
          isHighlighted={true}
        />
        <MetricCard
          title="Schools"
          value={active === 1 ? "5" : active === 2 ? "10" : "35+"}
        />
        <MetricCard
          title="Students"
          value={active === 1 ? "500" : active === 2 ? "800" : "3500+"}
          change={`${active !== 3 ? "Increased from last" : ""} ${
            active === 1 ? "semester" : active === 3 ? "" : "year"
          }`}
          trend="up"
        />
        <MetricCard
          title="Volunteers"
          value={active === 1 ? "50" : active === 2 ? "120" : "300+"}
          change=""
          trend="up"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
        {active === 1 && (
          <>
            {/* Semester View */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <UpcomingClasses />
              <CourseProgress />
            </div>
            <div className="space-y-6 lg:space-y-8">
              <StudentList />
            </div>
          </>
        )}

        {active === 2 && (
          <>
            {/* Year View */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <YearlyOverview />
              <TeacherEngagement />
            </div>
            <div className="space-y-6 lg:space-y-8">
              <TopStudents />
            </div>
          </>
        )}

        {active === 3 && (
          <>
            {/* All-Time View */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <AllTimeImpact />
              <PhotoDisplay />
            </div>
            <div className="space-y-6 lg:space-y-8">
              <AlumniStories />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
