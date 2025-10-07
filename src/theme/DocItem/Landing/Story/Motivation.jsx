// src/theme/DocItem/Landing/Story/Motivation.jsx
import React from 'react';
import styles from './Motivation.module.css';

import Translate from '@docusaurus/Translate';

export default function Motivation() {
  return (
    <div className={styles.secondarySection}>
      <div className={styles.questionContent}>
        <div className={styles.questionSide}>
          <h3 className={styles.question}>
            <Translate id="landing.story.motivation.question" description="Motivation question">
              Stop piecing together AI safety from scattered sources.
            </Translate>
          </h3>
        </div>
        
        <div className={styles.answerSide}>
          <p className={styles.answerText}>
            <Translate id="landing.story.motivation.answer" description="Motivation answer">
              Whether you're in policy, engineering, business, or academia—the Atlas gives you 
              the complete picture. We've structured the most important knowledge in the field 
              so you can build genuine understanding instead of collecting random facts from 
              scattered sources.
            </Translate>
          </p>
        </div>
      </div>
    </div>
  );
}
