---
title: Stratégies
chapter_number: 3
chapter_description: Comment pouvons-nous atténuer les risques de l'IA avancée ? Ce
  chapitre examine le vaste paysage stratégique pour atténuer les risques d'utilisation
  abusive, d'alignement et les risques systémiques.
reading_time_core: 83 min
reading_time_optional: 37 min
reading_time_appendix: 18 min
authors:
- Charbel-Raphaël Segerie
- Markov Grey
affiliations:
- Centre Français pour la Sécurité de l'IA (CeSIA)
acknowledgements:
- Alexandre Variengien
- Jeanne Salle
- Charles Martinet
- Amaury Lorin
- Alejandro Acelas
- Evander Hammer
- Jessica Wen
- Angélina Gentaz
- Jonathan Claybrough
- Camille Berger
- Josh Thorsteinson
- Pauliina Laine
alignment_forum_link: https://www.lesswrong.com/s/3ni2P2GZzBvNebWYZ/p/RzsXRbk2ETNqjhsma
google_docs_link: https://docs.google.com/document/d/1ytzVlrj8PpxiyjvmZCJXm5QW3olhTh504-yH0h-wAq0/edit?usp=sharing
teach_link: https://docs.google.com/document/d/1cv0gzwSouDjckYHzV7gYbHPKhJZR6bwbJWgHzEJ604Q/edit?usp=sharing
sidebar_position: 3
slug: /chapters/03/
---
import Video from "@site/src/components/chapters/Video";
import Quote from "@site/src/components/chapters/Quote";
import Note from "@site/src/components/chapters/Note";
import Definition from "@site/src/components/chapters/Definition";

import Figure from "@site/src/components/chapters/Figure";

# Introduction

Ce chapitre tente d'exposer la vue d'ensemble de la stratégie de sécurité de l'IA pour atténuer les risques explorés précédemment.

Les capacités de l'IA progressant très rapidement, les stratégies conçues pour assurer la sécurité doivent également évoluer. La première version de ce document a été rédigée à l'été 2024, cette version inclut la mise à jour durant l'été 2025. Tout au long de ce chapitre, nous visons à fournir un aperçu structuré de la réflexion et du travail en cours dans la stratégie de sécurité de l'IA en 2025. Nous reconnaissons à la fois les méthodes établies et les nouvelles orientations de recherche.

Nous avons catégorisé les mesures d'atténuation autour de la prévention de l'utilisation abusive de l'IA, les mesures de sécurité pour l'AGI et l'ASI, et enfin les approches socio-techniques qui aident à atténuer les préoccupations plus généralement dans toutes les catégories. Bien que nous ayons choisi une décomposition pour faciliter l'explication, nous préconisons une approche globale qui combine plusieurs de ces stratégies au lieu d'en poursuivre quelques-unes isolément. Enfin, nous avons une section sur les stratégies combinées, où nous tentons d'esquisser une façon potentielle dont cette combinaison pourrait créer un cadre de défense en profondeur à plusieurs niveaux.

<Figure src="./img/jOu_Image_1.png" alt="Entrer la description alternative de l&#39;image" number="1" label="3.1" caption="Diagramme provisoire résumant les principales approches de haut niveau pour rendre le développement de l&#39;IA sûr." />

<Note title="Au-delà de la portée de ce chapitre" collapsed={true}>

Bien que ce chapitre se concentre sur les stratégies directement liées à la prévention des résultats négatifs à grande échelle dus à l'utilisation abusive de l'IA, au désalignement ou au développement non contrôlé, plusieurs sujets connexes sont nécessairement placés au-delà de sa portée principale :

- La désinformation générée par l'IA : La prolifération de la désinformation pilotée par l'IA, y compris les deepfakes et la génération de contenu biaisé. Les stratégies pour combattre cela, comme les systèmes de détection robustes, le filigrane et les principes d'IA responsable, sont majoritairement hors de la portée du chapitre. Celles-ci relèvent souvent de la modération de contenu, de l'éducation aux médias et de la gouvernance des plateformes, distinctes des stratégies techniques fondamentales d'alignement et de contrôle discutées dans ce chapitre.

- Confidentialité : Les systèmes d'IA traitent souvent d'énormes quantités de données, amplifiant les préoccupations existantes concernant la confidentialité des données.

- Sécurité : Les pratiques de sécurité standard, comme le chiffrement, le contrôle d'accès, la classification des données, la surveillance des menaces et l'anonymisation, sont des prérequis pour un déploiement sûr de l'IA. Bien qu'une sécurité robuste soit vitale pour des mesures telles que la protection des poids des modèles, ces pratiques standard sont distinctes des nouvelles stratégies de sécurité requises pour traiter les risques comme le désalignement des modèles ou l'utilisation abusive des capacités.

- Discrimination et toxicité : Bien que les résultats biaisés ou toxiques constituent un problème de sécurité, ce chapitre se concentre sur les stratégies visant à prévenir les défaillances catastrophiques.

- Bien-être et droits des esprits numériques : Nous ne savons pas si les IA devraient être considérées comme des patients moraux. C'est un domaine éthique distinct concernant nos obligations envers l'IA, plutôt que d'assurer la sécurité vis-à-vis de l'IA.

- Erreurs dues au manque de capacité : Bien que les défaillances des systèmes d'IA dues à un manque de capacité ou de robustesse soient une source de risque ([AISI, 2025](https://www.aisi.gov.uk/work/aisis-research-direction-for-technical-solutions)), les stratégies discutées dans ce chapitre visent à atténuer les risques découlant à la fois d'une robustesse insuffisante et de capacités potentiellement élevées (mais désalignées ou mal utilisées). Les solutions à ce type de risque sont les mêmes que pour d'autres industries : tests, itération et amélioration des capacités du système.

La portée choisie ici reflète une concentration commune au sein de certaines parties de la communauté de la sécurité de l'IA sur les risques existentiels ou catastrophiques à grande échelle découlant de systèmes d'IA puissants et potentiellement doués d'agentivité.

</Note>

<Video type="youtube" videoId="RGh8wP9PjJw" number="1" label="3.1" caption="Vidéo facultative du cours sur la sécurité de l&#39;AGI par Google DeepMind. Elle donne un aperçu rapide de leur approche d&#39;alignement et de la façon dont nous pourrions catégoriser différentes stratégies en groupes conceptuels." />