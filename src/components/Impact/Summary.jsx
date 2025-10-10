// src/components/Impact/Summary.jsx
import React from 'react';
import { 
  loadAnalyticsData, 
  calculateYearlyProjection, 
  getCountriesReached,
  debugAnalyticsData 
} from '../../utils/analyticsUtils';
import styles from './Summary.module.css';

import Translate from '@site/src/components/Translate';
import { getDataContent } from '../../utils/i18nUtils';

export default function Summary() {
  // Load analytics data safely with fallbacks
  const analyticsData = loadAnalyticsData();
  
  // Debug in development
  debugAnalyticsData(analyticsData);
  
  // Calculate key metrics using utility functions
  const yearlyReaders = calculateYearlyProjection(analyticsData.timeline);
  const countriesReached = getCountriesReached(analyticsData.geography);

  // Updated impact metrics with analytics integration
  const impactMetrics = getDataContent("page_impact/summary.json").content;
  impactMetrics[1].number = yearlyReaders.toLocaleString();

  return (
    <div className={styles.summaryContainer}>
      {/* Impact Metrics */}
      <div className={styles.metricsSection}>
        <h3 className={styles.metricsSubheader}><Translate id="impact.summary.metrics.title" description="">Our Impact at a Glance</Translate></h3>
        <div className={styles.metricsGrid}>
          {impactMetrics.map((metric, index) => (
            <div key={index} className={styles.metricCard}>
              <div className={styles.metricNumber}>{metric.number}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
              <div className={styles.metricDescription}>{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
