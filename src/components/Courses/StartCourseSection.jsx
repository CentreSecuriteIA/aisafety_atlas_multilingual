// src/components/Courses/StartCourseSection.jsx - Final version with improved messaging
import React, { useState } from 'react';
import styles from './StartCourseSection.module.css';

import Translate, {translate} from '@docusaurus/Translate';

export default function StartCourseSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    location: '',
    expectedParticipants: '',
    startDate: '',
    endDate: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const i18n = [
    /* Left side - Information */
    //0
    <Translate id="courses.form.start" description="">Start Your Own Course</Translate>,
    <Translate id="courses.form.ready" description="">Ready to bring AI safety education to your community? We're here to support you every step of the way.</Translate>,
    <Translate id="courses.form.materials" description="">Open source textbook & materials</Translate>,
    <Translate id="courses.form.resources" description="">Public facilitation guides & instructor resources</Translate>,
    <Translate id="courses.form.cesia" description="">French Center for AI Safety (CeSIA) + Atlas co-branded certificates for your participants</Translate>,
    //5
    <Translate id="courses.form.support" description="">Support for custom curriculum design for your needs</Translate>,
    <Translate id="courses.form.any_help" description="">Any other help we can provide</Translate>,
    /* Right Form - labels and placeholders*/
    <Translate id="courses.form.about_course" description="">Tell Us About Your Course</Translate>,
    <Translate id="courses.form.share" description="">Share your plans and we'll help you get started</Translate>,
    translate({id:"courses.form.name", description:"", message: "Your name"}),
    //10
    translate({id:"courses.form.email", description:"", message: "Your email"}),
    translate({id:"courses.form.univ", description:"", message: "University/Organization (optional)"}),
    translate({id:"courses.form.location", description:"", message: "Location (city, country)"}),
    translate({id:"courses.form.participants", description:"", message: "Expected participants (optional)"}),
    translate({id:"courses.form.start_date", description:"", message: "Start date (optional)"}),
    //15
    translate({id:"courses.form.end_date", description:"", message: "End date (optional)"}),
    translate({id:"courses.form.about_audience", description:"", message: "Tell us about your audience, format preferences, or any specific support you'd like (optional)"}),
    translate({id:"courses.form.error", description:"", message: "Something went wrong. Please try again or email us directly."}),
    translate({id:"courses.form.send", description:"", message: "Send"}),
    translate({id:"courses.form.sending", description:"", message: "Sending"}),
    //20
    <Translate id="courses.form.thanks" description="">Thank You!</Translate>,
    <Translate id="courses.form.thanks_msg" description="">We're excited to support your course and will be in touch soon with resources and next steps.</Translate>
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/myzpgaor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `New Course Organizer: ${formData.name} - ${formData.location}`,
          form_type: 'course_organizer'
        })
      });

      if (response.ok) {
        setStatus('sent');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          organization: '',
          location: '',
          expectedParticipants: '',
          startDate: '',
          endDate: '',
          message: ''
        });
        
        // Clear the status after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        throw new Error('Failed to send information');
      }
    } catch (error) {
      console.error('Error sending information:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (status === 'sent') {
    return (
      <div className={styles.startCourseSection}>
        <div className={styles.startCourseContainer}>
          <div className={styles.successMessage}>
            <div className={styles.checkIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3>{i18n[19]}</h3>
            <p>{i18n[20]}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.startCourseSection}>
      <div className={styles.startCourseContainer}>
        <div className={styles.startCourseCard}>
          
          {/* Left Side - Information */}
          <div className={styles.leftSide}>
            <h2 className={styles.startCourseTitle}>{i18n[0]}</h2>
            <p className={styles.startCourseDescription}>
              {i18n[1]}
            </p>
            
            <div className={styles.resourcesList}>
              <div className={styles.resource}>
                <img 
                  src="/img/icons/book.svg" 
                  alt="" 
                  className={styles.resourceIcon} 
                />
                <span>{i18n[2]}</span>
              </div>
              <div className={styles.resource}>
                <img 
                  src="/img/icons/teach.svg" 
                  alt="" 
                  className={styles.resourceIcon} 
                />
                <span>{i18n[3]}</span>
              </div>
              <div className={styles.resource}>
                <img 
                  src="/img/icons/acknowledgements.svg" 
                  alt="" 
                  className={styles.resourceIcon} 
                />
                <span>{i18n[4]}</span>
              </div>
              <div className={styles.resource}>
                <img 
                  src="/img/icons/settings.svg" 
                  alt="" 
                  className={styles.resourceIcon} 
                />
                <span>{i18n[5]}</span>
              </div>
              <div className={styles.resource}>
                <img 
                  src="/img/icons/support.svg" 
                  alt="" 
                  className={styles.resourceIcon} 
                />
                <span>{i18n[6]}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={styles.rightSide}>
            <h3 className={styles.formTitle}>{i18n[7]}</h3>
            <p className={styles.formSubtitle}>{i18n[8]}</p>

            <form onSubmit={handleSubmit} className={styles.courseForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder={i18n[9]}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder={i18n[10]}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder={i18n[11]}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder={i18n[12]}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="number"
                    name="expectedParticipants"
                    value={formData.expectedParticipants}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder={i18n[13]}
                    min="1"
                    max="1000"
                  />
                </div>

                <div className={styles.formGroup}>
                  {/* Empty space for alignment */}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className={styles.formControl}
                    title={i18n[14]}
                  />
                  <label className={styles.dateLabel}>{i18n[14]}</label>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className={styles.formControl}
                    title={i18n[15]}
                  />
                  <label className={styles.dateLabel}>{i18n[15]}</label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className={styles.formControl}
                  placeholder={i18n[16]}
                />
              </div>

              {status === 'error' && (
                <div className={styles.errorMessage}>
                  {i18n[17]}
                </div>
              )}

              <button 
                type="submit" 
                className={`${styles.submitButton} ${status === 'sending' ? styles.sending : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? i18n[19] + '...' : i18n[18]}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
