// src/theme/DocItem/Landing/Info/Advisors.jsx
import React from 'react';
import styles from './Advisors.module.css';

import Translate from '@docusaurus/Translate';
import { getDataContent } from '../../../../utils/i18nUtils';

export default function Advisors() {
  const advisors = getDataContent('advisors.json').content;

  const i18n = [
    <Translate id="landing.info.advisors.title"  description="Title for the Advisors section on the landing page">Advisors</Translate>  
  ]

  return (
    <div className={styles.advisorsContainer}>
      <div className={styles.sectionHeader}>
        <div className={styles.iconContainer}>
          <img src="/img/icons/advisor.svg" alt="" className={styles.icon} />
        </div>
        <h2 className={styles.sectionTitle}>{i18n[0]}</h2>
      </div>
      
      <div className={styles.advisorsList}>
        {advisors.map((advisor, index) => (
          <div key={index} className={styles.advisorItem}>
            <h3 className={styles.advisorName}>{advisor.name}</h3>
            <p className={styles.advisorDescription}>{advisor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
