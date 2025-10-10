---
title: Risques
chapter_number: 2
reading_time_core: 92 min
reading_time_optional: 28 min
reading_time_appendix: 14 min
authors:
- Markov Grey
- Charbel-Raphaël Segerie
affiliations:
- Centre Français pour la Sécurité de l'IA (CeSIA)
acknowledgements:
- Jeanne Salle
- Charles Martinet
- Vincent Corruble
- Sebastian Gil
- Alejandro Acelas
- Evander Hammer
- Mo Munem
- Mateo Rendon
- Kieron Kretschmar
- Camille Berger
google_docs_link: https://docs.google.com/document/d/1DcQUax0bZ-IABjmwER921g0ryuKQv4oXyFLHwP-8U-o/edit?usp=sharing
video_link: https://www.youtube.com/watch?v=dhr4u-w75aQ
teach_link: https://docs.google.com/document/d/1im_i6e9xEAe-koYlurYdn26n9h7pFX2HksnRfQmWxTQ/edit?usp=sharing
arxiv_link: https://arxiv.org/abs/2508.13700
sidebar_position: 2
slug: /chapters/02/
---
import Quote from "@site/src/components/chapters/Quote";
import Note from "@site/src/components/chapters/Note";
import Definition from "@site/src/components/chapters/Definition";

import Figure from "@site/src/components/chapters/Figure";

# Introduction

Le chapitre précédent a exploré les capacités en rapide progression de l'IA à travers les lois d'échelle, la leçon amère et les scénarios potentiels de décollage. Nous avons vu comment plus de puissance de calcul, de données et d'améliorations algorithmiques entraînent des gains de capacités constants dans tous les domaines. Mais pourquoi l'augmentation des capacités devrait-elle nous préoccuper ? La réponse courte est que des systèmes d'IA plus capables créent des risques à plus grande échelle.

<Figure src="./img/Fmp_Image_1.png" alt="Entrer la description alternative de l'image" number="1" label="2.1" caption="Avec l'augmentation des capacités, nous observons également une augmentation des risques. Selon la trajectoire de développement et le décollage, nous pourrions voir des périodes plus longues avec des risques catastrophiques potentiels, ou l'émergence soudaine de graves risques existentiels. Les courbes et les couleurs dans ce diagramme sont destinées à être illustratives et ne représentent aucune trajectoire de développement spécifique prévue." />

**Les capacités dangereuses sont des exemples spécifiques où les tendances que nous avons explorées dans le chapitre précédent suscitent des inquiétudes.** Les mêmes lois d'échelle qui améliorent les performances en matière de codage, de meilleure génération de texte, etc., pourraient également permettre des choses comme la tromperie, la manipulation, la conscience situationnelle, la réplication autonome et l'orientation vers des objectifs. Un système d'IA capable d'écrire un meilleur code pourrait aussi écrire du code pour se répliquer. Celui qui comprend les préférences humaines pourrait aussi apprendre à les manipuler. Les capacités qui stimulent les progrès de l'IA créent intrinsèquement de nouvelles catégories de risques.

**Les risques peuvent être compris selon deux dimensions - qu'est-ce qui cause les risques ? Et quelle est la gravité des risques causés.** Dans la décomposition causale, nous distinguons entre le mésusage (les humains utilisant l'IA pour nuire), le désalignement (les systèmes d'IA poursuivant de mauvais objectifs) et les risques systémiques (effets émergents de l'intégration de l'IA dans d'autres systèmes). La gravité va des préjudices individuels affectant des personnes spécifiques aux menaces existentielles qui pourraient dérailler définitivement la civilisation humaine. Cette section vous aide essentiellement à établir et à catégoriser tous les risques dont nous parlons dans ce chapitre, et d'autres qui pourraient survenir à l'avenir. Les risques ne sont pas clairement séparables, la majorité des risques se produisent principalement comme une combinaison de facteurs, mais réfléchir à ces catégories aide à des fins explicatives.

