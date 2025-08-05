import React from 'react'
import { Plus, BookOpen, Users, Clock } from 'lucide-react'

const CourseList: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Advanced Marine Biology',
      instructor: 'Dr. Sarah Johnson',
      students: 28,
      progress: 85,
      dueDate: 'Apr 15, 2024',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Wildlife Conservation Methods',
      instructor: 'Prof. Michael Chen',
      students: 22,
      progress: 72,
      dueDate: 'Apr 20, 2024',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Environmental Data Analysis',
      instructor: 'Dr. Lisa Rodriguez',
      students: 19,
      progress: 45,
      dueDate: 'May 2, 2024',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Fisheries Management',
      instructor: 'Dr. James Wilson',
      students: 25,
      progress: 30,
      dueDate: 'May 10, 2024',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Active Courses</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          New Course
        </button>
      </div>
      
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{course.title}</h4>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {course.progress}% Complete
              </span>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Due {course.dueDate}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 bg-gradient-to-r ${course.color} rounded-full transition-all duration-300`}
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseList