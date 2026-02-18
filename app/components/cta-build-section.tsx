'use client';

import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const CTABuildSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-black py-16 md:py-20 relative overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Build With <span className="bg-gradient-to-r from-[#00D4FF] via-[#5B9FFF] to-[#00D4FF] bg-clip-text text-transparent">Us</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Let's collaborate and bring your vision to life. Get in touch with us today and let's start building something amazing together.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#000048] transition-all duration-300 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email Address</p>
                  <a 
                    href="mailto:contact@celebaltech.com" 
                    className="text-white text-lg font-semibold hover:text-[#00D4FF] transition-colors duration-300"
                  >
                    contact@celebaltech.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#000048] transition-all duration-300 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone Number</p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-white text-lg font-semibold hover:text-[#00D4FF] transition-colors duration-300"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#000048] transition-all duration-300 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Office Address</p>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    123 Innovation Drive,<br />
                    Tech Park, Suite 500,<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links or Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 border-t border-white/10"
            >
              <p className="text-gray-400 text-sm mb-4">Follow us for updates</p>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#000048] focus:ring-2 focus:ring-[#000048]/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#000048] focus:ring-2 focus:ring-[#000048]/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#000048] focus:ring-2 focus:ring-[#000048]/20 transition-all duration-300"
                  placeholder="+1 (234) 567-8900"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#000048] focus:ring-2 focus:ring-[#000048]/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#000048] to-[#1a1a5e] text-white font-bold rounded-lg hover:from-[#1a1a5e] hover:to-[#000048] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#000048]/30"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABuildSection;

