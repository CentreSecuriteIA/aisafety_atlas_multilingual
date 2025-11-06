// src/theme/DocItem/Headers/ChapterHeader.jsx - Updated to trigger floating audio player
import React, { useState, useEffect } from 'react';
import { ActionButtonTooltip } from '../../../components/UI/Tooltip';
import styles from './ChapterHeader.module.css';
import InlineVideoPlayer from '@site/src/components/chapters/Video/InlineVideoPlayer';
import WarningBanner from '../../../components/chapters/WarningBanner';
import { 
  buildAudioFiles, 
  hasAudioFiles, 
  debugAudioFiles
} from '@site/src/utils/audioUtils';
import { 
  buildPdfFile, 
  hasPdfFile, 
  getPdfUrl, 
  debugPdfFiles 
} from '@site/src/utils/pdfUtils';

import {translate} from '@docusaurus/Translate';

// Action Button Component - Updated with centralized Tippy
function ActionButton({ href, iconPath, label, description, active, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  // Determine tooltip content
  const tooltipContent = description || label;
  // If it has onClick (audio or video buttons), render as button
  if (onClick) {
    return (
      <ActionButtonTooltip content={tooltipContent}>
        <button
          onClick={onClick}
          className={`${styles.actionButton} ${!active ? styles.inactive : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: active ? 'pointer' : 'not-allowed' 
          }}
          disabled={!active}
        >
          <div className={styles.buttonIcon}>
            <img src={iconPath} alt="" className={styles.buttonIconImage} />
          </div>
          
          <div className={styles.buttonContent}>
            <span className={styles.buttonLabel}>{label}</span>
          </div>
        </button>
      </ActionButtonTooltip>
    );
  }
  
  // Regular link buttons
  const i18n = [
    translate({id: 'theme.docItem.chapterHeader.ActionButton.notAvailable', message: '(Not available)'}),
  ];

  return (
    <ActionButtonTooltip content={active ? tooltipContent : `${label} ${i18n[0]}`}>
      <a
        href={active && href ? href : '#'}
        target={active && href ? "_blank" : undefined}
        rel={active && href ? "noopener noreferrer" : undefined}
        className={`${styles.actionButton} ${!active ? styles.inactive : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={!active || !href ? (e) => e.preventDefault() : undefined}
        aria-disabled={!active}
      >
        <div className={styles.buttonIcon}>
          <img src={iconPath} alt="" className={styles.buttonIconImage} />
        </div>
        
        <div className={styles.buttonContent}>
          <span className={styles.buttonLabel}>{label}</span>
        </div>
      </a>
    </ActionButtonTooltip>
  );
}

/**
 * Trigger the floating audio player
 */
function triggerFloatingAudioPlayer() {
  // Find the floating audio button and click it
  const audioButton = document.querySelector('[aria-label*="Audio player"]');
  if (audioButton) {
    console.log('🎵 ChapterHeader: Triggering floating audio player');
    audioButton.click();
  } else {
    console.warn('🎵 ChapterHeader: Could not find floating audio button');
  }
}

/**
 * Complete Chapter Header Component with Acknowledgements Section
 * Features: Texture background, horizontal button strip, no inline audio player
 */
export default function ChapterHeader({ frontMatter, title, chapterNumber, boundWidth, metadata }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [pdfData, setPdfData] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(true);
  
  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // PDF availability check - async
  useEffect(() => {
    async function checkPdfAvailability() {
      setPdfLoading(true);
      
      console.log(`🔍 Checking PDF for chapter ${chapterNumber}...`);
      
      try {
        const result = await buildPdfFile(frontMatter, chapterNumber);
        
        console.log(`📄 PDF check result for chapter ${chapterNumber}:`, result);
        
        setPdfData(result);
        
        debugPdfFiles('ChapterHeader (async)', {
          chapterNumber,
          localFileChecked: `/chapters/${String(chapterNumber).padStart(2, '0')}/pdf/main.pdf`,
          asyncResult: result
        });
      } catch (error) {
        console.error(`❌ PDF availability check failed for chapter ${chapterNumber}:`, error);
        // Set to inactive if check fails
        setPdfData({
          type: 'none',
          url: null,
          isActive: false
        });
      } finally {
        setPdfLoading(false);
      }
    }
    
    checkPdfAvailability();
  }, [frontMatter, chapterNumber]);
  
  // Use actual PDF data once loaded, or show as inactive while loading
  const hasPdf = pdfData ? hasPdfFile(pdfData) : false;
  const pdfUrl = (pdfData && pdfData.isActive) ? getPdfUrl(pdfData) : null;
  
  console.log(`🎯 Chapter ${chapterNumber} PDF status:`, {
    pdfLoading,
    pdfData,
    hasPdf,
    pdfUrl
  });
  
  // Build audio files object
  const audioFiles = buildAudioFiles(frontMatter, chapterNumber);
  const hasAudio = hasAudioFiles(audioFiles);
  
  // Debug logging for audio detection
  debugAudioFiles('ChapterHeader', {
    chapterNumber,
    frontMatterAudio: {
      audio_podcast: frontMatter.audio_podcast,
      audio_transcript: frontMatter.audio_transcript,
      audio_discussion: frontMatter.audio_discussion,
      audio_link: frontMatter.audio_link
    },
    processedAudioFiles: audioFiles,
    hasAudio
  });
  
  // Debug logging for PDF detection
  if (pdfData) {
    debugPdfFiles('ChapterHeader (final)', {
      chapterNumber,
      localFileChecked: `/chapters/${String(chapterNumber).padStart(2, '0')}/pdf/main.pdf`,
      finalPdfData: pdfData,
      pdfUrl,
      hasPdf,
      pdfLoading
    });
  }
  
  // Handle audio button click - triggers floating player
  const handleAudioToggle = () => {
    console.log('🎵 ChapterHeader: Audio button clicked');
    if (hasAudio) {
      triggerFloatingAudioPlayer();
    }
  };
  
  // Handle video button click
  const handleVideoToggle = () => {
    if (frontMatter.video_link) {
      setShowVideoPlayer(!showVideoPlayer);
    }
  };
  
  // Handle video player close
  const handleVideoClose = () => {
    setShowVideoPlayer(false);
  };
  
  // Generate flowing particles with better distribution
  const generateParticles = () => {
    const count = 8;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.8,
      duration: 8 + Math.random() * 4
    }));
  };
  
  const particles = generateParticles();

  const i18n = [
    //0
    translate({id: 'theme.docItem.chapterHeader.breadcrumb.home', message: 'AI Safety Atlas Home'}),
    translate({id: 'theme.docItem.chapterHeader.breadcrumb.allChapters', message: 'All Chapters'}),
    translate({id: 'theme.docItem.chapterHeader.breadcrumb.chapter', message: 'Chapter'}),
    translate({id: 'theme.docItem.chapterHeader.metadata.authors', message: 'Authors'}),
    translate({id: 'theme.docItem.chapterHeader.metadata.affiliation', message: 'Affiliation'}),
    //5
    translate(
      {id: 'theme.docItem.chapterHeader.metadata.contribution', message: 'We thank {nameList} for their valuable feedback and contributions.'},
      {nameList: ((frontMatter) => {
                          const names = frontMatter?.acknowledgements;
                          if (!names || names.length === 0) return '';
                          if (names.length === 1) {
                            return names[0];
                          } else if (names.length === 2) {
                            return `${names[0]} and ${names[1]}`;
                          } else {
                            const allButLast = names.slice(0, -1).join(', ');
                            const last = names[names.length - 1];
                            return `${allButLast}, and ${last}`;
                          }
                        })(frontMatter)}
    ),
    translate({id: 'theme.docItem.chapterHeader.metadata.readingTime', message: 'Reading Time'}),
    translate({id: 'theme.docItem.chapterHeader.metadata.readingTime.core', message: 'core'}),
    translate({id: 'theme.docItem.chapterHeader.metadata.readingTime.optional', message: 'optional'}),
    translate({id: 'theme.docItem.chapterHeader.metadata.readingTime.appendix', message: 'appendix'}),
    //10
    translate({id: 'theme.docItem.chapterHeader.buttons.paper', message: 'Paper'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.paperDesc', message: 'View on arXiv'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.docs', message: 'Docs'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.docsDesc', message: 'Comment directly on Google Docs'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.discuss', message: 'Discuss'}),
    //15
    translate({id: 'theme.docItem.chapterHeader.buttons.discussDesc', message: 'Discuss on Lesswrong and Alignment Forum'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.lecture', message: 'Lecture'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.lectureDesc', message: 'Watch the video lecture'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.lectureDescNot', message: 'Video not available'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.audio', message: 'Audio'}),
    //20
    translate({id: 'theme.docItem.chapterHeader.buttons.audioDesc', message: 'Open audio player'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.audioDescNot', message: 'Audio not available'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.pdf', message: 'PDF'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.pdfDesc', message: 'Download PDF version'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.pdfDescNot', message: 'PDF not available'}),
    //25
    translate({id: 'theme.docItem.chapterHeader.buttons.diagrams', message: 'Diagrams'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.diagramsDesc', message: 'View and edit source SVGs'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.teach', message: 'Teach'}),
    translate({id: 'theme.docItem.chapterHeader.buttons.teachDesc', message: 'Access Facilitation Resources'})  
  ];
  
  return (
    <header className={`${styles.chapterContainer} ${isVisible ? styles.visible : ''}`}>
      {/* Texture background with subtle overlay */}
      <div className={styles.backgroundLayers}>
        <div className={styles.textureOverlay} />
        
        {/* Subtle floating particles */}
        <div className={styles.particleLayer}>
          {particles.map(particle => (
            <div
              key={particle.id}
              className={styles.particle}
              style={{
                '--size': `${particle.size}px`,
                '--x': `${particle.x}%`,
                '--y': `${particle.y}%`,
                '--delay': `${particle.delay}s`,
                '--duration': `${particle.duration}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main content with new layout */}
      <div className={styles.chapterContent}>
        <div className={styles.mainSplit}>
          
          {/* TOP SECTION - Title/metadata horizontal split */}
          <div className={styles.topSection}>
            
            {/* LEFT SIDE - Core content */}
            <div className={styles.leftSection}>
              {/* Chapter number + title */}
              <div className={styles.titleSection}>
                <div className={styles.titleRow}>
                  <span className={styles.chapterNumber}>
                    {String(frontMatter.chapter_number || chapterNumber).padStart(2, '0')}
                  </span>
                  <h1 className={styles.chapterTitle}>{title}</h1>
                </div>
              </div>
              
              {/* Description */}
              {frontMatter.chapter_description && (
                <p className={styles.chapterDescription}>
                  {frontMatter.chapter_description}
                </p>
              )}
            </div>
            
            {/* RIGHT SIDE - Breadcrumbs + Metadata only */}
            <div className={styles.rightSection}>
              {/* Breadcrumbs at top of right side */}
              <nav className={styles.chapterNavigation}>
                <ActionButtonTooltip content={i18n[0]}>
                  <a href="/" className={styles.breadcrumbLink}>
                    <svg className={styles.breadcrumbIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9,22 9,12 15,12 15,22"></polyline>
                    </svg>
                  </a>
                </ActionButtonTooltip>
                <span className={styles.breadcrumbSeparator}>›</span>
                <ActionButtonTooltip content={i18n[1]}>
                  <a href="/chapters/" className={styles.breadcrumbLink}>
                    <svg className={styles.breadcrumbIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                  </a>
                </ActionButtonTooltip>
                <span className={styles.breadcrumbSeparator}>›</span>
                <a href={`/chapters/${String(frontMatter.chapter_number || chapterNumber).padStart(2, '0')}/`} className={styles.breadcrumbLink}>
                  {i18n[2]} {frontMatter.chapter_number || chapterNumber}
                </a>
                <span className={styles.breadcrumbSeparator}>›</span>
                <span className={styles.breadcrumbCurrent}>{title}</span>
              </nav>
              
              {/* Metadata section */}
              <div className={styles.metadataSection}>
                {/* Authors */}
                {frontMatter.authors && frontMatter.authors.length > 0 && (
                  <div className={styles.metaCard}>
                    <div className={styles.metaIcon}>
                      <img src="/img/icons/author.svg" alt="" className={styles.iconImage} />
                    </div>
                    <div className={styles.metaContent}>
                      <span className={styles.metaLabel}>{i18n[3]}</span>
                      <span className={styles.metaValue}>
                        {frontMatter.authors.join(', ')}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Affiliations */}
                {frontMatter.affiliations && frontMatter.affiliations.length > 0 && (
                  <div className={styles.metaCard}>
                    <div className={styles.metaIcon}>
                      <img src="/img/icons/affiliation.svg" alt="" className={styles.iconImage} />
                    </div>
                    <div className={styles.metaContent}>
                      <span className={styles.metaLabel}>{i18n[4]}</span>
                      <span className={styles.metaValue}>
                        {frontMatter.affiliations.join(', ')}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Acknowledgements */}
                {frontMatter.acknowledgements && frontMatter.acknowledgements.length > 0 && (
                  <div className={styles.metaCard}>
                    <div className={styles.metaIcon}>
                      <img src="/img/icons/acknowledgements.svg" alt="" className={styles.iconImage} />
                    </div>
                    <div className={styles.metaContent}>
                      <span className={styles.metaLabel}>Acknowledgements</span>
                      <span className={styles.metaValue}>
                        {i18n[5]}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Reading time breakdown */}
                {(frontMatter.reading_time_core || frontMatter.reading_time_optional || frontMatter.reading_time_appendix) && (
                  <div className={styles.metaCard}>
                    <div className={styles.metaIcon}>
                      <img src="/img/icons/reading-time.svg" alt="" className={styles.iconImage} />
                    </div>
                    <div className={styles.metaContent}>
                      <span className={styles.metaLabel}>{i18n[6]}</span>
                      <div className={styles.readingBreakdown}>
                        {frontMatter.reading_time_core && (
                          <span className={styles.timeSegment}>
                            <span className={styles.timeValue}>{frontMatter.reading_time_core}</span>
                            <span className={styles.timeLabel}>{i18n[7]}</span>
                          </span>
                        )}
                        {frontMatter.reading_time_optional && (
                          <span className={styles.timeSegment}>
                            <span className={styles.timeValue}>{frontMatter.reading_time_optional}</span>
                            <span className={styles.timeLabel}>{i18n[8]}</span>
                          </span>
                        )}
                        {frontMatter.reading_time_appendix && (
                          <span className={styles.timeSegment}>
                            <span className={styles.timeValue}>{frontMatter.reading_time_appendix}</span>
                            <span className={styles.timeLabel}>{i18n[9]}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
          </div>
          
          {/* BOTTOM SECTION - Action buttons in horizontal line */}
          <div className={styles.buttonsSection}>
            <ActionButton
              href={frontMatter.arxiv_link}
              iconPath="/img/icons/arxiv.svg"
              label={i18n[10]}
              description={i18n[11]}
              active={!!frontMatter.arxiv_link}
            />
            
            <ActionButton
              href={frontMatter.google_docs_link}
              iconPath="/img/icons/google.svg"
              label={i18n[12]}
              description={i18n[13]}
              active={!!frontMatter.google_docs_link}
            />
            
            <ActionButton
              href={frontMatter.alignment_forum_link}
              iconPath="/img/icons/lesswrong.svg"
              label={i18n[14]}
              description={i18n[15]}
              active={!!frontMatter.alignment_forum_link}
            />
            
            {/* Video button - Now with inline playback */}
            <ActionButton
              onClick={handleVideoToggle}
              iconPath="/img/icons/video.svg"
              label={i18n[16]}
              description={frontMatter.video_link ? i18n[17] : i18n[18]}
              active={!!frontMatter.video_link}
            />
            
            {/* Audio button - NOW triggers floating player */}
            <ActionButton
              onClick={handleAudioToggle}
              iconPath="/img/icons/audio.svg"
              label={i18n[19]}
              description={hasAudio ? i18n[20] : i18n[21]}
              active={hasAudio}
            />
            
            {/* PDF Download button - Only active when local file confirmed to exist */}
            <ActionButton
              href={hasPdf ? pdfUrl : null}
              iconPath="/img/icons/pdf.svg"
              label={i18n[22]}
              description={hasPdf ? i18n[23] : i18n[24]}
              active={hasPdf}
            />
            
            {/* Excalidraw button */}
            <ActionButton
              href={frontMatter.excalidraw_link}
              iconPath="/img/icons/excalidraw.svg"
              label={i18n[25]}
              description={i18n[26]}
              active={!!frontMatter.excalidraw_link}
            />
            
            <ActionButton
              href={frontMatter.teach_link}
              iconPath="/img/icons/teach.svg"
              label={i18n[27]}
              description={i18n[28]}
              active={!!frontMatter.teach_link}
            />
          </div>
          
          {/* VIDEO PLAYER SECTION - Only shows when video button is clicked */}
          {showVideoPlayer && frontMatter.video_link && (
            <InlineVideoPlayer
              videoUrl={frontMatter.video_link}
              title={title}
              onClose={handleVideoClose}
            />
          )}
          
        </div>
      </div>
    {/* Warning banner - extends below header */}
    {frontMatter.warning === "True" && frontMatter.warning_message && (
      <WarningBanner message={frontMatter.warning_message} />
    )}
    </header>
  );
}
