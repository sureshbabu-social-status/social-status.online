import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaHome, FaHeart, FaUsers, FaLightbulb, FaStar, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import { generateBreadcrumbSchema, injectStructuredData } from '../seo';
import { updatePageMetadata } from '../utils/pageMetadata';
import { config } from '../config';

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page metadata
    updatePageMetadata('/about');
    
    // Inject Breadcrumb Schema
    const breadcrumbData = [
      { name: 'Home', url: config.siteUrl },
      { name: 'About Us', url: `${config.siteUrl}/about` }
    ];
    injectStructuredData(generateBreadcrumbSchema(breadcrumbData));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neumorphic-bg via-neumorphic-light to-neumorphic-bg 
                    dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
      <PageHeader title="About Us" subtitle="Learn about our mission and values" />
      <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                          bg-gradient-to-br from-blue-500 to-purple-600 mb-6
                          shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                          dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
            <FaRocket className="text-3xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-dark-text mb-4">
            About Social Status Online
          </h1>
          <p className="text-gray-600 dark:text-dark-muted text-lg max-w-2xl mx-auto">
            Empowering professionals to showcase their talent and build meaningful connections
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12 mb-8
                        shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                        dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]">
          
          <div className="flex items-center gap-3 mb-6">
            <FaHeart className="text-3xl text-red-500" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text">
              Our Mission
            </h2>
          </div>
          
          <p className="text-gray-700 dark:text-dark-muted leading-relaxed text-lg mb-4">
            At <strong>Social Status Online</strong>, we believe every professional deserves a platform to shine. Our mission is to create a centralized directory where talented individuals can showcase their work, skills, and achievements while connecting with opportunities and like-minded professionals worldwide.
          </p>
          <p className="text-gray-700 dark:text-dark-muted leading-relaxed text-lg">
            We're building more than just a directory—we're creating a community where excellence is celebrated, connections are fostered, and careers flourish.
          </p>
        </div>

        {/* Founder Section */}
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12 mb-8
                        shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                        dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]">
          
          <div className="flex items-center gap-3 mb-6">
            <FaUsers className="text-3xl text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text">
              Meet the Founder
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <img 
                src="https://suresh.social-status.online/profile-avatar.jpg" 
                alt="Suresh Babu Gogula"
                className="w-48 h-48 rounded-full object-cover
                          shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                          dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-2">
                Suresh Babu Gogula
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                Founder & Solution Architect
              </p>
              
              <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
                With over 7 years of experience as a Solution Architect, Suresh has designed resilient products, led engineering teams, and shipped platforms using Node.js, Go, Python, and React. His expertise spans from enterprise-grade applications serving thousands of users to cutting-edge AI implementations.
              </p>
              
              <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
                Driven by a passion for connecting talent with opportunity, Suresh founded Social Status Online to provide professionals with a powerful platform to showcase their work and amplify their reach.
              </p>
              
              <div className="flex gap-4 mt-6">
                <a 
                  href="https://www.linkedin.com/in/suresh-babu-gogula/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-blue-600 text-white
                            shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                            dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                            hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                            transition-all duration-300">
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://github.com/SURESH-BABU-G" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-800 text-white
                            shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                            dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                            hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                            transition-all duration-300">
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://twitter.com/sureshbabug" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-blue-400 text-white
                            shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                            dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                            hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                            transition-all duration-300">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12 mb-8
                        shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                        dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]">
          
          <div className="flex items-center gap-3 mb-8">
            <FaStar className="text-3xl text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text">
              Our Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neumorphic-light dark:bg-dark-bg rounded-2xl p-6
                            shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                            dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]">
              <h3 className="text-xl font-bold text-gray-800 dark:text-dark-text mb-3 flex items-center gap-2">
                <FaLightbulb className="text-yellow-500" />
                Excellence
              </h3>
              <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
                We celebrate quality work and exceptional talent. Every profile on our platform represents commitment to craft and professional excellence.
              </p>
            </div>
            
            <div className="bg-neumorphic-light dark:bg-dark-bg rounded-2xl p-6
                            shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                            dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]">
              <h3 className="text-xl font-bold text-gray-800 dark:text-dark-text mb-3 flex items-center gap-2">
                <FaUsers className="text-blue-600" />
                Community
              </h3>
              <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
                We foster meaningful connections between professionals, creating a supportive ecosystem where collaboration thrives.
              </p>
            </div>
            
            <div className="bg-neumorphic-light dark:bg-dark-bg rounded-2xl p-6
                            shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                            dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]">
              <h3 className="text-xl font-bold text-gray-800 dark:text-dark-text mb-3 flex items-center gap-2">
                <FaRocket className="text-purple-600" />
                Innovation
              </h3>
              <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
                We continuously improve our platform with cutting-edge technology and user-centric features to enhance your experience.
              </p>
            </div>
            
            <div className="bg-neumorphic-light dark:bg-dark-bg rounded-2xl p-6
                            shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                            dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]">
              <h3 className="text-xl font-bold text-gray-800 dark:text-dark-text mb-3 flex items-center gap-2">
                <FaHeart className="text-red-500" />
                Integrity
              </h3>
              <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
                We operate with transparency, honesty, and respect for every user. Your trust is our foundation.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12 mb-8
                        shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                        dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]">
          
          <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text mb-6">
            Why Choose Social Status Online?
          </h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-2">
                  Your Personal Subdomain
                </h3>
                <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
                  Get your own branded subdomain (yourname.social-status.online) to showcase your professional identity and portfolio.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-2">
                  SEO Optimized Profiles
                </h3>
                <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
                  Our platform is built with search engine optimization in mind, helping you get discovered by potential clients and employers.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-2">
                  Beautiful, Modern Design
                </h3>
                <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
                  Showcase your work with our stunning neumorphic design, complete with dark mode and responsive layouts.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-2">
                  Connect with Opportunities
                </h3>
                <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
                  Join a curated directory of professionals where talent meets opportunity, and connections turn into collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-dark-card rounded-3xl p-6 text-center
                          shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                          dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-700 dark:text-dark-muted">Free to Start</div>
          </div>
          
          <div className="bg-white dark:bg-dark-card rounded-3xl p-6 text-center
                          shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                          dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-700 dark:text-dark-muted">Profile Visibility</div>
          </div>
          
          <div className="bg-white dark:bg-dark-card rounded-3xl p-6 text-center
                          shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                          dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
            <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
            <div className="text-gray-700 dark:text-dark-muted">Growth Potential</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white
                        shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                        dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Professional Presence?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join Social Status Online today and showcase your talent to the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl
                         shadow-lg hover:shadow-xl transition-all duration-300
                         hover:-translate-y-1">
              Get Started
            </Link>
            <Link 
              to="/"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl
                         hover:bg-white hover:text-blue-600 transition-all duration-300">
              Explore Profiles
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-white dark:bg-dark-card text-gray-800 dark:text-dark-text font-semibold
                       shadow-[4px_4px_12px_#a3b1c6,-4px_-4px_12px_#ffffff]
                       dark:shadow-[4px_4px_12px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.05)]
                       hover:shadow-[2px_2px_6px_#a3b1c6,-2px_-2px_6px_#ffffff]
                       dark:hover:shadow-[2px_2px_6px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.05)]
                       transition-all duration-300">
            <FaHome />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
