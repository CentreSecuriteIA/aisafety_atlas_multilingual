// config/metadata.mjs
export const metadata = {
  title: 'AI Safety Atlas',
  tagline: 'A guide to AI safety and alignment',
  favicon: 'img/favicon.ico',
  
  // Change to your custom domain
  /*
  url: 'https://ai-safety-atlas.com',  // ← Changed from markov-root.github.io
  baseUrl: '/',
  */

  // For GitHub Pages deployment context (CentreSecuriteIA GitHub organization)
  url: 'https://centresecuriteia.github.io/',
  baseUrl: '/',
  
  // GitHub deployment settings - keep the same
  /*
  organizationName: 'markov-root',
  projectName: 'markov-root.github.io',
  deploymentBranch: 'gh-pages',
  */
  organizationName: 'centresecuriteia',
  projectName: 'aisafety_atlas_multilingual_website',
  deploymentBranch: 'main',

  trailingSlash: false,
  
  // Build configuration
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  
  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-GB',
        direction: 'ltr',
      },
      fr: {
        label: 'Français',
        htmlLang: 'fr-FR',
        direction: 'ltr',
      },
    },
  },
  
  // Static directories
  staticDirectories: ['static'],
};
