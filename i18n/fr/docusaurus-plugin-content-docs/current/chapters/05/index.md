---
title: Évaluations
chapter_number: 5
chapter_description: Nous avons besoin d'une méthode systématique pour mesurer les
  progrès en matière de sécurité.
reading_time_core: 128 min
reading_time_optional: 27 min
authors:
- Markov Grey
- Charbel-Raphael Segerie
affiliations:
- Centre Français pour la Sécurité de l'IA (CeSIA)
acknowledgements:
- Maxime Riché
- Martin
- Fabien Roger
- Jeanne Salle
- Camille Berger
- Leo Karoubi
arxiv_link: https://arxiv.org/abs/2505.05541
atlas_link: https://ai-safety-atlas.com/chapters/05/
google_docs_link: https://docs.google.com/document/d/1KI95w27Ce7yWoynE11PJ94IXK0gT0NwP8091s06P7wM/edit?usp=sharing
alignment_forum_link: https://www.lesswrong.com/posts/CwdCYmsutwXwnYtEF/paper-safety-by-measurement-a-systematic-literature-review
teach_link: https://docs.google.com/document/d/1im_i6e9xEAe-koYlurYdn26n9h7pFX2HksnRfQmWxTQ/edit?usp=sharing
feedback_link: https://forms.gle/ZsA4hEWUx1ZrtQLL9
sidebar_position: 5
slug: /chapters/05/
---
import Quote from "@site/src/components/chapters/Quote";
import Note from "@site/src/components/chapters/Note";
import Definition from "@site/src/components/chapters/Definition";

import Figure from "@site/src/components/chapters/Figure";

# Introduction

<Quote speaker="Lord Kelvin" position="Mathématicien, physicien et ingénieur" date="1889" source="([Oxford Reference, 2016](https://www.oxfordreference.com/display/10.1093/acref/9780191826719.001.0001/q-oro-ed4-00006236))">

Lorsque vous pouvez mesurer ce dont vous parlez et l'exprimer en chiffres, vous en savez quelque chose ; lorsque vous ne pouvez pas l'exprimer en chiffres, votre connaissance est maigre et insatisfaisante ; ce peut être le début de la connaissance, mais vous n'avez guère, dans votre réflexion, atteint le stade de la science.

</Quote>

**L'écart entre ce que les systèmes d'IA peuvent faire et ce que nous pouvons mesurer de manière fiable crée un défi fondamental en matière de sécurité.** Fin 2024, des chercheurs en IA ont créé FrontierMath, un benchmark de problèmes exceptionnellement difficiles qu'ils prédisaient comme devant "*résister aux IA pendant plusieurs années*". Quelques mois plus tard seulement, le modèle o3 d'OpenAI atteignait une précision de 25,2% sur ces problèmes supposés insurmontables. Ce schéma se répète dans le développement de l'IA : les outils conçus pour mesurer les capacités de l'IA deviennent obsolètes presque immédiatement, les modèles les dépassant rapidement. Alors que les systèmes d'IA approchent des capacités potentiellement transformatrices dans des domaines comme la cybersécurité, le fonctionnement autonome et la planification stratégique, cet écart d'évaluation devient de plus en plus dangereux. Nous ne pouvons pas nous permettre de découvrir l'étendue complète des capacités avancées de l'IA à travers leurs impacts émergents dans le monde réel.

**Les benchmarks fournissent une standardisation de la mesure mais échouent actuellement à capturer les risques complexes posés par les systèmes d'IA avancés.** Le développement précoce de l'IA a fait face à une crise de mesure similaire à l'ingénierie pré-standardisée—sans métriques fiables, les progrès étaient chaotiques et imprévisibles. Les benchmarks ont révolutionné le développement de l'IA en créant des métriques standardisées permettant des comparaisons significatives entre les systèmes. Bien que les benchmarks comme MMLU, GPQA ou FrontierMath soient extrêmement utiles, ils restent insuffisants pour prédire le comportement dans le monde réel. Ils ne parviennent pas à mesurer ce qui se passe lorsque les modèles sont poussés à leurs limites ou fonctionnent dans des environnements complexes où émergent des combinaisons de capacités inattendues. À mesure que nous avançons vers des systèmes d'IA hautement capables, nous avons besoin de garanties de sécurité plus solides dans un plus large éventail de scénarios que ce que les benchmarks seuls peuvent fournir.

**Les risques de sécurité émergent des interactions entre les capacités, créant un défi combinatoire.** Les capacités individuelles comme la conscience situationnelle ou la tromperie semblent gérables lorsqu'elles sont mesurées isolément, mais leur combinaison crée des risques émergents fondamentalement différents de chaque capacité prise séparément. Les modèles pourraient reconnaître quand ils sont évalués et dissimuler sélectivement des capacités pendant les tests mais démontrer des comportements préoccupants lors du déploiement. Cette explosion combinatoire rend les tests complets exponentiellement plus difficiles mais essentiels pour des affirmations significatives sur la sécurité. Un modèle réussissant la plupart des benchmarks de sécurité pourrait encore receler des combinaisons dangereuses de capacités qui n'ont pas été explicitement testées. C'est pourquoi nous devons orienter la mesure des propriétés critiques de sécurité d'un système vers des évaluations complètes.

