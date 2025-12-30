import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | Social Status Online';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neumorphic-bg via-neumorphic-light to-neumorphic-bg 
                    dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
      <PageHeader title="404 - Not Found" subtitle="This page doesn't exist" />
      <div className="flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full 
                          bg-gradient-to-br from-orange-500 to-red-600 mb-6
                          shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                          dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]
                          animate-pulse">
            <FaExclamationTriangle className="text-5xl text-white" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-gray-800 dark:text-dark-text mb-4
                       bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-dark-text mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-dark-muted mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved. 
          Don't worry, let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                       bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg
                       shadow-[4px_4px_12px_#a3b1c6,-4px_-4px_12px_#ffffff]
                       dark:shadow-[4px_4px_12px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.05)]
                       hover:shadow-[2px_2px_6px_#a3b1c6,-2px_-2px_6px_#ffffff]
                       dark:hover:shadow-[2px_2px_6px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.05)]
                       transition-all duration-300">
            <FaHome />
            <span>Go to Homepage</span>
          </Link>
          
          <Link 
            to="/?search=true"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                       bg-white dark:bg-dark-card text-gray-800 dark:text-dark-text font-semibold text-lg
                       shadow-[4px_4px_12px_#a3b1c6,-4px_-4px_12px_#ffffff]
                       dark:shadow-[4px_4px_12px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.05)]
                       hover:shadow-[2px_2px_6px_#a3b1c6,-2px_-2px_6px_#ffffff]
                       dark:hover:shadow-[2px_2px_6px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.05)]
                       transition-all duration-300">
            <FaSearch />
            <span>Search Profiles</span>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8
                        shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                        dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
          <h3 className="text-xl font-bold text-gray-800 dark:text-dark-text mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              to="/about"
              className="px-4 py-2 rounded-lg bg-neumorphic-light dark:bg-dark-bg 
                         text-gray-700 dark:text-dark-text hover:text-blue-600 dark:hover:text-blue-400
                         shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                         dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                         transition-all duration-300">
              About Us
            </Link>
            <Link 
              to="/contact"
              className="px-4 py-2 rounded-lg bg-neumorphic-light dark:bg-dark-bg 
                         text-gray-700 dark:text-dark-text hover:text-blue-600 dark:hover:text-blue-400
                         shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                         dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                         transition-all duration-300">
              Contact
            </Link>
            <Link 
              to="/privacy"
              className="px-4 py-2 rounded-lg bg-neumorphic-light dark:bg-dark-bg 
                         text-gray-700 dark:text-dark-text hover:text-blue-600 dark:hover:text-blue-400
                         shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                         dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                         transition-all duration-300">
              Privacy Policy
            </Link>
            <Link 
              to="/terms"
              className="px-4 py-2 rounded-lg bg-neumorphic-light dark:bg-dark-bg 
                         text-gray-700 dark:text-dark-text hover:text-blue-600 dark:hover:text-blue-400
                         shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                         dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                         transition-all duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NotFound;
