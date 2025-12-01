/**
 * The purpose of this script is to aggregate course organization data from multiple JSON files contained within a specific directory structure (./organizations).
 * Must be run before building the project to ensure that the aggregated data file organizations.json is available for use.
 * Assuming the JSON files (translated or) are available foreach locale (default and other defined).
 */

import process from 'node:process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Get the directory path of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_COURSE = path.resolve(__dirname, '../..');

// Default subdirectory where locale data is stored
const DEFAULT_LOCALE_DATA_SUBDIR = "src"
const COURSES_SUBDIR = "data/courses";
const COURSES_ORGANIZATIONS_SUBDIR = "organizations";
const I18N_DATA_SUBDIR = "i18n";
const METADATA_FILENAME = "courses-metadata.json";
// Filename of aggregated courses data file, called in src/pages/courses.jsx
const OUTPUT_FILENAME = "courses-data.json"; 

// Useful logger class with log levels
class LOGGER extends console.Console {
    static LEVELS = {
        DEBUG: 0,
        LOG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4
    };

    constructor(stdout, stderr, log_level = LOGGER.LEVELS.INFO) {
        super(stdout, stderr);

        this.log_level = log_level || LOGGER.LEVELS.INFO;
        if (!isNaN(parseInt(this.log_level))) {
            this.log_level = parseInt(this.log_level);
        } else {
            this.log_level = LOGGER.LEVELS[this.log_level.toUpperCase()] || LOGGER.LEVELS.INFO;
        }
    }

    static getLevelName(level) {
        return Object.keys(LOGGER.LEVELS).find(key => LOGGER.LEVELS[key] === level);
    }

    shouldLog(level) {
        return level >= this.log_level;
    }

    debug(...args) {
        if (this.shouldLog(LOGGER.LEVELS.DEBUG)) super.debug(...args);
    }

    log(...args) {
        if (this.shouldLog(LOGGER.LEVELS.LOG)) super.log(...args);
    }

    info(...args) {
        if (this.shouldLog(LOGGER.LEVELS.INFO)) super.info(...args);
    }

    warn(...args) {
        if (this.shouldLog(LOGGER.LEVELS.WARN)) super.warn(...args);
    }

    error(...args) {
        if (this.shouldLog(LOGGER.LEVELS.ERROR)) super.error(...args);
    }
}

// LOG_LEVEL env variable can be used to set the logging level
// It possibly can be one of the following numeric or string values: 0, "DEBUG", 1, "LOG", 2, "INFO", 3, "WARN", 4, "ERROR"
const logger = new LOGGER(
    process.stdout,
    process.stderr,
    (process.env.LOG_LEVEL &&
        (!isNaN(parseInt(process.env.LOG_LEVEL)) ? parseInt(process.env.LOG_LEVEL) : LOGGER.LEVELS[process.env.LOG_LEVEL.toUpperCase()])) || 
        LOGGER.LEVELS.LOG
    );

/**
 * Aggregate all organization JSON files from a given directory and return as an array.
 * 
 * @param {String} orgDir 
 * @returns {Array} Array of organization objects
 */
function aggregateLocaleOrganizations(orgDir) {
    let organizations = [];

    if (fs.existsSync(orgDir)) {
        const files = fs.readdirSync(orgDir);
        files.forEach(file => {
            const filePath = path.join(orgDir, file);
            //logger.debug(filePath);
            if (fs.statSync(filePath).isFile() && file.endsWith(".json")) {
                try {
                    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

                    logger.debug(`Organization : ${data.name}`)

                    organizations.push(data);
                } catch (e) {
                    logger.error(`Erreur de lecture du fichier ${file}:`, e.message);
                    process.exit(1);
                }
            }
        });
    }
    
    if (organizations.length === 0) {
        logger.warn('\tNo organizations found, returning empty structure');
    } else {
        organizations = organizations.filter(org => org && org.name)
        logger.log(`\tLoaded ${organizations.length} organizations from ${orgDir}`);
    }
    
    return organizations;
}

/**
 * Get metadata from the metadata JSON file.
 * 
 * @returns {Object} Metadata JSON object
 */
function getMetadata() {
    const metadataPath = path.join(
        PROJECT_COURSE,
        DEFAULT_LOCALE_DATA_SUBDIR,
        COURSES_SUBDIR,
        METADATA_FILENAME
    );
    //logger.log(metadataPath)
    if (fs.existsSync(metadataPath)) {
        return JSON.parse(fs.readFileSync(metadataPath, "utf8"));
    }
    return {};
}

/**
 * 
 * @param {Array} organizations
 * @param {Object} metadata 
 * @returns {Object} Aggregated courses data and metadata
 */
function generateCoursesData(organizations, metadata) {
    return {
        metadata,
        organizations,
        certificateInfo: metadata.defaultCertificate,
        hero: metadata.hero,
        page: metadata.page,
        labels: metadata.labels,
        sections: metadata.sections
    };
}

/**
 * 
 * @param {String} outputFile 
 * @param {Object} data 
 */
function writeFile(outputFile, data) {
    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2), "utf8");
    logger.info(`\tWrote data to ${outputFile}`);
}

/**
 * Main function to aggregate organizations for all locales.
 */
export function aggregateOrganizations(siteDir) {
    siteDir = siteDir || PROJECT_COURSE;
    const locales = [
        ["default", path.join(siteDir, DEFAULT_LOCALE_DATA_SUBDIR)]
    ];

    const I18N_DIR = path.resolve(siteDir, I18N_DATA_SUBDIR);
    if (fs.existsSync(I18N_DIR)) {
        fs.readdirSync(I18N_DIR).forEach(localeSubdir => {
            const localeDir = path.join(I18N_DIR, localeSubdir);
            if (fs.statSync(localeDir).isDirectory()) {
                locales.push(
                    [
                        localeDir.split("/").pop(),
                        path.join(localeDir, "/docusaurus-plugin-content-pages")
                    ]
                );
            }
        });
    }

    const metadata = getMetadata();
    logger.debug(metadata);

    locales.forEach((locale, index) => {
        logger.log(`== Processing locale: ${locale[0]} ==`);

        const organizations = aggregateLocaleOrganizations(
            path.join(locale[1], COURSES_SUBDIR, COURSES_ORGANIZATIONS_SUBDIR),
            path.join(locale[1], OUTPUT_FILENAME)
        );

        const coursesData = generateCoursesData(organizations, metadata);
        logger.debug(coursesData);

        writeFile(path.join(locale[1], COURSES_SUBDIR, OUTPUT_FILENAME), coursesData)
    });
    logger.log(
        "Completed processing all locales :",
        `${locales.length} locales processed.`
    );
}

/* Execute following statements only if this script is run directly from console */
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    aggregateOrganizations();
}