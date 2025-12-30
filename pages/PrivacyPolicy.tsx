import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaHome } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import { generateBreadcrumbSchema, injectStructuredData } from '../seo';
import { updatePageMetadata } from '../utils/pageMetadata';
import { config } from '../config';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page metadata
    updatePageMetadata('/privacy');
    
    // Inject Breadcrumb Schema
    const breadcrumbData = [
      { name: 'Home', url: config.siteUrl },
      { name: 'Privacy Policy', url: `${config.siteUrl}/privacy` }
    ];
    injectStructuredData(generateBreadcrumbSchema(breadcrumbData));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neumorphic-bg via-neumorphic-light to-neumorphic-bg 
                    dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
      <PageHeader title="Privacy Policy" subtitle="How we protect your data" />
      <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                          bg-gradient-to-br from-blue-500 to-purple-600 mb-6
                          shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                          dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
            <FaShieldAlt className="text-3xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-dark-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-dark-muted text-lg">
            Last Updated: December 7, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12
                        shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                        dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]">
          
          {/* Introduction */}
          <section className="mb-8">
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              Social Status Online (operated by <strong>Suresh Babu Gogula</strong>) ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://social-status.online" className="text-blue-600 dark:text-blue-400 hover:underline">https://social-status.online</a> and its subdomains (the "Site").
            </p>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              By using our Site, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Site.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              1. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              1.1 Personal Information
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4 mb-4">
              <li>Register for an account on our platform</li>
              <li>Create or update a profile</li>
              <li>Contact us through our contact form</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Interact with our services</li>
            </ul>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Professional information (job title, company, bio, skills)</li>
              <li>Social media profile links</li>
              <li>Profile images and portfolio content</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              1.2 Automatically Collected Information
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              When you visit our Site, we automatically collect certain information about your device and browsing activities, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>IP address and device identifiers</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website or source</li>
              <li>Pages visited and time spent on pages</li>
              <li>Search queries and interactions with the Site</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              1.3 Cookies and Tracking Technologies
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can control cookies through your browser settings. For more information, please see our Cookie Policy section below.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>To provide, operate, and maintain our services</li>
              <li>To create and manage your profile and subdomain</li>
              <li>To process your requests and respond to inquiries</li>
              <li>To send administrative information, updates, and security alerts</li>
              <li>To improve, personalize, and expand our services</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              3. How We Share Your Information
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              3.1 Public Profiles
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              Information you include in your public profile (name, photo, bio, social links, portfolio) is visible to all visitors of the Site and your subdomain. Please do not include sensitive personal information in your public profile.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              3.2 Service Providers
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              We use third-party service providers to support our operations:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li><strong>Google Firebase:</strong> For hosting, data storage, and authentication services</li>
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring (optional, based on your consent)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              3.3 Legal Requirements
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              We may disclose your information if required by law or in response to valid requests by public authorities (e.g., court orders, government requests).
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              4. Data Storage and Security
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              Your data is stored securely using Google Firebase infrastructure, which employs industry-standard security measures including encryption, access controls, and regular security audits.
            </p>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              While we implement reasonable security measures to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:hello@social-status.online" className="text-blue-600 dark:text-blue-400 hover:underline">hello@social-status.online</a>
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              6. Cookies and Tracking
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              We use the following types of cookies:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> Necessary for site functionality (login, preferences)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our Site (Google Analytics, with consent)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings (theme, language)</li>
            </ul>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mt-4">
              You can manage your cookie preferences through our cookie consent banner or your browser settings. Note that disabling certain cookies may affect site functionality.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal or compliance purposes.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              9. International Users
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              Our Site is operated from India. If you are accessing our Site from outside India, please be aware that your information may be transferred to, stored, and processed in India or other countries where our service providers operate. By using our Site, you consent to this transfer.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-neumorphic-light dark:bg-dark-bg rounded-2xl p-6
                            shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                            dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]">
              <p className="text-gray-800 dark:text-dark-text font-semibold mb-2">
                Social Status Online
              </p>
              <p className="text-gray-700 dark:text-dark-muted">
                Operated by: Suresh Babu Gogula
              </p>
              <p className="text-gray-700 dark:text-dark-muted">
                Email: <a href="mailto:hello@social-status.online" className="text-blue-600 dark:text-blue-400 hover:underline">hello@social-status.online</a>
              </p>
              <p className="text-gray-700 dark:text-dark-muted">
                Location: Karnataka, India
              </p>
            </div>
          </section>

          {/* GDPR Compliance Note */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              12. GDPR Compliance (For EU Users)
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              If you are located in the European Economic Area (EEA), you have certain rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>Right to be informed about data collection and use</li>
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision-making</li>
            </ul>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:hello@social-status.online" className="text-blue-600 dark:text-blue-400 hover:underline">hello@social-status.online</a>
            </p>
          </section>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-light text-center">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold
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
    </div>
  );
};

export default PrivacyPolicy;
