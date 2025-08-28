"use client";

import { useEffect, useState } from "react";
import MetricCard from "@/components/MetricCard";
import CourseProgress from "@/components/CourseProgress";
import StudentList from "@/components/StudentList";
import UpcomingClasses from "@/components/UpcomingClasses";
import Loading from "../loading";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const isAuthenticated = localStorage.getItem("isLogged");
  console.log("isLOFFED", isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      console.log("getting in dsa");
      setMounted(true);
    } else {
      router.push("/login");
    }
  }, [isAuthenticated]);

  if (!mounted) return <Loading />;
  return (
    <div>
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--heading)] mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Manage courses, students, and teaching activities with ease.
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Courses"
          value="12"
          change="Increased from last semester"
          trend="up"
          isHighlighted={true}
        />
        <MetricCard
          title="Active Schools"
          value="5"
          subtitle="Needs Attention"
        />
        <MetricCard
          title="Active Students"
          value="500"
          change="Increased from last month"
          trend="up"
        />
        <MetricCard title="Volunteers" value="56" change="" trend="up" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-8">
          <UpcomingClasses />
          <CourseProgress />
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-8">
          <StudentList />
        </div>
      </div>
    </div>
  );
}
