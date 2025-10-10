---
title: Gouvernance
chapter_number: 4
reading_time_core: 73 min
reading_time_optional: 5 min
reading_time_appendix: 15 min
authors:
- Charles Martinet
- Markov Grey
- Su Cizem
affiliations:
- Centre Français pour la Sécurité de l'IA (CeSIA)
acknowledgements:
- Charbel-Raphael Segerie
- Léo Karoubi
- Ines Belhadj
google_docs_link: https://docs.google.com/document/d/1CzLVjahQ5fMeR532dQPzlQRoFADEqvSM1-nLIapnuwc/edit?usp=sharing
download_link: https://github.com/CentreSecuriteIA/textbook/blob/main/latex/AI%20Safety%20Atlas%20-%20Governance.pdf
feedback_link: https://forms.gle/ZsA4hEWUx1ZrtQLL9
video_link: https://www.youtube.com/watch?v=FSKuDqze9es
teach_link: https://docs.google.com/document/d/1im_i6e9xEAe-koYlurYdn26n9h7pFX2HksnRfQmWxTQ/edit?usp=sharing
sidebar_position: 4
slug: /chapters/04/
---
import Quote from "@site/src/components/chapters/Quote";
import Note from "@site/src/components/chapters/Note";
import Definition from "@site/src/components/chapters/Definition";

import Figure from "@site/src/components/chapters/Figure";

# Introduction

<Quote speaker="The Bletchley Declaration" position="Signé par 28 pays, y compris tous les leaders en IA, et l&#39;UE, 2023" date="2023" source="">

Des risques substantiels peuvent découler d'une mauvaise utilisation intentionnelle ou de problèmes involontaires de contrôle liés à l'alignement avec l'intention humaine. Ces problèmes sont en partie dus au fait que ces capacités ne sont pas entièrement comprises [...] Il existe un potentiel de préjudice grave, voire catastrophique, délibéré ou non intentionnel, découlant des capacités les plus significatives de ces modèles d'IA.

</Quote>

L'intelligence artificielle a le potentiel de révolutionner de nombreux aspects de la société, des soins de santé aux transports en passant par la recherche scientifique. Les avancées récentes ont démontré la capacité de l'IA à vaincre les champions du monde au jeu de Go, à générer des images photoréalistes à partir de descriptions textuelles et à découvrir de nouveaux antibiotiques. Cependant, ces développements soulèvent également d'importants défis et risques, notamment le déplacement d'emplois, les atteintes à la vie privée et la possibilité que les systèmes d'IA commettent des erreurs lourdes de conséquences ou soient mal utilisés (voir le Chapitre 2 sur les Risques pour l'ensemble du spectre). Bien que la recherche technique sur la sécurité de l'IA soit nécessaire pour garantir que les systèmes d'IA se comportent de manière fiable et s'alignent sur les valeurs humaines à mesure qu'ils deviennent plus capables et autonomes, elle est à elle seule insuffisante pour répondre à l'ensemble des défis posés par les systèmes d'IA avancés.

