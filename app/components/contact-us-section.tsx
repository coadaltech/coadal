'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import homePageData from '../data/home-page.json';

const ContactUsSection = () => {
  const contactData = homePageData.contactUsSection;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    requirement: ''
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
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-[#000048] uppercase tracking-wide mb-6">
                {contactData.heading}
              </h2>
              
              {/* Main Message */}
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-8">
                {contactData.mainMessage}
              </p>

              {/* Confidentiality Assurance */}
              <div className="space-y-4 mb-8">
                {contactData.confidentiality.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-900 text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 my-8"></div>

              {/* Email Contact */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#000048] text-base mb-2">{contactData.emailLabel}</p>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-gray-900 text-lg font-bold hover:text-[#00D4FF] transition-colors duration-300"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-6">
              {contactData.formTitle}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Full Name*"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000048] focus:border-[#000048] transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email*"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000048] focus:border-[#000048] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number*"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000048] focus:border-[#000048] transition-all duration-300"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000048] focus:border-[#000048] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Requirement Textarea */}
              <div>
                <textarea
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project requirements*"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000048] focus:border-[#000048] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-[#000048] to-[#1a1a5e] text-white font-semibold rounded-lg hover:from-[#1a1a5e] hover:to-[#000048] transition-all duration-300 shadow-lg shadow-[#000048]/20"
              >
                Book A Free Consultation
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;

