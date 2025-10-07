// src/components/Courses/SimpleCoursesListing.jsx - Minimal style matching your aesthetic
import React, { useState } from 'react';
import { SmallTooltip } from '../UI/Tooltip';
import { MapPin, Users, Calendar, Globe, Mail, FileText, Edit3 } from 'lucide-react';
import styles from './SimpleCoursesListing.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function getStatusFromDates(startDate, endDate) {
  const now = new Date();
  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : null;
  
  if (!start) return 'upcoming';
  
  if (now < start) return 'upcoming';
  if (end && now > end) return 'completed';
  return 'active';
}

function StatusBadge({ status }) {
  const i18n = [
    translate({id: "courses.status.active", message: "Active", description: "Status label for active courses"}),
    translate({id: "courses.status.upcoming", message: "Upcoming", description: "Status label for upcoming courses"}),
    translate({id: "courses.status.completed", message: "Completed", description: "Status label for completed courses"})
  ]

  const statusConfig = {
    active: { label: i18n[0], color: 'green' },
    upcoming: { label: i18n[1], color: 'blue' },
    completed: { label: i18n[2], color: 'gray' }
  };
  
  const config = statusConfig[status] || statusConfig.completed;
  
  return (
    <span className={`${styles.statusBadge} ${styles[config.color]}`}>
      {config.label}
    </span>
  );
}

