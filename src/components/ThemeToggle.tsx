import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        p-3 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95
        ${isDark 
          ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 shadow-lg shadow-yellow-400/25' 
          : 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg shadow-gray-800/25'
        }
      `}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}

export default ThemeToggle;