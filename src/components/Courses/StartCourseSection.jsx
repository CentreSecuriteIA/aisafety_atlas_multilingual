// src/components/Courses/StartCourseSection.jsx
import React, { useState } from 'react';
import styles from './StartCourseSection.module.css';

export default function StartCourseSection({ content }) {
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
            <h3>{content.messages.success.title}</h3>
            <p>{content.messages.success.description}</p>
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
            <h2 className={styles.startCourseTitle}>{content.section.title}</h2>
            <p className={styles.startCourseDescription}>
              {content.section.description}
            </p>
            
            <div className={styles.resourcesList}>
              {content.resources.map((resource, index) => (
                <div key={index} className={styles.resource}>
                  <img 
                    src={resource.icon} 
                    alt="" 
                    className={styles.resourceIcon} 
                  />
                  <span>{resource.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={styles.rightSide}>
            <h3 className={styles.formTitle}>{content.section.formTitle}</h3>
            <p className={styles.formSubtitle}>{content.section.formSubtitle}</p>

            <form onSubmit={handleSubmit} className={styles.courseForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder={content.form.placeholders.name}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder={content.form.placeholders.email}
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
                    placeholder={content.form.placeholders.organization}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder={content.form.placeholders.location}
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
                    placeholder={content.form.placeholders.expectedParticipants}
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
                    title={content.form.placeholders.startDateLabel}
                  />
                  <label className={styles.dateLabel}>{content.form.placeholders.startDateLabel}</label>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className={styles.formControl}
                    title={content.form.placeholders.endDateLabel}
                  />
                  <label className={styles.dateLabel}>{content.form.placeholders.endDateLabel}</label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className={styles.formControl}
                  placeholder={content.form.placeholders.message}
                />
              </div>

              {status === 'error' && (
                <div className={styles.errorMessage}>
                  {content.messages.error}
                </div>
              )}

              {/* Student Warning - subtle text before submit button */}
              <p className={styles.studentWarning}>
                {content.section.studentWarning}
              </p>

              <button 
                type="submit" 
                className={`${styles.submitButton} ${status === 'sending' ? styles.sending : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? content.form.buttons.submitting : content.form.buttons.submit}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
