import React from 'react';
import Header from './components/Header';
import BinaryClock from './components/BinaryClock';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' 
        : 'bg-gradient-to-br from-blue-100 via-white to-blue-100'
    }`}>
      <div className="container mx-auto px-4 py-8">
        <Header isDark={isDark} onThemeToggle={toggleTheme} />
        
        <div className="flex justify-center">
          <BinaryClock isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

export default App;