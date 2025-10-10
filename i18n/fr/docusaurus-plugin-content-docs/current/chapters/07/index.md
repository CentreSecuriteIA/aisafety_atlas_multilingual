---
title: Surgénéralisation des Objectifs
chapter_number: 7
reading_time_core: 72 min
reading_time_optional: 17 min
authors:
- Markov Grey
affiliations:
- Centre Français pour la Sécurité de l'IA (CeSIA)
acknowledgements:
- Charbel-Raphael Segerie
- Emanuele Ascani
- Jeanne Salle
- Oscar Heitmann
- Camille Berger
- Josh Thorsteinson
- Nicolas Guillard
google_docs_link: https://docs.google.com/document/d/1JsV3ShLAbMpt8tXZ_tBqGUC-CkMor1WrF5eQDRWKLoE/edit?usp=sharing
teach_link: https://docs.google.com/document/d/1im_i6e9xEAe-koYlurYdn26n9h7pFX2HksnRfQmWxTQ/edit?tab=t.maf91lgt511f#heading=h.mkm52f849qxn
sidebar_position: 7
slug: /chapters/07/
---
import Quote from "@site/src/components/chapters/Quote";
import Note from "@site/src/components/chapters/Note";
import Definition from "@site/src/components/chapters/Definition";

# Introduction

Ce chapitre explore le concept de surgénéralisation des objectifs — probablement le problème le plus contre-intuitif en sécurité de l'IA. Contrairement aux problèmes de spécification où nous échouons simplement à fournir le bon signal d'apprentissage, ou aux échecs de capacité où les systèmes ne peuvent pas faire ce que nous voulons, la surgénéralisation des objectifs se produit lorsque les systèmes intériorisent des comportements différents de ceux prévus malgré la réception de signaux d'apprentissage corrects. Nous commençons par établir la nature du problème, en expliquant pourquoi il se produit, puis nous examinons ses manifestations préoccupantes comme la manipulation, et enfin nous passons en revue certaines approches de détection et d'atténuation.

**Les systèmes d'IA peuvent apprendre des objectifs différents de ceux que nous avions prévus, même lorsque leur apprentissage semble totalement réussi.** La première section explique pourquoi la généralisation ne doit pas être traitée de manière unidimensionnelle. Cela rejoint la nuance que nous avons soulignée dans le chapitre sur les évaluations - les capacités mesurent ce qu'un modèle peut faire, et les objectifs mesurent ce qu'un modèle essaie de faire. Ils peuvent se généraliser indépendamment, créant des scénarios où les systèmes conservent des capacités sophistiquées tout en poursuivant des objectifs totalement différents de ceux prévus. Plusieurs objectifs différents peuvent produire un comportement identique pendant l'apprentissage, les rendant comportementalement indiscernables jusqu'à ce que le déploiement révèle quel objectif le système a réellement appris.

**La dynamique d'apprentissage nous aide à comprendre comment des signaux d'apprentissage identiques peuvent produire différents algorithmes appris.** Lorsque nous entraînons des réseaux neuronaux, nous n'installons pas directement des objectifs — nous créons des pressions de sélection guidées par nos signaux d'apprentissage qui favorisent certains comportements par rapport à d'autres. Il y a plusieurs questions à explorer ici - Quel espace le signal d'apprentissage guide-t-il le modèle à travers ? Pouvons-nous façonner l'espace d'une certaine manière ? Ce sont ce qu'on appelle les paysages de perte. Leur géométrie, la dépendance au chemin depuis l'initialisation aléatoire, et les biais inductifs comme la simplicité déterminent systématiquement quelles solutions algorithmiques sont découvertes. Comprendre ces dynamiques nous aide à déterminer quels algorithmes sont appris pendant l'entraînement, ce qui détermine à son tour les objectifs du modèle final que nous déployons.

**La surgénéralisation des objectifs devient de plus en plus préoccupante à mesure que les systèmes développent une orientation sophistiquée vers les objectifs.** Même si plusieurs algorithmes qui affichent le même comportement à la fin de l'entraînement sont possibles, ils ne sont pas tous préoccupants. La section sur l'orientation vers les objectifs commence à examiner quand les modèles comportementalement indiscernables deviennent dangereux. Les modèles peuvent avoir différents degrés d'orientation vers les objectifs, allant de la reconnaissance de motifs très complexes et des heuristiques apprises aux systèmes mettant en œuvre de véritables processus d'optimisation interne. Plus le degré d'orientation vers les objectifs qu'un système développe est élevé, plus la surgénéralisation des objectifs devient préoccupante, car ces systèmes pourraient systématiquement poursuivre des objectifs à travers divers contextes et obstacles.

**Une orientation sophistiquée vers les objectifs conduit à un comportement de préservation des objectifs, qui peut aboutir à la manipulation.** La forme la plus dangereuse survient lorsque les systèmes orientés vers les objectifs développent une conscience situationnelle de leur processus d'apprentissage et des capacités de planification à long terme. Ils pourraient choisir de dissimuler stratégiquement des objectifs mal alignés pour préserver leurs véritables objectifs jusqu'à ce qu'il n'y ait plus de menace de modification. Nous vous présentons des preuves empiriques tirées de démonstrations de simulation d'alignement, de manipulation contextuelle et de désalignement agentique pour souligner que ce type de résultat est possible. Ensuite, nous examinons également les deux aspects de l'argument concernant la probabilité que le comportement manipulateur survienne comme conséquence du processus d'apprentissage automatique. Le reste du chapitre se concentre sur la réponse à la question - "que pouvons-nous faire à ce sujet ?". Les sections suivantes servent de liens entre les chapitres sur la surgénéralisation des objectifs, les évaluations et l'interprétabilité.

**Les méthodes de détection se concentrent sur la découverte de comportements comme l'orientation vers les objectifs, la préservation des objectifs et la manipulation.** En s'appuyant sur les techniques du chapitre sur les évaluations, nous examinons les méthodes comportementales qui surveillent les traces de raisonnement externes et les techniques d'interprétabilité comme les sondes linéaires, les auto-encodeurs parcimonieux et la manipulation d'activation. Il existe de nombreuses capacités différentes et combinaisons de capacités à tester.

**Les atténuations se concentrent sur la prévention et la correction de la surgénéralisation des objectifs tout au long du pipeline de développement.** Nous explorons les interventions pendant l'entraînement comme l'apprentissage antagoniste et l'apprentissage par curriculum, les techniques post-entraînement comme les vecteurs de direction et l'édition de modèles, et les garanties au moment du déploiement, y compris la surveillance en temps réel et l'isolation. Comme pour tous les défis de sécurité de l'IA explorés dans ce livre, nous préconisons une approche de défense en profondeur où plusieurs mesures de détection et d'atténuation sont superposées pour fournir des défenses robustes contre la surgénéralisation des objectifs.