---
title: Mauvaise spécification
chapter_number: 6
reading_time_core: 55 min
reading_time_optional: 3 min
authors:
- Markov Grey
- Charbel-Raphael Segerie
affiliations:
- Centre Français pour la Sécurité de l'IA (CeSIA)
acknowledgements:
- Jeanne Salle
- Oscar Heitmann
- Ram Rachum
- Nicolas Guillard
- Camille Berger
atlas_link: https://ai-safety-atlas.com/chapters/06/
alignment_forum_link: https://www.lesswrong.com/s/3ni2P2GZzBvNebWYZ/p/mMBoPnFrFqQJKzDsZ
google_docs_link: https://docs.google.com/document/d/1kEdmyVTUG3MO7lwuw4utHEm7CcavvgAiUZcWHaOZuPY/edit?usp=sharing
feedback_link: https://forms.gle/ZsA4hEWUx1ZrtQLL9
teach_link: https://docs.google.com/document/d/1im_i6e9xEAe-koYlurYdn26n9h7pFX2HksnRfQmWxTQ/edit?usp=sharing
sidebar_position: 6
slug: /chapters/06/
---
import Quote from "@site/src/components/chapters/Quote";
import Note from "@site/src/components/chapters/Note";
import Definition from "@site/src/components/chapters/Definition";

# Introduction

**Apprentissage par renforcement :** Le chapitre commence par un rappel de certains concepts d'apprentissage par renforcement. Cela inclut un aperçu rapide du concept de récompenses et des fonctions de récompense. Cette section pose les bases pour expliquer pourquoi la conception des récompenses est extrêmement importante.

**Optimisation :** Cette section présente brièvement le concept de la Loi de Goodhart. Elle fournit une motivation pour comprendre pourquoi les récompenses sont difficiles à spécifier de manière à ce qu'elles ne s'effondrent pas face à une immense pression d'optimisation.

**Mauvaise spécification des récompenses :** Avec une solide compréhension de la notion de récompenses et d'optimisation, les lecteurs sont introduits à l'un des défis fondamentaux de l'alignement - la mauvaise spécification des récompenses. Ceci est également connu sous le nom de problème d'alignement externe. La section commence par discuter de la nécessité d'une bonne conception des récompenses en plus de la conception d'algorithmes. Elle est suivie d'exemples concrets d'échecs de spécification des récompenses tels que le piratage des récompenses et la manipulation des récompenses.

**Apprentissage par imitation :** Cette section se concentre sur certaines solutions proposées à la mauvaise spécification des récompenses qui reposent sur l'apprentissage des fonctions de récompense par l'imitation du comportement humain. Elle examine des propositions telles que l'apprentissage par imitation (IL), le clonage comportemental (BC) et l'apprentissage par renforcement inverse (IRL). Chaque section contient également un examen des problèmes et limitations possibles de ces approches en ce qui concerne la résolution du piratage des récompenses.

**Apprentissage par retour :** La dernière section examine les propositions visant à rectifier la mauvaise spécification des récompenses en fournissant des retours aux modèles d'apprentissage automatique. La section fournit également un aperçu complet de la façon dont les grands modèles de langage (LLM) actuels sont entraînés. La discussion couvre la modélisation des récompenses, l'apprentissage par renforcement à partir de retours humains (RLHF), l'apprentissage par renforcement à partir de retours d'intelligence artificielle (RLAIF), et les limitations de ces approches.