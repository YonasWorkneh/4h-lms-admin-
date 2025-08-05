import React from "react";
import { Plus } from "lucide-react";

const StudentList: React.FC = () => {
  const students = [
    {
      id: 1,
      name: "Emnet Belayneh",
      email: "emma.belay@gmail.com",
      course: "Web Develoment",
      status: "Active",
      progress: 92,
      avatar: "ER",
    },
    {
      id: 2,
      name: "Markos Aleymayehu",
      email: "marcus.alex@gmail.com",
      course: "Web Development",
      status: "Active",
      progress: 78,
      avatar: "MT",
    },
    {
      id: 3,
      name: "Elsa Derbe",
      email: "lisa.derbe@gmail.com",
      course: "Graphics",
      status: "Inactive",
      progress: 45,
      avatar: "LC",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Students</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          Add Student
        </button>
      </div>

      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">
                {student.avatar}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 truncate">
                {student.name}
              </h4>
              <p className="text-xs text-gray-500 truncate">{student.course}</p>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                  student.status
                )}`}
              >
                {student.status}
              </span>
              <div className="text-right">
                <p className="text-xs font-medium text-gray-900">
                  {student.progress}%
                </p>
                <div className="w-16 h-1 bg-gray-200 rounded-full mt-1">
                  <div
                    className="h-1 bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: `${student.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
