import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaUser, FaPaperPlane, FaHome, FaCheckCircle, FaExclamationCircle, FaMapMarkerAlt, FaFileUpload, FaTimes } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjs.config';
import { generateBreadcrumbSchema, injectStructuredData } from '../seo';
import { updatePageMetadata } from '../utils/pageMetadata';
import { config } from '../config';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | 'info' | null;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page metadata
    updatePageMetadata('/contact');
    
    // Inject Breadcrumb Schema
    const breadcrumbData = [
      { name: 'Home', url: config.siteUrl },
      { name: 'Contact', url: `${config.siteUrl}/contact` }
    ];
    injectStructuredData(generateBreadcrumbSchema(breadcrumbData));
  }, []);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (selectedFile) {
      // Validate file size (2MB limit for EmailJS)
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (selectedFile.size > maxSize) {
        setStatus({ 
          type: 'error', 
          message: 'File size must be less than 2MB. Please compress or choose a smaller file.' 
        });
        e.target.value = '';
        return;
      }

      // Validate file type (common resume formats)
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain'
      ];
      
      if (!allowedTypes.includes(selectedFile.type)) {
        setStatus({ 
          type: 'error', 
          message: 'Please upload a PDF, DOC, DOCX, or TXT file only.' 
        });
        e.target.value = '';
        return;
      }

      setFile(selectedFile);
      setStatus({ type: null, message: '' });
    }
  };

  const removeFile = () => {
    setFile(null);
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return;
    }
    
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email address' });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }
    
    if (!formData.subject.trim()) {
      setStatus({ type: 'error', message: 'Please enter a subject' });
      return;
    }
    
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Sending your message...' });
    
    try {
      // Check if EmailJS is configured
      if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        throw new Error('EmailJS not configured. Please check emailjs.config.ts');
      }

      // Send email with EmailJS
      const now = new Date();
      const timestamp = now.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: timestamp,
        to_name: 'Social Status Online Team',
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: file 
            ? '✅ Message sent successfully! We\'ll review your resume and get back to you soon.'
            : '✅ Message sent successfully! We\'ll get back to you soon.'
        });
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFile(null);
        if (formRef.current) formRef.current.reset();
      }
      
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      
      // Provide helpful error messages
      let errorMessage = 'Failed to send message. ';
      
      if (error.message?.includes('not configured')) {
        errorMessage += 'Please contact the site administrator.';
      } else if (error.text?.includes('Invalid')) {
        errorMessage += 'EmailJS configuration error. Please check your settings.';
      } else {
        errorMessage += 'Please try again or email us directly at hello@social-status.online';
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neumorphic-bg via-neumorphic-light to-neumorphic-bg 
                    dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
      <PageHeader title="Contact Us" subtitle="Get in touch with our team" />
      <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                          bg-gradient-to-br from-blue-500 to-purple-600 mb-6
                          shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                          dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]">
            <FaEnvelope className="text-3xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-dark-text mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-dark-muted text-lg max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-dark-card rounded-3xl p-8
                          shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                          dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-6">
              Send us a Message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-dark-muted" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 rounded-xl
                             bg-neumorphic-light dark:bg-dark-bg
                             text-gray-800 dark:text-dark-text
                             shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                             dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]
                             focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                             transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-dark-muted" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-3 rounded-xl
                             bg-neumorphic-light dark:bg-dark-bg
                             text-gray-800 dark:text-dark-text
                             shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                             dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]
                             focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                             transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl
                           bg-neumorphic-light dark:bg-dark-bg
                           text-gray-800 dark:text-dark-text
                           shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                           dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]
                           focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                           transition-all duration-300"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl resize-none
                           bg-neumorphic-light dark:bg-dark-bg
                           text-gray-800 dark:text-dark-text
                           shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                           dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]
                           focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                           transition-all duration-300"
                  required
                />
              </div>

              {/* File Upload Field */}
              <div>
                <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                  Attach Resume (Optional)
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-xl
                               bg-neumorphic-light dark:bg-dark-bg
                               text-gray-700 dark:text-dark-text
                               shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                               dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                               hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                               dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                               cursor-pointer transition-all duration-300"
                    >
                      <FaFileUpload className="text-lg" />
                      <span className="text-sm font-medium">
                        {file ? 'Change File' : 'Choose File (PDF, DOC, DOCX, TXT)'}
                      </span>
                    </label>
                  </div>

                  {/* Selected File Display */}
                  {file && (
                    <div className="flex items-center justify-between gap-3 p-3 rounded-xl
                                  bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <FaFileUpload className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-blue-800 dark:text-blue-300 truncate">
                            {file.name}
                          </p>
                          <p className="text-xs text-blue-600 dark:text-blue-400">
                            {(file.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 
                                 text-blue-600 dark:text-blue-400 transition-colors"
                        aria-label="Remove file"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 dark:text-dark-muted">
                    Maximum file size: 2MB. Supported formats: PDF, DOC, DOCX, TXT
                  </p>
                </div>
              </div>

              {/* Status Message */}
              {status.type && (
                <div className={`flex items-start gap-3 p-4 rounded-xl ${
                  status.type === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                    : status.type === 'info'
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                }`}>
                  {status.type === 'success' ? (
                    <FaCheckCircle className="text-xl flex-shrink-0 mt-0.5" />
                  ) : (
                    <FaExclamationCircle className="text-xl flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm leading-relaxed">{status.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
                         text-white font-semibold text-lg
                         shadow-[4px_4px_12px_#a3b1c6,-4px_-4px_12px_#ffffff]
                         dark:shadow-[4px_4px_12px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.05)]
                         hover:shadow-[2px_2px_6px_#a3b1c6,-2px_-2px_6px_#ffffff]
                         dark:hover:shadow-[2px_2px_6px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.05)]
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-300
                         flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-white dark:bg-dark-card rounded-3xl p-8
                            shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                            dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-600 text-white flex-shrink-0
                                  shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                                  dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-dark-text mb-1">Email</h4>
                    <a 
                      href="mailto:hello@social-status.online" 
                      className="text-blue-600 dark:text-blue-400 hover:underline">
                      hello@social-status.online
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-600 text-white flex-shrink-0
                                  shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                                  dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-dark-text mb-1">Location</h4>
                    <p className="text-gray-700 dark:text-dark-muted">Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white dark:bg-dark-card rounded-3xl p-8
                            shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff]
                            dark:shadow-[12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.05)]">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-6">
                Quick Questions
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-dark-text mb-2">
                    Response Time
                  </h4>
                  <p className="text-gray-700 dark:text-dark-muted text-sm leading-relaxed">
                    We typically respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-dark-text mb-2">
                    Support Hours
                  </h4>
                  <p className="text-gray-700 dark:text-dark-muted text-sm leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                    Saturday - Sunday: Limited support
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-dark-text mb-2">
                    Looking to Join?
                  </h4>
                  <p className="text-gray-700 dark:text-dark-muted text-sm leading-relaxed">
                    Interested in creating your professional profile? Send us an email with your details and we'll help you get started.
                  </p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 
                            rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-700 dark:text-dark-muted leading-relaxed">
                <strong className="text-gray-800 dark:text-dark-text">Note:</strong> We value your privacy and will never share your information with third parties. All communications are confidential.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
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

export default Contact;
