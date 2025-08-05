import React from 'react'

const AnalyticsChart: React.FC = () => {
  const data = [
    { day: 'M', value: 65, label: 'Mon' },
    { day: 'T', value: 80, label: 'Tue' },
    { day: 'W', value: 95, label: 'Wed' },
    { day: 'T', value: 75, label: 'Thu' },
    { day: 'F', value: 60, label: 'Fri' },
    { day: 'S', value: 40, label: 'Sat' },
    { day: 'S', value: 35, label: 'Sun' },
  ]

  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Student Activity</h3>
        <span className="text-sm text-green-600 font-medium">+12% this week</span>
      </div>
      
      <div className="flex items-end justify-between h-48 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="w-full bg-gray-100 rounded-full mb-2 relative overflow-hidden">
              <div 
                className="bg-gradient-to-t from-green-600 to-green-400 rounded-full transition-all duration-500 ease-out"
                style={{ 
                  height: `${(item.value / maxValue) * 160}px`,
                  minHeight: '8px'
                }}
              />
            </div>
            <span className="text-xs text-gray-600 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">Weekly student engagement metrics</p>
      </div>
    </div>
  )
}

export default AnalyticsChart