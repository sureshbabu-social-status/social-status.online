import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCookie, FaTimes, FaCheck, FaCog } from 'react-icons/fa';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      // Apply saved preferences
      const savedPrefs = JSON.parse(consent);
      setPreferences(savedPrefs);
      if (savedPrefs.analytics) {
        enableAnalytics();
      }
    }
  }, []);

  const enableAnalytics = () => {
    // Enable Google Analytics if user consents
    if (import.meta.env.VITE_ENABLE_ANALYTICS === 'true') {
      // Analytics initialization is handled in analytics.ts
      console.log('Analytics enabled');
    }
  };

  const handleAcceptAll = () => {
    const newPrefs = { necessary: true, analytics: true };
    setPreferences(newPrefs);
    localStorage.setItem('cookieConsent', JSON.stringify(newPrefs));
    enableAnalytics();
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  const handleDeclineAll = () => {
    const newPrefs = { necessary: true, analytics: false };
    setPreferences(newPrefs);
    localStorage.setItem('cookieConsent', JSON.stringify(newPrefs));
    setIsVisible(false);
    if (onDecline) onDecline();
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    if (preferences.analytics) {
      enableAnalytics();
    }
    setShowPreferences(false);
    setIsVisible(false);
    if (preferences.analytics && onAccept) {
      onAccept();
    } else if (onDecline) {
      onDecline();
    }
  };

  const togglePreference = (key: 'necessary' | 'analytics') => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[9999]
                      animate-slide-up">
        <div className="bg-white dark:bg-dark-card rounded-2xl p-6
                        shadow-[8px_8px_24px_#a3b1c6,-8px_-8px_24px_#ffffff]
                        dark:shadow-[8px_8px_24px_rgba(0,0,0,0.5),-8px_-8px_24px_rgba(255,255,255,0.05)]
                        border border-gray-200 dark:border-dark-light">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <FaCookie className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-dark-text">
                Cookie Settings
              </h3>
            </div>
            <button
              onClick={handleDeclineAll}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close">
              <FaTimes />
            </button>
          </div>

          {/* Content */}
          {!showPreferences ? (
            <>
              <p className="text-gray-700 dark:text-dark-muted text-sm leading-relaxed mb-4">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
              <p className="text-gray-700 dark:text-dark-muted text-xs mb-4">
                Read our{' '}
                <Link to="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                  Privacy Policy
                </Link>{' '}
                to learn more.
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
                           text-white font-semibold text-sm
                           shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                           dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                           hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                           transition-all duration-300
                           flex items-center justify-center gap-2">
                  <FaCheck />
                  <span>Accept All</span>
                </button>
                
                <div className="flex gap-2">
                  <button
                    onClick={handleDeclineAll}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gray-200 dark:bg-dark-bg 
                             text-gray-700 dark:text-dark-text font-semibold text-sm
                             shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                             dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                             hover:shadow-[1px_1px_2px_#a3b1c6,-1px_-1px_2px_#ffffff]
                             transition-all duration-300">
                    Decline All
                  </button>
                  
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gray-200 dark:bg-dark-bg 
                             text-gray-700 dark:text-dark-text font-semibold text-sm
                             shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                             dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                             hover:shadow-[1px_1px_2px_#a3b1c6,-1px_-1px_2px_#ffffff]
                             transition-all duration-300
                             flex items-center justify-center gap-2">
                    <FaCog />
                    <span>Customize</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-700 dark:text-dark-muted text-sm leading-relaxed mb-4">
                Customize your cookie preferences below:
              </p>

              {/* Preferences */}
              <div className="space-y-3 mb-4">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-3 rounded-lg
                              bg-neumorphic-light dark:bg-dark-bg
                              shadow-[inset_2px_2px_4px_#a3b1c6,inset_-2px_-2px_4px_#ffffff]
                              dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-dark-text text-sm mb-1">
                      Necessary Cookies
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-dark-muted">
                      Required for basic site functionality. Cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-3 flex-shrink-0">
                    <div className="w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-3 rounded-lg
                              bg-neumorphic-light dark:bg-dark-bg
                              shadow-[inset_2px_2px_4px_#a3b1c6,inset_-2px_-2px_4px_#ffffff]
                              dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-dark-text text-sm mb-1">
                      Analytics Cookies
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-dark-muted">
                      Help us understand how you use our site (Google Analytics).
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('analytics')}
                    className="ml-3 flex-shrink-0">
                    <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                      preferences.analytics ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                        preferences.analytics ? 'right-0.5' : 'left-0.5'
                      }`} />
                    </div>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gray-200 dark:bg-dark-bg 
                           text-gray-700 dark:text-dark-text font-semibold text-sm
                           shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                           dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                           transition-all duration-300">
                  Back
                </button>
                
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
                           text-white font-semibold text-sm
                           shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                           dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                           transition-all duration-300
                           flex items-center justify-center gap-2">
                  <FaCheck />
                  <span>Save Preferences</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
