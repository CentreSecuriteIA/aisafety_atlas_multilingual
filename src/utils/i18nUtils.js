import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

//export function getDataContent(defaultLocale, currentLocale, filename) {
export function getDataContent(filename) {
    const {i18n: {defaultLocale, currentLocale}} = useDocusaurusContext();

    if (currentLocale === defaultLocale) {
        return require(`@site/src/data/${filename}`);
    } else {
        return require(`@site/i18n/${currentLocale}/docusaurus-plugin-content-pages/data/${filename}`);
    }
}