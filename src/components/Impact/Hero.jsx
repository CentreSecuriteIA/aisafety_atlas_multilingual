// src/components/Impact/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

import Translate from '@docusaurus/Translate';

export default function Hero() {
  const i18n = [
    <Translate id="impact.hero.content.title" description ="Impact page title">IMPACT</Translate>,
    <Translate id="impact.hero.content.subtitle" description="Impact page subtitle">Measurable outcomes from systematic AI safety education and research contributions.</Translate>,
    <Translate id="impact.hero.content.logo" description="Alt text for logo image">AI Safety Atlas Logo</Translate>,
  ]

  return (
    <div className={styles.heroSection}>
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
    </div>
  );
}
