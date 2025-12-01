# AI Safety Atlas
Hosted at - https://ai-safety-atlas.com/

# TODO

## Feedback Component
 - [ ] feature: for low feedback rating prompt for detailed feedback
 - [ ] feature: feedback component can be more minimal (scroll like testimonials?)

## UI
- [ ] The sidebar and main content have different shades of gray/black on dark mode, sidebar uses - 

## UX
 - [ ] Rewrite cleaner documentation for github

## Bugs
- [ ] Fix the 404 issue - https://github.com/markov-root/atlas/issues/2

## New Features
 - [ ] feature: exercises
 - [ ] feature: progress bar at end of section
 - [ ] feature: abbreviations
 - [ ] feature: about us page
 - [ ] feature: glossary page
 - [ ] feature: roadmap page
 - [ ] feature: sources/bibliography page
 - [ ] feature: central db of quoted person credentials
 - [ ] feature: donate button + link on topbar

## Parser
 - [ ] feature: add image source to quotes
 - [ ] parser: gdoc -> excalidraw pipeline
 - [ ] parser: autocompile pdf and move to docusaurus folder
 - [ ] parser: autogenerate tts using gemini pro API
 - [ ] parser + sidebar : collapse appendix as category
 - [ ] parser + sidebar : change appendix urls - a, a.1, b, b.1., etc.

## Courses
 - [ ] mandate fields on course submission to prevent use as contact form

## Localization 
- [ ] incorporate i18n -> Current work on Branch https://github.com/CentreSecuriteIA/aisafety_atlas_multilingual/tree/to_multilingual
- [ ] move all data into json files out of react components
- [ ] take into account the new features introduced in version 3.9 of Docusaurus regarding internationalisation.

**Mandatory:**
- _Technical_:
    - [x] adapt the breadcrumb links in the header of translated textbook pages
    - [ ] translate labels in the reading setting panel
    - [ ] translate the tooltips of "scroll to top" and "scroll to bottom" buttons
    - [ ] translate the "Edit this page" link at the bottom of each page
    - [x] the links in the list of chapters in the landing page
    - [ ] make Algolia search working for localized languages
- _Content_:
    - [ ] checked the quality of the translations
    - [ ] add missing translations
    - [ ] complete glossary for specific term translations

**Optional:**
- _Technical_:
- [ ] adjust the code so that it is compatible with `urlBase != "/"`"
- [ ] improve the quality of adapted code


# INTERNATIONALIZATION
This section describes the modifications made (and to be done) to the original AI Safety Atlas codebase to enable multilingual support using Docusaurus i18n features, and the best practices for adding new content it.

