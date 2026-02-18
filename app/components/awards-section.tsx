'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import homePageData from '../data/home-page.json';

interface AwardData {
  id: string;
  image: string;
  title: string;
  year: string;
}

const AwardsSection = () => {
  const awards: AwardData[] = homePageData.awardsSection.awards;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;
  const carouselRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, awards.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Awards & Recognitions
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`group relative p-3 rounded-full transition-all duration-300 ${
                currentIndex === 0
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-[#000048] hover:text-white shadow-md hover:shadow-lg'
              }`}
              aria-label="Previous awards"
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
              aria-label="Next awards"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Awards Carousel */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            ref={carouselRef}
            className="flex gap-2 md:gap-3"
            animate={{
              x: `-${currentIndex * (100 / itemsPerView)}%`
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            style={{
              width: `${(100 / itemsPerView) * awards.length}%`
            }}
          >
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                className="shrink-0"
                style={{
                  width: `${65 / itemsPerView}%`
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="">
                  {/* Image Container */}
                  <div className="relative bg-white rounded-xl shadow-md transition-all duration-300 border-2 border-gray-100 h-full flex flex-col mb-2 overflow-hidden items-center justify-center">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20 pointer-events-none">
                      🏆
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 text-center">
                    {award.title}
                  </h3>

                  {/* Year */}
                  <p className="text-sm md:text-base text-gray-600 font-medium text-center">
                    {award.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-gradient-to-r from-[#000048] to-[#1a1a5e]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

