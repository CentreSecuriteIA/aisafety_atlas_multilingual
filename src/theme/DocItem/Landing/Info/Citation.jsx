// src/theme/DocItem/Landing/Info/Citation.jsx
import React, { useState } from 'react';
import { SmallTooltip } from '@site/src/components/UI/Tooltip';
import styles from './Citation.module.css';

import {translate} from '@docusaurus/Translate';
import { getDataContent } from '../../../../utils/i18nUtils';

export default function Citation() {
  const citation = getDataContent('citation.json');

  // i18n translations
  const i18n = [
    translate({
      "message": "Copied!",
      "id": "landing.info.citation.copied",
    }),
    translate({
      "message" : "Click to copy citation",
      "id": "landing.info.citation.clickToCopy",
    }),
    translate({
      "message" : "Failed to copy citation:",
      "id": "landing.info.citation.failedToCopy",
    }),
    translate({
      "message" : "Copy failed",
      "id": "landing.info.citation.copyFailed",
    }),
    translate({
      "message" : "Cite this work as",
      "id": "landing.info.citation.citeAs",
    }),
    translate({
      "message" : "Copy citation to clipboard",
      "id": "landing.info.citation.copyCitation",
    }),
  ];

  const citationText = citation.message;
  const [copyTooltip, setCopyTooltip] = useState(i18n[1]);
  
  const handleCopyCitation = async () => {
    try {
      await navigator.clipboard.writeText(citationText);
      setCopyTooltip(i18n[0]);
      setTimeout(() => setCopyTooltip(i18n[1]), 2000);
    } catch (err) {
      console.error(i18n[2], err);
      setCopyTooltip(i18n[3]);
      setTimeout(() => setCopyTooltip(i18n[1]), 2000);
    }
  };

  return (
    <div className={styles.citationContainer}>
      <div className={styles.sectionHeader}>
        <div className={styles.iconContainer}>
          <img src="/img/icons/citation.svg" alt="" className={styles.icon} />
        </div>
        <h2 className={styles.sectionTitle}>{i18n[4]}</h2>
      </div>
      
      <div className={styles.citationContent}>
        <div className={styles.citationWrapper}>
          <p className={styles.citation}>{citationText}</p>
          <SmallTooltip content={copyTooltip}>
            <button 
              className={styles.copyButton}
              onClick={handleCopyCitation}
              aria-label={i18n[5]}
            >
              📋
            </button>
          </SmallTooltip>
        </div>
      </div>
    </div>
  );
}