La portée de la gouvernance de l'IA étant large, ce chapitre se concentrera principalement sur les risques à grande échelle associés à l'IA frontière, des modèles de base hautement capables qui pourraient posséder des capacités dangereuses suffisantes pour présenter des risques graves pour la sécurité publique ([Anderljung et al., 2023](https://arxiv.org/abs/2307.03718)). Nous examinerons pourquoi la gouvernance est nécessaire, comment elle complète les efforts techniques de sécurité de l'IA, et les principaux défis et opportunités dans ce domaine en rapide évolution. Notre discussion se concentrera sur la gouvernance des applications commerciales et civiles de l'IA, car la gouvernance de l'IA militaire implique un ensemble distinct de questions qui dépassent le cadre de ce chapitre.

<Figure src="./img/ek4_Image_1.png" alt="Entrez la description alternative de l&#39;image" number="1" label="4.1" caption="Distinction des modèles d&#39;IA selon leur niveau de danger potentiel et leur généralité. Nous nous concentrons ici sur les modèles d&#39;IA frontière ([Gouvernement britannique, 2023](https://www.gov.uk/government/publications/frontier-ai-capabilities-and-risks-discussion-paper/frontier-ai-capabilities-and-risks-discussion-paper))" />

<Definition term="Gouvernance de l&#39;IA" source="([Maas, 2022](https://verfassungsblog.de/paths-untaken/))" number="1" label="4.1">

L'étude et la formation des systèmes de gouvernance - y compris les normes, politiques, lois, processus, politiques et institutions - qui affectent la recherche, le développement, le déploiement et l'utilisation des systèmes d'IA existants et futurs de manière à façonner positivement les résultats sociétaux. Elle englobe à la fois la recherche sur les approches de gouvernance efficaces et la mise en œuvre pratique de ces approches.

</Definition>

**La gouvernance de l'IA n'est pas la même que la gouvernance technologique traditionnelle.** La gouvernance technologique traditionnelle repose sur plusieurs hypothèses clés qui s'effondrent lorsqu'elles sont appliquées à l'IA. Nous supposons généralement que nous pouvons prédire comment une technologie sera utilisée et ses impacts probables, que nous pouvons contrôler efficacement sa voie de développement, et que nous pouvons réglementer des applications ou utilisations finales spécifiques. Par exemple, la gouvernance pharmaceutique utilise des essais cliniques et des processus d'approbation basés sur les applications médicales prévues, tandis que la technologie nucléaire est contrôlée par des traités internationaux, des garanties et la surveillance d'installations et de matériaux spécifiques. Ces approches fonctionnent lorsque les technologies suivent des voies de développement relativement prévisibles et ont des applications claires. Pour comprendre ce qui rend la gouvernance de l'IA particulièrement difficile, nous pouvons examiner l'IA à travers trois perspectives différentes qui nécessitent chacune des approches de gouvernance différentes ([Dafoe, 2022](https://academic.oup.com/edited-volume/41989/chapter-abstract/408516484); [Buchanan, 2020](https://cset.georgetown.edu/publication/the-ai-triad-and-what-it-means-for-national-security-strategy/)).

**L'IA comme technologie à usage général**

**L'IA transforme simultanément de nombreux secteurs, rendant insuffisante la réglementation sectorielle.** Comme l'électricité ou les ordinateurs avant elle, l'IA peut remodeler simultanément la santé, la finance, les transports et l'éducation. La gouvernance technologique traditionnelle se concentre généralement sur des applications spécifiques - nous réglementons différemment les dispositifs médicaux et les automobiles. Mais lorsqu'un seul système d'IA peut diagnostiquer des maladies, négocier des actions et conduire des voitures, nos silos réglementaires s'effondrent. Les impacts s'étendent à travers la société d'une manière qui rend la réglementation ciblée insuffisante ([Buchanan, 2020](https://cset.georgetown.edu/publication/the-ai-triad-and-what-it-means-for-national-security-strategy/)).

**L'IA comme technologie de l'information**

**L'IA traite et génère l'information de manière sans précédent.** Contrairement aux systèmes d'information traditionnels qui stockent et récupèrent des données, l'IA peut créer un contenu entièrement nouveau - des images photoréalistes aux textes convaincants en passant par les voix synthétiques. Cela crée des défis sans précédent en matière de sécurité, de confidentialité et d'intégrité de l'information. Les cadres de gouvernance traditionnels n'ont pas été conçus pour gérer des technologies capables de générer et de manipuler rapidement l'information à grande échelle ([Brundage et al., 2018](https://arxiv.org/pdf/1802.07228)). La vitesse et la portée des impacts potentiels sur l'information dépassent les mécanismes de contrôle traditionnels.

**L'IA comme technologie de l'intelligence**

**L'IA introduit des défis de contrôle uniques à mesure que les systèmes deviennent plus capables.** À mesure que les systèmes d'IA approchent et dépassent potentiellement les capacités cognitives humaines dans divers domaines, ils peuvent développer des moyens sophistiqués pour échapper aux contrôles ou poursuivre des objectifs non intentionnels. Nous en voyons déjà des aperçus avec des modèles de langage qui peuvent s'engager dans la tromperie ou la manipulation lors de la poursuite d'objectifs ([Ganguli et al., 2022](https://arxiv.org/abs/2202.07785)). Il existe plusieurs capacités dangereuses (se référer aux chapitres 1 et 2) qui deviennent encore plus aiguës lorsqu'on considère que les systèmes d'IA pourraient développer ces capacités sans être explicitement programmés pour cela ([Woodside, 2024](https://arxiv.org/abs/2206.07682)). L'aspect intelligence de l'IA crée une dynamique où la technologie gouvernée pourrait activement résister ou contourner les mesures de gouvernance, un défi sans précédent dans la réglementation technologique.

<Figure src="./img/evb_Image_2.png" alt="Entrez la description alternative de l&#39;image" number="2" label="4.2" caption="La perspective bidimensionnelle des capacités et de la généralité. Les différentes courbes représentent différents chemins vers l&#39;AGI. Chaque point sur le chemin correspond à un niveau différent de capacité d&#39;IA. La trajectoire de développement spécifique est difficile à prévoir mais les progrès sont continus." />

**Problèmes fondamentaux de gouvernance**

**Comment ces trois perspectives créent-elles des défis de gouvernance ?** La nature mixte de l'IA en tant que technologie à usage général, de traitement de l'information et potentiellement intelligente donne lieu à trois problèmes fondamentaux qui rendent les approches de gouvernance traditionnelles inadéquates.

<Figure src="./img/fSC_Image_3.png" alt="Entrez la description alternative de l&#39;image" number="3" label="4.3" caption="Résumé des trois défis réglementaires posés par l&#39;IA frontière ([Anderljung, 2023](https://arxiv.org/pdf/2307.03718))" />

## Problèmes de gouvernance {#01}

### Capacités Inattendues {#01-01}

**Les systèmes d'IA développent des capacités surprenantes qui ne faisaient pas partie de leur conception initiale.** Les modèles fondamentaux ont montré des capacités "émergentes" qui apparaissent soudainement lorsque les modèles s'étendent avec plus de données, de paramètres et de puissance de calcul. GPT-3 a démontré de manière inattendue la capacité d'effectuer des calculs arithmétiques de base, tandis que les modèles ultérieurs ont montré des capacités de raisonnement émergentes qui ont surpris même leurs créateurs ([Ganguli et al., 2022](https://arxiv.org/abs/2202.07785); [Wei et al., 2022](https://arxiv.org/abs/2206.07682)). Des évaluations récentes ont révélé que les modèles de pointe peuvent mener de manière autonome des recherches scientifiques de base, pirater des systèmes informatiques et manipuler les humains par la persuasion, aucun de ces éléments n'étant des objectifs explicites d'entraînement ([Phuong et al., 2024](https://arxiv.org/abs/2403.13793); [Boiko et al., 2023](https://arxiv.org/abs/2304.05332); [Turpin et al., 2023](https://arxiv.org/abs/2305.04388); [Fang et al., 2024](https://arxiv.org/abs/2402.06664)).

<Figure src="./img/qAQ_Image_4.png" alt="Entrez la description alternative de l&#39;image" number="4" label="4.4" caption="Exemple de capacités inattendues. Graphiques montrant plusieurs métriques qui s&#39;améliorent soudainement et de manière imprévisible à mesure que les modèles augmentent en taille ([Ganguli et al., 2022](https://arxiv.org/abs/2202.07785))" />

L'évaluation de l'IA en est encore à ses débuts : les cadres de test manquent de meilleures pratiques établies, et le domaine doit encore évoluer vers une science fiable ([Trusilo, 2024](https://www.tandfonline.com/doi/full/10.1080/15027570.2023.2213985)). Bien que les évaluations puissent révéler certaines capacités, elles ne peuvent pas garantir l'absence de menaces inconnues, prévoir de nouvelles capacités émergentes, ou évaluer les risques des systèmes autonomes ([Barnett & Thiergart, 2024](https://arxiv.org/html/2412.08653v1)). La prévisibilité elle-même est un domaine de recherche naissant, avec des lacunes majeures dans notre capacité à anticiper le comportement des modèles actuels, sans parler des futurs ([Zhou et al., 2024](https://arxiv.org/html/2310.06167v3)). Même les cadres de test et d'évaluation les plus complets peinent face aux comportements complexes et imprévisibles de l'IA ([Wojton et al., 2020](https://testscience.org/wp-content/uploads/formidable/20/Autonomy-Lit-Review.pdf)).

### Sécurité du déploiement {#01-02}

**Une fois déployés, les systèmes d'IA peuvent être détournés pour des applications nuisibles au-delà de leur utilisation prévue.** Le même modèle de langage entraîné pour un dialogue utile peut générer de la désinformation, faciliter des cyberattaques ou aider à concevoir des armes biologiques. Les utilisateurs découvrent régulièrement de nouvelles capacités grâce à des invites astucieuses qui contournent les mesures de sécurité, appelées "jailbreaks", qui déverrouillent des fonctionnalités dangereuses ([Solaiman et al., 2024](https://arxiv.org/abs/2306.05949); [Marchal et al., 2024](https://arxiv.org/abs/2406.13843); [Hendrycks et al., 2023](https://arxiv.org/abs/2306.12001)).

<Figure src="./img/bTo_Image_5.png" alt="Entrez la description alternative de l&#39;image" number="5" label="4.5" caption="Un schéma de l&#39;utilisation d&#39;agents LLM autonomes pour pirater des sites web ([Fang et al., 2024](https://arxiv.org/abs/2402.06664)). Une fois qu&#39;une technologie à double usage est publique, elle peut être utilisée à des fins bénéfiques et nuisibles." />

**L'essor des agents d'IA amplifie les risques liés au déploiement.** Nous observons maintenant des agents d'IA autonomes qui peuvent enchaîner les capacités des modèles de manières nouvelles, utilisant des outils et prenant des actions dans le monde réel. Ces agents peuvent poursuivre des objectifs complexes sur de longues périodes, rendant leur comportement encore plus difficile à prédire et à contrôler après le déploiement ([Fang et al., 2024](https://arxiv.org/abs/2402.06664)).

### Prolifération {#01-03}

**Les capacités de l'IA se propagent rapidement par de multiples canaux, rendant le confinement pratiquement impossible.** Les modèles peuvent être volés par des cyberattaques, divulgués par des initiés, ou reproduits par des concurrents en quelques mois. La réplication rapide en open-source des capacités similaires à ChatGPT a conduit à des modèles dont les fonctionnalités de sécurité ont été supprimées et à la découverte de nouvelles capacités dangereuses par l'expérimentation communautaire ([Seger et al., 2023](https://arxiv.org/abs/2311.09227)). Avec les modèles basés sur des API, des techniques comme la distillation de modèles peuvent même extraire des capacités sans accès direct aux poids du modèle ([Nevo et al., 2024](https://www.rand.org/content/dam/rand/pubs/research_reports/RRA2800/RRA2849-1/RAND_RRA2849-1.pdf)). **Le confinement physique ne fonctionne pas pour les biens numériques.** Contrairement aux matériaux nucléaires ou aux pathogènes dangereux, les modèles d'IA ne sont que des motifs de nombres qui peuvent être copiés instantanément et transmis mondialement. Une fois que les capacités existent, contrôler leur propagation devient une bataille perdue contre la nature fondamentale de l'information numérique.

<Figure src="./img/lrJ_Image_6.png" alt="Entrez la description alternative de l&#39;image" number="6" label="4.6" caption="Exemples de Prolifération ([Özcan, 2024](https://cfg.eu/ai-governance-challenges-part-3-proliferation/))." />

## Cibles de gouvernance {#02}

Les défis uniques associés à la gouvernance de l'IA signifient que nous devons choisir avec soin où et comment intervenir dans le développement de l'IA. Cela nécessite d'identifier à la fois quoi gouverner (cibles) et comment le gouverner (mécanismes) ([Anderljung et al., 2023](https://arxiv.org/abs/2307.03718) ; [Reuel & Bucknall, 2024](https://www.governance.ai/research-paper/open-problems-in-technical-ai-governance)). La gouvernance doit intervenir à des points qui traitent les défis fondamentaux avant qu'ils ne se manifestent. Nous ne pouvons pas attendre que des capacités dangereuses émergent ou prolifèrent avant d'agir. Au lieu de cela, nous devons identifier les points d'intervention dans le pipeline de développement de l'IA qui nous aideront à façonner le développement de l'IA de manière proactive.

**Les cibles de gouvernance efficaces partagent trois propriétés essentielles :**

- **Mesurabilité :** Nous devons être en mesure de suivre et de vérifier ce qui se passe. La quantité de puissance de calcul utilisée pour l'entraînement peut être mesurée en unités précises (opérations en virgule flottante), permettant ainsi de définir des seuils clairs et de surveiller la conformité ([Sastry et al., 2024](https://arxiv.org/abs/2402.08797)).

- **Contrôlabilité :** Il doit exister des mécanismes concrets pour influencer la cible. Il ne suffit pas d'identifier ce qui compte, nous avons besoin de moyens pratiques pour le façonner. La chaîne d'approvisionnement des semi-conducteurs, par exemple, présente des points de contrôle clairs où les contrôles à l'exportation peuvent efficacement limiter l'accès aux puces avancées ([Heim et al., 2024](https://www.governance.ai/research-paper/governing-through-the-cloud)).

- **Pertinence :** Les cibles doivent aborder les aspects fondamentaux du développement de l'IA qui façonnent réellement les capacités et les risques. Réglementer des aspects superficiels comme les interfaces utilisateur pourrait être facile mais n'empêchera pas l'émergence de capacités dangereuses. Les intrants essentiels comme le calcul et les données déterminent directement quels types de systèmes d'IA peuvent être construits ([Anderljung et al., 2023](https://arxiv.org/abs/2307.03718))

**Quelles cibles montrent le plus de promesses ?** Dans le pipeline de développement de l'IA, plusieurs points d'intervention répondent à ces critères. Au début du développement, nous pouvons cibler l'infrastructure de calcul nécessaire à l'entraînement et les données qui façonnent les capacités du modèle. Pendant et après le développement, nous pouvons mettre en œuvre des cadres de sécurité, des systèmes de surveillance et des contrôles de déploiement ([Anderljung et. al, 2023](https://arxiv.org/abs/2307.03718) ; [Heim et al., 2024](https://www.governance.ai/analysis/computing-power-and-the-governance-of-ai) ; [Hausenloy et al., 2024](https://arxiv.org/abs/2412.03824)). Chaque cible offre différentes opportunités et fait face à différents défis, que nous explorerons dans les sections suivantes.