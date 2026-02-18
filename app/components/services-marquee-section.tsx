'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Star } from 'lucide-react';
import homePageData from '../data/home-page.json';

const services = homePageData.servicesMarqueeSection.services;

const ServicesMarqueeSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (!marqueeRef.current) return;
    marqueeRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (!marqueeRef.current) return;
    marqueeRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-black h-[90px] relative overflow-hidden">
      <div 
        className="w-full h-full flex items-center relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          aria-label="Previous services"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#00D4FF]" />
        </button>

        {/* Marquee Container */}
        <div 
          ref={marqueeRef}
          className="flex-1 overflow-x-hidden scrollbar-hide"
        >
          <div 
            className={`flex gap-6 h-full items-center px-8 ${isPaused ? 'pause-animation' : 'marquee-animation'}`}
            style={{ width: 'max-content' }}
          >
            {/* Duplicate services for seamless loop */}
            {[...services, ...services, ...services].map((service, index) => (
              <div key={`${service}-${index}`} className="flex items-center gap-4">
                {/* Star Icon */}
                <div className="flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                
                {/* Text Button and Arrow Button - Connected */}
                <div className="flex items-center gap-0">
                  {/* Text Button */}
                  <a
                    href="#"
                    className="px-5 py-2.5 rounded-full border border-white/30 border-r-0 text-white text-base font-medium hover:border-white/60 hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
                  >
                    {service}
                  </a>
                  
                  {/* Arrow Button - Connected */}
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/30 border-l-0 flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 -ml-px"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 z-10 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          aria-label="Next services"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:text-[#00D4FF]" />
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .marquee-animation {
          animation: marquee 80s linear infinite;
        }
        
        .pause-animation {
          animation-play-state: paused !important;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesMarqueeSection;

