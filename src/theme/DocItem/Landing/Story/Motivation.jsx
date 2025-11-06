// src/theme/DocItem/Landing/Story/Motivation.jsx
import React from 'react';
import styles from './Motivation.module.css';

import Translate from '@site/src/components/Translate';

export default function Motivation() {
  return (
    <div className={styles.secondarySection}>
      <div className={styles.questionContent}>
        <div className={styles.questionSide}>
          <h3 className={styles.question}>
            <Translate id="landing.story.motivation.question" description="Motivation question">
              Textbook, courses, guides, videos, and more.
            </Translate>
          </h3>
        </div>
        
        <div className={styles.answerSide}>
          <p className={styles.answerText}>
            <Translate id="landing.story.motivation.answer" description="Motivation answer">
              Whether you're in policy, engineering, business, or academia—the Atlas gives you the complete picture. We've gathered the most important knowledge in the field from hundreds of sources, and structured it so that you can build genuine understanding instead of collecting random facts from scattered sources.
            </Translate>
          </p>
        </div>
      </div>
    </div>
  );
}
