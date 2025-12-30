import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaUserPlus, FaEdit, FaGlobe, FaShare, FaCheckCircle } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import { generateHowToSchema, generateBreadcrumbSchema, injectStructuredData } from '../seo';
import { updatePageMetadata } from '../utils/pageMetadata';
import { config } from '../config';

const HowItWorks: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page metadata
    updatePageMetadata('/how-it-works');
    
    // Inject HowTo Schema
    injectStructuredData(generateHowToSchema());
    
    // Inject Breadcrumb Schema
    const breadcrumbData = [
      { name: 'Home', url: config.siteUrl },
      { name: 'How It Works', url: `${config.siteUrl}/how-it-works` }
    ];
    injectStructuredData(generateBreadcrumbSchema(breadcrumbData));
  }, []);

  const steps = [
    {
      number: 1,
      icon: <FaUserPlus className="text-4xl" />,
      title: 'Request Your Subdomain',
      description: 'Choose your perfect subdomain name (like yourname.social-status.online) and contact us through our form.',
      details: [
        'Pick a professional username',
        'Fill out the contact form',
        'We\'ll set it up within 24-48 hours',
        'Receive confirmation email',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: 2,
      icon: <FaEdit className="text-4xl" />,
      title: 'Customize Your Profile',
      description: 'Share your information with us and we\'ll create your beautiful, professional profile page.',
      details: [
        'Provide your professional details',
        'Upload your profile photo',
        'Add your skills and expertise',
        'Include social media links',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: 3,
      icon: <FaGlobe className="text-4xl" />,
      title: 'Your Profile Goes Live',
      description: 'We publish your profile on your custom subdomain, optimized for search engines and mobile devices.',
      details: [
        'Professional neumorphic design',
        'SEO-optimized for Google',
        'Mobile-friendly responsive layout',
        'Dark mode support',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      number: 4,
      icon: <FaShare className="text-4xl" />,
      title: 'Share & Showcase',
      description: 'Share your unique subdomain everywhere and let your professional identity shine online!',
      details: [
        'Add to LinkedIn, resume, email signature',
        'Share on social media',
        'Use in business cards',
        'Get discovered on Google',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neumorphic-bg via-neumorphic-light to-neumorphic-bg 
                    dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
      <PageHeader title="How It Works" subtitle="Get your professional subdomain in 4 simple steps" />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                            bg-gradient-to-br from-blue-500 to-purple-600 mb-6
                            shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                            dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
              <FaRocket className="text-3xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-dark-text mb-4">
              Simple, Fast, Professional
            </h1>
            <p className="text-gray-600 dark:text-dark-muted text-lg max-w-2xl mx-auto">
              Get your own professional subdomain and online presence in just 4 easy steps
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-32 w-1 h-24 -ml-0.5 
                                bg-gradient-to-b from-gray-300 to-gray-300 dark:from-dark-light dark:to-dark-light 
                                opacity-30 z-0" />
                )}

                <div className={`bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12
                              shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                              dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]
                              ${index % 2 === 0 ? '' : 'md:ml-auto'} 
                              hover:scale-[1.02] transition-transform duration-300`}>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} 
                                    flex items-center justify-center text-white
                                    shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                                    dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]`}>
                        {step.icon}
                      </div>
                      <div className="mt-4 text-center">
                        <span className="text-3xl font-bold text-gray-400 dark:text-dark-muted">
                          0{step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-dark-text mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-dark-muted text-lg mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Details List */}
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <FaCheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 dark:text-dark-text">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-center
                        shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                        dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Digital Identity?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join professionals who trust Social Status Online for their digital presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl
                         shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Started Now - It's Free!
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-xl border-2 border-white/30
                         hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* FAQ Teaser */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-dark-muted mb-4">
              Have questions about the process?
            </p>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Check out our FAQ
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
