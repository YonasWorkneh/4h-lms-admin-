"use client";

import { useState } from "react";
import MetricCard from "@/components/MetricCard";
import CourseProgress from "@/components/CourseProgress";
import StudentList from "@/components/StudentList";
import UpcomingClasses from "@/components/UpcomingClasses";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <div>
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--heading)] mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your courses, students, and teaching activities with ease.
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
          title="Active Students"
          value="284"
          change="Increased from last month"
          trend="up"
        />
        <MetricCard
          title="Completed Assignments"
          value="156"
          change="Increased from last week"
          trend="up"
        />
        <MetricCard
          title="Pending Reviews"
          value="23"
          subtitle="Needs Attention"
        />
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
