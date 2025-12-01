// src/pages/courses.jsx
import React from 'react';
import Layout from '@theme/Layout';
import { CoursesHero } from '../components/Courses';
import SimpleCoursesListing from '../components/Courses/SimpleCoursesListing';
import CertificateSection from '../components/Courses/CertificateSection';
import StartCourseSection from '../components/Courses/StartCourseSection';
import styles from './courses.module.css';
import { getDataContent } from '@site/src/utils/i18nUtils';

export default function CoursesPage() {
  const courseStartData = getDataContent('courses/course-start.json');
  const coursesData = getDataContent('courses/courses-data.json');
  const pageData = coursesData.metadata?.page || coursesData.page;
  
  return (
    <Layout
      title={pageData.title}
      description={pageData.metaDescription}>
      
      {/* Hero Section - uses data from courses-metadata.json */}
      <CoursesHero heroData={coursesData.hero} />
      
      {/* Certificate Section - uses data from courses-metadata.json */}
      <CertificateSection certificateInfo={coursesData.certificateInfo} />
      
      {/* Courses Listing - uses organization data - STUDENTS SEE THIS FIRST */}
      <div className="container" style={{ padding: '3rem 0' }}>
        <SimpleCoursesListing coursesData={coursesData} />
      </div>

      {/* Start Your Own Course Section - for educators/organizers - NOW AT BOTTOM */}
      <StartCourseSection content={courseStartData} />
      
    </Layout>
  );
}
