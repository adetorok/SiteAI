import React from 'react';
import { Link } from 'react-router-dom';
import { debugLog, debugError, debugRender } from '../utils/debug';

const Hero: React.FC = () => {
  // Debug component render
  debugRender('Hero');

  try {
    return (
      <section
        className="relative isolate overflow-hidden"
        aria-label="SiteAI hero"
      >
        {/* Background image - fallback to gradient until image is provided */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cursor-blue via-blue-600 to-blue-700" />

        {/* Readability overlay (left image fades to clear on the right) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/90 via-white/70 to-white/10"
        />

        {/* Content container */}
        <div className="container relative mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div
            className="
              grid items-center
              grid-cols-1 lg:grid-cols-2
              px-6 lg:pl-6 lg:pr-0
              gap-6 lg:gap-4
            "
          >
            {/* Left side - Enhanced content */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                Study Site OS • SiteAI
              </div>

              {/* Headline with subtle gradient highlight */}
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl">
                One platform to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  run all your studies
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mt-4 text-lg text-gray-600 sm:text-xl">
                Transform site management with <strong>SiteAI</strong>—smarter, simpler, compliant.
                From protocol to plan in minutes.
              </p>

              {/* Value bullets */}
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Unified calendar & task prompts",
                  "Automated visit reminders",
                  "Mobile checklists at the bedside",
                  "Sponsor billing & payment triggers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-5 w-5 flex-none text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Enhanced CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/demo"
                  className="btn-glow inline-flex items-center justify-center rounded-2xl bg-cursor-blue px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring"
                  aria-label="Get a demo"
                  onClick={() => {
                    try {
                      debugLog('Hero - Get a Demo button clicked');
                    } catch (error) {
                      debugError('Hero demo button click error', error);
                    }
                  }}
                >
                  {/* icon */}
                  <svg className="mr-2 h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3v18m9-9H3" />
                  </svg>
                  Get a Demo
                </Link>

                <Link
                  to="/auth#signup"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-4 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring"
                  aria-label="Start free trial"
                  onClick={() => {
                    try {
                      debugLog('Hero - Try for Free button clicked');
                    } catch (error) {
                      debugError('Hero try for free button click error', error);
                    }
                  }}
                >
                  Start Free Trial
                  <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                    30 days
                  </span>
                </Link>

                {/* Google Sign In Button */}
                <button
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-4 text-base font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Continue with Google"
                  onClick={() => {
                    try {
                      debugLog('Hero - Continue with Google clicked');
                    } catch (error) {
                      debugError('Hero Google sign-in click error', error);
                    }
                  }}
                >
                  <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>

                <span className="text-sm text-gray-500">No credit card required</span>
              </div>

              {/* Trust / compliance strip */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  HIPAA
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  21 CFR Part 11
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  SOC 2 Type II
                </div>
              </div>

              {/* Learn More About Compliance Button */}
              <div className="mt-6">
                <button className="inline-flex items-center gap-2 rounded-xl bg-cursor-blue px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors">
                  Learn More About Compliance
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Trusted by Clinical Research Sites Heading */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl text-center">
                  Trusted by Clinical Research Sites
                </h2>
              </div>
            </div>

            {/* Right side - Image */}
            <div
              className="
                flex lg:justify-start justify-center
                overflow-visible
              "
            >
              <img
                src="/hero-start.svg?v=2"
                alt="SiteAI hero visual"
                className="
                  w-[860px] xl:w-[960px]
                  max-w-none drop-shadow-2xl
                  transform-gpu
                  lg:-ml-16 -ml-10
                  lg:-translate-x-10 -translate-x-6
                  pr-0 mr-0
                "
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Ensure the hero has comfortable height without forcing 100vh on small screens */}
        <div className="sr-only">Hero section background image positioned to the left.</div>
      </section>
    );
  } catch (error) {
    debugError('Hero component render error', error);
    return (
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-cursor-blue to-blue-700 text-white py-20">
        <div className="container relative mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div
            className="
              grid items-center
              grid-cols-1 lg:grid-cols-2
              px-6 lg:pl-6 lg:pr-0
              gap-6 lg:gap-4
            "
          >
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                One platform to run all your studies
              </h1>
              <p className="mt-4 text-base sm:text-lg">
                Transform site management with <strong>SiteAI</strong>—smarter, simpler, compliant.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/demo"
                  className="rounded-xl bg-white px-5 py-3 font-medium text-cursor-blue hover:bg-gray-100 transition-colors"
                >
                  Get a Demo
                </Link>
                <Link
                  to="/auth#signup"
                  className="rounded-xl border-2 border-white px-5 py-3 font-medium hover:bg-white hover:text-cursor-blue transition-colors"
                >
                  Try for Free
                </Link>
              </div>
            </div>
            
            {/* Right side - Fallback image */}
            <div
              className="
                flex lg:justify-start justify-center
                overflow-visible
              "
            >
              <img
                src="/hero-start.svg?v=2"
                alt="SiteAI hero visual"
                className="
                  w-[860px] xl:w-[960px]
                  max-w-none drop-shadow-2xl
                  transform-gpu
                  lg:-ml-16 -ml-10
                  lg:-translate-x-10 -translate-x-6
                  pr-0 mr-0
                "
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Hero;