function CorrectionForm({ course, organization, onClose, onSubmit }) {
  // Store original values for comparison
  const originalData = {
    organizationName: organization.name,
    description: course.description,
    location: course.location || '',
    startDate: course.startDate || '',
    endDate: course.endDate || '',
    participants: course.participants || course.estimatedParticipants || '',
    applicationLink: course.applicationLink || '',
    websiteLink: organization.website || '',
    contactEmail: organization.primaryContact || ''
  };

  const [formData, setFormData] = useState({
    ...originalData,
    additionalInfo: '',
    requestRemoval: false
  });

  // Track what changed
  const getChanges = () => {
    const changes = [];
    
    if (formData.organizationName !== originalData.organizationName) {
      changes.push(`Organization Name: "${originalData.organizationName}" → "${formData.organizationName}"`);
    }
    if (formData.description !== originalData.description) {
      changes.push(`Description: "${originalData.description}" → "${formData.description}"`);
    }
    if (formData.location !== originalData.location) {
      changes.push(`Location: "${originalData.location}" → "${formData.location}"`);
    }
    if (formData.startDate !== originalData.startDate) {
      changes.push(`Start Date: "${originalData.startDate}" → "${formData.startDate}"`);
    }
    if (formData.endDate !== originalData.endDate) {
      changes.push(`End Date: "${originalData.endDate}" → "${formData.endDate}"`);
    }
    if (formData.participants !== originalData.participants) {
      changes.push(`Participants: "${originalData.participants}" → "${formData.participants}"`);
    }
    if (formData.applicationLink !== originalData.applicationLink) {
      changes.push(`Application Link: "${originalData.applicationLink}" → "${formData.applicationLink}"`);
    }
    if (formData.websiteLink !== originalData.websiteLink) {
      changes.push(`Website Link: "${originalData.websiteLink}" → "${formData.websiteLink}"`);
    }
    if (formData.contactEmail !== originalData.contactEmail) {
      changes.push(`Contact Email: "${originalData.contactEmail}" → "${formData.contactEmail}"`);
    }
    
    return changes;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const changes = getChanges();
    
    try {
      const response = await fetch('https://formspree.io/f/mzzvplbl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // Current data
          organizationName: formData.organizationName,
          description: formData.description,
          location: formData.location,
          startDate: formData.startDate,
          endDate: formData.endDate,
          participants: formData.participants,
          applicationLink: formData.applicationLink,
          websiteLink: formData.websiteLink,
          contactEmail: formData.contactEmail,
          additionalInfo: formData.additionalInfo,
          requestRemoval: formData.requestRemoval,
          
          // Original data for reference
          original_organizationName: originalData.organizationName,
          original_description: originalData.description,
          original_location: originalData.location,
          original_startDate: originalData.startDate,
          original_endDate: originalData.endDate,
          original_participants: originalData.participants,
          original_applicationLink: originalData.applicationLink,
          original_websiteLink: originalData.websiteLink,
          original_contactEmail: originalData.contactEmail,
          
          // Summary of changes for easy review
          changes_summary: changes.length > 0 ? changes.join('\n') : 'No field changes, see additional info',
          number_of_changes: changes.length,
          
          // Metadata
          courseId: course.id,
          _subject: `Course Correction: ${originalData.organizationName} (${changes.length} changes)`,
          form_type: 'course_correction'
        })
      });

      if (response.ok) {
        onSubmit();
      } else {
        throw new Error('Failed to submit correction');
      }
    } catch (error) {
      console.error('Error submitting correction:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // i18n: Tableau de traductions pour les labels et placeholders du formulaire de correction
  const i18n = [
    translate({ id: "correctionForm.title", message: "Suggest Correction", description: "Title for the correction form" }),
    translate({ id: "correctionForm.organizationName.placeholder", message: "Organization name", description: "Placeholder for organization name input" }),
    translate({ id: "correctionForm.location.placeholder", message: "Location", description: "Placeholder for location input" }),
    translate({ id: "correctionForm.startDate.placeholder", message: "Start date", description: "Placeholder for start date input" }),
    translate({ id: "correctionForm.endDate.placeholder", message: "End date", description: "Placeholder for end date input" }),
    translate({ id: "correctionForm.participants.placeholder", message: "Participants", description: "Placeholder for participants input" }),
    translate({ id: "correctionForm.applicationLink.placeholder", message: "Application link", description: "Placeholder for application link input" }),
    translate({ id: "correctionForm.websiteLink.placeholder", message: "Website link", description: "Placeholder for website link input" }),
    translate({ id: "correctionForm.contactEmail.placeholder", message: "Contact email", description: "Placeholder for contact email input" }),
    translate({ id: "correctionForm.description.placeholder", message: "Description", description: "Placeholder for description textarea" }),
    translate({ id: "correctionForm.additionalInfo.placeholder", message: "Additional information or corrections", description: "Placeholder for additional info textarea" }),
    translate({ id: "correctionForm.requestRemoval.label", message: "Request to remove this listing entirely", description: "Label for request removal checkbox" }),
    translate({ id: "correctionForm.cancel", message: "Cancel", description: "Label for cancel button" }),
    translate({ id: "correctionForm.send", message: "Send Correction", description: "Label for send correction button" })
  ];

  return (
    <div className={styles.correctionForm}>
      <h4>{i18n[0]}</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.correctionFormRow}>
          <div className={styles.correctionFormGroup}>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              className={styles.correctionFormControl}
              placeholder={i18n[1]}
            />
          </div>
          <div className={styles.correctionFormGroup}>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={styles.correctionFormControl}
              placeholder={i18n[2]}
            />
          </div>
        </div>

        <div className={styles.correctionFormRow}>
          <div className={styles.correctionFormGroup}>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={styles.correctionFormControl}
              placeholder={i18n[3]}
            />
          </div>
          <div className={styles.correctionFormGroup}>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className={styles.correctionFormControl}
              placeholder={i18n[4]}
            />
          </div>
        </div>

        <div className={styles.correctionFormRow}>
          <div className={styles.correctionFormGroup}>
            <input
              type="number"
              name="participants"
              value={formData.participants}
              onChange={handleChange}
              className={styles.correctionFormControl}
              placeholder={i18n[5]}
            />
          </div>
          <div className={styles.correctionFormGroup}>
            <input
              type="url"
              name="applicationLink"
              value={formData.applicationLink}
              onChange={handleChange}
              className={styles.correctionFormControl}
              placeholder={i18n[6]}
            />
          </div>
        </div>

        <div className={styles.correctionFormRow}>
          <div className={styles.correctionFormGroup}>
            <input
              type="url"
              name="websiteLink"
              value={formData.websiteLink}
              onChange={handleChange}
              className={styles.correctionFormControl}
              placeholder={i18n[7]}
            />
          </div>
          <div className={styles.correctionFormGroup}>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className={styles.correctionFormControl}
              placeholder={i18n[8]}
            />
          </div>
        </div>

        <div className={styles.correctionFormRow}>
          <div className={styles.correctionFormGroup}>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={styles.correctionFormControl}
              placeholder={i18n[9]}
              rows="2"
            />
          </div>
          <div className={styles.correctionFormGroup}>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className={styles.correctionFormControl}
              placeholder={i18n[10]}
              rows="2"
            />
          </div>
        </div>

        <div className={styles.correctionFormRow}>
          <div className={styles.correctionFormGroup}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--atlas-text, #212529)' }}>
              <input
                type="checkbox"
                name="requestRemoval"
                checked={formData.requestRemoval}
                onChange={handleChange}
              />
              {i18n[11]}
            </label>
          </div>
        </div>

        <div className={styles.correctionFormActions}>
          <button
            type="button"
            onClick={onClose}
            className={styles.correctionCancelButton}
          >
            {i18n[12]}
          </button>
          <button
            type="submit"
            className={styles.correctionSubmitButton}
          >
            {i18n[13]}
          </button>
        </div>
      </form>
    </div>
  );
}

