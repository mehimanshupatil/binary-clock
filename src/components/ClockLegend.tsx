import React from 'react';
import { Clock } from 'lucide-react';

function ClockLegend() {
  return (
    <div className="bg-white/60 dark:bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 max-w-md text-center border border-gray-300/30 dark:border-gray-700/30">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center justify-center space-x-2">
        <Clock className="w-5 h-5" />
        <span>How to Read</span>
      </h3>
      <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
        Each column represents one digit of the time. The four dots in each column show the binary representation, 
        with glowing dots representing "1" and dim dots representing "0". Read from top (8) to bottom (1) to get the decimal value.
      </p>
    </div>
  );
}

export default ClockLegend;