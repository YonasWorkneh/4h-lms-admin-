import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string | number
  change?: string
  trend?: 'up' | 'down'
  isHighlighted?: boolean
  subtitle?: string
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  trend, 
  isHighlighted = false,
  subtitle 
}) => {
  return (
    <div className={`rounded-xl p-6 transition-all hover:shadow-md ${
      isHighlighted 
        ? 'bg-gradient-to-br from-green-600 to-green-700 text-white' 
        : 'bg-white border border-gray-100 hover:shadow-lg'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-sm font-medium ${
          isHighlighted ? 'text-green-100' : 'text-gray-600'
        }`}>
          {title}
        </h3>
        <div className={`p-1.5 rounded-lg ${
          isHighlighted ? 'bg-green-500' : 'bg-gray-50'
        }`}>
          <TrendingUp className={`w-4 h-4 ${
            isHighlighted ? 'text-white' : 'text-gray-600'
          }`} />
        </div>
      </div>
      
      <div className="space-y-2">
        <p className={`text-3xl font-bold ${
          isHighlighted ? 'text-white' : 'text-gray-900'
        }`}>
          {value}
        </p>
        
        {change && (
          <div className="flex items-center gap-1">
            {trend === 'up' ? (
              <TrendingUp className={`w-3 h-3 ${
                isHighlighted ? 'text-green-200' : 'text-green-500'
              }`} />
            ) : (
              <TrendingDown className={`w-3 h-3 ${
                isHighlighted ? 'text-green-200' : 'text-red-500'
              }`} />
            )}
            <span className={`text-xs ${
              isHighlighted ? 'text-green-200' : 'text-gray-500'
            }`}>
              {change}
            </span>
          </div>
        )}
        
        {subtitle && (
          <p className={`text-xs ${
            isHighlighted ? 'text-green-200' : 'text-gray-500'
          }`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

export default MetricCard