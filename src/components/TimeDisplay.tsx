import React from 'react';
import { formatTime } from '../utils/timeUtils';

interface TimeDisplayProps {
  time: Date;
}

function TimeDisplay({ time }: TimeDisplayProps) {
  const { hours, minutes, seconds } = formatTime(time);
  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="text-center space-y-2">
      <div className="text-4xl md:text-6xl font-mono font-bold text-gray-900 dark:text-white tracking-wider">
        {timeString}
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-400">
        {time.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>
    </div>
  );
}

export default TimeDisplay;