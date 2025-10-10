// src/components/Feedback/ChapterFeedback.jsx - Updated with footnote-style separator
import React, { useState, useEffect, useRef } from 'react';
import { ActionButtonTooltip } from '../UI/Tooltip';
import styles from './ChapterFeedback.module.css';

import { getDataContent } from '../../utils/i18nUtils';
import Translate from '@site/src/components/Translate';
import { translate } from '@docusaurus/Translate';

export default function ChapterFeedback({ 
  chapterNumber, 
  sectionNumber = null, 
  title,
  pathname,
  frontMatter = {}
}) {
  const [responses, setResponses] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [comments, setComments] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Determine if this is a conclusion section (chapter-level feedback)
  const isConclusion = frontMatter.section_type === 'conclusion' || 
                      title.toLowerCase().includes('conclusion') ||
                      pathname.endsWith('/conclusion') ||
                      pathname.endsWith('/conclusion/');
  
  // Don't show on introduction sections
  const isIntroduction = frontMatter.section_type === 'introduction' || 
                        title.toLowerCase().includes('introduction') ||
                        pathname.endsWith('/introduction') ||
                        pathname.endsWith('/introduction/') ||
                        pathname.match(/\/chapters\/\d+\/$/);

  useEffect(() => {
    const pageKey = `feedback_${chapterNumber}${sectionNumber ? `_${sectionNumber}` : ''}`;
    const submitted = localStorage.getItem(pageKey);
    if (submitted) {
      setIsSubmitted(true);
    }
  }, [chapterNumber, sectionNumber]);

  if (isIntroduction) return null;

  const pageType = sectionNumber ? 'section' : 'chapter';

  const questions = getDataContent('feedback_questions.json');
  // Core questions (always shown)
  const coreQuestions = isConclusion ? questions.core.conclusion : questions.core.not_conclusion;
  // Detailed questions (shown when expanded)
  const detailQuestions = isConclusion ? questions.detail.conclusion : questions.detail.not_conclusion;

  const i18n = [
    //0
    <Translate id="feedback.optional">(optional)</Translate>,
    <Translate id="feedback.isSubmitted.thankYou">Thank you for your feedback!</Translate>,
    <Translate id="feedback.isSubmitted.chapter.yourInputHelps">Your input helps improve</Translate>,
    <Translate id="feedback.isSubmitted.chapter">this chapter</Translate>,
    <Translate id="feedback.isSubmitted.section">this section</Translate>,
    //5
    <Translate id="feedback.chapterFeedback">Chapter Feedback</Translate>,
    <Translate id="feedback.sectionFeedback">Section Feedback</Translate>,
    <Translate id="feedback.liveProject">We consider this textbook a live project. Feedback helps us target our improvements.</Translate>,
    <Translate id="feedback.additional">Additional feedback</Translate>,
    translate({id: "feedback.comments", message: "Some questions to think about:\n\nWhat background knowledge was missing? Which concepts should connect better? Where did you get confused? Any technical corrections?\n\nShare any other thoughts or suggestions..."}),
    //10
    <Translate id="feedback.detailed">Detailed feedback</Translate>,
    <Translate id="feedback.contactInfo">Contact information</Translate>,
    <Translate id="feedback.anonymous">Feedback is 100% anonymous unless you want to help us follow up with you or understand the context better</Translate>,
    translate({id: "feedback.form.name", message: "Your name"}),
    translate({id: "feedback.form.organization", message: "University/Study Group"}),
    //15
    translate({id: "feedback.form.email", message: "Email address"}),
    translate({id: "feedback.form.submitting", message: "Submitting..."}),
    translate({id: "feedback.form.submit", message: "Submit feedback"})
  ]

  const handleSubmit = async () => {
    const canSubmitCore = coreQuestions.every(q => responses[q.key] !== undefined);
    if (!canSubmitCore) return;
    
    setIsSubmitting(true);
    setError('');

    try {
      const formData = {
        page_type: isConclusion ? 'chapter' : 'section',
        chapter_number: chapterNumber,
        section_number: sectionNumber || '',
        page_title: title,
        pathname: pathname,
        feedback_type: isConclusion ? 'chapter_conclusion' : 'section_targeted',
        has_detailed_feedback: showDetails && (detailQuestions.some(q => responses[q.key] !== undefined) || comments.trim()),
        comments: comments.trim() || '',
        content_version: frontMatter.content_version || '1.0',
        ...responses,
        submission_date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
        submission_timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent
      };

      const response = await fetch('https://formspree.io/f/mdkzezkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        const pageKey = `feedback_${chapterNumber}${sectionNumber ? `_${sectionNumber}` : ''}`;
        localStorage.setItem(pageKey, 'true');
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
      console.error('Feedback submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const DragSlider = ({ question, value, onChange, disabled = false, isOptional = false }) => {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragValue, setDragValue] = useState(value);

    const handleInteraction = (clientX) => {
      if (!sliderRef.current || disabled) return;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      const newValue = Math.round(percentage * 10);
      
      setDragValue(newValue);
      if (!isDragging) {
        onChange(question.key, newValue);
      }
    };

    const handleMouseDown = (e) => {
      if (disabled) return;
      setIsDragging(true);
      handleInteraction(e.clientX);
    };

    const handleMouseMove = (e) => {
      if (!isDragging || disabled) return;
      handleInteraction(e.clientX);
    };

    const handleMouseUp = () => {
      if (isDragging && dragValue !== undefined) {
        onChange(question.key, dragValue);
      }
      setIsDragging(false);
    };

    const handleTouchStart = (e) => {
      if (disabled) return;
      setIsDragging(true);
      handleInteraction(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      if (!isDragging || disabled) return;
      e.preventDefault();
      handleInteraction(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (isDragging && dragValue !== undefined) {
        onChange(question.key, dragValue);
      }
      setIsDragging(false);
    };

    useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
        
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
        };
      }
    }, [isDragging, dragValue]);

    const currentValue = isDragging ? dragValue : value;
    const percentage = currentValue !== undefined ? (currentValue / 10) * 100 : 0;

    return (
      <div className={styles.sliderQuestion}>
        <div className={styles.questionHeader}>
          <div className={styles.questionTitle}>
            <img src={`/img/feedback/${question.icon}`} alt="" className={styles.questionIcon} />
            <span className={styles.questionLabel}>
              {question.label}
              {isOptional && <span className={styles.optional}> (optional)</span>}
            </span>
          </div>
        </div>
        
        <div className={styles.sliderContainer}>
          <div className={styles.sliderLabels}>
            <span className={styles.sliderLabel}>{question.lowLabel}</span>
            <span className={styles.sliderLabel}>{question.highLabel}</span>
          </div>
          
          <div
            ref={sliderRef}
            className={`${styles.sliderTrack} ${disabled ? styles.disabled : ''}`}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Threshold markers */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(mark => (
              <div 
                key={mark}
                className={styles.thresholdMark}
                style={{ left: `${(mark / 10) * 100}%` }}
              />
            ))}
            
            <div 
              className={styles.sliderFill}
              style={{ width: `${percentage}%` }}
            />
            
            {currentValue !== undefined && (
              <div 
                className={styles.sliderThumb}
                style={{ left: `${percentage}%` }}
              />
            )}
          </div>
          
          <div className={styles.sliderNumbers}>
            <span className={`${styles.sliderNumber} ${currentValue === 0 ? styles.active : ''}`}>
              0
            </span>
            
            <div className={styles.centerContent}>
              {currentValue !== undefined && (
                <span className={styles.ratingValue}>{currentValue}/10</span>
              )}
            </div>
            
            <span className={`${styles.sliderNumber} ${currentValue === 10 ? styles.active : ''}`}>
              10
            </span>
          </div>
        </div>
      </div>
    );
  };

  const canSubmitCore = coreQuestions.every(q => responses[q.key] !== undefined);

  if (isSubmitted) {
    return (
      <div className={styles.feedbackContainer}>
        {/* Footnote-style separator */}
        <div className={styles.separator}>
          <div className={styles.separatorLine}></div>
          <img 
            src="/img/logo_samples/01-test.svg" 
            alt="Atlas logo" 
            className={styles.separatorLogo}
          />
          <div className={styles.separatorLine}></div>
        </div>

        <div className={styles.thankYou}>
          <div className={styles.checkIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div>
            <h4>{i18n[1]}</h4>
            <p>{i18n[2]} {isConclusion ? i18n[3] : i18n[4]}.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.feedbackContainer}>
      {/* Footnote-style separator */}
      <div className={styles.separator}>
        <div className={styles.separatorLine}></div>
        <img 
          src="/img/logo_samples/01-test.svg" 
          alt="Atlas logo" 
          className={styles.separatorLogo}
        />
        <div className={styles.separatorLine}></div>
      </div>

      <div className={styles.feedbackHeader}>
        <h3>
          {isConclusion ? i18n[5] : i18n[6]}
        </h3>
        <p>{i18n[7]}</p>
      </div>

      {/* Core Questions */}
      <div className={styles.coreSection}>
        {coreQuestions.map((question) => (
          <DragSlider
            key={question.key}
            question={question}
            value={responses[question.key]}
            onChange={(key, value) => setResponses(prev => ({ ...prev, [key]: value }))}
            disabled={isSubmitted}
          />
        ))}
      </div>

      {/* Comments Section - MOVED OUT OF DETAILS */}
      <div className={styles.commentsSection}>
        <div className={styles.commentsHeader}>
          <img src="/img/feedback/comment.svg" alt="" className={styles.commentIcon} />
          <label className={styles.commentsLabel}>
            {i18n[8]} <span className={styles.optional}>{i18n[0]}</span>
          </label>
        </div>
        
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder={i18n[8]}
          className={styles.commentsTextarea}
          rows="6"
          disabled={isSubmitted}
        />
      </div>

      {/* Details Section */}
      {showDetails && (
        <div className={styles.detailsSection}>
          <div className={styles.detailsHeader}>
            <h4>{i18n[10]}</h4>
            <button 
              className={styles.collapseButton}
              onClick={() => setShowDetails(false)}
            >
              <svg className={styles.collapseIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
          
          {detailQuestions.map((question) => (
            <DragSlider
              key={question.key}
              question={question}
              value={responses[question.key]}
              onChange={(key, value) => setResponses(prev => ({ ...prev, [key]: value }))}
              disabled={isSubmitted}
              isOptional={true}
            />
          ))}

          {/* Optional Contact Information */}
          <div className={styles.contactSection}>
            <div className={styles.contactHeader}>
              <h4>{i18n[11]} <span className={styles.optional}>{i18n[0]}</span></h4>
              <p>{i18n[12]}</p>
            </div>
            
            <div className={styles.contactFields}>
              <input
                type="text"
                placeholder={i18n[13]}
                value={responses.contact_name || ''}
                onChange={(e) => setResponses(prev => ({ ...prev, contact_name: e.target.value }))}
                className={styles.contactInput}
                disabled={isSubmitted}
              />
              
              <input
                type="text"
                placeholder={i18n[14]}
                value={responses.contact_organization || ''}
                onChange={(e) => setResponses(prev => ({ ...prev, contact_organization: e.target.value }))}
                className={styles.contactInput}
                disabled={isSubmitted}
              />
              
              <input
                type="email"
                placeholder={i18n[15]}
                value={responses.contact_email || ''}
                onChange={(e) => setResponses(prev => ({ ...prev, contact_email: e.target.value }))}
                className={styles.contactInput}
                disabled={isSubmitted}
              />
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}

      {/* Action Buttons - Side by Side */}
      <div className={styles.actionButtons}>
        {!showDetails && (
          <button 
            className={styles.detailsButton}
            onClick={() => setShowDetails(true)}
          >
            <svg className={styles.detailsIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
            {i18n[10]}
          </button>
        )}
        
        <button 
          className={`${styles.submitButton} ${!canSubmitCore ? styles.disabled : ''}`}
          onClick={handleSubmit}
          disabled={!canSubmitCore || isSubmitting}
        >
          {isSubmitting ? i18n[16] : i18n[17]}
        </button>
      </div>
    </div>
  );
}
