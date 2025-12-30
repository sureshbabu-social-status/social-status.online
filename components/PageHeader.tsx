import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaHome } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import { SITE_CONFIG } from '../constants';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-neo-light dark:bg-dark-bg shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                       dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]
                       sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Site Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                            flex items-center justify-center text-white font-bold text-lg
                            shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                            dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                            group-hover:scale-105 transition-transform duration-300">
              SS
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-800 dark:text-dark-text leading-tight">
                {SITE_CONFIG.name}
              </h1>
              <p className="text-xs text-gray-600 dark:text-dark-muted leading-tight">
                {SITE_CONFIG.tagline}
              </p>
            </div>
          </Link>

          {/* Page Title - Center */}
          <div className="flex-1 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-dark-text">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-gray-600 dark:text-dark-muted mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {/* Actions - Right */}
          <div className="flex items-center gap-3">
            {/* Home Button */}
            <Link
              to="/"
              className="p-2.5 rounded-xl shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                         dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                         hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                         dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                         text-gray-700 dark:text-dark-text transition-all duration-300"
              aria-label="Go to home">
              <FaHome className="text-lg" />
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                         dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                         hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                         dark:hover:shadow-[2px_-2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                         text-gray-700 dark:text-dark-text transition-all duration-300"
              aria-label="Toggle theme">
              {theme === 'light' ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
