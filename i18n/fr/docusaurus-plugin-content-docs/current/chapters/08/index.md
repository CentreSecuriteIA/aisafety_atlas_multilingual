---
title: Supervision à Grande Échelle
chapter_number: 8
reading_time_core: 75 min
reading_time_optional: 21 min
authors:
- Markov Grey
- Charbel-Raphaël Segerie
affiliations:
- Centre Français pour la Sécurité de l'IA (CeSIA)
acknowledgements:
- Jeanne Salle
- Chris Gerrby
- Sebastian Gil
- Josh Thorsteinson
- Nicolas Guillard
- Mateusz Bagiński
- Yoann Poupart
- Clément Dumas
- Amaury Lorin
- Mateo Rendon
- Lucas Eichorn
- Bogdan Ionut Cirstea
- Gurvan R.
google_docs_link: https://docs.google.com/document/d/1k6rlyBCZJw8xbUx0dzd-4sOhlzj-xzsmwi_OIZY1-3M/edit?usp=sharing
feedback_link: https://forms.gle/ZsA4hEWUx1ZrtQLL9
teach_link: https://docs.google.com/document/d/1im_i6e9xEAe-koYlurYdn26n9h7pFX2HksnRfQmWxTQ/edit?usp=sharing
sidebar_position: 8
slug: /chapters/08/
---
import Quote from "@site/src/components/chapters/Quote";
import Note from "@site/src/components/chapters/Note";
import Definition from "@site/src/components/chapters/Definition";

# Introduction

**Supervision.** À mesure que les systèmes d'IA deviennent de plus en plus performants, s'assurer qu'ils restent alignés avec les valeurs et les intentions humaines devient un défi crucial. Cette section présente la supervision évolutive comme une approche essentielle pour maintenir le contrôle sur l'IA avancée. Elle explique les problèmes auxquels nous sommes confrontés dans la génération de signaux d'entraînement pour des tâches complexes et "floues" et la nécessité de nouvelles méthodes pour fournir des retours précis. Ceci est particulièrement important alors que les modèles d'IA commencent à effectuer des tâches dépassant l'expertise humaine. La section explore également le concept de la vérification étant plus simple que la génération, expliquant pourquoi cette propriété est fondamentale pour les techniques de supervision évolutive.

**Décomposition des tâches.** S'appuyant sur le besoin de meilleures méthodes de supervision, cette section explore la décomposition des tâches comme stratégie clé. La décomposition des tâches consiste à diviser des tâches complexes en sous-tâches plus petites et gérables, qui peuvent être divisées récursivement. Cette approche aide à générer de meilleurs signaux d'entraînement en simplifiant la tâche que nous devons évaluer et vérifier. La cognition factoriée étend ce concept pour reproduire la pensée humaine dans les modèles d'apprentissage automatique (ML) en décomposant le raisonnement et les tâches cognitives complexes.

**Supervision des processus.** Une autre façon d'aider la supervision évolutive est d'aborder certaines des limitations des approches basées sur les résultats. Cette section introduit le concept de supervision basée sur les processus. Nous expliquons la Supervision du Raisonnement Externalisé (ERO) et le clonage procédural comme exemples spécifiques. Les techniques ERO comme la chaîne de pensée (CoT) encouragent les modèles de langage à "penser à voix haute", rendant leurs processus de raisonnement transparents pour une meilleure supervision et prévenant potentiellement les comportements indésirables. Le clonage procédural, une extension du clonage comportemental, vise à reproduire non seulement les actions finales mais l'ensemble du processus de prise de décision des experts. Ces méthodes offrent une approche plus rigoureuse de la supervision en se concentrant sur le processus de raisonnement de l'IA plutôt que sur ses seules sorties.

**Amplification Itérée (IA).** S'appuyant sur les concepts de décomposition des tâches et de supervision des processus, cette section décrit l'amplification et la distillation. L'amplification améliore les capacités des superviseurs à résoudre des tâches plus complexes, tandis que la distillation traite les limitations de l'amplification, comme la complexité et l'utilisation des ressources. Ces processus sont combinés dans la Distillation et l'Amplification Itérées (IDA), une méthode visant à générer progressivement de meilleurs signaux d'entraînement pour les tâches difficiles à évaluer directement.

**Débat.** Cette section explore la Sécurité de l'IA via le Débat comme technique contradictoire pour la supervision évolutive. Elle décrit comment les modèles d'IA argumentant pour différentes positions, avec un juge humain ou IA déterminant le gagnant, peuvent aboutir à des résultats plus véridiques. Le potentiel du débat pour faire émerger des connaissances latentes, améliorer le raisonnement et renforcer notre capacité à superviser des systèmes d'IA complexes est discuté. Des métriques clés comme l'Écart de Critique du Discriminateur (DCG) sont introduites, ainsi que les défis du jugement des débats. La section examine également les hypothèses nécessaires pour que le Débat converge vers la vérité.

**Du Faible au Fort (W2S).** La dernière section introduit la Généralisation du Faible au Fort (W2SG) comme approche pratique de la supervision évolutive, s'appuyant sur les enseignements des techniques précédentes. Elle explique comment les modèles étroitement surhumains peuvent être utilisés comme études de cas pour les techniques de supervision évolutive. Le W2SG implique l'entraînement de modèles d'IA forts en utilisant une supervision faible, visant à ce que le modèle fort surpasse son superviseur faible en exploitant les connaissances préexistantes. La section conclut en discutant diverses méthodes d'évaluation des techniques de supervision, y compris les évaluations en sandwich et les évaluations adversariales au niveau méta, fournissant un moyen de juger les futurs protocoles de supervision évolutive.