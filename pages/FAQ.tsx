import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import { generateFAQSchema, generateBreadcrumbSchema, injectStructuredData } from '../seo';
import { updatePageMetadata } from '../utils/pageMetadata';
import { config } from '../config';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'subdomain' | 'technical' | 'billing' | 'privacy';
}

const FAQ_DATA: FAQItem[] = [
  // General Questions
  {
    id: 1,
    category: 'general',
    question: 'What is Social Status Online?',
    answer: 'Social Status Online is a professional digital identity platform that provides you with a personalized subdomain (like yourname.social-status.online) to showcase your professional profile, skills, and social links in one beautiful place.',
  },
  {
    id: 2,
    category: 'general',
    question: 'Is Social Status Online free?',
    answer: 'Yes! Social Status Online is completely free to use. You get a professional subdomain, customizable profile, and all core features at no cost. We believe everyone deserves a professional online presence.',
  },
  {
    id: 3,
    category: 'general',
    question: 'Who can use Social Status Online?',
    answer: 'Anyone! Whether you\'re a developer, designer, entrepreneur, student, freelancer, or professional in any field, Social Status Online helps you build your digital identity and showcase your expertise.',
  },
  
  // Subdomain Questions
  {
    id: 4,
    category: 'subdomain',
    question: 'How do I get my own subdomain?',
    answer: 'Simply contact us through the contact form with your desired subdomain name (e.g., "john" for john.social-status.online). We\'ll set it up for you within 24-48 hours and send you the details.',
  },
  {
    id: 5,
    category: 'subdomain',
    question: 'Can I choose any subdomain name?',
    answer: 'Yes, as long as it\'s available and follows our guidelines (alphanumeric characters, hyphens allowed, 3-30 characters). First-come, first-served basis. Professional and appropriate names only.',
  },
  {
    id: 6,
    category: 'subdomain',
    question: 'Can I change my subdomain later?',
    answer: 'Currently, subdomains are permanent once assigned to maintain link stability. Choose carefully! However, you can always create a new profile with a different subdomain if needed.',
  },
  {
    id: 7,
    category: 'subdomain',
    question: 'Can I use my own custom domain?',
    answer: 'Custom domain mapping is coming soon! You\'ll be able to point your own domain (like johndoe.com) to your Social Status Online profile while keeping all the features.',
  },

  // Technical Questions
  {
    id: 8,
    category: 'technical',
    question: 'What information can I add to my profile?',
    answer: 'You can add your name, title, bio, profile photo, location, skills/expertise, achievements, social media links (LinkedIn, GitHub, Twitter, Instagram), and more. Full customization is available.',
  },
  {
    id: 9,
    category: 'technical',
    question: 'Is my profile mobile-friendly?',
    answer: 'Absolutely! All profiles are fully responsive and optimized for mobile devices, tablets, and desktops. Your profile will look great on any screen size.',
  },
  {
    id: 10,
    category: 'technical',
    question: 'Can people find me on Google?',
    answer: 'Yes! All profiles are SEO-optimized and indexed by search engines. Your subdomain will appear in Google search results when people search for your name or skills.',
  },
  {
    id: 11,
    category: 'technical',
    question: 'Do you support dark mode?',
    answer: 'Yes! All pages include a dark mode toggle. Your profile automatically adapts to your visitors\' preferences for a comfortable viewing experience.',
  },

  // Privacy & Security
  {
    id: 12,
    category: 'privacy',
    question: 'Is my data secure?',
    answer: 'Yes. We use Firebase (Google Cloud) for hosting and data storage, which provides enterprise-grade security. We follow GDPR compliance and never sell your data to third parties.',
  },
  {
    id: 13,
    category: 'privacy',
    question: 'Who can see my profile?',
    answer: 'Your profile is public by default (that\'s the point - to showcase your professional identity!). However, you control what information you share. We never display sensitive data like email addresses publicly.',
  },
  {
    id: 14,
    category: 'privacy',
    question: 'How do I delete my profile?',
    answer: 'You can request profile deletion anytime by contacting us at hello@social-status.online. We\'ll remove all your data within 7 business days as per GDPR requirements.',
  },

  // Billing & Support
  {
    id: 15,
    category: 'billing',
    question: 'Will Social Status Online always be free?',
    answer: 'The core features will always remain free. In the future, we may introduce optional premium features (custom domains, advanced analytics, themes) but the fundamental service remains free forever.',
  },
  {
    id: 16,
    category: 'billing',
    question: 'How do I get support?',
    answer: 'Contact us anytime at hello@social-status.online or use our contact form. We typically respond within 24 hours on weekdays. For urgent issues, mark your email as "Urgent".',
  },
  {
    id: 17,
    category: 'billing',
    question: 'Can I feature my profile on the homepage?',
    answer: 'Featured profiles are selected based on completeness, quality, and engagement. Keep your profile updated and active, and you may be featured! You can also reach out to request featuring.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: '📋' },
  { id: 'general', label: 'General', icon: '💡' },
  { id: 'subdomain', label: 'Subdomains', icon: '🌐' },
  { id: 'technical', label: 'Technical', icon: '⚙️' },
  { id: 'privacy', label: 'Privacy', icon: '🔒' },
  { id: 'billing', label: 'Billing & Support', icon: '💳' },
];

const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page metadata
    updatePageMetadata('/faq');
    
    // Inject FAQPage Schema
    const faqSchemaData = FAQ_DATA.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }));
    injectStructuredData(generateFAQSchema(faqSchemaData));
    
    // Inject Breadcrumb Schema
    const breadcrumbData = [
      { name: 'Home', url: config.siteUrl },
      { name: 'FAQ', url: `${config.siteUrl}/faq` }
    ];
    injectStructuredData(generateBreadcrumbSchema(breadcrumbData));
  }, []);

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neumorphic-bg via-neumorphic-light to-neumorphic-bg 
                    dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
      <PageHeader title="FAQ" subtitle="Frequently Asked Questions" />
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                            bg-gradient-to-br from-blue-500 to-purple-600 mb-6
                            shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                            dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
              <FaQuestionCircle className="text-3xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-dark-text mb-4">
              How Can We Help?
            </h1>
            <p className="text-gray-600 dark:text-dark-muted text-lg max-w-2xl mx-auto">
              Find answers to common questions about Social Status Online
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-dark-muted" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl
                         bg-white dark:bg-dark-card
                         text-gray-800 dark:text-dark-text
                         shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                         dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]
                         focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                         transition-all duration-300"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]'
                    : 'bg-white dark:bg-dark-card text-gray-700 dark:text-dark-text shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-dark-muted text-lg">
                  No questions found matching "{searchQuery}"
                </p>
              </div>
            ) : (
              filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-dark-card rounded-xl overflow-hidden
                           shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                           dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]
                           transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left
                             hover:bg-gray-50 dark:hover:bg-dark-bg/50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-800 dark:text-dark-text pr-4">
                      {faq.question}
                    </span>
                    {expandedId === faq.id ? (
                      <FaChevronUp className="text-blue-500 flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedId === faq.id && (
                    <div className="px-6 pb-4 border-t border-gray-200 dark:border-dark-light pt-4">
                      <p className="text-gray-600 dark:text-dark-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 text-center bg-gradient-to-br from-blue-50 to-purple-50 
                        dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-dark-muted mb-6">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-br from-blue-500 to-purple-600 
                       text-white font-semibold rounded-lg
                       shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                       dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                       hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                       transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQPage;
