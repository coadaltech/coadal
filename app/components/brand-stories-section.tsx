'use client';

import { useRef } from 'react';
import Image from 'next/image';
import brandStoriesData from './brand-stories-section.json';

interface Metric {
  label: string;
  value: string;
}

interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  metrics: Metric[];
  image: string;
  imageText: string;
  buttonText: string;
}

interface BrandStoriesData {
  title: string;
  subtitle: string;
  buttonText: string;
  brands: Brand[];
}

const BrandStoriesSection = () => {
  const data = brandStoriesData as BrandStoriesData;
  const sectionRef = useRef<HTMLDivElement>(null);

  // Different background colors for each card
  const backgroundColors = [
    'bg-gradient-to-br from-[#1a1a5e] to-[#000048]', // Orby - Dark Blue
    'bg-gradient-to-br from-[#2563eb] to-[#1e40af]', // Freshworks - Blue
    'bg-gradient-to-br from-[#dc2626] to-[#991b1b]', // Khatabook - Red
    'bg-gradient-to-br from-[#7c3aed] to-[#5b21b6]', // CaratLane - Purple
  ];

  // Calculate top margin for each card when they become sticky
  // Pattern: 40px (first), 50px (second), 60px (third), 70px (fourth)...
  const getTopMargin = (index: number): number => {
    return 40 + (index * 10); // First: 40px, Second: 50px, Third: 60px, Fourth: 70px...
  };


  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 md:mb-16 gap-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {data.title}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <p className="text-sm md:text-base text-gray-600 md:text-right max-w-md">
              {data.subtitle}
            </p>
            <button className="px-6 py-3 bg-[#000048] text-white font-semibold hover:bg-[#1a1a5e] transition-colors duration-300 whitespace-nowrap self-start md:self-auto">
              {data.buttonText}
            </button>
          </div>
        </div>

        {/* Sticky Scroll Container */}
        <div 
          ref={sectionRef}
          className="relative"
        >
          {/* Brand Stories with Sticky Effect */}
          {data.brands.map((brand, index) => {
            const topMargin = getTopMargin(index);
            // Calculate overlap - cards should stack on top of each other
            // Each card overlaps the previous one by most of viewport height
            // This ensures complete card is visible before next one appears on top
            const overlapOffset = index === 0 ? 0 : '90vh'; // Overlap by 90% of viewport height
            
            return (
              <div
                key={brand.id}
                className="relative"
                style={{
                  // Each wrapper provides more scroll space (150vh) so complete card is visible
                  // This allows each card to stick for longer, showing complete card before next appears
                  height: '180vh',
                  minHeight: '150vh'
                }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-2xl p-8 md:p-12 lg:p-16 ${backgroundColors[index]} transition-all duration-500`}
                  style={{
                    position: 'sticky',
                    top: `${topMargin}px`, // First: 40px, Second: 50px, Third: 60px, Fourth: 70px...
                    zIndex: index + 1, // First card: z-index 1 (lowest), Second: 2, Third: 3, Fourth: 4 (highest)
                    marginTop: index === 0 ? '0' : `-${overlapOffset}` // Negative margin to overlap previous card by 90vh
                  }}
                >
              {/* Left Panel - Content */}
              <div className="order-2 lg:order-1">
                {/* Logo and Name */}
                <div className="mb-6">
                  <div className="relative w-32 h-12 mb-3">
                    <Image
                      src={brand.logo || '/brands/default-logo.png'}
                      alt={brand.name}
                      fill
                      className="object-contain brightness-0 invert"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {brand.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                  {brand.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-8 md:gap-12 mb-8">
                  {brand.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex}>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs md:text-sm text-white/70 uppercase tracking-wide">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-[#000048] transition-all duration-300">
                  {brand.buttonText}
                </button>
              </div>

              {/* Right Panel - Image */}
              <div className="order-1 lg:order-2 relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src={brand.image || '/brands/default-bg.jpg'}
                  alt={brand.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay Text */}
                {brand.imageText && (
                  <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12">
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-4 max-w-md">
                      {brand.imageText}
                    </p>
                    <h4 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                      {brand.name}
                    </h4>
                  </div>
                )}
                {/* Brand Name Overlay (if no imageText) */}
                {!brand.imageText && (
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <h4 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                      {brand.name}
                    </h4>
                  </div>
                )}
              </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandStoriesSection;

