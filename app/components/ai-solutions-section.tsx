'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import homePageData from '../data/home-page.json';

interface Tab {
  id: string;
  label: string;
  icon: string;
  image: string;
  description: string;
  benefits: string[];
}

interface AISolutionsData {
  badge: string;
  title: string;
  tabs: Tab[];
}

const AISolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const data = homePageData.aiSolutionsSection as AISolutionsData;
  const activeTabData = data.tabs[activeTab];

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#f5f5f9]">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="mb-4">
        <span className="inline-block px-1 py-2 bg-gradient-to-r from-[#000048] to-[#1a1a5e] bg-clip-text text-transparent text-xs md:text-sm font-bold uppercase tracking-wider">
  {data.badge}
</span>

        </div>

        {/* Title First */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {data.title}
          </h2>
        </div>

        {/* Buttons/Tabs - No Rounded, No Icons */}
        <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
          {data.tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(index)}
              className={`px-6 py-3 font-semibold text-sm md:text-base transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
              }`}
              aria-label={tab.label}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid - Left Content and Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              {activeTabData.description}
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8 flex-1">
              {activeTabData.benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <div className="shrink-0 w-5 h-5 rounded-full bg-[#000048] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-base md:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="group inline-flex w-fit items-center gap-2 px-6 py-3 bg-[#000048] text-white font-semibold hover:bg-[#1a1a5e] transition-all duration-300 mt-auto">
              <span>Know More</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-6 relative flex">
            <div 
              className={`relative w-full h-full min-h-[300px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-all duration-500 ${
                isAnimating ? 'opacity-70 scale-95' : 'opacity-100 scale-100'
              }`}
              style={{
                backgroundImage: `url(${activeTabData.image || '/handshake-ai.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Fallback if image not available */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#000048]/20 via-[#1a1a5e]/20 to-[#000048]/20">
                <div className="text-6xl opacity-30">{activeTabData.icon}</div>
              </div>
              
              {/* Decorative Glow Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-bl-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/20 rounded-tr-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
