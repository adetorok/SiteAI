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
        {/* Uncomment when hero-bg.svg is available:
        <img
          src="/hero-bg.svg"
          alt="" // decorative
          className="
            absolute inset-0 -z-10
            h-full w-full
            object-cover
            object-left           /* anchor left by default */
            sm:object-[10%_center] /* nudge slightly for small screens */
            md:object-[15%_center]
            lg:object-[20%_center]
          "
        />
        */}

        {/* Readability overlay (left image fades to clear on the right) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/90 via-white/70 to-white/10"
        />

        {/* Content container */}
        <div className="container relative mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              One platform to run all your studies
            </h1>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Transform site management with <strong>SiteAI</strong>—smarter, simpler, compliant.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* CTA: Get a Demo (already wired to /demo) */}
              <Link
                to="/demo"
                className="rounded-xl bg-cursor-blue px-5 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:ring-offset-2 transition-colors"
                onClick={() => {
                  try {
                    debugLog('Hero - Get a Demo button clicked');
                  } catch (error) {
                    debugError('Hero demo button click error', error);
                  }
                }}
              >
                Get a Demo
              </Link>

              {/* CTA: Try for Free -> /auth#signup (show Sign Up tab) */}
              <Link
                to="/auth#signup"
                className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:ring-offset-2 transition-colors"
                onClick={() => {
                  try {
                    debugLog('Hero - Try for Free button clicked');
                  } catch (error) {
                    debugError('Hero try for free button click error', error);
                  }
                }}
              >
                Try for Free
              </Link>
            </div>

            {/* Optional trust row or badges */}
            {/* <div className="mt-8 text-sm text-gray-500">HIPAA • 21 CFR Part 11 • SOC 2 Type II</div> */}
          </div>

          {/* Optional: right-side spacer so text doesn't collide with image focal area */}
          <div className="h-10 md:h-0" />
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
        </div>
      </section>
    );
  }
};

export default Hero;
