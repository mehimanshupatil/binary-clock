import React, { useState, useEffect } from 'react';
import BinaryColumn from './BinaryColumn';
import TimeDisplay from './TimeDisplay';
import ClockLegend from './ClockLegend';
import { formatTime, digitToBinary } from '../utils/timeUtils';

interface BinaryClockProps {
  isDark: boolean;
}

function BinaryClock({ isDark }: BinaryClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="flex flex-col items-center space-y-8">
      <TimeDisplay time={time} />

      {/* Binary Grid */}
      <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-300/50 dark:border-gray-700/50">
        <div className="grid grid-cols-6 gap-8 md:gap-12">
          {/* Hours */}
          <BinaryColumn digit={hours[0]} label="H" isDark={isDark} />
          <BinaryColumn digit={hours[1]} label="H" isDark={isDark} />
          
          {/* Minutes */}
          <BinaryColumn digit={minutes[0]} label="M" isDark={isDark} />
          <BinaryColumn digit={minutes[1]} label="M" isDark={isDark} />
          
          {/* Seconds */}
          <BinaryColumn digit={seconds[0]} label="S" isDark={isDark} />
          <BinaryColumn digit={seconds[1]} label="S" isDark={isDark} />
        </div>
        
        {/* Binary Values Display */}
        <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
          <div className="text-center space-y-2">
            <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Binary Values
            </div>
            <div className="font-mono text-sm text-gray-800 dark:text-gray-300">
              {hours.split('').map(d => digitToBinary(d).join('')).join(' : ')} : {' '}
              {minutes.split('').map(d => digitToBinary(d).join('')).join(' : ')} : {' '}
              {seconds.split('').map(d => digitToBinary(d).join('')).join(' : ')}
            </div>
          </div>
        </div>
      </div>

      <ClockLegend />
    </div>
  );
}

export default BinaryClock;