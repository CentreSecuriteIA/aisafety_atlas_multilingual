---
title: Interprétabilité
chapter_number: 9
reading_time_core: 30 min
reading_time_optional: 23 min
authors:
- Jeanne Salle
- Charbel-Raphaël Segerie
affiliations:
- Centre Français pour la Sécurité de l'IA (CeSIA)
acknowledgements:
- Markov Grey
google_docs_link: https://docs.google.com/document/d/1mdYnniBG5vg4HjMMqqojEs8siFXoRnxi0RfxursBw7A/edit?usp=sharing
feedback_link: https://forms.gle/ZsA4hEWUx1ZrtQLL9
teach_link: https://docs.google.com/document/d/1izDWZKR_xB2qj2a8LkbqcnqnjBIC-C7fn-74CIA-m9w/edit?usp=sharing
sidebar_position: 9
slug: /chapters/09/
---
import Video from "@site/src/components/chapters/Video";
import Quote from "@site/src/components/chapters/Quote";
import Note from "@site/src/components/chapters/Note";
import Definition from "@site/src/components/chapters/Definition";

# Introduction

Nous ne comprenons pas actuellement comment fonctionnent les modèles d'IA. Nous savons comment les entraîner et les construire, c'est-à-dire que nous pouvons les concevoir et leur apprendre à effectuer des tâches, comme reconnaître des objets dans des images ou générer du texte cohérent en réponse à des invites. Cependant, cela ne signifie pas que nous pouvons toujours expliquer leur comportement après l'entraînement. Pour l'instant, nous ne pouvons pas expliquer pourquoi un réseau a pris une décision spécifique ou produit une sortie particulière. **L'objectif de l'interprétabilité est de comprendre le fonctionnement interne de ces réseaux et d'expliquer comment ils fonctionnent,** ce qui pourrait nous permettre de mieux faire confiance aux modèles d'IA et de les contrôler.

<Video type="youtube" videoId="KuXjwB4LzSA" number="1" label="9.1" caption="Vidéo facultative. Si vous n&#39;êtes pas familier avec les réseaux de neurones convolutifs (CNN), cette vidéo vous aidera à vous mettre à niveau avant de lire ce chapitre." />

<Video type="youtube" videoId="aircAruvnKk" number="2" label="9.2" caption="Vidéo facultative. Si vous n&#39;êtes pas familier avec les transformers, les vidéos sur les transformers dans cette liste de lecture vous aideront à vous mettre à niveau avant de lire ce chapitre." />

Pour chaque méthode présentée dans ce chapitre, nous fournissons d'abord un aperçu général, suivi d'une explication plus approfondie et technique. Les explications techniques peuvent être ignorées.