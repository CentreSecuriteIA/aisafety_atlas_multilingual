// src/pages/courses.jsx - Updated to use your data structure
import React from 'react';
import Layout from '@theme/Layout';
import { CoursesHero } from '../components/Courses';
import SimpleCoursesListing from '../components/Courses/SimpleCoursesListing';
import CertificateSection from '../components/Courses/CertificateSection';
import StartCourseSection from '../components/Courses/StartCourseSection';
import styles from './courses.module.css';

import {translate} from '@docusaurus/Translate';
import { getDataContent } from '../utils/i18nUtils';

export default function CoursesPage() {
  const coursesData = getDataContent('courses.json');

  const i18n = [
    translate({id:"courses.title", message:"AI Safety Courses - AI Safety Atlas", description: "Title for the courses page"}),
    translate({id: "course.desc", message: "Discover academic courses, reading groups, and organized programs using AI Safety Atlas materials worldwide", description: "Description for the courses page"})
  ];

  return (
    <Layout
      title={i18n[0]}
      description={i18n[1]}
    >
      
      {/* Hero Section */}
      <CoursesHero />
      
      {/* Certificate Section - Lead with this */}
      <CertificateSection />

      {/* Start Your Own Course Section */}
      <StartCourseSection />
      
      {/* Simple Courses Listing */}
      <div className="container" style={{ padding: '3rem 0' }}>
        <SimpleCoursesListing coursesData={coursesData} />
      </div>
        
    </Layout>
  );
}
