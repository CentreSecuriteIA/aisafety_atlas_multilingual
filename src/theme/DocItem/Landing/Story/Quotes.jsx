// src/theme/DocItem/Landing/Story/Quotes.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './Quotes.module.css';

import {getDataContent} from '@site/src/utils/i18nUtils.js';

export default function Quotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const quoteRefs = useRef([]);

  // Load localized data
  const data = getDataContent('quotes.json');
  const EXPERT_QUOTES = data.landing_quotes;

  // Measure the height of all quotes and set container to the tallest
  useEffect(() => {
    const measureQuotes = () => {
      if (quoteRefs.current.length === EXPERT_QUOTES.length) {
        let maxHeight = 0;
        quoteRefs.current.forEach(ref => {
          if (ref) {
            // Temporarily make visible to measure
            const originalDisplay = ref.style.display;
            ref.style.display = 'block';
            ref.style.position = 'absolute';
            ref.style.visibility = 'hidden';
            
            const height = ref.offsetHeight;
            maxHeight = Math.max(maxHeight, height);
            
            // Restore original state
            ref.style.display = originalDisplay;
            ref.style.position = '';
            ref.style.visibility = '';
          }
        });
        
        if (maxHeight > 0 && maxHeight !== containerHeight) {
          setContainerHeight(maxHeight);
        }
      }
    };

    // Measure after a short delay to ensure fonts are loaded
    const timer = setTimeout(measureQuotes, 100);
    
    // Also measure on window resize
    window.addEventListener('resize', measureQuotes);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureQuotes);
    };
  }, [containerHeight]);

  // Auto-rotate quotes with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % EXPERT_QUOTES.length);
        setIsTransitioning(false);
      }, 150); // Short fade duration
      
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const handleQuoteChange = (index) => {
    if (index !== currentQuoteIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuoteIndex(index);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const currentQuote = EXPERT_QUOTES[currentQuoteIndex];

  return (
    <div className={styles.expertQuoteContainer}>
      <div 
        className={styles.quoteCardContainer}
        ref={containerRef}
        style={{ 
          minHeight: containerHeight > 0 ? `${containerHeight}px` : 'auto'
        }}
      >
        {/* Render all quotes for measurement, but only show current one */}
        {EXPERT_QUOTES.map((quote, index) => (
          <div
            key={index}
            ref={el => quoteRefs.current[index] = el}
            className={`${styles.quoteCard} ${
              index === currentQuoteIndex ? styles.activeQuote : styles.hiddenQuote
            } ${isTransitioning ? styles.transitioning : ''}`}
          >
            {/* Quote text */}
            <blockquote className={styles.quote}>
              {quote.quote}
            </blockquote>
            
            <div className={styles.quoteFooter}>
              <div className={styles.avatarWrapper}>
                <img 
                  src={quote.image} 
                  alt={quote.name} 
                  className={styles.avatar}
                />
              </div>
              
              <div className={styles.authorInfo}>
                <div className={styles.expertName}>{quote.name}</div>
                <div className={styles.expertTitle}>{quote.title}</div>
                <div className={styles.quoteSource}>
                  <a href={quote.url} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                    {quote.source}, {quote.year}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Quote rotation indicators */}
      <div className={styles.quoteIndicators}>
        {EXPERT_QUOTES.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentQuoteIndex ? styles.activeIndicator : ''}`}
            onClick={() => handleQuoteChange(index)}
            aria-label={`View quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
