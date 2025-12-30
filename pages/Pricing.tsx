import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaRocket, FaGift } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import { generateBreadcrumbSchema, injectStructuredData } from '../seo';
import { updatePageMetadata } from '../utils/pageMetadata';
import { config } from '../config';

const Pricing: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page metadata
    updatePageMetadata('/pricing');
    
    // Inject Breadcrumb Schema
    const breadcrumbData = [
      { name: 'Home', url: config.siteUrl },
      { name: 'Pricing', url: `${config.siteUrl}/pricing` }
    ];
    injectStructuredData(generateBreadcrumbSchema(breadcrumbData));
  }, []);

  const freeFeatures = [
    'Custom subdomain (yourname.social-status.online)',
    'Beautiful professional profile page',
    'Unlimited profile updates',
    'Mobile-responsive design',
    'Dark mode support',
    'SEO optimization for Google',
    'Social media link integration',
    'Skills & expertise showcase',
    'Achievement highlights',
    'Profile analytics (coming soon)',
    'HTTPS security',
    '99.9% uptime guarantee',
    'Email support',
    'No ads, no watermarks',
    'No credit card required',
  ];

  const futureFeatures = [
    {
      title: 'Custom Domain Mapping',
      description: 'Point your own domain to your profile',
      status: 'Coming Soon',
    },
    {
      title: 'Advanced Analytics',
      description: 'Detailed visitor insights and engagement metrics',
      status: 'Coming Soon',
    },
    {
      title: 'Custom Themes',
      description: 'Choose from multiple design templates',
      status: 'Coming Soon',
    },
    {
      title: 'Portfolio Showcase',
      description: 'Display your projects and work samples',
      status: 'Coming Soon',
    },
    {
      title: 'API Access',
      description: 'Integrate your profile data anywhere',
      status: 'Coming Soon',
    },
    {
      title: 'Team Profiles',
      description: 'Manage multiple team member profiles',
      status: 'Coming Soon',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neumorphic-bg via-neumorphic-light to-neumorphic-bg 
                    dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
      <PageHeader title="Pricing" subtitle="Simple, transparent, forever free" />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                            bg-gradient-to-br from-green-500 to-emerald-600 mb-6
                            shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                            dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
              <FaGift className="text-3xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-dark-text mb-4">
              Free. Forever. Really.
            </h1>
            <p className="text-gray-600 dark:text-dark-muted text-lg max-w-2xl mx-auto mb-8">
              We believe everyone deserves a professional online presence. That's why Social Status Online is 100% free with no hidden costs.
            </p>
            <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 
                          px-6 py-3 rounded-full font-semibold">
              ✨ No credit card required • No trial period • No catch
            </div>
          </div>

          {/* Main Pricing Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12
                          shadow-[16px_16px_32px_#a3b1c6,-16px_-16px_32px_#ffffff]
                          dark:shadow-[16px_16px_32px_rgba(0,0,0,0.4),-16px_-16px_32px_rgba(255,255,255,0.05)]
                          border-4 border-green-500">
              
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white 
                              px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide">
                  Most Popular
                </div>
              </div>

              {/* Plan Details */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-dark-text mb-3">
                  Free Plan
                </h2>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-6xl md:text-7xl font-bold text-green-600 dark:text-green-400">
                    ₹0
                  </span>
                  <div className="text-left">
                    <div className="text-gray-600 dark:text-dark-muted text-lg">/month</div>
                    <div className="text-sm text-gray-500 dark:text-dark-muted">Forever</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-dark-muted text-lg">
                  Everything you need to build your professional digital identity
                </p>
              </div>

              {/* Features List */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {freeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 
                                  flex items-center justify-center mt-0.5">
                      <FaCheck className="text-green-600 dark:text-green-400 text-xs" />
                    </div>
                    <span className="text-gray-700 dark:text-dark-text">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 
                           bg-gradient-to-r from-green-500 to-emerald-600 
                           text-white font-bold rounded-xl text-lg
                           shadow-lg hover:shadow-xl hover:scale-105 
                           transition-all duration-300"
                >
                  <FaRocket />
                  Get Started - It's Free!
                </Link>
                <p className="text-sm text-gray-500 dark:text-dark-muted mt-4">
                  Takes less than 2 minutes to request your subdomain
                </p>
              </div>

            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-dark-text mb-4">
                Premium Features Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-dark-muted text-lg max-w-2xl mx-auto">
                We're working on optional premium features. Core features will always remain free.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureFeatures.map((feature, index) => (
                <div key={index} 
                     className="bg-white dark:bg-dark-card rounded-xl p-6
                              shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                              dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]
                              hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-dark-text">
                      {feature.title}
                    </h3>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 
                                   px-2 py-1 rounded-full font-semibold">
                      {feature.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-dark-muted text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Teaser */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 
                        rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-dark-text mb-4">
              Why is it free?
            </h2>
            <p className="text-gray-600 dark:text-dark-muted max-w-2xl mx-auto mb-6 leading-relaxed">
              We're building a community-driven platform. Our mission is to help everyone have a professional online presence. 
              As we grow, we may introduce optional premium features, but the core service will always remain free.
            </p>
            <Link
              to="/faq"
              className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Read our FAQ to learn more →
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-gray-600 dark:text-dark-muted">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 dark:text-dark-text">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 dark:text-dark-text">GDPR</div>
              <div className="text-sm">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 dark:text-dark-text">SSL</div>
              <div className="text-sm">Secured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 dark:text-dark-text">Firebase</div>
              <div className="text-sm">Powered</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
