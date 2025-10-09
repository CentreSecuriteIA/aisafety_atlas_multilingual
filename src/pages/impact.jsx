// src/pages/impact.jsx
import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Impact/Hero';
import Summary from '../components/Impact/Summary';
import Testimonials from '../components/Impact/Testimonials';
import Publications from '../components/Impact/Publications';
import Adoption from '../components/Impact/Adoption';
import styles from './impact.module.css';

import {translate} from '@docusaurus/Translate';

export default function ImpactPage() {
  const i18n = [
    translate({id:"impact.title", description:"", message:"Impact - AI Safety Atlas"}),
    translate({id:"impact.desc", description:"", message:"Impact and outcomes from AI Safety Atlas"}),
  ];

  return (
    <Layout
      title={i18n[0]}
      description={i18n[1]}>
      
      <div className={styles.impactPageContainer}>
        {/* Hero Section */}
        <Hero />
        
        {/* Summary Section - Now includes key analytics metrics */}
        <Summary />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Publications Section */}
        <Publications />
        
        {/* Adoption Section */}
        <Adoption />
      </div>
      
    </Layout>
  );
}
