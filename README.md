# AI Safety Atlas (Multilingual)

Currently hosted for checking at https://centresecuriteia.github.io/

See first the code in the `to_multilingual` branch.

## TODO

**Mandatory:**
- Technical:
    - [ ] adapt the breadcrumb links in the header of translated textbook pages
    - [ ] translate labels in the reading setting panel
    - [ ] translate the tooltips of "scroll to top" and "scroll to bottom" buttons
    - [ ] translate the "Edit this page" link at the bottom of each page
    - [ ] the links in the list of chapters in the landing page
    - [ ] make Algolia search work for all languages
- Content:
    - [ ] checked the quality of the translations
    - [ ] add missing translations
    - [ ] complete glossary for specific terms

- Follow the todo list in the original repo https://github.com/markov-root/atlas


**Optional:**
- [ ] adjust the code so that it is compatible with `urlBase != "/"`"
- [ ] improve the quality of adapted code


## Multilingual migration description

See [i18n - Introduction](https://docusaurus.io/docs/i18n/introduction)

### Folder structure

_to be written_

### Topology of elements to translate or adapt

_to be written_

### Using `i18n` docusaurus plugin features

_to be written_

### Specific settings

_to be written_

## Best pratices for adding new content to pages

### In markdown files

_to be written_

### In React components (pages, custom components, theme item)

_to be written_
## Feedback Component
 - [ ] feature: for low feedback rating prompt for detailed feedback
 - [ ] feature: feedback component can be more minimal (scroll like testimonials?)

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
 - [ ] feature: bibliography page
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

## Translations
 - [ ] incorporate i18n -> Current work on Branch https://github.com/CentreSecuriteIA/aisafety_atlas_multilingual/tree/to_multilingual
 - [ ] move all data into json files out of react components

# To Add to Glossary
- Sources for everything
 - Few-shot learning
 - Zero-shot Learning
 - goal misgeneralization
 - alignment faking
 - sleeper agent
 - scheming
 - self-correction
 - multi-shot learning
 - LRMs, reasoning models
 - theory of mind
 - meta cognition
 - connectionism
 - gofai
 - functionalism
 - epoch
 - natural language
 - foundation model
 - frontier model
