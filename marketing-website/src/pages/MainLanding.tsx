import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { debugLog, debugError, debugRender } from '../utils/debug';
import ComplianceSection from '../components/ComplianceSection';
import Hero from '../components/Hero';

const MainLanding: React.FC = () => {
  // Debug component render
  debugRender('MainLanding');

  // State for error handling and loading
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Component lifecycle and error handling
  useEffect(() => {
    try {
      debugLog('MainLanding component mounted');
      
      // Simulate some initialization
      const initializeComponent = async () => {
        try {
          // Add any async initialization here
          await new Promise(resolve => setTimeout(resolve, 100));
          setIsLoading(false);
          debugLog('MainLanding initialization complete');
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

    // Cleanup function
    return () => {
      debugLog('MainLanding component unmounting');
    };
  }, []);

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
          <p className="text-gray-600">Loading SiteAI...</p>
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
                  <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold text-cursor-blue">SiteAI</h1>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/" className="text-cursor-gray hover:text-cursor-blue px-3 py-2 rounded-md text-sm font-medium">
                      Why SiteAI
                    </Link>
                    <Link to="/features" className="text-cursor-gray hover:text-cursor-blue px-3 py-2 rounded-md text-sm font-medium">
                      Features
                    </Link>
                    <Link to="/demo" className="text-cursor-gray hover:text-cursor-blue px-3 py-2 rounded-md text-sm font-medium">
                      Demo
                    </Link>
                    <Link to="/auth" className="text-cursor-gray hover:text-cursor-blue px-3 py-2 rounded-md text-sm font-medium">
                      Login / Sign Up
                    </Link>
                  </div>
                </div>
                <div className="md:hidden">
                  <Link to="/demo" className="bg-cursor-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Get Demo
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <Hero />

          {/* Pain & Solution Summary */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Tired of Juggling Multiple Calendars and Spreadsheets?
                </h2>
                <p className="text-xl text-cursor-gray max-w-3xl mx-auto">
                  SiteAI's unified calendar handles all your study visits, tasks, and reminders automatically.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="bg-cursor-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cursor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Save 5+ Hours/Week</h3>
                  <p className="text-cursor-gray">Automated scheduling and reminders eliminate manual follow-ups</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="bg-cursor-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cursor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fewer Errors</h3>
                  <p className="text-cursor-gray">Digital checklists and automated validation prevent mistakes</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="bg-cursor-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cursor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Audit Ready</h3>
                  <p className="text-cursor-gray">Built-in compliance with 21 CFR Part 11 and HIPAA standards</p>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Highlights */}
          <section className="py-20 bg-cursor-light-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Everything You Need to Run Studies Successfully
                </h2>
                <p className="text-xl text-cursor-gray max-w-3xl mx-auto">
                  Unlike generic schedulers, SiteAI is purpose-built for clinical sites – it's your calendar, 
                  visit tracker, supply manager, and eReg binder in one.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cursor-blue text-white p-2 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Unified Multi-Study Calendar</h3>
                      <p className="text-cursor-gray">See all upcoming visits, tasks, and deadlines across every active study in one color-coded calendar.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cursor-green text-white p-2 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM20 9h-6v2h6V9zM4 15h6v-2H4v2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Visit Reminders</h3>
                      <p className="text-cursor-gray">Smart notifications for participants and staff ensure nothing falls through the cracks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cursor-blue text-white p-2 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Visit Checklists</h3>
                      <p className="text-cursor-gray">Step-by-step procedures with photo capture and e-signatures for complete protocol adherence.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cursor-green text-white p-2 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Supply & Equipment Tracking</h3>
                      <p className="text-cursor-gray">Never run out of critical supplies with automated inventory alerts and visit preparation prompts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cursor-blue text-white p-2 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Payment Triggers</h3>
                      <p className="text-cursor-gray">Automatic prompts for visit payments and participant stipends after visit completion.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cursor-green text-white p-2 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete eReg Binder</h3>
                      <p className="text-cursor-gray">All study documents, training certificates, and regulatory files in one secure location.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust & Compliance */}
          <ComplianceSection />

          {/* Social Proof */}
          <section className="py-20 bg-cursor-light-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted by Clinical Research Sites
              </h2>
              <p className="text-xl text-cursor-gray mb-12 max-w-3xl mx-auto">
                See how SiteAI is transforming site operations and making coordinators' lives easier.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-xl text-gray-900 mb-6 italic">
                  "SiteAI has transformed how we manage our studies. We've saved over 5 hours per week per coordinator, 
                  and our visit compliance rate has improved from 85% to 98%. The unified calendar is a game-changer."
                </blockquote>
                <div className="text-cursor-gray">
                  <p className="font-semibold">Sarah Johnson, RN, BSN</p>
                  <p>Clinical Research Coordinator, Memorial Medical Center</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-cursor-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Site Operations?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                Join the growing number of clinical research sites that have simplified their study management with SiteAI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-white text-cursor-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    try {
                      debugLog('Final CTA - Get Your Free Demo button clicked');
                      // Add demo request logic here
                      alert('Demo request functionality coming soon!');
                    } catch (error) {
                      debugError('Final CTA demo button click error', error);
                      alert('Sorry, there was an error. Please try again.');
                    }
                  }}
                >
                  Get Your Free Demo
                </button>
                <button 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cursor-blue transition-colors"
                  onClick={() => {
                    try {
                      debugLog('Final CTA - Start Free Trial button clicked');
                      // Add free trial logic here
                      alert('Free trial functionality coming soon!');
                    } catch (error) {
                      debugError('Final CTA trial button click error', error);
                      alert('Sorry, there was an error. Please try again.');
                    }
                  }}
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-cursor-blue mb-4">SiteAI</h3>
                  <p className="text-gray-300">
                    Transforming clinical research site management with intelligent, compliant technology.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Product</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><Link to="/features" className="hover:text-white">Features</Link></li>
                    <li><Link to="/compliance" className="hover:text-white">Compliance</Link></li>
                    <li><Link to="/security" className="hover:text-white">Security</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><Link to="/about" className="hover:text-white">About</Link></li>
                    <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
                    <li><Link to="/docs" className="hover:text-white">Documentation</Link></li>
                    <li><Link to="/status" className="hover:text-white">System Status</Link></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                <p>&copy; 2024 SiteAI. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      );
    } catch (error) {
      debugError('Render error in MainLanding', error);
      setHasError(true);
      setErrorMessage('Failed to render page content');
      return null;
    }
  };

  // Return the safe render result
  return safeRender();
};

export default MainLanding; 