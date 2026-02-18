"use client";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import Slider from "./components/slider";
import ServicesSection from "./components/services-section";
import AISolutionsSection from "./components/ai-solutions-section";
import IndustryExpertiseSection from "./components/industry-expertise-section";
import CaseStudiesSection from "./components/case-studies-section";
import BrandStoriesSection from "./components/brand-stories-section";
import MetricsSection from "./components/metrics-section";
import VideoTestimonials from "./components/video-testimonials";
import AwardsSection from "./components/awards-section";
import BlogInsightsSection from "./components/blog-insights-section";
import CTABuildSection from "./components/cta-build-section";
import ServicesMarqueeSection from "./components/services-marquee-section";
import FAQSection from "./components/faq-section";
import ContactUsSection from "./components/contact-us-section";
import Footer from "./components/footer";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import styles from './page.module.scss'
import CardsCard from '../components/Card';
import { projects } from '../data/parallaxData';


export default function Home() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])


  return (
    <div className="">
   <div 
     className="relative"
     style={{
       backgroundImage: 'url(/herobanner.png)',
       backgroundSize: 'cover',
       backgroundPosition: 'top center',
       backgroundRepeat: 'no-repeat',
       backgroundAttachment: 'scroll',
     }}
   >
    <Header/>
    <HeroSection/>
    </div>
<Slider/>
<ServicesSection/>

<AISolutionsSection/>
<ServicesMarqueeSection/>

    <section className="bg-[#f8f9fa] py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="space-y-4 sm:space-y-6 text-center mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
            Real Brand Stories To Inspire You
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
            Catch us innovating with cutting-edge projects that redefine industry standards.
          </p>
          
          <div className="flex justify-center pt-2">
            <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#000048] text-white text-sm sm:text-base font-semibold hover:bg-[#1a1a5e] transition-colors duration-300 rounded-lg">
              Explore Case Studies
            </button>
          </div>
        </div>

        {/* Cards Container - Scroll behavior preserved */}
        <main ref={container} className={`${styles.main} relative w-full`}>
          {
            projects.map( (project, i) => {
              const targetScale = 1 - ( (projects.length - i) * 0.05);
              const { link, ...rest } = project;
              return <CardsCard key={`p_${i}`} i={i} {...rest} url={link} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
            })
          }
        </main>
      </div>
    </section>
<IndustryExpertiseSection/>
{/* <CaseStudiesSection/> */}

<MetricsSection/>

<AwardsSection/>

<BlogInsightsSection/>


<ContactUsSection/>
<FAQSection/>

<Footer/>

{/* <CTABuildSection/> */}


    
   </div>
  );
}
