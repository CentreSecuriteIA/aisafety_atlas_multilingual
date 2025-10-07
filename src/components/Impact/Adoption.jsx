// src/components/Impact/Adoption.jsx
import React from 'react';
import styles from './Adoption.module.css';

import Translate from '@docusaurus/Translate';
import { getDataContent } from '../../utils/i18nUtils';

export default function Adoption() {
  // Adoption groups - one image per category with combined descriptions
  const adoptionGroups = getDataContent("page_impact/adoption.json").content;

  return (
    <div className={styles.adoptionContainer}>
      {/* Educational Adoption Section - Full Width Rows */}
      <div className={styles.adoptionSection}>
        <h3 className={styles.adoptionTitle}><Translate id="impact.adoption.title" description="">Educational Adoption</Translate></h3>
        
        {adoptionGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.adoptionGroup}>
            <div className={styles.adoptionGroupHeader}>
              <h4 className={styles.categoryTitle}>{group.category}</h4>
            </div>
            
            <div className={styles.adoptionGroupContent}>
              {/* Image Left */}
              <div className={styles.categoryImageContainer}>
                <img 
                  src={group.image}
                  alt={`${group.category} usage`}
                  className={styles.categoryImage}
                />
                {group.logo && (
                  <div className={styles.categoryLogo}>
                    <img 
                      src={group.logo} 
                      alt={`${group.category} logo`}
                      className={styles.categoryLogoImage}
                    />
                  </div>
                )}
              </div>
              
              {/* Content Right */}
              <div className={styles.categoryContentText}>
                <p className={styles.categoryDetailedDescription}>{group.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
