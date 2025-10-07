// src/theme/DocItem/Landing/Story/Description.jsx
import React from 'react';
import styles from './Description.module.css';

import Translate from '@docusaurus/Translate';

export default function Description() {  
  return (
    <div className={styles.primaryContent}>
      <h2 className={styles.primaryTitle}>
        <Translate id="landing.hero.description.primaryTitle" description="Main title on the landing story description">
          The field that will determine humanity's future, explained systematically.
        </Translate>
      </h2>
      
      <div className={styles.primaryDescription}>
        <p>
          <Translate id="landing.hero.description.primaryDescription.paragraph1" description="First paragraph describing the problem">
            {`Some of the <a href="https://scholar.google.com/citations?hl=en&view_op=search_authors&mauthors=label%3Aartificial_intelligence+OR+label%3AAI&btnG=" target="_blank" rel="noopener noreferrer" className={styles.credibilityLink}>most cited AI researchers</a> are sounding urgent warnings about the path ahead. But the knowledge you need to understand AI safety is scattered across hundreds of research papers, blog posts, and technical discussions.`}
          </Translate>
        </p>
        
        <p className={styles.solutionStatement}>
          <Translate id="landing.hero.description.primaryDescription.paragraph2" description="Second paragraph describing the problem">
            {`<strong>That's why we created the AI Safety Atlas.</strong> We perform the essential <a href="https://distill.pub/2017/research-debt/" target="_blank" rel="noopener noreferrer" className={styles.credibilityLink}>interpretive labor</a>—transforming scattered AI safety research into systematic, connected learning paths. Hundreds of students globally across multiple universities now use the Atlas to go from curious to well-informed in weeks, not years.`}
          </Translate>
        </p>
      </div>
    </div>
  );
}
