'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroContent {
  id: number;
  headline: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const heroContents: HeroContent[] = [
  {
    id: 1,
    headline: "Mobile App Development Services",
    description: "Transform your ideas into powerful mobile applications with our expert iOS, Android, and cross-platform development services. We build scalable, high-performance apps that drive business growth and user engagement.",
    image: "/app-development-removebg-preview.png",
    buttonText: "Get started",
    buttonLink: "/get-started",
  },
  {
    id: 2,
    headline: "AI & Machine Learning Solutions",
    description: "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create intelligent systems. Our AI experts deliver cutting-edge solutions that transform businesses.",
    image: "/app-development-removebg-preview.png",
    buttonText: "Explore AI services",
    buttonLink: "/ai-services",
  },
  {
    id: 3,
    headline: "Cloud & Enterprise Solutions",
    description: "Scale your business with our comprehensive cloud infrastructure and enterprise software solutions. From AWS to Azure, we deliver secure, scalable platforms that power digital transformation.",
    image: "/app-development-removebg-preview.png",
    buttonText: "Discover solutions",
    buttonLink: "/enterprise",
  },
  {
    id: 4,
    headline: "Full Stack Development Services",
    description: "End-to-end development services from frontend to backend. We create robust, scalable web applications using modern technologies that deliver exceptional user experiences and business value.",
    image: "/app-development-removebg-preview.png",
    buttonText: "View services",
    buttonLink: "/fullstack",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageAnimating, setImageAnimating] = useState(false);

  const handleNavClick = (index: number) => {
    if (index === currentIndex) return;
    
    setIsAnimating(true);
    setImageAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
      setTimeout(() => {
        setImageAnimating(false);
      }, 200);
    }, 600);
  };

  const currentContent = heroContents[currentIndex];

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center pt-20 overflow-hidden">
      {/* Container with max-width */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <div className="relative z-20 text-center lg:text-left py-8 sm:py-12 md:py-16 lg:py-20 lg:col-span-7 xl:col-span-8">
            <div className="space-y-6 sm:space-y-8">
              {/* Headline - Black text */}
              <h1 
                key={`headline-${currentIndex}`}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-700 ease-in-out bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-clip-text text-transparent ${
                  isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}
                style={{ transitionDuration: '800ms' }}
              >
                {currentContent.headline}
              </h1>

              {/* Description - Black text */}
              <p 
                key={`description-${currentIndex}`}
                className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed transition-all duration-700 ease-in-out delay-150 text-black ${
                  isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}
                style={{ transitionDuration: '800ms' }}
              >
                {currentContent.description}
              </p>

              {/* CTA Button - Same as Header Get Started Button */}
              <div 
                key={`button-${currentIndex}`}
                className={`transition-all duration-700 ease-in-out delay-300 ${
                  isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}
                style={{ transitionDuration: '800ms' }}
              >
                <Link
                  href={currentContent.buttonLink}
                  className="group relative inline-flex items-center gap-2 px-7 py-3 text-base font-bold text-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#000048] via-[#1a1a5e] to-[#000048] opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:border-white/50 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-2 z-10">
                    <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">
                      {currentContent.buttonText}
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  
                  {/* Shadow Glow */}
                  <div className="absolute inset-0 rounded-xl bg-[#000048] opacity-0 group-hover:opacity-30 blur-xl -z-10 transition-opacity duration-300"></div>
                </Link>
              </div>

              {/* Bottom Navigation Links - Clickable buttons */}
              <div 
                key={`nav-${currentIndex}`}
                className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 pt-6 sm:pt-8 transition-all duration-700 ease-in-out delay-500 ${
                  isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}
                style={{ transitionDuration: '800ms' }}
              >
                <ChevronDown className="w-4 h-4 text-black/80 animate-bounce" />
                <button
                  onClick={() => handleNavClick(0)}
                  className={`text-xs sm:text-sm transition-all duration-300 font-medium ${
                    currentIndex === 0 
                      ? 'text-black underline underline-offset-4' 
                      : 'text-black/80 hover:text-black'
                  }`}
                >
                  Mobile App Development
                </button>
                <span className="text-black/40">•</span>
                <button
                  onClick={() => handleNavClick(1)}
                  className={`text-xs sm:text-sm transition-all duration-300 font-medium ${
                    currentIndex === 1 
                      ? 'text-black underline underline-offset-4' 
                      : 'text-black/80 hover:text-black'
                  }`}
                >
                  AI & Machine Learning
                </button>
                <span className="text-black/40">•</span>
                <button
                  onClick={() => handleNavClick(2)}
                  className={`text-xs sm:text-sm transition-all duration-300 font-medium ${
                    currentIndex === 2 
                      ? 'text-black underline underline-offset-4' 
                      : 'text-black/80 hover:text-black'
                  }`}
                >
                  Cloud & Enterprise
                </button>
                <span className="text-black/40">•</span>
                <button
                  onClick={() => handleNavClick(3)}
                  className={`text-xs sm:text-sm transition-all duration-300 font-medium ${
                    currentIndex === 3 
                      ? 'text-black underline underline-offset-4' 
                      : 'text-black/80 hover:text-black'
                  }`}
                >
                  Full Stack Development
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side - Image - Absolute positioned, attached to right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[45%] xl:w-[40%] h-full z-0 overflow-hidden flex items-center justify-end pr-0 lg:pr-4 xl:pr-8">
        <div 
          className={`relative w-full max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] h-[500px] lg:h-[600px] xl:h-[700px] transition-all duration-1000 ease-in-out ${
            imageAnimating 
              ? 'translate-x-full opacity-0' 
              : 'translate-x-0 opacity-100'
          }`}
        >
          <Image
            src={currentContent.image}
            alt="Hero Image"
            fill
            className="object-contain object-right"
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            style={{ 
              filter: 'drop-shadow(0 0 0 transparent)',
              backgroundColor: 'transparent'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

