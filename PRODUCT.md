# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

L'auteur du projet et les étudiants de sa promo. Ils collent le texte d'un cours, obtiennent une fiche de révision, puis la relisent et s'auto-interrogent avant un partiel. La génération se fait plutôt sur ordinateur ; la relecture des fiches se fait autant sur ordinateur que sur téléphone.

## Product Purpose

Revizator transforme un cours collé en fiche de révision : une synthèse (150 à 300 mots, courts paragraphes et listes « - ») et exactement trois questions de compréhension avec leur réponse. Chaque fiche est enregistrée et reste consultable. Le succès : l'étudiant retrouve ses fiches, les relit sans effort et vérifie qu'il a compris avant l'examen.

## Positioning

La fiche est produite uniquement à partir du cours fourni, sans information extérieure, et elle finit par une auto-évaluation (question puis réponse cachée) plutôt que par un simple résumé.

## Operating Context

- Projet de cours (module cloud, série de TD) : TD1 pose l'app serverless + IA, TD2 ajoutera authentification et règles RLS, limitation de débit, génération asynchrone et import PDF, TD3 une pipeline CI (eslint).
- Parcours actuels : `/` (titre + texte du cours → génération, puis fiche affichée en dessous), `/fiches` (liste par date), `/fiches/[id]` (détail d'une fiche).
- La génération prend plusieurs secondes et peut échouer (quota 429, texte trop volumineux 413, délai 504, format 502, erreur d'enregistrement 500) ; chaque cas a déjà son message en français.

## Capabilities and Constraints

- Next.js 16.4 (App Router, `src/`, TypeScript, Tailwind v4), modèle via API compatible OpenAI (Groq), Supabase (table `fiches`, clé secrète côté serveur), déploiement Vercel.
- Limites : titre 150 caractères max, texte entre 200 et 8000 caractères.
- Les routes, l'API, la logique et les noms en français du TD (Fiche, genererFiche, LIMITES…) sont conservés, car les TD suivants s'appuient dessus. Le travail d'interface et l'expérience de révision côté front peuvent évoluer librement ; le back ne change pas.
- Pas encore de comptes : toutes les fiches sont visibles par tous jusqu'au TD2.

## Brand Commitments

- Nom : Revizator.
- Interface et identifiants de code en français ; tutoiement ou vouvoiement non tranché (l'existant vouvoie : « Collez un cours… »).

## Evidence on Hand

Aucun logo, aucune image, aucun témoignage. Ne pas inventer de chiffres d'usage, d'utilisateurs ou de promesses (taux de réussite, nombre de fiches générées…).

## Product Principles

1. La relecture prime : une fiche doit se lire confortablement, longtemps, sur ordinateur comme sur téléphone.
2. Réviser, pas seulement résumer : les questions sont un moment d'auto-évaluation, pas une annexe.
3. Honnêteté du contenu : l'app montre ce que le modèle a produit à partir du cours, sans enjoliver.
4. Chaque état compte : attente de génération, erreurs et liste vide sont des moments de l'expérience, pas des oublis.

## Accessibility & Inclusion

Confort de lecture prioritaire (taille, interlignage, contraste suffisants pour une longue session de révision). Pas d'exigence de norme formelle établie.
