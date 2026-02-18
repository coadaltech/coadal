'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import industriesData from './industries-section.json';

interface Industry {
  id: string;
  title: string;
  description: string;
  keywords: string[];
}

interface IndustriesData {
  title: string;
  subtitle: string;
  industries: Industry[];
}

const IndustriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const data = industriesData as IndustriesData;

  const cardsPerView = 4;
  const totalCards = data.industries.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
        setIsAnimating(false);
      }, 300);
    }
  };

  const highlightKeywords = (text: string, keywords: string[]) => {
    let highlightedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlightedText = highlightedText.replace(
        regex,
        '<span class="text-[#000048] font-semibold">$1</span>'
      );
    });
    return highlightedText;
  };

  // Industry icons mapping
  const getIndustryIcon = (id: string) => {
    const icons: { [key: string]: string } = {
      education: '📚',
      transportation: '🚚',
      'real-estate': '🏢',
      gaming: '🎮',
      healthcare: '🏥',
      finance: '💳',
      ecommerce: '🛒',
      food: '🍔'
    };
    return icons[id] || '💼';
  };

  return (
    <section 
      className="bg-[#f5f5f9] py-16 md:py-20 lg:py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-[#f5f5f9]/80"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#000048] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a1a5e] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header Section */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-between gap-6 mb-4">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {data.title}
              </h2>
            </div>
            
            {/* Navigation Arrows - Modern Style */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`group relative p-3 rounded-full transition-all duration-300 ${
                  currentIndex === 0
                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-[#000048] hover:text-white shadow-md hover:shadow-lg'
                }`}
                aria-label="Previous industries"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`group relative p-3 rounded-full transition-all duration-300 ${
                  currentIndex >= maxIndex
                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-[#000048] hover:text-white shadow-md hover:shadow-lg'
                }`}
                aria-label="Next industries"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>
        </div>

        {/* Industries Cards Carousel - Premium Design */}
        <div className="relative overflow-hidden">
          <div
            className={`flex gap-6 transition-transform duration-500 ease-in-out ${
              isAnimating ? 'opacity-95' : 'opacity-100'
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
            }}
          >
            {data.industries.map((industry, index) => (
              <div
                key={industry.id}
                className="shrink-0 w-full sm:w-1/2 lg:w-1/4"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <article
                  className="group relative bg-white rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-[#000048]/10 overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#000048]/0 via-[#000048]/0 to-[#1a1a5e]/0 group-hover:from-[#000048]/5 group-hover:via-[#000048]/3 group-hover:to-[#1a1a5e]/5 transition-all duration-500 rounded-2xl"></div>
                  
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#000048] via-[#1a1a5e] to-[#000048] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon Container - Premium Design */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#000048]/10 to-[#1a1a5e]/10 flex items-center justify-center group-hover:from-[#000048]/20 group-hover:to-[#1a1a5e]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-500">
                        {getIndustryIcon(industry.id)}
                      </div>
                    </div>
                    {/* Decorative Dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#000048] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#000048] transition-colors duration-300 relative z-10"
                    itemProp="name"
                  >
                    {industry.title}
                  </h3>

                  {/* Description with Highlighted Keywords */}
                  <p
                    className="text-gray-600 leading-relaxed text-sm md:text-base mb-6 relative z-10"
                    itemProp="description"
                    dangerouslySetInnerHTML={{
                      __html: highlightKeywords(industry.description, industry.keywords)
                    }}
                  />

                  {/* Learn More Link - Appears on Hover */}
                  <div className={`flex items-center gap-2 text-[#000048] font-semibold text-sm transition-all duration-300 relative z-10 ${
                    hoveredCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}>
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Bottom Decorative Element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#000048]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-10 bg-gradient-to-r from-[#000048] to-[#1a1a5e] shadow-md'
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
