---
title: Capacités
chapter_number: 1
chapter_description: Nous devons comprendre ce dont les modèles d'IA sont actuellement
  capables, et ce qu'indiquent les tendances de leurs capacités.
reading_time_core: 69 min
reading_time_optional: 16 min
reading_time_appendix: 42 min
authors:
- Markov Grey
- Charbel-Raphaël Segerie
affiliations:
- Centre Français pour la Sécurité de l'IA (CeSIA)
acknowledgements:
- Jeanne Salle
- Charles Martinet
- Vincent Corruble
- Diego Dorn
- Josh Thorsteinson
- Jonathan Claybrough
- Alejandro Acelas
- Jamie Raldua Veuthey
- Alexandre Variengien
- Léo Dana
- Angélina Gentaz
- Nicolas Guillard
- Leo Karoubi
atlas_link: https://ai-safety-atlas.com/chapters/01/
alignment_forum_link: https://www.alignmentforum.org/posts/MkfaQyxB9PN4h8Bs9/
google_docs_link: https://docs.google.com/document/d/1wQOUypAyOvjS-fnnrHk2qwhQxbWpWoxFT0aC7QNBJtc/edit?usp=sharing
download_link: https://github.com/CentreSecuriteIA/textbook/blob/main/latex/AI%20Safety%20Atlas%20-%20Capabilities.pdf
feedback_link: https://forms.gle/ZsA4hEWUx1ZrtQLL9
video_link: https://www.youtube.com/watch?v=J_iMeH1hb9M
teach_link: https://docs.google.com/document/d/1im_i6e9xEAe-koYlurYdn26n9h7pFX2HksnRfQmWxTQ/edit?usp=sharing
sidebar_position: 1
slug: /chapters/01/
---
import Quote from "@site/src/components/chapters/Quote";
import Note from "@site/src/components/chapters/Note";
import Definition from "@site/src/components/chapters/Definition";

import Figure from "@site/src/components/chapters/Figure";

# Introduction

Le domaine de l'intelligence artificielle a connu une transformation remarquable ces dernières années, et ce n'est peut-être que le début. Ce chapitre pose les bases de l'ensemble du livre en établissant ce que les systèmes d'IA peuvent faire actuellement, comment ils atteignent ces capacités, et comment nous pouvons anticiper leur développement futur. Cette compréhension est essentielle pour tous les chapitres suivants : la discussion sur les capacités dangereuses et les risques potentiels (Chapitre 2) découle directement de la compréhension des capacités. De même, les solutions techniques proposées (Chapitre 3) et les solutions de gouvernance (Chapitre 4) doivent toutes deux tenir compte des capacités actuelles et futures projetées de l'IA.

<Figure src="./img/hvZ_Image_1.png" alt="Entrer la description alternative de l'image" number="1" label="1.1" caption="Nous expliquons d'abord les modèles fondamentaux, qui ont continuellement démontré des capacités améliorées grâce à leur échelle. Puis nous examinons les lois de mise à l'échelle observées empiriquement. Sur la base de ces tendances, nous étudions certaines techniques que les chercheurs utilisent pour tenter de prévoir les progrès futurs de l'IA." />

**L'IA à la pointe de la technologie - Des capacités révolutionnaires atteintes dans de multiples domaines.** Nous commençons par explorer comment les systèmes d'IA ont évolué d'outils étroits et spécialisés vers des outils de plus en plus polyvalents. Les modèles de langage peuvent désormais s'engager dans des raisonnements complexes, tandis que les systèmes de vision par ordinateur démontrent une compréhension sophistiquée de l'information visuelle. En robotique, nous observons l'émergence de systèmes capables d'apprendre et de s'adapter aux environnements réels avec une autonomie croissante. L'objectif de cette section est de donner au lecteur de nombreux exemples de l'accélération des capacités de l'IA dans différents domaines.

**Les modèles de fondation - Ont révolutionné notre façon de construire les systèmes d'IA.** La section suivante explore comment nous sommes passés d'architectures spécialisées plus petites à des architectures polyvalentes à grande échelle. Plutôt que de construire des systèmes séparés pour chaque tâche, ces modèles de fondation servent de point de départ. Ce sont des blocs de construction qui peuvent être adaptés ultérieurement pour diverses applications grâce au fine-tuning. Nous explorons comment ces modèles sont entraînés, leurs propriétés clés et les défis uniques qu'ils présentent. L'émergence de capacités inattendues de ces modèles soulève des questions importantes sur leur potentiel et leurs implications pour la sécurité de l'IA.

**Comprendre l'Intelligence - Les capacités nécessitent une mesure précise pour guider le travail de sécurité.** L'objectif de cette section est de fournir une compréhension de ce que signifient réellement dans la pratique des termes comme l'intelligence artificielle générale et la superintelligence artificielle. À travers des études de cas détaillées et des observations empiriques, nous examinons différentes approches pour définir et mesurer les capacités de l'IA. Dépassant les distinctions binaires traditionnelles entre IA "étroite" et "générale", nous introduisons des cadres continus plus nuancés qui suivent les progrès selon plusieurs dimensions.

<Quote speaker="Yann LeCun" position="Scientifique en chef de l'IA chez Meta et lauréat du prix Turing" date="Mai 2023" source="([Heaven, 2023](https://www.technologyreview.com/2023/05/02/1072528/geoffrey-hinton-google-why-scared-ai/))">

Il ne fait aucun doute que les machines deviendront plus intelligentes que les humains - dans tous les domaines où les humains sont intelligents - à l'avenir. C'est une question de quand et comment, pas une question de si.

</Quote>

**Mise à l'échelle - La leçon amère et les lois empiriques de mise à l'échelle montrent que l'échelle stimule le progrès.** Nous explorons comment des algorithmes simples plus un calcul massif surpassent souvent les approches sophistiquées faites à la main. Cela nous amène à examiner les lois de mise à l'échelle qui décrivent comment les performances de l'IA s'améliorent avec différentes variables comme - les données, le nombre de paramètres et l'augmentation des ressources de calcul. Cette section contient également un examen du débat sur la question de savoir si l'échelle seule est suffisante pour atteindre des capacités d'IA transformatrices.

**Prévision - Prédire l'évolution des capacités nous aide à préparer les mesures de sécurité à l'avance.** En nous appuyant sur notre compréhension des capacités actuelles et des comportements de mise à l'échelle, nous examinons diverses approches pour anticiper les progrès futurs. Des ancrages biologiques à l'analyse des tendances, nous explorons des cadres pour faire des prédictions éclairées sur les trajectoires de développement de l'IA. C'est très important de savoir quand différentes mesures de sécurité doivent être mises en place.

**Annexes - Aperçu des opinions d'experts sur l'IA, débats détaillés sur l'échelle et tendances de mise à l'échelle.** Nous considérons ces sections comme optionnelles, mais toujours utiles pour ceux qui veulent approfondir un peu plus. Le chapitre se termine par des annexes examinant les opinions d'experts sur les progrès de l'IA, des discussions plus approfondies sur la nature et les limites des grands modèles de langage, et des données complètes sur les tendances clés du développement de l'IA.