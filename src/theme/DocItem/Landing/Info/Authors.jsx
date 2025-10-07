// src/theme/DocItem/Landing/Info/Authors.jsx
import React from 'react';
import styles from './Authors.module.css';

import Translate from '@docusaurus/Translate';
import { getDataContent } from '../../../../utils/i18nUtils';

export default function Authors() {
  const authors = getDataContent("authors.json").content;

  return (
    <div className={styles.authorsContainer}>
      <div className={styles.sectionHeader}>
        <div className={styles.iconContainer}>
          <img src="/img/icons/author.svg" alt="" className={styles.icon} />
        </div>
        <h2 className={styles.sectionTitle}>Authors</h2>
      </div>
      
      <div className={styles.authorsList}>
        {authors.map((author, index) => (
          <div key={index} className={styles.authorItem}>
            <h3 className={styles.authorName}>{author.name}</h3>
            <p className={styles.authorDescription}>{author.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
