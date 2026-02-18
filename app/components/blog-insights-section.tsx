'use client';

import { ArrowRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import homePageData from '../data/home-page.json';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
}

const BlogInsightsSection = () => {
  const blogPosts: BlogPost[] = homePageData.blogInsightsSection.blogPosts;
  // Show only first 3 posts
  const displayedPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Blog / Insights
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our latest updates and insights, providing a comprehensive overview of our company's activities, achievements, and perspectives.
          </p>
        </div>

        {/* Blog Cards - 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group cursor-pointer">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#000048] transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                    {post.description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="flex items-center gap-2 text-[#000048] font-semibold group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#000048] text-white font-semibold rounded-lg hover:bg-[#1a1a5e] transition-all duration-300 flex items-center gap-2 mx-auto">
            Explore All Insights
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogInsightsSection;

