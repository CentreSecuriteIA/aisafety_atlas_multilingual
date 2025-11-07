// src/theme/DocItem/Landing/ChapterList/Buttons.jsx
import React from 'react';
import { SmallTooltip } from '@site/src/components/UI/Tooltip';
import { getPdfUrl } from '@site/src/utils/pdfUtils';
import styles from './Buttons.module.css';

import {translate} from '@docusaurus/Translate';

const i18n = [
  //0
  translate({
    "message": "Read Online",
    "id": "landing.chapterList.buttons.read"
  }),
  translate({
    "message": "Watch Video",
    "id": "landing.chapterList.buttons.video"
  }),
  translate({
    "message": "Download PDF",
    "id": "landing.chapterList.buttons.pdf"
  }),
  translate({
    "message": "Listen to Audio",
    "id": "landing.chapterList.buttons.audio"
  }),
  translate({
    "message": "Teaching Guide",
    "id": "landing.chapterList.buttons.teach"
  }),
  //5
  translate({
    "message": "Show",
    "id": "landing.chapterList.buttons.show"
  }),
  translate({
    "message": "Hide",
    "id": "landing.chapterList.buttons.hide"
  }),
  translate({
    "message": "Coming soon",
    "id": "landing.chapterList.buttons.comingSoon"
  })
]

const resources = [
  { key: 'chapter', icon: '/img/icons/book.svg', label: 'Read', tooltip: i18n[0] },
  { key: 'video', icon: '/img/icons/video.svg', label: 'Video', tooltip: i18n[1] },
  { key: 'pdf', icon: '/img/icons/pdf.svg', label: 'PDF', tooltip: i18n[2] },
  { key: 'audio', icon: '/img/icons/audio.svg', label: 'Audio', tooltip: i18n[3] },
  { key: 'facilitation', icon: '/img/icons/teach.svg', label: 'Teach', tooltip: i18n[4] }
];

export default function Buttons({
  chapter,
  hasVerifiedAudio,
  hasVerifiedPdf,
  hasVideo,
  isAudioExpanded,
  isVideoExpanded,
  verifiedPdfData,
  onToggleAudio,
  onToggleVideo,
  isMobile
}) {

  const handleResourceClick = (e, url, resourceType) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Handle expandable resources
    if (resourceType === 'audio' && hasVerifiedAudio) {
      onToggleAudio();
      return;
    }
    
    if (resourceType === 'video' && hasVideo) {
      onToggleVideo();
      return;
    }
    
    // Handle PDF with verified URL
    if (resourceType === 'pdf' && hasVerifiedPdf) {
      const pdfUrl = getPdfUrl(verifiedPdfData);
      if (pdfUrl) {
        window.open(pdfUrl, '_blank');
      }
      return;
    }
    
    // Handle other resources
    if (url) {
      if (resourceType === 'chapter') {
        window.location.href = url;
      } else {
        window.open(url, '_blank');
      }
    }
  };

  return (
    <>
      {resources.map(resource => {
        // Determine availability
        let isAvailable = false;
        if (resource.key === 'audio') {
          isAvailable = hasVerifiedAudio;
        } else if (resource.key === 'pdf') {
          isAvailable = hasVerifiedPdf;
        } else {
          isAvailable = !!chapter.resources[resource.key];
        }
        
        const isExpandable = (resource.key === 'audio' && hasVerifiedAudio) || (resource.key === 'video' && hasVideo);
        const isCurrentlyExpanded = (resource.key === 'audio' && isAudioExpanded) || (resource.key === 'video' && isVideoExpanded);
        
        const buttonClass = isMobile 
          ? `${styles.mobileResourceBtn} ${isAvailable ? styles.available : styles.unavailable} ${isCurrentlyExpanded ? styles.active : ''}`
          : `${styles.resourceBtn} ${isAvailable ? styles.available : styles.unavailable} ${isCurrentlyExpanded ? styles.active : ''}`;
        
        const iconClass = isMobile ? styles.mobileResourceIcon : styles.resourceIcon;
        
        return (
          <div className={styles.resourceCol}>
          <SmallTooltip 
            key={resource.key}
            content={
              isAvailable 
                ? isExpandable 
                  ? `${isCurrentlyExpanded ? i18n[6] : i18n[5]} ${resource.tooltip}` 
                  : resource.tooltip
                : `${resource.label} - ${i18n[7]}`
            }
          >
            <button
              className={buttonClass}
              onClick={isAvailable ? (e) => handleResourceClick(e, chapter.resources[resource.key], resource.key) : undefined}
              disabled={!isAvailable}
              aria-label={`${resource.label} ${chapter.title}`}
              aria-expanded={isExpandable ? isCurrentlyExpanded : undefined}
            >
              <img src={resource.icon} alt={resource.label} className={iconClass} />
              {isMobile && <span className={styles.mobileResourceLabel}>{resource.label}</span>}
            </button>
          </SmallTooltip>
          </div>
        );
      })}
    </>
  );
}
