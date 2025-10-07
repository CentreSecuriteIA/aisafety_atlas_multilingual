// src/pages/faq.jsx
import React from 'react';
import Layout from '@theme/Layout';
import FAQSection from '@site/src/components/FAQ/FAQSection';
import styles from './faq.module.css';

import Translate, {translate} from '@docusaurus/Translate';
import { getDataContent } from '../utils/i18nUtils';

export default function FAQPageFrame() {
  // Scroll to footer contact form
  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const faqData = getDataContent('faq.json');

  // i18n translations
  const i18n = [
    <Translate id="faq.layout.title" description="FAQ page title">FAQ - AI Safety Atlas</Translate>,
    <Translate id="faq.layout.description" description="FAQ page meta description">Frequently asked questions about AI Safety Atlas, our approach, and how we compare to other educational resources</Translate>,
    <Translate id="faq.hero.title" description="FAQ page main heading">FAQ</Translate>,
    <Translate id="faq.hero.logoAlt" description="Alt text for the FAQ page logo">AI Safety Atlas Logo</Translate>,
    <Translate id="faq.contact.title" description="Contact section heading">Still have questions?</Translate>,
    <Translate id="faq.contact.description" description="Contact section description">Feel free to reach out to us directly using the contact form below.</Translate>,
    <Translate id="faq.hero.lastUpdated" description="Last updated label">Last updated</Translate>,
    <Translate id="faq.hero.dataFormat" description="Date format">en-US</Translate>,
    translate({id: 'faq.page.title', message: "FAQ page title"}),
    translate({id: 'faq.page.description', message: "Frequently asked questions about AI Safety Atlas, our approach, and how we compare to other educational resources"}),
  ];

  return (
    <Layout
      title={i18n[8]}
      description={i18n[9]}>
      <div className={styles.faqPageContainer}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.contentSection}>
              <h1 className={styles.title}>{i18n[2]}</h1>
              <div className={styles.lastUpdated}>
                {i18n[6]} {new Date(faqData.meta.lastUpdated).toLocaleDateString(i18n[7], { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
            
            <div className={styles.logoSection}>
              <img 
                src="/img/logo_samples/01-test.png" 
                alt={i18n[3]} 
                className={styles.logoImage}
              />
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className={styles.faqContent}>
          {faqData.categories.map((category) => (
            <FAQSection
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              questions={category.questions}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h2 className={styles.contactTitle}>{i18n[4]}</h2>
          <p className={styles.contactDescription}>
            {i18n[5]}
          </p>
        </div>
      </div>
    </Layout>
  );
}
