import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Get locale data from Docusaurus context.
 * 
 * @returns {Object} An object containing defaultLocale and currentLocale
 */
export function getLocaleData() {
    const {i18n: {defaultLocale, currentLocale}} = useDocusaurusContext();
    return {defaultLocale, currentLocale};
}

/**
 * Get locales when no localization is set up and shutdown localization process when calling getLocalizedUrl() or getDataContent().
 * Ex : getLocalizedUrl(url, getNoLocalizationData()) will return url as is.
 * 
 * @returns {Object} An object containing defaultLocale and currentLocale
 */
export function getNoLocalizationData() {
    return {defaultLocale: -1, currentLocale: -1};
}

export function isDefaultLocaleSet(locales) {
    locales = locales || getLocaleData();
    return locales && locales.currentLocale === locales.defaultLocale;
}


const DEFAULT_LOCALE_DATA_DIR = '@site/src/data/';
const I18N_DIR = '@site/i18n/';
const I18N_DATA_SUBDIR = 'docusaurus-plugin-content-pages/data/';

export function getDataDir(locales = null) {
    locales = locales || getLocaleData();
    if (locales.currentLocale === locales.defaultLocale) {
        return '@site/src/data/';
    } else  {
        return `${I18N_DIR}${locales.currentLocale}${I18N_DATA_SUBDIR}`;
    }
}

/**
 * Import the localized file content based on current locale.
 * 
 * @param {string} filepath
 * @returns 
 */
export function getDataContent(filepath, locales = null) {
    locales = locales || getLocaleData();
    
    let datapath = '';

    if (isDefaultLocaleSet(locales)) {
        return require('@site/src/data/' + filepath)
    } else {
        return require(
        `@site/i18n/${locales.currentLocale}/docusaurus-plugin-content-pages/data/${filepath}`);
    }
}

/**
 * Localized a URL based on current locale.
 * 
 * @param {string} url 
 * @param {Object} An object containing defaultLocale and currentLocale, if necessary (particularly if the call is outside compliant React hook calls)
 * @returns {string} Localized url if applicable, otherwise unchanged url
 */
export function getLocalizedUrl(url, locales = null) {
    if (!url || url.search("^http:?//") != -1) {
        return url;
    }

    locales = locales || getLocaleData();

    //console.debug("getLocalizedUrl()", url, locales);

    if (
        isDefaultLocaleSet(locales) ||
        url.search(`^/?${locales.currentLocale}/`) != -1
    ) {
        return url;
    }

    if (url.startsWith("/")) {
        return "/" + locales.currentLocale + url;
    } else 
    {
        return locales.currentLocale + "/" + url;
    }
}
