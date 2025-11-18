// config/metadata.mjs
export const metadata = {
  title: 'AI Safety Atlas',
  tagline: 'A guide to AI safety and alignment',
  favicon: 'img/favicon.ico',
  
  // Official deployment context
  /* //---
  url: 'https://ai-safety-atlas.com',
  baseUrl: '/',
  
  organizationName: 'markov-root',
  projectName: 'markov-root.github.io',
  deploymentBranch: 'gh-pages',
  // --- */

  // CentreSecuriteIA deployment context
  // /* ---
  url: 'https://centresecuriteia.github.io/',
  baseUrl: '/',

  organizationName: 'centresecuriteia',
  projectName: 'aisafety_atlas_multilingual_website',
  deploymentBranch: 'main',
  // --- */

  trailingSlash: false,

  // 'ignore' - Completely silent
  // 'warn' - Shows warning + exhaustive list
  // 'throw' - Fails the build 
  // Build configuration
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'ignore',
  
  // Markdown configuration - moved from onBrokenMarkdownLinks
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  
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
  
  staticDirectories: ['static'],
};