**L'évaluation efficace de la sécurité nécessite de mesurer trois propriétés distinctes : les capacités, les propensions et le contrôle.** Les évaluations des capacités dangereuses établissent des limites supérieures sur ce que les modèles peuvent faire lorsqu'ils sont poussés à leurs limites grâce à des techniques comme l'échafaudage et l'augmentation par outils. Les évaluations des propensions révèlent les comportements que les modèles ont tendance à exhiber par défaut, mesurant les tendances comportementales plutôt que simplement les capacités maximales. Les évaluations de contrôle vérifient si les protocoles de sécurité restent efficaces lorsque les modèles tentent activement de les contourner. Cette taxonomie en trois parties fournit un cadre systématique pour la mesure de la sécurité qui aide à répondre aux questions les plus pertinentes pour la prise de décision concernant l'IA.

**L'évaluation de la sécurité nécessite des techniques comportementales et internes, chacune fournissant différentes formes de preuves.** Les techniques comportementales examinent les sorties du modèle à travers des approches comme le red teaming, qui tente systématiquement de provoquer des comportements préoccupants ; le fine-tuning supervisé, qui fait émerger des capacités en modifiant les poids plutôt qu'en se contentant de prompts ; et l'échantillonnage best-of-N, qui examine plusieurs réponses potentielles pour comprendre les distributions de sortie. Ces techniques peuvent établir des limites supérieures sur les capacités potentielles mais peinent à nous dire "pourquoi" les modèles génèrent certaines sorties. Les techniques internes complètent cela en examinant directement les mécanismes du modèle. Par exemple, les autoencodeurs parcimonieux ont réussi à extraire des caractéristiques interprétables liées aux comportements pertinents pour la sécurité, notamment la tromperie, la flagornerie et les biais. D'autres techniques comme l'interprétabilité mécaniste peuvent aider à tracer les voies computationnelles à travers le modèle, la sécurité énumérative peut cataloguer les concepts que le modèle a encodés, et l'ingénierie des représentations peut examiner comment les modèles encodent l'information. Les techniques d'évaluation comportementales et internes sont complémentaires et fournissent ensemble des garanties de sécurité plus solides que chaque approche seule.

**Les cadres d'évaluation aident à transformer les mesures en décisions concrètes de développement et de déploiement.** Plutôt que de s'appuyer sur des réponses ad hoc aux capacités, des cadres comme les Politiques de Mise à l'Échelle Responsable d'Anthropic établissent des "Niveaux de Sécurité IA" inspirés de choses comme les protocoles de confinement en biosécurité, chaque niveau exigeant des exigences d'évaluation et des mesures de sécurité de plus en plus strictes. Ces cadres créent des "portes d'évaluation" qui déterminent quand la mise à l'échelle peut se poursuivre en toute sécurité—exigeant que les modèles passent des évaluations en cybersécurité, biosécurité et réplication autonome avant que le développement ne continue. En intégrant les évaluations dans les structures de gouvernance, nous créons des approches systématiques pour gérer le risque lié à l'IA plutôt que de s'appuyer sur des décisions ad hoc.

**Les évaluations doivent être systématiquement conçues pour maintenir la qualité et l'échelle à travers des modèles de plus en plus complexes.** La conception de l'évaluation nécessite une considération attentive des affordances—les ressources et opportunités fournies au modèle pendant les tests. En faisant varier systématiquement les affordances du minimal (restriction des outils et ressources) au maximal (fourniture de tous les outils et contextes potentiellement pertinents), nous pouvons construire une image plus complète du comportement du modèle dans différentes conditions. À mesure que le nombre de propriétés pertinentes pour la sécurité augmente, l'automatisation de l'évaluation devient nécessaire. Nous pouvons potentiellement utiliser des évaluations écrites par le modèle pour aider à résoudre les défis de mise à l'échelle.

**Malgré des progrès significatifs, les évaluations d'IA font face à des limitations fondamentales qui menacent leur fiabilité.** L'asymétrie entre prouver la présence versus l'absence de capacités signifie que nous ne pouvons jamais être certains d'avoir détecté tous les risques potentiels. Les évaluations peuvent confirmer de manière concluante qu'un modèle possède certaines capacités mais ne peuvent pas prouver définitivement leur absence. Les défis techniques incluent la sensibilité de la mesure—les performances peuvent varier en fonction de changements apparemment triviaux dans les formats de prompts—et l'explosion combinatoire des cas de test à mesure que nous ajoutons de nouvelles dimensions à évaluer. Le désalignement pourrait conduire au "sandbagging" des modèles (sous-performance stratégique lors des évaluations), la recherche montre que les modèles de langage peuvent être amenés à sous-performer sélectivement sur les tests de capacités dangereuses tout en maintenant leurs performances sur les benchmarks généraux. Les incitations organisationnelles pourraient conduire les laboratoires eux-mêmes à faire du "safety washing" (présenter de manière trompeuse les améliorations de capacités comme des avancées en matière de sécurité). Ces défis soulignent la nécessité de poursuivre la recherche sur des méthodologies d'évaluation plus robustes et des arrangements institutionnels qui soutiennent une évaluation véritablement indépendante.

<Figure src="./img/6Dq_Image_1.png" alt="Entrez la description alternative de l&#39;image" number="1" label="5.1" caption="Aperçu du contenu du chapitre." />

Cette introduction vous a donné l'aperçu général de nombreux concepts dont nous parlerons tout au long de ce chapitre. Les sections suivront largement l'ordre dans lequel nous avons introduit les idées ci-dessus. Nous commençons par explorer comment les benchmarks ont façonné le développement de l'IA.