// src/theme/DocItem/Landing/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

import Translate from '@site/src/components/Translate';

export default function Hero() {
  const i18n = [
    <Translate id="landing.hero.content.title" description ="Landing page title">AI SAFETY ATLAS</Translate>,
    <Translate id="landing.hero.content.subtitle" description="Landing page subtitle">Distilling safety research into a complete learning ecosystem: textbook, courses, guides, videos, and more.</Translate>,
    <Translate id="landing.hero.content.logo" description="Alt text for logo image">AI Safety Atlas Logo</Translate>,
  ];

  return (
    <div className={styles.heroContainer}>
      {/* Left side - Title and Description */}
      <div className={styles.contentSection}>
        <h1 className={styles.title}>{i18n[0]}</h1>
        <p className={styles.description}>
          {i18n[1]}
        </p>
      </div>

      {/* Right side - Logo */}
      <div className={styles.logoSection}>
        <img 
          src="/img/logo_samples/01-test.png" 
          alt={i18n[2]} 
          className={styles.logoImage}
        />
      </div>
    </div>
  );
}