Multilingual version currently hosted for checking at https://centresecuriteia.github.io/
See first the code in the `to_multilingual` branch in [multilingual repo](https://github.com/CentreSecuriteIA/aisafety_atlas_multilingual).

## Specific Folder structure
In a classic Docusaurus project, content elements are mainly placed in the `docs` or `src/pages` folder. To manage translations, Docusaurus suggests creating specific directories for each language in the `i18n` directory. This results in the following file structure (e.g. including French translations in the `fr` subdirectory):
```
atlas
├── docs    # Main documentation folder (textbook)
│   ├── chapters
│   └── index.md
│
├── i18n    # Internationalization folder
│   └── fr  # French locale folder
│       ├── code.json  # Any text label present in the React code
│       │              # Includes text labels from the themes' code
│       │              # Generated using `docusaurus write-translations` command
│       │
│       ├── docusaurus-plugin-content-docs # translation data the docs plugin needs
│       │   ├── current
│       │   │   ├── chapters
│       │   │   └── index.md
│       │   └── current.json # Content all sidebar labels
│       │                    # Generated using `docusaurus write-translations` command
│       │
│       ├── docusaurus-plugin-content-pages # translation data the pages plugin needs
│       │   └── data  # translation of each used JSON files in `src/data/`
│       │
│       └── docusaurus-theme-classic # translation data the classic theme needs
│           ├── footer.json   # Text labels in your footer theme config
│           │                 # Generated using `docusaurus write-translations` command
│           └── navbar.json   # Text labels in your navbar theme config
│                             # Generated using `docusaurus write-translations` command
│
├── plugins # Custom plugins
├── scripts # Parsing pipeline scripts
└── src
    ├── components
    ├── data    # JSON data files
    ├── pages   # Specific React pages
    ├── theme
    └── utils
```

## Internationalization description
The used internationalization features correspond to [Docusaurus 3.8.*](https://docusaurus.io/docs/3.8.1/i18n/introduction) features until now.

## Topology of elements to translate or adapt

### Localization
The elements to be translated are:
- The "preprocessed" files generated in the first step of the [parsing pipeline](https://github.com/markov-root/atlas/tree/main/scripts/parser) (Processing pipeline "Preprocessing parsing" step), accessible by default in the `scripts/preprocessed` tree files, and after translation placed in `scripts/translated/` before the construction of the Docusaurus site;
    - The translated files corresponding to those in `docs/chapters`, placed in `i18n/docusaurus-plugin-content-docs/LOCALE/current/chapters`, will be obtained by applying the second step of the parsing pipeline (Processing pipeline "Docusaurus" second step) to the translations of the "preprocessing" files;
- Static content included in React files (`.js` or `.jsx` files), corresponding to:
    - specific pages (e.g. page ["Courses"](https://ai-safety-atlas.com/courses), file `/src/pages/courses.jsx`), defined in the `/src/pages/` folder;
    - components used in certain pages written in React (e.g. `src/components/Courses/CoursesHero.jsx`);
    - components present in pages and linked to the theme formatting the Markdown pages, including complex components corresponding to the site's home page and the textbook (e.g. `src/theme/DocItem/index.js`, `src/components/chapters/Note.jsx`);
- The contents of JSON files called by React pages and components (e.g. `src/data/chapters.json` or `src/data/courses/courses-metadata.json`), present in the `src/data/` folder;

### Adaptations
The specific developments for this project required adjustments to certain existing elements in order to take into account the selected language for:
- displaying the correct language version of the website's home page and the textbook: modification of the page identification rules according to the URLs provided (in the file `src/theme/DocItem/index.js`);
- adapting the URLs of media files, in particular:
- modifying the processing of media URLs (in the file `src/components/chapters/Figure.jsx`);
- constructing the URLs of audio files (in the file `src/utils/audioUtils.js`);
    - constructing the URL for PDF files (in the file `src/utils/pdfUtils.js`);
- including JSON files in the correct language, such as local glossary definitions (in the file `src/utils/remark-glossary.js`).

## Using `i18n` docusaurus plugin features

### Provided by Docusaurus i18n support
- `translate({id:"...", description:"...", message:"..."})` function from `@docusaurus/Translate` package - See [tutorial](https://docusaurus.io/docs/i18n/tutorial#translate-your-react-code) and [API doc](https://docusaurus.io/docs/docusaurus-core#translate)
This is a function allowing to include a entry to "code.json" file, generated with "docusaurus write-translations" command.

- `<Translate id="..." description="...">textual content</Translate>` component from `@docusaurus/Translate` package - See [tutorial](https://docusaurus.io/docs/i18n/tutorial#translate-your-react-code) and [API doc](https://docusaurus.io/docs/docusaurus-core#translate-imperative)
This is the default React component allowing to include a entry to "code.json" file, generated with "docusaurus write-translations" command. The values of "message" properties have to be translated.

**Warning**: the `children` prop can only be a text content, not a coded HTML structure. So for complex content, use the version description in the "Further development" section below.

- `docusaurus write-translations` command - See [tutorial](https://docusaurus.io/docs/i18n/tutorial#translate-plugin-data) and [CLI doc](https://docusaurus.io/docs/cli#docusaurus-write-translations-sitedir)
This command generates the JSON files to translate for each locale, including: `code.json`, `current.json` (for docs sidebar labels), `navbar.json` and `footer.json`. The values of "message" properties have to be translated.

Generate JSON files and sub-directories for locale **fr** : `yarn write-translations --locale fr`.

**Warning**: JSON files in `srd/data`are not involved in this command.

### Further development for internationalization support
- `<Translate id="..." description="...">stringified HTML structure code</Translate>` defined in `src/components/Translate.jsx`
This is a improvement over the default docusaurus component, allowing to pass an HTML structure, not simply text, as children content.

Correct usage example (note the use of **{\`** and **\`}** to pass a string containing HTML structure):
```html
<Translate
    id="footer.license" 
    description="Footer copyright and license information"
    >
    {`<strong>Copyright:</strong> 2025 AI Safety Atlas • Text Content: <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" class="licenseLink">CC BY-SA 4.0</a> • Code: <a href="https://opensource.org/licenses/MIT" target="_blank" class="{licenseLink}">MIT</a>`}
    </Translate>
</div>
```

Incorrect usage example:
```html
<Translate
    id="footer.license" 
    description="Footer copyright and license information"
    >
    <strong>Copyright:</strong> 2025 AI Safety Atlas • Text Content: <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" class="licenseLink">CC BY-SA 4.0</a> • Code: <a href="https://opensource.org/licenses/MIT" target="_blank" class="licenseLink">MIT</a>
    </Translate>
</div>
```

- `getDataContent(filename)` defined in `src/utils/i18nUtils.js`
This function allows to get the content of a data file (json, md, etc) according to the current selected local.


### Specific settings
[To declare a new locale](https://docusaurus.io/docs/i18n/tutorial#site-configuration), the following steps are needed:

0. in theme/navbar configuration file `/config/theme/navbar.mjs`:
    - the locale dropdown selector settings should be already added to the `items` section
1. in config file `/config/metadata.mjs`, respecting [docusaurus i18n configuration](https://docusaurus.io/docs/api/docusaurus-config#i18n):
    - add the locale ID code to the `i18n.locales` section;
    - add the locale config to the `i18n.localeConfigs` section;
 
## Best pratices for adding new content to pages

### Markdown files

Nothing to do.

### React files (pages, custom components, theme item)
[tips](https://docusaurus.io/docs/i18n/tutorial#translate-your-react-code)

### For static content
For static content (e.g. titles, button labels, etc.), use the internationalisation features, namely:
- the `<Translate>` component (native provided by Docusaurus, or the advanced version) for content included in a HTML structure;
- the `translate()` function for content used in the code (e.g. tag property values, etc.);

However, given that each content entry introduced through the use of these features will be aggregated in the same JSON file `code.json` for a given language, managing its translation and maintenance can become complex if there are a large number of entries, and depending on the translation procedure used, in relation to the pace of change of the site and the cost of translation.

Outsourcing content to dedicated JSON files can be an attractive alternative in this case, particularly for large amounts of content or content that is likely to change frequently (read next section).

### For external content (i.e from JSON files)
If the content is likely to change over time, requires frequent updates (but does not require changes to the page structure in which it will be displayed), or is large, it is best to store it in one or more JSON files in the `src/data/` folder and build the React component so that it uses this content, regardless of the corresponding language.

Ces fichiers seront importés dans le composant React via la fonction `getDataContent()` (see above in "Further development" section).

## Tips and warning using Docusaurus test mode
In order to display translated content during development and local testing, it is necessary to launch the site in "local" mode with the command:
```bash
  yarn start . --locale fr
```

**Warning** : in this mode, Docusaurus does not serve static assets located in the `static` folder of the project for translated versions. You must therefore check the project by building it with the command :
```bash
  yarn build
```

## Translation pipeline
TBD
