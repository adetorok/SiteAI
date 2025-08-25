import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { debugLog, debugError, debugRender } from '../utils/debug';

const FeaturesPage: React.FC = () => {
  // Debug component render
  debugRender('FeaturesPage');

  // State for error handling and loading
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Component lifecycle and error handling
  useEffect(() => {
    try {
      debugLog('FeaturesPage component mounted');
      
      // Simulate some initialization
      const initializeComponent = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 100));
          setIsLoading(false);
          debugLog('FeaturesPage initialization complete');
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
      debugLog('FeaturesPage component unmounting');
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
          <p className="text-gray-600">Loading Features...</p>
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
                    SiteAI
                  </Link>
                </div>
                <div className="hidden md:flex space-x-8">
                  <Link to="/" className="text-gray-600 hover:text-cursor-blue transition-colors">
                    Home
                  </Link>
                  <Link to="/features" className="text-cursor-blue font-medium">
                    Features
                  </Link>
                  <Link to="/demo" className="text-gray-600 hover:text-cursor-blue transition-colors">
                    Demo
                  </Link>
                                     <Link to="/auth" className="text-gray-600 hover:text-cursor-blue transition-colors">
                     Login / Sign Up
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
                How SiteAI Helps You
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Discover the powerful features that transform clinical research site management from chaos to clarity
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Unified Calendar & Task Manager */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-cursor-blue rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Unified Calendar & Task Manager</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      One calendar for all studies – never miss a visit or task.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">See every visit across all ongoing trials in one color-coded calendar</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Study identifiers, visit names, and due windows clearly displayed</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">System flags what's coming next and what needs attention</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Overdue tasks and upcoming visit preparations highlighted</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="text-gray-500 text-sm mb-2">Calendar Interface Mockup</div>
                    <div className="bg-white rounded border p-6">
                      <div className="grid grid-cols-7 gap-1 text-xs">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                          <div key={day} className="p-2 font-medium text-gray-600">{day}</div>
                        ))}
                        {Array.from({ length: 35 }, (_, i) => (
                          <div key={i} className={`p-2 text-xs border ${
                            i === 15 ? 'bg-blue-100 border-blue-300' : 
                            i === 18 ? 'bg-green-100 border-green-300' : 
                            i === 22 ? 'bg-yellow-100 border-yellow-300' : 'border-gray-200'
                          }`}>
                            {i + 1}
                            {i === 15 && <div className="text-blue-600 font-medium">Study A - Visit 1</div>}
                            {i === 18 && <div className="text-green-600 font-medium">Study B - Screening</div>}
                            {i === 22 && <div className="text-yellow-600 font-medium">Study C - Follow-up</div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Scheduling & Reminders */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-cursor-green rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Visit Scheduling & Reminders</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      Auto-schedule visits and never miss a reminder.
                    </p>
                                         <ul className="mt-6 space-y-3 text-left">
                       <li className="flex items-start gap-3">
                         <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
                         <span className="flex-1">
                           When you enroll a subject, <strong>SiteAI</strong> creates their entire visit schedule with allowed date windows
                         </span>
                       </li>
                       <li className="flex items-start gap-3">
                         <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
                         <span className="flex-1">
                           You'll get notified if a visit window is approaching its end
                         </span>
                       </li>
                       <li className="flex items-start gap-3">
                         <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
                         <span className="flex-1">
                           System sends SMS/email reminders to subjects before each visit
                         </span>
                       </li>
                       <li className="flex items-start gap-3">
                         <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
                         <span className="flex-1">
                           Alerts you if they confirm or need to reschedule
                         </span>
                       </li>
                       <li className="flex items-start gap-3">
                         <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
                         <span className="flex-1">
                           Reduces no-shows and keeps visits on track
                         </span>
                       </li>
                     </ul>
                  </div>
                  <div className="lg:order-1 bg-gray-100 rounded-lg p-8 text-center">
                    <div className="text-gray-500 text-sm mb-2">Reminder System</div>
                    <div className="space-y-3">
                      <div className="bg-white rounded border p-3 text-left">
                        <div className="text-blue-600 font-medium">📅 Visit Reminder</div>
                        <div className="text-sm text-gray-600">Study A - Visit 2 tomorrow at 2:00 PM</div>
                      </div>
                      <div className="bg-white rounded border p-3 text-left">
                        <div className="text-green-600 font-medium">✅ Subject Confirmed</div>
                        <div className="text-sm text-gray-600">John Doe confirmed for 2:00 PM</div>
                      </div>
                      <div className="bg-white rounded border p-3 text-left">
                        <div className="text-yellow-600 font-medium">⚠️ Window Closing</div>
                        <div className="text-sm text-gray-600">Study B - Screening window ends in 2 days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Checklist & Evidence Capture */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Visit Checklist & Evidence Capture</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      Step-by-step checklists with secure evidence capture.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Day-of-visit mobile checklist on tablet/phone</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Follow step-by-step checklist for each procedure or task</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Capture required evidence directly in the app</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Take photos of lab kits or videos of consent processes</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Evidence is time-stamped and stored securely</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Makes monitoring easier and ensures protocol adherence</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="text-gray-500 text-sm mb-2">Mobile Checklist Interface</div>
                    <div className="bg-white rounded border p-6">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-3" checked readOnly />
                          <span className="text-sm">Patient consent obtained</span>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-3" checked readOnly />
                          <span className="text-sm">Vital signs recorded</span>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <span className="text-sm">Blood draw completed</span>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <span className="text-sm">Photo evidence captured</span>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <span className="text-sm">Visit notes completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automated Task & Supply Prompts */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Automated Task & Supply Prompts</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      Proactive alerts prevent last-minute scrambles.
                    </p>
                                         <ul className="mt-6 space-y-3 text-left features-list">
                       {[
                         "7 days before a visit, SiteAI prompts you to ensure lab kits and supplies are ready",
                         "1 day before, it reminds you to prepare the room and equipment",
                         "Automatic prompts for daily tasks like temperature logs",
                         "IP accountability checks and other routine tasks",
                         "These proactive alerts prevent last-minute scrambles",
                       ].map((text) => (
                         <li key={text} className="flex items-start gap-3">
                           <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
                           <span className="flex-1 text-gray-700">{text}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                  <div className="lg:order-1 bg-gray-100 rounded-lg p-8 text-center">
                    <div className="text-gray-500 text-sm mb-2">Task Prompts</div>
                    <div className="space-y-3">
                      <div className="bg-white rounded border p-3 text-left">
                        <div className="text-orange-600 font-medium">🔔 7 Days Before Visit</div>
                        <div className="text-sm text-gray-600">Ensure lab kits and supplies are ready</div>
                      </div>
                      <div className="bg-white rounded border p-3 text-left">
                        <div className="text-blue-600 font-medium">📋 Daily Task</div>
                        <div className="text-sm text-gray-600">Temperature log due at 9:00 AM</div>
                      </div>
                      <div className="bg-white rounded border p-3 text-left">
                        <div className="text-green-600 font-medium">✅ 1 Day Before Visit</div>
                        <div className="text-sm text-gray-600">Prepare room and equipment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrated Payment Triggers */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Integrated Payment Triggers</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      Streamline financial tracking for your site.
                    </p>
                                         <ul className="mt-6 space-y-3 text-left features-list">
                       {[
                         "After a visit is completed, system prompts coordinator to request visit payments",
                         "Whether it's invoicing the sponsor/CRO or issuing participant stipends",
                         "Once you mark a visit complete, SiteAI reminds you to send stipend to participant",
                         "Or to log the visit for sponsor billing",
                         "Ensuring no visit payment is overlooked",
                         "This is a unique value-add that streamlines financial tracking for the site",
                       ].map((text) => (
                         <li key={text} className="flex items-start gap-3">
                           <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
                           <span className="flex-1 text-gray-700">{text}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="text-gray-500 text-sm mb-2">Payment Triggers</div>
                    <div className="space-y-3">
                      <div className="bg-white rounded border p-3 text-left">
                        <div className="text-green-600 font-medium">💰 Visit Complete</div>
                        <div className="text-sm text-gray-600">Send stipend to participant</div>
                      </div>
                      <div className="bg-white rounded border p-3 text-left">
                        <div className="text-blue-600 font-medium">📊 Sponsor Billing</div>
                        <div className="text-sm text-gray-600">Log visit for sponsor invoice</div>
                      </div>
                      <div className="bg-white rounded border p-3 text-left">
                        <div className="text-purple-600 font-medium">✅ Payment Sent</div>
                        <div className="text-sm text-gray-600">Stipend processed successfully</div>
                      </div>
                    </div>
                                 </div>
             </div>
           </div>
 
           {/* Automatic Document Recognition & Filing */}
           <section id="automatic-document-filing" className="py-14">
             <div className="mx-auto max-w-4xl px-6">
               {/* Heading */}
               <div className="flex items-center gap-3">
                 <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                   {/* simple document/magic icon */}
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                     <path d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1v5h5" />
                     <path d="M9 13h6M9 17h6M9 9h3" />
                   </svg>
                 </span>
                 <h2 className="text-3xl font-bold tracking-tight">
                   Automatic Document Recognition &amp; Filing
                 </h2>
               </div>
 
               {/* Subhead */}
               <p className="mt-3 text-center text-gray-600">
                 Email or snap a photo—SiteAI classifies, files, and logs it for you.
               </p>
 
               {/* Bullets (left-aligned, no links) */}
               <ul className="mt-6 space-y-3 text-left">
                 {[
                   "Email a document from your registered address; SiteAI knows it's you and routes it automatically.",
                   "OCR + entity extraction categorizes by study, subject, visit, and document type—then files it in the correct folder.",
                   "De-duplication and versioning to prevent repeats while keeping changes auditable.",
                   "Take a picture of a freezer/fridge display; SiteAI parses the temperature and appends a tamper-evident log entry.",
                   "Audit-ready timestamps and user attribution; exportable temperature logs (PDF/CSV).",
                   "Supports PDF, DOCX, JPG/PNG. PHI handled securely in line with HIPAA controls.",
                 ].map((text) => (
                   <li key={text} className="flex items-start gap-3">
                     <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
                     <span className="flex-1 text-gray-700">{text}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </section>
 
           {/* Compliance & Audit Trail */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Compliance & Audit Trail</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      Go paperless with confidence - inspection-ready compliance.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                                                 <p className="text-gray-700">Every action in SiteAI is part of an immutable audit trail</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Who did what, when, on which record - all tracked</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Electronic signatures are Part 11 compliant</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                                                 <p className="text-gray-700">SiteAI provides a full audit log and 21 CFR Part 11 compliant e-signatures</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">So you can confidently go paperless</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">Permissions are role-based, and all data changes are versioned for transparency</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cursor-green rounded-full mt-2 mr-3"></div>
                        <p className="text-gray-700">This assures users that while the system is easy to use, it's also inspection-ready</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:order-1 bg-gray-100 rounded-lg p-8 text-center">
                    <div className="text-gray-500 text-sm mb-2">Audit Trail Example</div>
                    <div className="bg-white rounded border p-6">
                      <div className="space-y-2 text-left text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">User:</span>
                          <span className="font-medium">Dr. Smith</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Action:</span>
                          <span className="font-medium">Signed consent form</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-medium">2024-01-15 14:30:22</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Record:</span>
                          <span className="font-medium">Subject #001</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Signature:</span>
                          <span className="font-medium text-green-600">✓ Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
                   See how SiteAI's comprehensive features can streamline your clinical research operations and boost your team's efficiency.
                 </p>
                             <div className="mt-8 flex flex-wrap justify-center gap-4">
                 {/* Demo */}
                 <Link
                   to="/demo"
                   aria-label="Go to Demo"
                   className="inline-flex items-center justify-center rounded-xl bg-white/95 px-6 py-3 font-semibold text-blue-700 shadow hover:bg-white"
                 >
                   Get Your Free Demo
                 </Link>

                 {/* Sign up (open Sign Up tab) */}
                 <Link
                   to="/auth#signup"
                   aria-label="Start Free Trial"
                   className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-transparent px-6 py-3 font-semibold text-white hover:bg-white/10"
                 >
                   Start Free Trial
                 </Link>
               </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                                     <h3 className="text-xl font-bold text-cursor-blue mb-4">SiteAI</h3>
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
                                 <p>&copy; 2024 SiteAI. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      );
    } catch (error) {
      debugError('Render error in FeaturesPage', error);
      setHasError(true);
      setErrorMessage('Failed to render page content');
      return null;
    }
  };

  // Return the safe render result
  return safeRender();
};

export default FeaturesPage;
