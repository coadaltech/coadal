'use client';

import { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import homePageData from '../data/home-page.json';
import Image from 'next/image';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQData {
  title: string;
  subtitle: string;
  faqs: FAQ[];
  image?: string;
}

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  
  const data = homePageData.faqSection as FAQData;
  const faqs = data.faqs || [];

  const handleQuestionClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="bg-[#000000] py-16 lg:py-0 relative">
      {/* Mobile View */}
      <div className="lg:hidden px-4 sm:px-6 py-8 relative">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        <div className="relative z-10 text-center mb-8">
          <p className="text-sm text-gray-400 mb-2">• FAQ QUESTION & ANSWER *</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Have Any Question? Find Here
          </h2>
        </div>
        <div className="relative z-10 space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-transparent border border-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => handleQuestionClick(index)}
                className={`w-full text-left px-4 py-4 transition-all duration-300 flex items-center justify-between gap-4 ${
                  expandedIndex === index
                    ? 'bg-transparent'
                    : 'bg-transparent hover:bg-white/5'
                }`}
              >
                <span className={`font-semibold text-sm transition-colors duration-300 ${
                  expandedIndex === index ? 'text-white' : 'text-gray-300'
                }`}>
                  {index + 1}. {faq.question}
                </span>
                <ChevronUp className={`w-5 h-5 transition-all duration-300 shrink-0 ${
                  expandedIndex === index 
                    ? 'text-white rotate-180' 
                    : 'text-gray-400'
                }`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 py-4">
                  <p className="text-sm text-white/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - Split Layout - Full Width */}
      <div className="hidden lg:grid grid-cols-2 gap-0 min-h-[800px] w-full">
          {/* Left Side - Image */}
          <div className="relative w-full h-full min-h-[800px]">
            {data.image ? (
              <Image
                src={data.image}
                alt="FAQ"
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <p className="text-lg mb-4">Add your FAQ image here</p>
                  <p className="text-sm opacity-80">Place an image in the public folder and update faq-section.json</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - FAQ Content */}
          <div className="bg-[#000000] relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            ></div>

            <div className="relative z-10 h-full p-8 md:p-12 lg:p-16 flex flex-col">
              {/* Header */}
              <div className="mb-8">
                <p className="text-sm text-gray-400 mb-3">• FAQ QUESTION & ANSWER *</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Have Any Question? Find Here
                </h2>
              </div>

              {/* FAQ List */}
              <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar-dark pr-2">
                {faqs.map((faq, index) => (
                  <div key={faq.id} className="bg-transparent">
                    {/* Question Button */}
                    <button
                      onClick={() => handleQuestionClick(index)}
                      className={`w-full text-left px-0 py-4 transition-all duration-300 flex items-start justify-between gap-4 group ${
                        expandedIndex === index ? '' : ''
                      }`}
                    >
                      <span className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                        expandedIndex === index 
                          ? 'text-white' 
                          : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {index + 1}. {faq.question}
                      </span>
                      <ChevronUp className={`w-5 h-5 transition-all duration-300 shrink-0 mt-1 ${
                        expandedIndex === index 
                          ? 'text-white rotate-180' 
                          : 'text-gray-400 group-hover:text-gray-300'
                      }`} />
                    </button>

                    {/* Answer Panel */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-2 pb-4">
                        <p className="text-base text-white/90 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      <style jsx>{`
        .custom-scrollbar-dark::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default FAQSection;

