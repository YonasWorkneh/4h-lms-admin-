import React, { useState, useEffect } from 'react'
import { Play, Pause, Square } from 'lucide-react'

const TimeTracker: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(5688) // 01:34:48 in seconds

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setTime(0)
    setIsRunning(false)
  }

  return (
    <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-xl p-6 text-white">
      <h3 className="text-lg font-semibold mb-6">Teaching Time Tracker</h3>
      
      <div className="text-center mb-6">
        <div className="text-4xl font-mono font-bold mb-2">
          {formatTime(time)}
        </div>
        <p className="text-green-200 text-sm">Active teaching session</p>
      </div>
      
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={toggleTimer}
          className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
        >
          {isRunning ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>
        
        <button
          onClick={resetTimer}
          className="w-12 h-12 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"
        >
          <Square className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default TimeTracker