import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const UpcomingClasses: React.FC = () => {
  const classes = [
    {
      id: 1,
      title: "Marketing",
      time: "09:00 AM - 10:30 AM",
      location: "Classroom",
      students: 24,
      type: "Lecture",
    },
    {
      id: 2,
      title: "Web Development",
      time: "02:00 PM - 04:00 PM",
      location: "Comp. Lab",
      students: 12,
      type: "Workshop",
    },
    {
      id: 3,
      title: "Scratch",
      time: "03:30 PM - 05:00 PM",
      location: "Comp. Lab",
      students: 18,
      type: "Seminar",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Semester Classes
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>March 15, 2024</span>
        </div>
      </div>

      <div className="space-y-4">
        {classes.map((classItem, index) => (
          <div
            key={classItem.id}
            className="border-l-4 border-green-500 pl-4 py-2"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">
                  {classItem.title}
                </h4>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{classItem.location}</span>
                  </div>
                </div>
                <div className="mt-1">
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {classItem.students} students
                  </span>
                </div>
              </div>

              {/* {index === 0 && (
                <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                  Start Class
                </button>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClasses;
