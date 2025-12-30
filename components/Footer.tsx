import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-light
                       shadow-[0_-4px_12px_rgba(163,177,198,0.2)]
                       dark:shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                              flex items-center justify-center text-white font-bold
                              shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                              dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]">
                SS
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-dark-text">
                Social Status Online
              </span>
            </div>
            <p className="text-gray-600 dark:text-dark-muted leading-relaxed mb-4">
              A curated directory showcasing talented professionals, innovators, and thought leaders. 
              Connecting excellence with opportunity.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/suresh-babu-gogula/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neumorphic-light dark:bg-dark-bg
                          text-blue-600 dark:text-blue-400
                          shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                          dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                          hover:text-blue-700 dark:hover:text-blue-300
                          transition-all duration-300"
                aria-label="LinkedIn">
                <FaLinkedin className="text-lg" />
              </a>
              <a 
                href="https://github.com/SURESH-BABU-G" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neumorphic-light dark:bg-dark-bg
                          text-gray-700 dark:text-gray-300
                          shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                          dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                          hover:text-gray-900 dark:hover:text-white
                          transition-all duration-300"
                aria-label="GitHub">
                <FaGithub className="text-lg" />
              </a>
              <a 
                href="https://twitter.com/sureshbabug" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neumorphic-light dark:bg-dark-bg
                          text-blue-400 dark:text-blue-300
                          shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                          dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                          hover:text-blue-500 dark:hover:text-blue-200
                          transition-all duration-300"
                aria-label="Twitter">
                <FaTwitter className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-dark-text mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-gray-600 dark:text-dark-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-gray-600 dark:text-dark-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works"
                  className="text-gray-600 dark:text-dark-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing"
                  className="text-gray-600 dark:text-dark-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq"
                  className="text-gray-600 dark:text-dark-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-600 dark:text-dark-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://suresh.social-status.online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-dark-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Featured Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-dark-text mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy"
                  className="text-gray-600 dark:text-dark-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms"
                  className="text-gray-600 dark:text-dark-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:hello@social-status.online"
                  className="text-gray-600 dark:text-dark-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Legal Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-dark-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-dark-muted text-sm text-center md:text-left">
              © {currentYear} Social Status Online. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-dark-muted text-sm flex items-center gap-1">
              Operated with <FaHeart className="text-red-500 animate-pulse" /> by 
              <a 
                href="https://suresh.social-status.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold ml-1">
                Suresh Babu Gogula
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
