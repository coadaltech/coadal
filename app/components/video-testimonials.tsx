'use client';

import { Star, Play } from 'lucide-react';
import Image from 'next/image';

interface VideoTestimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  thumbnail: string;
  videoUrl: string;
}

interface VideoTestimonialsProps {
  videoTestimonials: VideoTestimonial[];
  isVisible?: boolean;
  title?: string;
  subtitle?: string;
}

const VideoTestimonials = ({ 
  videoTestimonials, 
  isVisible = true,
  title = "Discover how we've helped businesses achieve their goals through our dedicated service and expertise.",
  subtitle
}: VideoTestimonialsProps) => {
  return (
    <section className="w-full   relative overflow-hidden" aria-label="Video Testimonials">
      {/* Full Width Container - No Max Width */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        {title && title.trim() !== "" && (
          <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {subtitle && subtitle.trim() !== "" && (
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Marquee Container - Full Width */}
        <div className="relative w-full overflow-hidden">
          {/* Marquee Content */}
          <div className="marquee-container">
            <div className="marquee-content" aria-live="polite">
              {/* First Set */}
              {videoTestimonials.map((video, index) => (
                <article
                  key={`${video.id}-1`}
                  className="marquee-item group cursor-pointer"
                  itemScope
                  itemType="https://schema.org/VideoObject"
                  style={{
                    animation: isVisible ? `fade-in-up 0.6s ease-out ${index * 0.1}s both` : 'none',
                  }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 w-full flex flex-col">
                    {/* Video Thumbnail */}
                    <div className="relative h-56 bg-gray-200 overflow-hidden w-full flex-shrink-0">
                      {video.thumbnail ? (
                        <Image
                          src={video.thumbnail}
                          alt={`${video.name} - ${video.company} testimonial video thumbnail`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 280px, 320px"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                      )}
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                        <div 
                          className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                          aria-label={`Play ${video.name}'s testimonial video`}
                          role="button"
                          tabIndex={0}
                        >
                          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" aria-hidden="true" />
                        </div>
                      </div>
                      
                      {/* Video URL Schema */}
                      <meta itemProp="contentUrl" content={video.videoUrl} />
                    </div>

                    {/* Content */}
                    <div className="p-5 bg-white flex flex-col">
                      {/* Stars Rating */}
                      <div 
                        className="flex items-center gap-1 mb-3"
                        aria-label={`${video.rating} out of 5 stars`}
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < video.rating 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-300'
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                        <span className="sr-only">{video.rating} stars</span>
                      </div>
                      
                      {/* Name */}
                      <h3 className="font-bold text-lg text-gray-900 mb-1" itemProp="name">
                        {video.name}
                      </h3>
                      
                      {/* Company */}
                      <p className="text-sm text-gray-600" itemProp="description">
                        {video.company}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
              
              {/* Duplicate Set for Seamless Loop */}
              {videoTestimonials.map((video, index) => (
                <article
                  key={`${video.id}-2`}
                  className="marquee-item group cursor-pointer"
                  itemScope
                  itemType="https://schema.org/VideoObject"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 w-full flex flex-col">
                    {/* Video Thumbnail */}
                    <div className="relative h-56 bg-gray-200 overflow-hidden w-full flex-shrink-0">
                      {video.thumbnail ? (
                        <Image
                          src={video.thumbnail}
                          alt={`${video.name} - ${video.company} testimonial video thumbnail`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 280px, 320px"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                      )}
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                        <div 
                          className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                          aria-label={`Play ${video.name}'s testimonial video`}
                          role="button"
                          tabIndex={0}
                        >
                          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" aria-hidden="true" />
                        </div>
                      </div>
                      
                      {/* Video URL Schema */}
                      <meta itemProp="contentUrl" content={video.videoUrl} />
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 bg-white flex flex-col">
                      {/* Stars Rating */}
                      <div 
                        className="flex items-center gap-1 mb-3"
                        aria-label={`${video.rating} out of 5 stars`}
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < video.rating 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-300'
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                        <span className="sr-only">{video.rating} stars</span>
                      </div>
                      
                      {/* Name */}
                      <h3 className="font-bold text-lg text-gray-900 mb-1" itemProp="name">
                        {video.name}
                      </h3>
                      
                      {/* Company */}
                      <p className="text-sm text-gray-600" itemProp="description">
                        {video.company}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
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

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .marquee-content {
          display: flex;
          gap: 1.5rem;
          width: fit-content;
          animation: marquee 40s linear infinite;
          will-change: transform;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          flex-shrink: 0;
          width: 280px;
        }

        @media (min-width: 640px) {
          .marquee-item {
            width: 300px;
          }
        }

        @media (min-width: 768px) {
          .marquee-item {
            width: 320px;
          }
        }

        @media (min-width: 1024px) {
          .marquee-item {
            width: 350px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoTestimonials;
