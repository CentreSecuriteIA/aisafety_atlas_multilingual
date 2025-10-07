// src/components/Impact/Publications.jsx
import React from 'react';
import styles from './Publications.module.css';

import Translate from '@docusaurus/Translate';
import { getDataContent } from '../../utils/i18nUtils';

export default function Publications() {
  // Three main output categories - with images instead of icons
  const outputCategories = getDataContent("page_impact/publications.json").content;

  return (
    <div className={styles.publicationsContainer}>
      {/* Publications Section - Three Horizontal Columns */}
      <div className={styles.publicationsSection}>
        <h3 className={styles.publicationsTitle}><Translate id="impact.publications.title" description="">Our Publications</Translate></h3>
        
        <div className={styles.publicationsGrid}>
          {outputCategories.map((category, index) => (
            <div key={index} className={styles.publicationColumn}>
              <div className={styles.publicationImageContainer}>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className={styles.publicationImage}
                />
              </div>
              
              <div className={styles.publicationContent}>
                <h4 className={styles.publicationTitle}>{category.title}</h4>
                <p className={styles.publicationDescription}>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
