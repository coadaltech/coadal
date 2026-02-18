'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowRight, Send, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Mobile App Development', href: '/services/mobile-app' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'AI & Machine Learning', href: '/services/ai-ml' },
    { name: 'Cloud Solutions', href: '/services/cloud' },
    { name: 'Enterprise Solutions', href: '/services/enterprise' },
    { name: 'Healthcare Apps', href: '/services/healthcare' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t-2 border-gray-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#000048] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Home">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={140}
                height={40}
                priority
                className="object-contain brightness-0"
              />
            </Link>
          </div>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md">
              Leading provider of custom mobile app development, web solutions, and AI-powered technologies. 
              We transform ideas into scalable digital products that drive business growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="mailto:coadal@gmail.com" 
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#000048] to-[#1a1a5e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-gray-900 font-semibold text-sm group-hover:text-[#00D4FF] transition-colors duration-300">
                    coadal@gmail.com
                  </p>
                </div>
              </a>
              
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#000048] to-[#1a1a5e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Phone</p>
                  <p className="text-gray-900 font-semibold text-sm group-hover:text-[#00D4FF] transition-colors duration-300">
                    +1 (234) 567-890
                  </p>
                </div>
              </a>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#000048] to-[#1a1a5e] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Address</p>
                  <p className="text-gray-900 font-semibold text-sm">
                    Tech Hub, Innovation District
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#000048] to-[#00D4FF]"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-600 text-sm hover:text-[#000048] transition-all duration-300 flex items-center gap-2 group py-1"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00D4FF]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6 relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#000048] to-[#00D4FF]"></span>
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 text-sm hover:text-[#000048] transition-all duration-300 flex items-center gap-2 group py-1"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00D4FF]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-6 relative inline-block">
              Resources
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#000048] to-[#00D4FF]"></span>
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href}
                    className="text-gray-600 text-sm hover:text-[#000048] transition-all duration-300 flex items-center gap-2 group py-1"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00D4FF]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#000048] to-[#1a1a5e] rounded-2xl p-8 md:p-10 mb-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00D4FF]/10 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold text-xl md:text-2xl">Stay Updated</h4>
              </div>
              <p className="text-white/90 text-sm md:text-base">Get the latest tech insights, AI trends, and development updates delivered to your inbox.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 flex-1 max-w-lg">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 text-sm transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-[#000048] font-bold rounded-xl hover:bg-[#00D4FF] hover:text-white transition-all duration-300 text-sm whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-gray-600 text-sm">
                © {currentYear} <span className="font-bold text-[#000048]">Coadal</span>. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="text-gray-500 text-sm hover:text-[#000048] transition-colors duration-300">
                  Privacy Policy
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/terms" className="text-gray-500 text-sm hover:text-[#000048] transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-700 hover:from-[#000048] hover:to-[#1a1a5e] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 transform"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

