// src/components/Impact/Testimonials.jsx
import React from 'react';
import styles from './Testimonials.module.css';

import Translate from '@site/src/components/Translate';
import { getDataContent } from '../../utils/i18nUtils';

export default function Testimonials() {
  const testimonials = getDataContent("page_impact/testimonials.json").content;

  return (
    <div className={styles.testimonialsContainer}>
      {/* Testimonials Section - Clean presentation */}
      <div className={styles.testimonialsSection}>
        <h3 className={styles.testimonialsTitle}><Translate id="impact.testimonials.title" description="">What Students, Facilitators, and Researchers Are Saying</Translate></h3>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialType}>{testimonial.type}</div>
              <blockquote className={styles.testimonialQuote}>
                {testimonial.quote}
              </blockquote>
              <div className={styles.testimonialAuthor}>
                {testimonial.author.name && (
                  <div className={styles.authorName}>{testimonial.author.name}</div>
                )}
                <div className={styles.authorRole}>{testimonial.author.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