**Les risques de mésusage montrent ce qui se passe lorsque les humains utilisent les capacités de l'IA pour nuire délibérément.** Nous examinons le développement d'armes biologiques où l'IA pourrait aider à concevoir de nouveaux pathogènes, les capacités cyber qui pourraient automatiser les attaques contre les infrastructures critiques, les armes autonomes qui suppriment la supervision humaine des décisions létales, et les attaques adverses qui exploitent les vulnérabilités des systèmes d'IA. Le fil conducteur est que l'IA supprime les goulots d'étranglement précédents - un seul acteur motivé avec l'assistance de l'IA pourrait potentiellement accomplir ce qui nécessitait auparavant des équipes d'experts et des ressources importantes.

**Les risques de désalignement surviennent lorsque les systèmes d'IA fonctionnent exactement comme programmés mais poursuivent des objectifs qui entrent en conflit avec ce que nous voulions réellement.** Le contournement des spécifications se produit lorsque les systèmes trouvent des moyens inattendus de maximiser leur fonction objectif qui satisfont techniquement nos instructions mais violent nos intentions. Les virages perfides impliquent des systèmes qui semblent alignés pendant l'entraînement mais révèlent des priorités différentes une fois déployés avec des capacités suffisantes. Les scénarios d'auto-amélioration pourraient conduire à des sauts de capacité rapides qui dépassent notre capacité à comprendre ou à contrôler ces systèmes. Ce ne sont pas des scénarios de science-fiction - nous en voyons déjà les premiers exemples dans les systèmes actuels.

**Les risques systémiques émergent de la façon dont l'IA s'intègre dans les systèmes sociaux, économiques et politiques plus larges.** La concentration du pouvoir se produit lorsque les capacités de l'IA sont contrôlées par moins d'acteurs. Le chômage de masse pourrait résulter de l'automatisation éliminant la pertinence économique humaine. L'érosion épistémique se produit lorsque le contenu généré par l'IA rend de plus en plus difficile la distinction entre vérité et fiction. L'affaiblissement se développe lorsque les humains deviennent dépendants de l'IA pour les tâches cognitives que nous effectuions nous-mêmes auparavant. Les risques de verrouillage des valeurs figent les perspectives morales et politiques actuelles avant que l'humanité n'ait le temps de les faire évoluer. Ces risques ne nécessitent pas qu'un seul système d'IA se comporte mal - ils émergent des dynamiques collectives.

**Les amplificateurs de risques rendent chaque catégorie de risque plus probable et plus grave.** Les dynamiques de course créent une pression pour déployer des systèmes avant des tests de sécurité adéquats. Les accidents surviennent même avec de bonnes intentions lorsque des systèmes complexes interagissent de manière inattendue. L'indifférence des entreprises les conduit à accepter des risques connus lorsque les profits sont en jeu. Les échecs de coordination empêchent l'action collective même lorsque tout le monde s'accorde sur le problème. L'imprévisibilité signifie que les capacités émergent souvent plus rapidement que ce que les experts attendent, laissant les mesures de sécurité constamment en retard.

**Ces catégories se chevauchent et s'amplifient mutuellement dans la pratique.** Le mésusage peut permettre le désalignement en corrompant les processus d'entraînement. Les pressions systémiques peuvent aggraver le désalignement en incitant au déploiement précipité. Les amplificateurs de risques affectent toutes les catégories simultanément. La plupart des risques réels de l'IA impliqueront des combinaisons de ces facteurs plutôt que des exemples clairs d'une seule catégorie. Comprendre les connexions aide à expliquer pourquoi les mesures de sécurité isolées s'avèrent souvent insuffisantes.

Les chapitres suivants examinent les stratégies techniques, les approches de gouvernance et les méthodes d'évaluation nécessaires pour faire face à ce paysage de risques interconnectés tout en préservant l'extraordinaire potentiel de l'IA pour le bénéfice humain.