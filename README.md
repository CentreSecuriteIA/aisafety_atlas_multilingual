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

**Mandatory:**
- _Technical_:
    - [ ] adapt the breadcrumb links in the header of translated textbook pages
    - [ ] translate labels in the reading setting panel
    - [ ] translate the tooltips of "scroll to top" and "scroll to bottom" buttons
    - [ ] translate the "Edit this page" link at the bottom of each page
    - [ ] the links in the list of chapters in the landing page
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

## Internationalization description
The used internationalization features correspond to [Docusaurus 3.8.*](https://docusaurus.io/docs/3.8.1/i18n/introduction) features until now.

## Topology of elements to translate or adapt

### Localization
Les élements destinés à être traduits sont:
- Les contenus des fichiers markdown présents dans le dossier `docs/`; 
    - En fait la traduction de ces fichiers est obtenues à partir de la traduction des fichiers obtenus à la première étape du [processing pipeline](https://github.com/markov-root/atlas/tree/main/scripts/parser), dont sont issus les fichiers markdown (Processing pipleine "Docusaurus parsing" step);
- Les contenus statiques inclus dans les fichiers React (fichiers `.js` ou `.jsx`), correspondant: 
    - aux pages particulirès (ex: page ["Courses"](https://ai-safety-atlas.com/courses), fichier `/src/pages/courses.jsx`), définie dans le dossier `/src/pages/`;
    - aux composants utilisés dans ces pages (ex: `src/components/Courses/CoursesHero.jsx`);
    - aux composants présents dans les pages du site et liés au thème formattant les pages markdown, dont les composants complexes correspondant à page d'accueil du site et du textbook (ex: `src/theme/DocItem/index.js`, `src/components/chapters/Note.jsx`);
- Les contenus des fichiers JSON appelés par les pages React (Ex: `src/data/courses/courses-metadata.json`), présents dans le dossier `src/data/`;

### Adaptations
Les développements particuliers à ce projet ont nécessité des adaptations de certains éléments existant afin de prendre en compte la langue sélectionnée pour:
- l'affichage de la bonne version linguistique de la page d'accueil du site et du textbook: modification des règles d'identification des pages selon les urls fournies (dans le fichier `src/theme/DocItem/index.js`);
- l'appel des fichiers média (essentiellement les images): modification du traitement de l'url du média (dans le fichier ``src/components/chapters/Figure.jsx``);
- l'inclusion des fichiers JSON contenant les définitions locales du glossaire: prise en compte de la locale correspondant au fichier en cours de traitement pour l'appel des fichiers à inclure (dans le fichier `src/utils/remark-glossary.js`).

## Specific Folder structure
Dans un projet Docusaurus classique, les éléments de traduction sont généralement placées dans le dossier `docs` ou `src/pages`. Pour gérer les traductions, Docusaurus propose de créer des dossiers spécifiques pour chaque langue dans un dossier `i18n`. Puis un sous-répertoire devant contenir les fichiers de traduction pour une langue donnée (ex: `fr` pour le français):

```
atlas
├── docs
│   ├── chapters
│   └── index.md
├── i18n
│   └── fr
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
└── src
    ├── components
    ├── data
    ├── pages
    ├── theme
    └── utils
```

## Using `i18n` docusaurus plugin features

### Provided by Docusaurus i18n support
- `translate({id:"...", description:"...", message:"..."})` function from `@docusaurus/Translate` package - See [tutorial](https://docusaurus.io/docs/i18n/tutorial#translate-your-react-code) and [API doc](https://docusaurus.io/docs/docusaurus-core#translate)
This is a function allowing to include a entry to "code.json" file, generated with "docusaurus write-translations" command.

- `<Translate id="..." description="...">string text content</Translate>` component from `@docusaurus/Translate` package - See [tutorial](https://docusaurus.io/docs/i18n/tutorial#translate-your-react-code) and [API doc](https://docusaurus.io/docs/docusaurus-core#translate-imperative)
This is the default React component allowing to include a entry to "code.json" file, generated with "docusaurus write-translations" command. The values of "message" properties have to be translated.

**Warning**: the child prop can only be a text content, not a HTML structure. So for complex content, use the version descrive in "Further development" section below.

- `docusaurus write-translations` command - See [tutorial](https://docusaurus.io/docs/i18n/tutorial#translate-plugin-data) and [CLI doc](https://docusaurus.io/docs/cli#docusaurus-write-translations-sitedir)
This command generates the JSON files to translate for each locale, including: `code.json`, `current.json` (for docs sidebar labels), `navbar.json` and `footer.json`. The values of "message" properties have to be translated.

Generate JSON files and sub-directories for locale **fr** : `yarn write-translations --locale fr`.

**Warning**: JSON files in `srd/data`are not involved in this command.

### Further development for internationalization support
- `<Translate id="..." description="...">string HTML structure content</Translate>` defined in `src/components/Translate.jsx`
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

Nothing to do at this level

### React files (pages, custom components, theme item)
[tips](https://docusaurus.io/docs/i18n/tutorial#translate-your-react-code)

### For static content
Pour du contenu statique (ex : titres, titre de bouton, ...), utiliser les fonctionnalités d'internationalisation fournies par Docusaurus, soit:
- le composant `<Translate>` (version native ou avancés) s'il s'agit de contenu inclus dans la structure HTML obtenue;
- la fonction `translate()` s'il s'agit de contenu utilisé dans le code (ex: valeur d'une propriété, ...);

Toutefois, sachant que chaque entrée de contenu introduit par l'utilisation de ces fonctionnalités sera agrégée dans le même fichier JSON `code.json` d'une langue données, la gestion de sa traduction et de sa maintenance peut devenir complexe si le nombre d'entrées est important, et selon la procédure de traduction utilisée, par rapport au rythme d'évolution du site et du coût de traduction.

L'externalisation du contenu dans des fichiers JSON dédiés peut être une alternative intéressante dans ce cas, en particulier pour des contenus volumineux ou susceptibles d'évoluer fréquemment.

### For external content (i.e from JSON files)
Si le contenu doit varier dans le temps, nécessite des mises à jour fréquentes (tout en ne nécessitant pas de modification de la strucutre de page dans laquelle il sera visible), ou est volumineux, il est préférable de le stocker dans un ou plusieurs fichiers JSON à palcer dans le dossier `src/data/`, et de contruire le composant React de sorte qu'il exploite ce contenu, indépendamment de la langue correspondante.

Ces fichiers seront importés dans le composant React via la fonction `getDataContent()` (see above in "Further development" section).


## Tips using Docusaurus test mode
TDB

## Translation pipeline
TBD