function CourseCard({ course, organization }) {
  const [showCorrectionForm, setShowCorrectionForm] = useState(false);
  const [correctionSubmitted, setCorrectionSubmitted] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return null;
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (error) {
      return dateString;
    }
  };

  const status = getStatusFromDates(course.startDate, course.endDate);
  const logoSrc = organization.logo || '/img/courses/placeholder_courses.svg';
  const enrolledCount = course.enrolled || course.estimatedParticipants; // fallback for existing data
  
  // Determine if apply button should be active (not completed + has application link)
  const canApplyStudent = status !== 'completed' && course.studentApplicationLink;

  const handleCorrectionSubmit = () => {
    setCorrectionSubmitted(true);
    setShowCorrectionForm(false);
    // Reset after 3 seconds
    setTimeout(() => setCorrectionSubmitted(false), 3000);
  };

  if (correctionSubmitted) {
    return (
      <div className={styles.courseCard}>
        <div style={{ 
          textAlign: 'center', 
          padding: '2rem', 
          color: 'var(--atlas-success, #2b8a3e)',
          fontSize: '0.95rem',
          fontWeight: '500'
        }}>
          ✓ Correction submitted. Thank you for helping us keep information accurate!
        </div>
      </div>
    );
  }

  const i18n = [
    translate({id: "courses.contact.student", message: "Apply as Student", description: "Button label to apply as a student"}),
    translate({id: "courses.contact.facilitator", message: "Apply as Facilitator", description: "Button label to apply as a facilitator"}),
    translate({id: "courses.contact.website", message: "Apply as Facilitator", description: "Button label for website"}),
    translate({id: "courses.contact.contact", message: "Contact", description: "Button label for contact"}),
    translate({id: "courses.contact.suggest", message: "Suggest Correction", description: "Button label to suggest correction"}),
  ]

  return (
    <div className={styles.courseCard}>
      {/* Line 1: Logo + Name + Status */}
      <div className={styles.headerLine}>
        <div className={styles.logoAndName}>
          <div className={styles.logoSection}>
            <img 
              src={logoSrc}
              alt={`${organization.name} logo`}
              className={styles.courseLogo}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/img/courses/placeholder_courses.svg';
              }}
            />
          </div>
          <h3 className={styles.organizationName}>{organization.name}</h3>
        </div>
        <StatusBadge status={status} />
      </div>

      {/* Line 2: Description + Metadata */}
      <div className={styles.detailsLine}>
        <p className={styles.courseDescription}>{course.description}</p>
        
        <div className={styles.metadata}>
          {course.location && (
            <div className={styles.metaItem}>
              <MapPin size={14} />
              <span>{course.location}</span>
            </div>
          )}
          
          {(course.startDate || course.endDate) && (
            <div className={styles.metaItem}>
              <Calendar size={14} />
              <span>
                {formatDate(course.startDate) || 'TBD'} - {formatDate(course.endDate) || 'TBD'}
              </span>
            </div>
          )}
          
          {enrolledCount && (
            <div className={styles.metaItem}>
              <Users size={14} />
              <span>
                {course.enrolled ? `${course.enrolled} enrolled` : `~${course.estimatedParticipants} expected`}
                {course.completed && ` • ${course.completed} completed`}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Line 3: Action Buttons */}
      <div className={styles.actionsLine}>
        {/* Student Application - only show if link exists and not completed */}
        {course.studentApplicationLink && status !== 'completed' && (
          <button
            onClick={() => window.open(course.studentApplicationLink, '_blank')}
            className={styles.actionButton}
          >
            <FileText size={16} />
            <span>{i18n[0]}</span>
          </button>
        )}
        
        {/* Facilitator Application - only show if link exists and not completed */}
        {course.facilitatorApplicationLink && status !== 'completed' && (
          <button
            onClick={() => window.open(course.facilitatorApplicationLink, '_blank')}
            className={styles.actionButton}
          >
            <Users size={16} />
            <span>{i18n[1]}</span>
          </button>
        )}
        
        {organization.website && (
          <button
            onClick={() => window.open(organization.website, '_blank')}
            className={styles.actionButton}
          >
            <Globe size={16} />
            <span>{i18n[2]}</span>
          </button>
        )}
        
        {organization.primaryContact && (
          <button
            onClick={() => window.open(`mailto:${organization.primaryContact}`, '_blank')}
            className={styles.actionButton}
          >
            <Mail size={16} />
            <span>{i18n[3]}</span>
          </button>
        )}

        <button
          onClick={() => setShowCorrectionForm(!showCorrectionForm)}
          className={styles.suggestButton}
        >
          <Edit3 size={14} />
          <span>{i18n[4]}</span>
        </button>
      </div>

      {/* Correction Form */}
      {showCorrectionForm && (
        <CorrectionForm
          course={course}
          organization={organization}
          onClose={() => setShowCorrectionForm(false)}
          onSubmit={handleCorrectionSubmit}
        />
      )}
    </div>
  );
}

