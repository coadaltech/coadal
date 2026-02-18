'use client';

import { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';
import homePageData from '../data/home-page.json';
import aboutData from '../about/about-section.json';

interface Service {
  id: string;
  label: string;
  content: {
    heading: string;
    description: string;
    features: string[];
  };
}

interface ServicesData {
  title: string;
  subtitle: string;
  services?: Service[];
  sections?: Service[];
}

interface ServicesSectionProps {
  dataSource?: 'services' | 'about';
}

const ServicesSection = ({ dataSource = 'services' }: ServicesSectionProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  
  // Use appropriate data source
  const rawData = dataSource === 'about' ? aboutData : homePageData.servicesSection;
  const data = rawData as ServicesData;
  
  // Handle both 'services' and 'sections' keys
  const items = data.services || data.sections || [];
  const activeService = items[activeTab];

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsAnimating(false);
    }, 200);
  };

  const handleMobileClick = (index: number) => {
    if (expandedMobile === index) {
      // If clicking the same service, collapse it
      setExpandedMobile(null);
    } else {
      // Expand the clicked service
      setExpandedMobile(index);
    }
  };

  return (
    <section className="bg-[#f5f5f9] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile View - Accordion Style */}
        <div className="lg:hidden space-y-3">
          {items.map((service, index) => (
            <div key={service.id} className="bg-white overflow-hidden shadow-sm">
              {/* Service Button */}
              <button
                onClick={() => handleMobileClick(index)}
                className={`w-full text-left px-6 py-4 transition-all duration-300 relative ${
                  expandedMobile === index
                    ? 'bg-gradient-to-r from-[#000048] to-[#1a1a5e] text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-semibold text-base ${
                    expandedMobile === index ? 'text-white' : 'text-gray-800'
                  }`}>
                    {service.label}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                    expandedMobile === index 
                      ? 'text-white rotate-180' 
                      : 'text-gray-400'
                  }`} />
                </div>
              </button>

              {/* Content Panel - Expandable */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedMobile === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] p-6 text-white">
                  {/* Heading */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.content.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-white/90 leading-relaxed mb-6">
                    {service.content.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {service.content.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-white">
                          <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-white"></span>
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#302b63] transition-all duration-300">
                    <span>Connect Experts</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Two Column Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-6 lg:gap-8">
          {/* Left Panel - Professional Service Tabs */}
          <div className="lg:col-span-5">
            <div className="h-full">
              <div 
                className="px-5 h-full max-h-[650px] overflow-y-auto custom-scrollbar pr-2" 
                style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
              >
                {items.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => handleTabChange(index)}
                    className={`w-full text-left px-6 py-4 mb-3 transition-all duration-300 relative group ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-[#000048] to-[#1a1a5e] text-white shadow-lg shadow-blue-500/20'
                        : 'bg-white text-gray-700 hover:bg-blue-50/50 border border-gray-200 hover:border-blue-200 hover:shadow-sm'
                    }`}
                  >
                    {/* Active Tab Left Border Indicator */}
                    {activeTab === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                    )}
                    
                    {/* Tab Content */}
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                        activeTab === index 
                          ? 'text-white' 
                          : 'text-gray-800 group-hover:text-[#000048]'
                      }`}>
                        {service.label}
                      </span>
                      
                      {/* Chevron Icon */}
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                        activeTab === index
                          ? 'text-white opacity-100 translate-x-0'
                          : 'text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Service Content */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] p-8 md:p-10 lg:p-12 relative overflow-hidden h-full min-h-[650px] flex flex-col shadow-lg">
              {/* Content with Smooth Transitions */}
              <div className={`relative z-10 flex-1 flex flex-col transition-all duration-300 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}>
                {/* Heading */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  {activeService.content.heading}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 flex-1">
                  {activeService.content.description}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {activeService.content.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-white">
                        <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-white"></span>
                        <span className="text-base md:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#302b63] transition-all duration-300">
                    <span>Connect Experts</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8f9fa;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #000048, #1a1a5e);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #1a1a5e, #302b63);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
