// src/theme/DocItem/Landing/ChapterList/Header.jsx
import React from 'react';
import styles from './Header.module.css';

import Translate from '@docusaurus/Translate';

export default function Header() {
  const i18n = [
    <Translate id="landing.chapterlist.header.read">Read</Translate>,
    <Translate id="landing.chapterlist.header.lecture">Lecture</Translate>,
    <Translate id="landing.chapterlist.header.landing.chapterlist.header.pdf">PDF</Translate>,
    <Translate id="landing.chapterlist.header.audio">Audio</Translate>,
    <Translate id="landing.chapterlist.header.facilitate">Facilitate</Translate>,
    <Translate id="landing.chapterlist.header.chapter">Chapter</Translate>
  ];

  const resources = [
    { key: 'chapter', label: i18n[0] },
    { key: 'video', label: i18n[1] },
    { key: 'pdf', label: i18n[2] },
    { key: 'audio', label: i18n[3] },
    { key: 'facilitation', label: i18n[4] }
  ];

  return (
    <div className={styles.header}>
      <div className={styles.expandCol}></div>
      <div className={styles.numberCol}>#</div>
      <div className={styles.titleCol}>{i18n[5]}</div>
      {resources.map(resource => (
        <div key={resource.key} className={styles.resourceCol}>
          {resource.label}
        </div>
      ))}
    </div>
  );
}
