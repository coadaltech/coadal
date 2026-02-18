'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, TrendingUp, Award, Shield, Headphones, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import homePageData from '../data/home-page.json';
import VideoTestimonials from './video-testimonials';

interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

interface Rating {
  rating: number;
  label: string;
  reviews: string;
}

interface VideoTestimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  thumbnail: string;
  videoUrl: string;
}

interface TextReview {
  id: string;
  text: string;
  role: string;
  rating: number;
  verified: boolean;
}

interface MetricsData {
  title: string;
  subtitle: string;
  overallRating: {
    rating: number;
    reviews: number;
    platform: string;
  };
  metrics: Metric[];
  ratings: {
    appStore: Rating;
    playStore: Rating;
    clutch: Rating;
  };
  videoTestimonials: VideoTestimonial[];
  textReviews: TextReview[];
  trustBadges: Array<{ id: string; label: string; icon: string }>;
}

const MetricsSection = () => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({});
  const [isVisible, setIsVisible] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const data = homePageData.metricsSection as MetricsData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);


  const animateCounters = () => {
    data.metrics.forEach((metric) => {
      const duration = 2000;
      const steps = 60;
      const increment = metric.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          setCounters((prev) => ({ ...prev, [metric.id]: metric.value }));
          clearInterval(timer);
        } else {
          setCounters((prev) => ({ ...prev, [metric.id]: Math.floor(current) }));
        }
      }, duration / steps);
    });
  };

  const handleReviewNext = () => {
    setReviewIndex((prev) => (prev + 1) % Math.ceil(data.textReviews.length / 4));
  };

  const handleReviewPrev = () => {
    setReviewIndex((prev) => (prev - 1 + Math.ceil(data.textReviews.length / 4)) % Math.ceil(data.textReviews.length / 4));
  };

  const iconMap: { [key: string]: any } = {
    '👥': TrendingUp,
    '🚀': Award,
    '⭐': Star,
    '💼': Award,
    '🏆': Award,
    '🔒': Shield,
    '🛡️': Shield,
    '💬': Headphones,
  };

  const visibleReviews = data.textReviews.slice(reviewIndex * 4, reviewIndex * 4 + 4);

  return (
    <section ref={sectionRef} className="bg-[#f8f9fa] py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#000048]/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-tl from-[#1a1a5e]/5 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-3">
            <span className="text-xs md:text-sm font-semibold text-[#000048] uppercase tracking-wider">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>


   

        {/* Metrics Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {data.metrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon] || TrendingUp;
            const displayValue = counters[metric.id] || 0;

            return (
              <div
                key={metric.id}
                className="text-center group"
                style={{
                  animation: isVisible ? `fade-in-up 0.6s ease-out ${index * 0.1}s both` : 'none',
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#000048] to-[#1a1a5e] mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#000048] to-[#1a1a5e] bg-clip-text text-transparent">
                    {displayValue}
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#000048] to-[#1a1a5e] bg-clip-text text-transparent">
                    {metric.suffix}
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium">{metric.label}</p>
              </div>
            );
          })}
        </div> */}

        {/* Video Testimonials Section */}
        <div className="mb-16 -mx-4 sm:-mx-6 lg:-mx-8 ">
          <VideoTestimonials 
            videoTestimonials={data.videoTestimonials}
            isVisible={isVisible}
            title=""
            subtitle=""
          />
        </div>

        {/* Overall Rating & Text Reviews Section */}
        <div className="mb-16 max-w-[1440px] mx-auto">
          {/* Rating Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {data.overallRating.platform} Reviews
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">
                  {data.overallRating.rating}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(data.overallRating.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{data.overallRating.reviews} reviews</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">Powered by {data.overallRating.platform}</div>
          </div>

          {/* Text Reviews Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleReviews.map((review, index) => (
                <div
                  key={review.id}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
                  style={{
                    animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    "{review.text}"
                  </p>

                  {/* Role */}
                  <p className="text-sm font-semibold text-gray-900 mb-2">{review.role}</p>

                  {/* Verified Badge */}
                  {review.verified && (
                    <div className="flex items-center gap-1 text-green-600 text-xs">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verified Review</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handleReviewPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleReviewNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(data.textReviews.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setReviewIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    reviewIndex === index
                      ? 'w-8 bg-[#000048]'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {data.trustBadges.map((badge, index) => {
            const BadgeIcon = iconMap[badge.icon] || Award;
            return (
              <div
                key={badge.id}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-[#000048] transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  animation: isVisible ? `fade-in-up 0.6s ease-out ${1.5 + index * 0.1}s both` : 'none',
                }}
              >
                <BadgeIcon className="w-8 h-8 md:w-10 md:h-10 text-[#000048] mb-3" />
                <p className="text-sm md:text-base font-semibold text-gray-900 text-center">
                  {badge.label}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }


        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default MetricsSection;
