import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

function Header({ isDark, onThemeToggle }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Binary Clock
        </h1>
        <p className="text-gray-800 dark:text-gray-300">
          Time displayed in beautiful binary format
        </p>
      </div>
      
      <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
    </div>
  );
}

export default Header;