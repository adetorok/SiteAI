import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { debugLog, debugError } from '../utils/debug';

const ComplianceSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Auto-open when URL hash is #compliance-details
  useEffect(() => {
    try {
      if (window.location.hash === '#compliance-details') {
        setIsOpen(true);
        // Smooth scroll to the panel
        setTimeout(() => {
          const element = document.getElementById('compliance-details');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } catch (error) {
      debugError('Compliance section hash handling error', error);
    }
  }, []);

  const toggle = () => {
    try {
      debugLog('Toggling compliance section', { isOpen: !isOpen });
      setIsOpen(!isOpen);
    } catch (error) {
      debugError('Toggle compliance section error', error);
    }
  };

  const scrollToColumn = (columnId: string) => {
    try {
      if (!isOpen) {
        setIsOpen(true);
      }
      setTimeout(() => {
        const element = document.getElementById(columnId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 400); // Wait for animation to complete
    } catch (error) {
      debugError('Scroll to column error', error);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Compliance & Security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cursor meets the highest standards for clinical research, ensuring your data is protected and your processes are audit-ready.
          </p>
        </div>

        {/* Compliance Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* HIPAA Card */}
          <div 
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => scrollToColumn('hipaa-details')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToColumn('hipaa-details');
              }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">HIPAA Compliant</h3>
            </div>
            <p className="text-gray-600">
              End-to-end encryption and strict access controls ensure patient data privacy and security.
            </p>
          </div>

          {/* 21 CFR Part 11 Card */}
          <div 
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => scrollToColumn('cfr-details')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToColumn('cfr-details');
              }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">21 CFR Part 11</h3>
            </div>
            <p className="text-gray-600">
              Electronic signatures and immutable audit trails meet FDA requirements for clinical research.
            </p>
          </div>

          {/* SOC 2 Type II Card */}
          <div 
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => scrollToColumn('soc2-details')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToColumn('soc2-details');
              }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">SOC 2 Type II</h3>
            </div>
            <p className="text-gray-600">
              Independent third-party audit confirms our security, availability, and processing integrity.
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <div className="text-center mb-8">
          <button
            id="compliance-toggle"
            aria-controls="compliance-details"
            aria-expanded={isOpen}
            onClick={toggle}
            className="bg-cursor-blue text-white rounded-xl px-6 py-3 font-medium shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:ring-offset-2 transition-all duration-200"
          >
            {isOpen ? 'Hide Compliance Details' : 'Learn More About Compliance'}
            <svg 
              className={`ml-2 inline w-5 h-5 chevron transition-transform duration-200 ${isOpen ? 'chevron-rotated' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Collapsible Panel */}
        <div
          id="compliance-details"
          role="region"
          aria-labelledby="compliance-toggle"
          className={`collapsible mt-8 border-t border-gray-200 pt-8 ${isOpen ? 'collapsible-open' : 'collapsible-closed'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* HIPAA Details */}
            <div id="hipaa-details" className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">HIPAA</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>End-to-end encryption (in transit & at rest)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Access controls and least-privilege permissions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Audit logs for PHI access</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Optional BAA available upon request</span>
                </li>
              </ul>
              <Link 
                to="/legal/hipaa" 
                className="text-sm text-cursor-blue hover:text-blue-700 font-medium inline-flex items-center"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* 21 CFR Part 11 Details */}
            <div id="cfr-details" className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">21 CFR Part 11</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Electronic signatures with identity verification</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Immutable audit trails & timestamping</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Validation documentation available</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Controlled change management</span>
                </li>
              </ul>
              <Link 
                to="/legal/21-cfr-part-11" 
                className="text-sm text-cursor-blue hover:text-blue-700 font-medium inline-flex items-center"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* SOC 2 Type II Details */}
            <div id="soc2-details" className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">SOC 2 Type II</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Security & Availability trust services covered</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Continuous control monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Independent audit attestation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                  <span>Incident response & vendor risk management</span>
                </li>
              </ul>
              <Link 
                to="/legal/soc2" 
                className="text-sm text-cursor-blue hover:text-blue-700 font-medium inline-flex items-center"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
