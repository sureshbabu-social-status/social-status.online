import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaHome } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import { generateBreadcrumbSchema, injectStructuredData } from '../seo';
import { updatePageMetadata } from '../utils/pageMetadata';
import { config } from '../config';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page metadata
    updatePageMetadata('/terms');
    
    // Inject Breadcrumb Schema
    const breadcrumbData = [
      { name: 'Home', url: config.siteUrl },
      { name: 'Terms of Service', url: `${config.siteUrl}/terms` }
    ];
    injectStructuredData(generateBreadcrumbSchema(breadcrumbData));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neumorphic-bg via-neumorphic-light to-neumorphic-bg 
                    dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
      <PageHeader title="Terms of Service" subtitle="Please read carefully" />
      <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                          bg-gradient-to-br from-blue-500 to-purple-600 mb-6
                          shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                          dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
            <FaBalanceScale className="text-3xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-dark-text mb-4">
            Terms of Service
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
              Welcome to <strong>Social Status Online</strong> (operated by <strong>Suresh Babu Gogula</strong>). These Terms of Service ("Terms") govern your access to and use of our website <a href="https://social-status.online" className="text-blue-600 dark:text-blue-400 hover:underline">https://social-status.online</a> and its subdomains (collectively, the "Site" or "Service").
            </p>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              By accessing or using our Service, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access or use our Service.
            </p>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed font-semibold">
              Please read these Terms carefully before using our Service.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              1. Definitions
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li><strong>"Service"</strong> refers to Social Status Online, the website, platform, and all related services provided.</li>
              <li><strong>"We," "Us," "Our"</strong> refers to Social Status Online, operated by Suresh Babu Gogula.</li>
              <li><strong>"You," "Your," "User"</strong> refers to the individual or entity accessing or using the Service.</li>
              <li><strong>"Content"</strong> refers to text, images, graphics, logos, data, profiles, and any other materials displayed on the Service.</li>
              <li><strong>"Profile"</strong> refers to the user-created page showcasing professional information, accessible via a subdomain.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              2. Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              By accessing, browsing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms constitute a legally binding agreement between you and Social Status Online.
            </p>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              3. Description of Service
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              Social Status Online is a professional profiles directory platform that allows users to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>Create and maintain professional profiles</li>
              <li>Showcase their work, skills, achievements, and portfolio</li>
              <li>Connect with other professionals and potential clients</li>
              <li>Receive a personalized subdomain (e.g., yourname.social-status.online)</li>
              <li>Discover and explore other professional profiles</li>
            </ul>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              4. User Accounts and Registration
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              4.1 Account Creation
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              To access certain features of the Service, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              4.2 Account Eligibility
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              You must be at least 13 years of age to use the Service. If you are under 18, you represent that you have your parent's or guardian's permission to use the Service. By using the Service, you represent and warrant that you meet these eligibility requirements.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              5. User Content and Conduct
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              5.1 Your Content
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              You retain ownership of all content you submit, post, or display on the Service ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content for the purpose of operating and improving the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              5.2 Content Responsibilities
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              You are solely responsible for your User Content. You represent and warrant that:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>You own or have the necessary rights to all User Content you submit</li>
              <li>Your User Content does not violate any third-party rights (intellectual property, privacy, publicity)</li>
              <li>Your User Content complies with these Terms and applicable laws</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              5.3 Prohibited Conduct
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              You agree NOT to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>Post false, misleading, fraudulent, or deceptive information</li>
              <li>Impersonate any person or entity</li>
              <li>Upload content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
              <li>Upload content containing malware, viruses, or harmful code</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Engage in spam, phishing, or unsolicited advertising</li>
              <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use the Service for any illegal purpose or to violate any laws</li>
              <li>Scrape, data mine, or harvest content without permission</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              6. Intellectual Property Rights
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              6.1 Our Rights
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              The Service, including its design, structure, selection, coordination, expression, look and feel, and arrangement of content, is owned by Social Status Online and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              You may not copy, modify, reproduce, republish, upload, post, transmit, or distribute any part of the Service without our prior written consent.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              6.2 Trademarks
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              "Social Status Online" and related logos are trademarks of Suresh Babu Gogula. You may not use these trademarks without our prior written permission.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              7. Privacy and Data Protection
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using the Service, you consent to our collection and use of information as described in our Privacy Policy.
            </p>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              Please review our <Link to="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Privacy Policy</Link> to understand our practices.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              8. Subdomain and Profile Management
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              Upon creating a profile, you may be assigned a subdomain (e.g., yourname.social-status.online). You agree that:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>Subdomain names are assigned on a first-come, first-served basis</li>
              <li>We reserve the right to refuse or reclaim any subdomain at our discretion</li>
              <li>Subdomain names must not infringe on trademarks or violate any laws</li>
              <li>We may change or discontinue subdomain services with reasonable notice</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              9. Termination
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              9.1 Termination by You
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              You may terminate your account at any time by contacting us at <a href="mailto:hello@social-status.online" className="text-blue-600 dark:text-blue-400 hover:underline">hello@social-status.online</a> or through your account settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              9.2 Termination by Us
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account and access to the Service at any time, with or without cause, and with or without notice, including if:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>You violate these Terms</li>
              <li>Your conduct is harmful to other users or our business</li>
              <li>We are required to do so by law</li>
              <li>We discontinue the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              9.3 Effect of Termination
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              Upon termination, your right to use the Service will immediately cease. We may delete your account and User Content. Provisions that by their nature should survive termination (including intellectual property, disclaimers, limitations of liability) will survive.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              10. Disclaimers and Limitations of Liability
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              10.1 Service Provided "AS IS"
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4 uppercase font-semibold">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>The Service will be uninterrupted, secure, or error-free</li>
              <li>The results obtained from the Service will be accurate or reliable</li>
              <li>Defects will be corrected</li>
              <li>The Service will meet your requirements</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              10.2 Limitation of Liability
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4 uppercase font-semibold">
              To the maximum extent permitted by law, Social Status Online, Suresh Babu Gogula, and their affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li>Your use or inability to use the Service</li>
              <li>Unauthorized access to or alteration of your data or User Content</li>
              <li>Any third-party conduct or content on the Service</li>
              <li>Any other matter related to the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              10.3 Indemnification
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              You agree to indemnify, defend, and hold harmless Social Status Online, Suresh Babu Gogula, and their affiliates from any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of your use of the Service, your User Content, or your violation of these Terms.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              11. Third-Party Links and Services
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              The Service may contain links to third-party websites or services that are not owned or controlled by Social Status Online. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be liable for any damages or losses caused by your use of any third-party content or services.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              12. Governing Law and Dispute Resolution
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              12.1 Governing Law
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. The courts of Karnataka, India shall have exclusive jurisdiction over any disputes arising under these Terms.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3 mt-6">
              12.2 Dispute Resolution
            </h3>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              Any disputes arising from these Terms or your use of the Service shall first be attempted to be resolved through good faith negotiation. If negotiation fails, the dispute shall be resolved through binding arbitration or litigation in the courts of Karnataka, India.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              13. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              We reserve the right to modify or update these Terms at any time. When we make changes, we will update the "Last Updated" date at the top of this page. Material changes will be notified through the Service or via email.
            </p>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed">
              Your continued use of the Service after changes to these Terms constitutes your acceptance of the revised Terms. If you do not agree to the modified Terms, you must stop using the Service.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              14. General Provisions
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-muted space-y-2 ml-4">
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Social Status Online regarding the Service.</li>
              <li><strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</li>
              <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</li>
              <li><strong>Assignment:</strong> You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.</li>
              <li><strong>No Agency:</strong> These Terms do not create any agency, partnership, or joint venture relationship.</li>
            </ul>
          </section>

          {/* Section 15 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              15. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed mb-4">
              If you have any questions, concerns, or feedback about these Terms, please contact us:
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

          {/* Acknowledgment */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
              16. Acknowledgment
            </h2>
            <p className="text-gray-700 dark:text-dark-muted leading-relaxed font-semibold">
              By using Social Status Online, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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

export default TermsOfService;
