'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import homePageData from '../data/home-page.json';

interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface IndustryExpertiseData {
  title: string;
  description: string;
  industries: Industry[];
}

const IndustryExpertiseSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>('power');
  const [isImageAnimating, setIsImageAnimating] = useState(false);
  const data = homePageData.industryExpertiseSection as IndustryExpertiseData;

  const toggleIndustry = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setIsImageAnimating(true);
      setTimeout(() => {
        setExpandedId(id);
        setTimeout(() => {
          setIsImageAnimating(false);
        }, 100);
      }, 300);
    }
  };

  const expandedIndustry = data.industries.find(ind => ind.id === expandedId) || data.industries[0];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="pb-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            {data.description.split('every vertical').map((part, index) => 
              index === 0 ? (
                <span key={index}>
                  {part}
                  <span className="text-[#000048] font-semibold">every vertical</span>
                </span>
              ) : (
                <span key={index}>
                  {part.split('empowering enterprises').map((subPart, subIndex) =>
                    subIndex === 0 ? (
                      <span key={subIndex}>
                        {subPart}
                        <span className="text-[#000048] font-semibold">empowering enterprises</span>
                      </span>
                    ) : (
                      <span key={subIndex}>{subPart}</span>
                    )
                  )}
                </span>
              )
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column - Image */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full h-full min-h-[500px] rounded-xl overflow-hidden bg-gray-100">
              {data.industries.map((industry) => {
                const isActive = expandedId === industry.id || (!expandedId && industry.id === 'power');
                const shouldShow = isActive && !isImageAnimating;
                return (
                  <div
                    key={industry.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      shouldShow
                        ? 'translate-y-0 opacity-100 z-10'
                        : 'translate-y-full opacity-0 z-0'
                    }`}
                  >
                    <Image
                      src={industry.image || '/industries.jpg'}
                      alt={industry.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    {/* Fallback gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#000048]/20 via-[#1a1a5e]/20 to-[#000048]/20"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Content and Accordion */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Accordion Menu */}
            <div className="space-y-2 flex-1">
              {data.industries.map((industry) => {
                const isExpanded = expandedId === industry.id;
                return (
                  <div
                    key={industry.id}
                    className="border border-gray-200 overflow-hidden transition-all duration-300"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleIndustry(industry.id)}
                      className={`w-full flex items-center justify-between px-6 py-4 text-left transition-all duration-300 relative group ${
                        isExpanded
                          ? 'bg-gradient-to-r from-[#000048] to-[#1a1a5e] text-white shadow-lg shadow-blue-500/20'
                          : 'bg-white text-gray-700 hover:bg-blue-50/50 border border-gray-200 hover:border-blue-200 hover:shadow-sm'
                      }`}
                      aria-expanded={isExpanded}
                    >
                      {/* Active Tab Left Border Indicator */}
                      {isExpanded && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                      )}
                      
                      <span className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                        isExpanded 
                          ? 'text-white' 
                          : 'text-gray-800 group-hover:text-[#000048]'
                      }`}>
                        {industry.title}
                      </span>
                      {isExpanded ? (
                        <Minus className="w-5 h-5 shrink-0 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 bg-white">
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {industry.description}
                        </p>
                        <button className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white font-semibold hover:bg-[#000048] transition-all duration-300">
                          <span>Read more</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertiseSection;
