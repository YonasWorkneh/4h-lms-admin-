"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// 📊 Yearly Overview
function YearlyOverview() {
  const stats = [
    { label: "Courses Completed", value: 12, max: 15 },
    { label: "Students Completed", value: 410, max: 500 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-green-900">Yearly Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-sm mb-1">
              <span>{s.label}</span>
              <span>
                {s.value}/{s.max}
              </span>
            </div>
            <Progress value={(s.value / s.max) * 100} className="" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// 👩‍🏫 Teacher Engagement
function TeacherEngagement() {
  const engagement = [
    { name: "Teachers trained", value: 56 },
    { name: "Schools", value: 3 },
    { name: "Feedback Given", value: 10 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-green-900">Teacher Engagement</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {engagement.map((e) => (
          <div
            key={e.name}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>{e.name}</span>
            <span className="font-semibold">{e.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// 🏅 Top Students
function TopStudents() {
  const students = [
    { name: "Sarah Ahmed", score: 98 },
    { name: "John Doe", score: 95 },
    { name: "Fatima Musa", score: 93 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-green-900">Top Students</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {students.map((s, idx) => (
          <div
            key={s.name}
            className="flex items-center gap-3 border-b pb-2 last:border-none"
          >
            <Avatar>
              <AvatarFallback>{s.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">{s.name}</p>
              <p className="text-sm text-gray-500">Completion Rate</p>
            </div>
            <span className="font-bold text-green-600">{s.score}%</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// 🌍 All Time Impact
function AllTimeImpact() {
  const stats = [
    { value: "3,500+", label: "Students Reached" },
    { value: "420+", label: "Courses Delivered" },
    { value: "15+", label: "Schools Supported" },
    { value: "8 Years", label: "Active Volunteering" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-green-900">All Time Impact</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 text-center">
        {stats.map((s) => (
          <div key={s.label} className="p-3 border rounded-lg">
            <p className="text-2xl font-bold text-green-600">{s.value}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// 🎓 Alumni Stories
function AlumniStories() {
  const stories = [
    {
      name: "Mekdes T. (student)",
      story:
        "This opportunity gave me confidence to apply the skills I have learned in 4H.",
    },
    {
      name: "Samuel K. (volunteer)",
      story: "I improved my teaching skills and I am grateful.",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-green-900">Alumni Stories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stories.map((s) => (
          <blockquote
            key={s.name}
            className="border-l-4 border-green-500 pl-3 italic text-gray-700"
          >
            “{s.story}”
            <footer className="mt-1 text-sm font-semibold text-gray-600">
              — {s.name}
            </footer>
          </blockquote>
        ))}
      </CardContent>
    </Card>
  );
}

export {
  YearlyOverview,
  TeacherEngagement,
  TopStudents,
  AllTimeImpact,
  AlumniStories,
};
