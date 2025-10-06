import { School, UserCircle, Users, Calendar } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SemesterCard() {
  const term = Math.round(Math.random() * 2) + 1;
  const sup = ["st", "nd", "rd"];

  const statusConfig = [
    {
      title: "Completed",
      variant: "secondary" as const,
      className: "bg-gray-100 text-gray-700 border-gray-200",
    },
    {
      title: "On-going",
      variant: "outline" as const,
      className: "bg-yellow-50 text-yellow-700 border-yellow-200",
    },
    {
      title: "Scheduled",
      variant: "outline" as const,
      className: "bg-green-50 text-green-700 border-green-200",
    },
  ];

  const currentStatus = statusConfig[term - 1];

  return (
    <li className="cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <Card className="h-full border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Header */}
        <CardHeader className="pb-4 bg-gradient-to-br from-green-50 to-emerald-200 border-b border-green-100 rounded-t-md">
          <div className="text-center space-y-2">
            <CardTitle className="text-xl font-bold text-green-800">
              ASFWA—4H Course
            </CardTitle>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Calendar className="h-4 w-4" />
              <span className="text-lg font-semibold">
                {term}
                <sup>{sup[term - 1]}</sup> term
              </span>
            </div>
            <p className="text-sm text-gray-600 font-medium">
              2024/25 Academic Year
            </p>
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="pt-0">
          <div className="space-y-4">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center space-y-1">
                <School className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">5</span>
                <span className="text-xs text-gray-500">Schools</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">300</span>
                <span className="text-xs text-gray-500">Students</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <UserCircle className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium text-gray-700">20+</span>
                <span className="text-xs text-gray-500">Instructors</span>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex justify-center pt-2">
              <Badge
                variant={currentStatus.variant}
                className={`${currentStatus.className} font-medium px-3 py-1`}
              >
                {currentStatus.title}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}