function CoursesSection({ title, courses, description, sectionType }) {
  if (!courses || courses.length === 0) return null;

  return (
    <div className={styles.coursesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {description && (
          <p className={styles.sectionDescription}>{description}</p>
        )}
      </div>
      
      <div className={styles.coursesList}>
        {courses.map(courseData => (
          <CourseCard 
            key={courseData.course.id} 
            course={courseData.course} 
            organization={courseData.organization}
          />
        ))}
      </div>
    </div>
  );
}

export default function SimpleCoursesListing({ coursesData }) {
  // i18n: Tableau de traductions pour les titres et descriptions de section
  const i18n = [
    <Translate id="courses.listing.title">No Courses Available</Translate>,
    <Translate id="courses.listing.text">No courses are currently listed. Check back later or consider starting your own course.</Translate>,
    <Translate id="courses.current.title" description="Section title for current courses">Current Courses</Translate>,
    <Translate id="courses.current.description" description="Section description for current courses">Courses currently accepting students or in progress</Translate>,
    <Translate id="courses.upcoming.title" description="Section title for upcoming courses">Upcoming Courses</Translate>,
    <Translate id="courses.upcoming.description" description="Section description for upcoming courses">Future courses with applications opening soon</Translate>,
    <Translate id="courses.past.title" description="Section title for past courses">Past Courses</Translate>,
    <Translate id="courses.past.description" description="Section description for past courses">Successfully completed courses using Atlas materials</Translate>
  ];

  if (!coursesData || !coursesData.organizations) {
    return (
      <div className={styles.emptyState}>
        <Calendar size={48} className={styles.emptyIcon} />
        <h3 className={styles.emptyTitle}>{i18n[0]}</h3>
        <p className={styles.emptyText}>
          {i18n[1]}
        </p>
      </div>
    );
  }

  // Flatten all courses with their organizations and calculate status
  const allCourses = [];
  coursesData.organizations.forEach(org => {
    if (org.courses) {
      org.courses.forEach(course => {
        const status = getStatusFromDates(course.startDate, course.endDate);
        allCourses.push({
          course,
          organization: org,
          status,
          sortDate: new Date(course.startDate || course.endDate || '1970-01-01')
        });
      });
    }
  });

  // Sort courses by relevance: active -> upcoming -> completed (by date)
  allCourses.sort((a, b) => {
    const statusPriority = { active: 3, upcoming: 2, completed: 1 };
    const priorityA = statusPriority[a.status] || 0;
    const priorityB = statusPriority[b.status] || 0;
    
    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }
    
    if (a.status === 'completed') {
      return b.sortDate - a.sortDate;
    } else {
      return a.sortDate - b.sortDate;
    }
  });

  // Group courses by status
  const activeCourses = allCourses.filter(c => c.status === 'active');
  const upcomingCourses = allCourses.filter(c => c.status === 'upcoming');
  const completedCourses = allCourses.filter(c => c.status === 'completed');

  return (
    <div className={styles.coursesContainer}>
      <CoursesSection 
        title={i18n[2]} 
        courses={activeCourses}
        description={i18n[3]}
        sectionType="active"
      />
      
      <CoursesSection 
        title={i18n[4]} 
        courses={upcomingCourses}
        description={i18n[5]}
        sectionType="upcoming"
      />
      
      <CoursesSection 
        title={i18n[6]} 
        courses={completedCourses}
        description={i18n[7]}
        sectionType="completed"
      />
    </div>
  );
}
