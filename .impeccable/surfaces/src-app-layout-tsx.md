---
version: 1
slug: "src-app-layout-tsx"
primary_target: "src/app/layout.tsx"
related_targets: ["src/app/page.tsx","src/app/fiches/page.tsx","src/app/fiches/[id]/page.tsx"]
---

# Surface brief: Revizator app (toutes les routes)

Scope: `/` (nouvelle fiche + résultat), `/fiches` (sommaire), `/fiches/[id]` (fiche), shell commun. Mode: Operate (Read pour la relecture de la synthèse).

Audience et tâche: étudiants de la promo ; coller un cours, attendre la génération, relire la synthèse, s'auto-tester sur les 3 questions. Ordinateur et téléphone à parts égales pour la relecture.

À éviter (réponse utilisateur): look « template IA », austère, pénible à lire.

Périmètre confirmé: interface + expérience de révision côté front (retourner les réponses, auto-évaluation, score local). Routes, API, logique et noms du TD inchangés.

## Direction contract

THESIS: La fiche est une double page de cahier de révision parascolaire : rubriques en aplats quadri, « L'essentiel » puis « Je me teste », corrigés imprimés tête-bêche. Refuse la carte blanche arrondie + accent indigo du standard des apps d'étude.

OWN-WORLD: Papier blanc, encre noire, trois encres de process à rôle unique : cyan = savoir (aplat et bandeau de « L'essentiel »), magenta = auto-test (pastilles numérotées, bandeau « Je me teste », score), jaune = surligneur (sélection, termes clés, signal d'état). Titres Archivo gras à largeur variable, bandeaux de rubrique en Archivo condensé capitales ; texte Atkinson Hyperlegible Next. Filets noirs, coins droits, sommaire à points de conduite.

STORY: L'étudiant voit d'emblée ce qu'il obtiendra (mode d'emploi des rubriques), colle son cours, reçoit une fiche lisible, se teste en retournant chaque corrigé, note s'il savait, retrouve ses fiches dans un sommaire.

FIRST VIEWPORT: `/` : bandeau de titre courant (Revizator + barre CMJN, navigation à droite). Colonne gauche ~7/12 : titre « Nouvelle fiche » en grand Archivo, phrase d'accroche, champ titre, zone de cours avec jauge de longueur réglée 200–8000, bouton noir « Générer la fiche » visible sans défiler sur 1440×900. Colonne droite ~5/12 : « Mode d'emploi » montrant l'anatomie d'une fiche (aplat cyan, 3 pastilles magenta, bande de corrigés à l'envers).

FORM: Manuel parascolaire (cahiers de révision « L'essentiel / Je me teste / corrigés »), position 1 de la liste ordonnée, choisi par l'utilisateur comme pick ; seed key 43fda804. Interaction signature : le corrigé tête-bêche pivote de 180° pour se lire, puis « Je savais / À revoir » alimente le score « … / 3 ».

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
