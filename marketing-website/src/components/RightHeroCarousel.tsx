import React from 'react';
import { debugLog, debugError, debugRender } from '../utils/debug';

const HERO_IMG = "/images/hero-start.svg?v=2025-08-25-1";

const RightHeroCarousel: React.FC = () => {
  debugRender('RightHeroCarousel');

  try {
    return (
      <img
        src={HERO_IMG}
        alt="SiteAI hero visual"
                 className="
           h-auto
           w-[860px] xl:w-[960px]
           max-w-none drop-shadow-2xl
           transform-gpu
           -ml-4 sm:-ml-6 lg:-ml-8
           -translate-x-3 lg:-translate-x-5
         "
        draggable={false}
      />
    );
  } catch (error) {
    debugError('RightHeroCarousel render error', error);
    return (
      <div className="
        h-auto
        w-[860px] xl:w-[960px]
        max-w-none
        bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center
        drop-shadow-2xl
      ">
        <div className="text-center text-blue-600">
          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <p className="text-lg font-semibold">SiteAI Platform</p>
        </div>
      </div>
    );
  }
};

export default RightHeroCarousel;
