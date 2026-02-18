'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import homePageData from '../data/home-page.json';

export default function Slider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  // Partner logos from consolidated JSON
  const partners = homePageData.slider.partners;

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.5; // Adjust speed here (pixels per frame)

    const autoScroll = () => {
      // Only scroll if not hovering and not dragging
      if (!isHovered && !isDragging && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset scroll position when reaching halfway (for infinite scroll effect)
        // Since we have duplicated items, we reset when we reach the first set's end
        const singleSetWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= singleSetWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, isDragging]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
  };

  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="w-full">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Partnered With Startups and{' '}
            <br />
            <span className="bg-gradient-to-r from-[#000048] via-[#1a1a5e] to-[#000048] bg-clip-text text-transparent">
  Fortune 500
</span>

          </h2>
        </div>

        {/* Scrollable Partner Logos */}
        <div 
          ref={scrollContainerRef}
          className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex  px-4 md:px-6 lg:px-8 min-w-max">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="shrink-0 w-[200px] md:w-[240px] h-[120px] md:h-[140px] lg:h-[160px] bg-white  transition-shadow duration-300 flex items-center justify-center py-4 md:py-6 mx-4 md:mx-6"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate items for infinite scroll effect */}
            {partners.map((partner, index) => (
              <div
                key={`duplicate-${index}`}
                className="shrink-0 w-[200px] md:w-[240px] h-[120px] md:h-[140px] lg:h-[160px] bg-white transition-shadow duration-300 flex items-center justify-center py-4 md:py-6 mx-4 md:mx-6"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
