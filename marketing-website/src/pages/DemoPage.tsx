import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { debugLog, debugError, debugRender } from '../utils/debug';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  siteName: string;
  numberOfStudies: string;
  phone: string;
  role: string;
  preferredTime: string;
  additionalNotes: string;
}

interface FormErrors {
  [key: string]: string;
}

const DemoPage: React.FC = () => {
  // Debug component render
  debugRender('DemoPage');

  // State for error handling and loading
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    siteName: '',
    numberOfStudies: '',
    phone: '',
    role: '',
    preferredTime: '',
    additionalNotes: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Component lifecycle and error handling
  useEffect(() => {
    try {
      debugLog('DemoPage component mounted');
      
      // Simulate some initialization
      const initializeComponent = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 100));
          setIsLoading(false);
          debugLog('DemoPage initialization complete');
        } catch (error) {
          debugError('Initialization error', error);
          setHasError(true);
          setErrorMessage('Failed to initialize component');
          setIsLoading(false);
        }
      };

      initializeComponent();
    } catch (error) {
      debugError('Component mount error', error);
      setHasError(true);
      setErrorMessage('Component failed to mount');
      setIsLoading(false);
    }

    return () => {
      debugLog('DemoPage component unmounting');
    };
  }, []);

  // Form validation
  const validateForm = (): boolean => {
    try {
      debugLog('Validating form data', formData);
      
      const errors: FormErrors = {};

      if (!formData.firstName.trim()) {
        errors.firstName = 'First name is required';
      }

      if (!formData.lastName.trim()) {
        errors.lastName = 'Last name is required';
      }

      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }

      if (!formData.siteName.trim()) {
        errors.siteName = 'Site name is required';
      }

      if (!formData.numberOfStudies) {
        errors.numberOfStudies = 'Please select number of studies';
      }

      if (!formData.role.trim()) {
        errors.role = 'Please select your role';
      }

      setFormErrors(errors);
      debugLog('Form validation complete', { errors, isValid: Object.keys(errors).length === 0 });
      
      return Object.keys(errors).length === 0;
    } catch (error) {
      debugError('Form validation error', error);
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      debugLog('Form submission started');
      
      if (!validateForm()) {
        debugLog('Form validation failed', formErrors);
        return;
      }

      setIsSubmitting(true);
      debugLog('Submitting form data', formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Success
      setIsSubmitted(true);
      debugLog('Form submitted successfully');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        siteName: '',
        numberOfStudies: '',
        phone: '',
        role: '',
        preferredTime: '',
        additionalNotes: ''
      });

    } catch (error) {
      debugError('Form submission error', error);
      setFormErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    try {
      const { name, value } = e.target;
      debugLog('Input change', { name, value });
      
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));

      // Clear error when user starts typing
      if (formErrors[name]) {
        setFormErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    } catch (error) {
      debugError('Input change error', error);
    }
  };

  // Error state UI
  if (hasError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">
            {errorMessage || 'We encountered an error while loading the page.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-cursor-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Loading state UI
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cursor-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Demo Page...</p>
        </div>
      </div>
    );
  }

  // Success state UI
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6">
            Your demo request has been submitted successfully. A product specialist will reach out within 1 business day to confirm your demo.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-cursor-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Request Another Demo
            </button>
            <Link
              to="/"
              className="block w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Safe render function with error boundary
  const safeRender = () => {
    try {
      return (
        <div className="min-h-screen bg-white">
          {/* Navigation */}
          <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <Link to="/" className="text-2xl font-bold text-cursor-blue">
                    Cursor
                  </Link>
                </div>
                <div className="hidden md:flex space-x-8">
                  <Link to="/" className="text-gray-600 hover:text-cursor-blue transition-colors">
                    Home
                  </Link>
                  <Link to="/features" className="text-gray-600 hover:text-cursor-blue transition-colors">
                    Features
                  </Link>
                  <Link to="/demo" className="text-cursor-blue font-medium">
                    Demo
                  </Link>
                  <Link to="/login" className="text-gray-600 hover:text-cursor-blue transition-colors">
                    Login
                  </Link>
                </div>
                <div className="md:hidden">
                  <button className="text-gray-600 hover:text-cursor-blue">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="bg-gradient-to-r from-cursor-blue to-blue-700 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Started with Cursor
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Experience Cursor first-hand. See how you can simplify your study operations.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Column - Content */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    See Cursor in Action
                  </h2>
                  
                  <div className="space-y-6 text-gray-600">
                    <p className="text-lg">
                      In a 30-minute demo, see how Cursor's calendar and visit planner can save you hours each week.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900">What You'll See:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                          <span>Unified calendar for all your studies</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                          <span>Automated visit scheduling and reminders</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                          <span>Mobile checklist and evidence capture</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                          <span>Compliance and audit trail features</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Trust & Security</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          No software install required
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Your data is secure and HIPAA compliant
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Trusted by 50+ clinical research sites
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Request Your Free Demo
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                            formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="John"
                        />
                        {formErrors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                            formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Doe"
                        />
                        {formErrors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john.doe@site.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Site Name */}
                    <div>
                      <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-2">
                        Site/Organization Name *
                      </label>
                      <input
                        type="text"
                        id="siteName"
                        name="siteName"
                        value={formData.siteName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                          formErrors.siteName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Clinical Research Center"
                      />
                      {formErrors.siteName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.siteName}</p>
                      )}
                    </div>

                    {/* Number of Studies */}
                    <div>
                      <label htmlFor="numberOfStudies" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Active Studies *
                      </label>
                      <select
                        id="numberOfStudies"
                        name="numberOfStudies"
                        value={formData.numberOfStudies}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                          formErrors.numberOfStudies ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select number of studies</option>
                        <option value="1-5">1-5 studies</option>
                        <option value="6-10">6-10 studies</option>
                        <option value="11-20">11-20 studies</option>
                        <option value="21-50">21-50 studies</option>
                        <option value="50+">50+ studies</option>
                      </select>
                      {formErrors.numberOfStudies && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.numberOfStudies}</p>
                      )}
                    </div>

                    {/* Role */}
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Role *
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                          formErrors.role ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select your role</option>
                        <option value="site-coordinator">Site Coordinator</option>
                        <option value="principal-investigator">Principal Investigator</option>
                        <option value="site-director">Site Director</option>
                        <option value="clinical-research-nurse">Clinical Research Nurse</option>
                        <option value="other">Other</option>
                      </select>
                      {formErrors.role && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.role}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Demo Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue"
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                        <option value="evening">Evening (5 PM - 7 PM)</option>
                        <option value="flexible">Flexible - I'll work around your schedule</option>
                      </select>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue"
                        placeholder="Any specific questions or areas you'd like us to focus on during the demo..."
                      />
                    </div>

                    {/* Submit Error */}
                    {formErrors.submit && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-3">
                        <p className="text-sm text-red-600">{formErrors.submit}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cursor-blue text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </div>
                      ) : (
                        'Request Your Free Demo'
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to receive communications from Cursor about our products and services.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Site Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the growing number of clinical research sites that trust Cursor to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-cursor-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    try {
                      debugLog('CTA - Request Demo button clicked');
                      document.getElementById('firstName')?.scrollIntoView({ behavior: 'smooth' });
                    } catch (error) {
                      debugError('CTA button click error', error);
                    }
                  }}
                >
                  Request Demo Now
                </button>
                <Link 
                  to="/features"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-cursor-blue mb-4">Cursor</h3>
                  <p className="text-gray-300">
                    Transforming clinical research site management with intelligent, compliant technology.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Product</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                    <li><Link to="/demo" className="hover:text-white transition-colors">Demo</Link></li>
                    <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                    <li><Link to="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                    <li><Link to="/status" className="hover:text-white transition-colors">System Status</Link></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                <p>&copy; 2024 Cursor. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      );
    } catch (error) {
      debugError('Render error in DemoPage', error);
      setHasError(true);
      setErrorMessage('Failed to render page content');
      return null;
    }
  };

  // Return the safe render result
  return safeRender();
};

export default DemoPage;
