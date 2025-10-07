// src/theme/DocItem/Landing/Info/Acknowledgements.jsx
import React from 'react';
import styles from './Acknowledgements.module.css';

import Translate, {translate} from '@docusaurus/Translate';
import { getDataContent } from '../../../../utils/i18nUtils';

export default function Acknowledgements() {
  const acknowledgements = getDataContent('acknowledgements.json').content;

  const i18n = [
    <Translate id="landing.info.acknowledgements.title" description="Acknowledgements section title">Acknowledgements</Translate>,
    translate({id:"landing.info.acknowledgements.text", description:"Acknowledgements section text", message:"We thank $ACK_1$, and $ACK_2$ for their valuable feedback and contributions to this project."}),
  ]

  return (
    <div className={styles.acknowledgementsContainer}>
      <div className={styles.sectionHeader}>
        <div className={styles.iconContainer}>
          <img src="/img/icons/acknowledgements.svg" alt="" className={styles.icon} />
        </div>
        <h2 className={styles.sectionTitle}>{i18n[0]}</h2>
      </div>
      
      <div className={styles.acknowledgementsContent}>
        <p className={styles.acknowledgementsText}>
          {i18n[1]
            .replace(
              '$ACK_1$',
              acknowledgements.slice(0, -1).join(', ')
            )
            .replace(
              '$ACK_2$',
              acknowledgements[acknowledgements.length - 1]
            )}
        </p>
      </div>
    </div>
  );
}
