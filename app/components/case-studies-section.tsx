'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Users, Clock, Code, CheckCircle2 } from 'lucide-react';
import caseStudiesData from './case-studies-section.json';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  results: string[];
  technologies: string[];
  image: string;
  duration: string;
  team: string;
}

interface CaseStudiesData {
  title: string;
  subtitle: string;
  caseStudies: CaseStudy[];
}

const CaseStudiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const data = caseStudiesData as CaseStudiesData;
  const activeCaseStudy = data.caseStudies[activeIndex];

  const handleCaseChange = (index: number) => {
    if (index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-rotate case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.caseStudies.length]);

  return (
    <section className="bg-[#f5f5f9] py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#000048]/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#1a1a5e]/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Main Case Study Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Left - Case Study Details */}
          <div className="lg:col-span-7">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
              {/* Category Badge */}
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-[#000048] to-[#1a1a5e] text-white text-xs font-bold uppercase tracking-wider">
                  {activeCaseStudy.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {activeCaseStudy.title}
              </h3>

              {/* Client Info */}
              <div className="flex items-center gap-4 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{activeCaseStudy.client}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{activeCaseStudy.duration}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span className="text-sm">{activeCaseStudy.team}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                {activeCaseStudy.description}
              </p>

              {/* Results */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#000048]" />
                  Key Results
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeCaseStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#000048]/5 to-[#1a1a5e]/5 p-4 rounded-lg border border-[#000048]/10"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#000048] mb-2" />
                      <p className="text-sm font-semibold text-gray-800">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeCaseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-[#000048] hover:text-[#000048] transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#000048] to-[#1a1a5e] text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span>View Full Case Study</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right - Case Study Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden group">
              <div className={`absolute inset-0 transition-all duration-700 ${isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
                <Image
                  src={activeCaseStudy.image || '/case-studies/default.jpg'}
                  alt={activeCaseStudy.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-semibold mb-2">{activeCaseStudy.category}</div>
                <div className="text-2xl font-bold">{activeCaseStudy.title}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              onClick={() => handleCaseChange(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                activeIndex === index
                  ? 'border-[#000048] shadow-xl scale-105'
                  : 'border-gray-200 hover:border-[#000048]/50 hover:shadow-lg'
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={caseStudy.image || '/case-studies/default.jpg'}
                  alt={caseStudy.title}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    hoveredCard === index ? 'scale-110' : 'scale-100'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {/* Active Indicator */}
                {activeIndex === index && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#000048] rounded-full animate-pulse"></div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-semibold text-[#000048] mb-2 uppercase tracking-wider">
                  {caseStudy.category}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#000048] transition-colors duration-300">
                  {caseStudy.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {caseStudy.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{caseStudy.duration}</span>
                  <span>•</span>
                  <span>{caseStudy.team}</span>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className={`absolute bottom-6 right-6 transition-all duration-300 ${
                hoveredCard === index || activeIndex === index
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : 'opacity-0 translate-x-2 translate-y-2'
              }`}>
                <div className="w-10 h-10 bg-[#000048] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {data.caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCaseChange(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-8 bg-gradient-to-r from-[#000048] to-[#1a1a5e]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

