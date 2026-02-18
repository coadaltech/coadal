'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({ i, title, description, src, url, color, progress, range, targetScale, metrics, imageText }) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  // Convert hex color to beautiful gradient based on color - BrandStoriesSection style
  const getGradientStyle = (hexColor) => {
    // Create beautiful, vibrant gradients exactly like BrandStoriesSection
    const gradients = {
      '#1a1a5e': 'linear-gradient(135deg, #1a1a5e 0%, #000048 100%)', // Dark Blue - BrandStoriesSection
      '#2563eb': 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)', // Blue - BrandStoriesSection
      '#dc2626': 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)', // Red - BrandStoriesSection
      '#7c3aed': 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)', // Purple - BrandStoriesSection
      '#000048': 'linear-gradient(135deg, #1a1a5e 0%, #000048 100%)', // Dark Blue variant - BrandStoriesSection
    };

    return gradients[hexColor] || `linear-gradient(135deg, ${hexColor} 0%, ${hexColor}dd 100%)`;
  };

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className={styles.card}
      >
        {/* Left Panel - Content */}
        <div className={styles.contentPanel}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.description}>
            <p>{description}</p>

            {/* Metrics */}
            {metrics && metrics.length > 0 && (
              <div className={styles.metrics}>
                {metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className={styles.metricItem}>
                    <div className={styles.metricValue}>{metric.value}</div>
                    <div className={styles.metricLabel}>{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
              View Case Study
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className={styles.imageContainer}>
          <motion.div
            className={styles.inner}
            style={{ scale: imageScale }}
          >
            <Image
              fill
              src={src || '/finance.jpg'}
              alt={title}
              className={styles.image}
            />
          </motion.div>
          {/* Image Overlay */}
          {imageText ? (
            <div className={styles.imageOverlay}>
              <p className={styles.imageText}>{imageText}</p>
              <h4 className={styles.imageTitle}>{title}</h4>
            </div>
          ) : (
            <div className={styles.imageOverlay}>
              <h4 className={styles.imageTitle}>{title}</h4>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Card