import React from 'react';
import { digitToBinary } from '../utils/timeUtils';

interface BinaryColumnProps {
  digit: string;
  label: string;
  isDark: boolean;
}

function BinaryColumn({ digit, label, isDark }: BinaryColumnProps) {
  const binary = digitToBinary(digit);
  
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
        {label}
      </div>
      <div className="text-lg font-mono font-bold text-gray-800 dark:text-gray-300 mb-2">
        {digit}
      </div>
      <div className="flex flex-col space-y-3">
        {binary.map((bit, bitIndex) => (
          <div
            key={bitIndex}
            className={`
              w-4 h-4 rounded-full border-2 transition-all duration-300 transform hover:scale-110
              ${bit === 1 
                ? isDark 
                  ? 'bg-blue-400 border-blue-400 shadow-lg shadow-blue-400/50 animate-pulse' 
                  : 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/30'
                : isDark
                  ? 'bg-gray-800 border-gray-600 hover:border-gray-500'
                  : 'bg-gray-200 border-gray-400 hover:border-gray-500'
              }
            `}
          />
        ))}
      </div>
      <div className="text-xs text-gray-600 dark:text-gray-500 font-mono">
        {binary.join('')}
      </div>
    </div>
  );
}

export default BinaryColumn;