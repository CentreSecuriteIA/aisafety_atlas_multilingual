// src/theme/Footer/index.js
import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';
import SocialBar from './SocialBar';
import {ContactForm} from './ContactForm';
import { getDataContent } from '../../utils/i18nUtils';

import Translate from '@docusaurus/Translate';

function FooterLogo({src, alt, href}) {
  const logoSrc = useBaseUrl(src);
  
  const logoElement = (
    <img 
      src={logoSrc}
      alt={alt}
      className={styles.footerLogo}
    />
  );

  if (href) {
    return (
      <Link to={href} className={styles.footerLogoLink}>
        {logoElement}
      </Link>
    );
  }

  return logoElement;
}

function CitationBox() {
  const [copied, setCopied] = useState(false);
  const citationData = getDataContent("citation.json");
  const citationText = citationData.message;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(citationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(citationData.failed, err);
    }
  };

  return (
    <div className={styles.citationContainer}>
      <div className={styles.citationText}>
        {citationText}
      </div>
      <button onClick={handleCopy} className={styles.copyButton} title={citationData.copy_citation}>
        {copied ? (
          <img src="/img/icons/copy.svg" alt={citationData.copied} className={styles.copyIcon} />
        ) : (
          <img src="/img/icons/copy.svg" alt={citationData.copied} className={styles.copyIcon} />
        )}
      </button>
    </div>
  );
}

function Footer() {
  const {footer} = useThemeConfig();
  
  const i18n = [
    <Translate id="footer.footerLogoText" description="Footer Logo Text">AI SAFETY ATLAS</Translate>,
    <Translate id="footer.footerLogoDescription" description="Footer Logo Description">A comprehensive guide to AI safety and alignment research.</Translate>,
    <Translate id="footer.cesiaDescription" description="Footer CeSIA Description">Leading research institute advancing AI safety and alignment in Europe.</Translate>,
    <Translate id="footer.citation.citeAs" description="Footer Citation title">Cite this work as</Translate>,
    <Translate id="footer.funders.title" description="Footer Funders title">Funders</Translate>,
  ];

  if (!footer) {
    return null;
  }

  const {logo = {}} = footer || {};

  return (
    <footer className={styles.footer}>
      {/* Social Bar */}
      <SocialBar />
      
      <div className={styles.footerContent}>
        {/* Line 1: Three columns - Atlas, CeSIA, Funders */}
        <div className={styles.footerTopRow}>
          {/* Atlas Column */}
          <div className={styles.atlasCol}>
            <div className={styles.footerLogoWrapper}>
              <div className={styles.footerLogoContainer}>
                <FooterLogo
                  src={logo.src}
                  alt={logo.alt}
                  href={logo.href}
                />
                <div className={styles.footerLogoText}>
                  {i18n[0]}
                </div>
              </div>
            </div>
            <p className={styles.footerDescription}>
              {i18n[1]}
            </p>
          </div>

          {/* CeSIA Column */}
          <div className={styles.cesiaCol}>
            <div className={styles.cesiaContainer}>
              <a 
                href="https://www.securite-ia.fr/en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.cesiaLink}
              >
                <img 
                  src="/img/supporters/cesia_text.svg" 
                  alt="French Center for AI Safety (CeSIA)" 
                  className={styles.cesiaLogo} 
                />
              </a>
              <p className={styles.cesiaDescription}>
                {i18n[2]}
              </p>
            </div>
          </div>

          {/* Funders Column */}
          <div className={styles.fundersCol}>
            <h3 className={styles.footerLinkHeading}>{i18n[4]}</h3>
            <div className={styles.fundersList}>
              <a href="https://manifund.org/" target="_blank" rel="noopener noreferrer" className={styles.funderItem}>
                <img src="/img/supporters/manifund.svg" alt="Manifund" className={styles.funderLogo} />
                <span className={styles.funderName}>Manifund</span>
              </a>
              <a href="https://www.openphilanthropy.org/" target="_blank" rel="noopener noreferrer" className={styles.funderItem}>
                <img src="/img/supporters/open-philanthropy.svg" alt="Open Philanthropy" className={styles.funderLogo} />
                <span className={styles.funderName}>Open Philanthropy</span>
              </a>
            </div>
          </div>
        </div>

        {/* Line 2: Two columns - Citation, Contact */}
        <div className={styles.footerBottomRow}>
          {/* Citation Column */}
          <div className={styles.citationCol}>
            <h3 className={styles.footerLinkHeading}>{i18n[3]}</h3>
            <CitationBox />
          </div>
          
          {/* Contact Form Column */}
          <div className={styles.contactCol}>
            <ContactForm />
          </div>
        </div>
        
        {/* Divider */}
        <div className={styles.footerDivider}>
          <div className={styles.footerDividerLine} />
        </div>
        
        {/* Copyright and Analytics - Below the line */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomItem}>
            <Translate
              id="footer.license" 
              description="Footer copyright and license information"
              values={{
                copyright_year : "2025",
                licenseLinkClass: styles.licenseLink,
              }}
              >
                {`<strong>Copyright:</strong> {copyright_year} AI Safety Atlas • Text Content: <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" class="{licenseLinkClass}">CC BY-SA 4.0</a> • Code: <a href="https://opensource.org/licenses/MIT" target="_blank" class="{licenseLinkClass}">MIT</a>`}
              </Translate>
          </div>
          <div className={styles.footerBottomItem}>
            <Translate
              id="footer.analytics"
              description="Footer analytics information"
              values={{
                licenseLinkClass: styles.licenseLink,
              }}
            >
              {`<strong>Analytics:</strong> We use privacy-focused <a href="https://plausible.io/" target="_blank" class="{licenseLinkClass}">Plausible</a> instead of Google Analytics. No cookies, fully GDPR/CCPA compliant. :)`}
            </Translate>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
