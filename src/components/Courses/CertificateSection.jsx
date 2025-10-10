// src/components/Courses/CertificateSection.jsx - Self-contained with own data
import React from 'react';
import styles from './CertificateSection.module.css';

import Translate from '@site/src/components/Translate';

// Certificate data lives in the component
const certificateData = {
  available: true,
  sampleImage: "/img/courses/certificate.png",
  description: <Translate id="courses.certif_data.desc" description="">Official LinkedIn certificates available for participants who complete course requirements. The specific requirements vary by the course provider.</Translate>,
  requirements: [
    <Translate id="courses.certif_info.req_1" description="">Attend at least 80% of the sessions</Translate>,
    <Translate id="courses.certif_info.req_2" description="">Read the textbook, and participate actively in group discussions</Translate>, 
    <Translate id="courses.certif_info.req_3" description="">Submit final projects or equivalent contribution</Translate>
  ]
};

export default function CertificateSection() {
  if (!certificateData.available) return null;

  const i18n = [
    <Translate id="courses.certif_section.title">Official Certificates</Translate>,
    <Translate id="courses.certif_section.req_title">Common Certificate Requirements</Translate>,
  ];

  return (
    <div className={styles.certificateSection}>
      <div className={styles.certificateContainer}>
        <div className={styles.certificateContent}>
          <div className={styles.certificateText}>
            <div className={styles.certificateHeader}>
              <h2 className={styles.certificateTitle}>{i18n[0]}</h2>
            </div>
            
            <p className={styles.certificateDescription}>
              {certificateData.description}
            </p>
            
            <div className={styles.requirementsList}>
              <h3 className={styles.requirementsTitle}>{i18n[1]}:</h3>
              <ul className={styles.requirements}>
                {certificateData.requirements.map((requirement, index) => (
                  <li key={index} className={styles.requirement}>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={styles.certificateImage}>
            <img
              src={certificateData.sampleImage}
              alt={i18n[1]}
              className={styles.certificateSample}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
