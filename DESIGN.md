---
name: Revizator
description: Un cours collé devient une double page de cahier de révision, avec « L'essentiel », « Je me teste » et des corrigés tête-bêche.
colors:
  papier: "#ffffff"
  papier-2: "#f5f5f7"
  encre: "#16161d"
  encre-2: "#4a4a57"
  encre-3: "#6b6b78"
  filet: "#16161d"
  filet-doux: "#dcdce2"
  bordure-champ: "#8a8a96"
  essentiel: "#00a3e0"
  essentiel-pale: "#e6f6fc"
  essentiel-fonce: "#0074a6"
  teste: "#e5007d"
  teste-pale: "#fde7f2"
  teste-fonce: "#b00060"
  surligneur: "#ffe500"
  surligneur-pale: "#fff4a3"
typography:
  display:
    fontFamily: "Archivo, Atkinson Hyperlegible Next, ui-sans-serif, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 112"
  headline:
    fontFamily: "Archivo, Atkinson Hyperlegible Next, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.875rem, 4.6vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 112"
  title:
    fontFamily: "Archivo, Atkinson Hyperlegible Next, ui-sans-serif, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.33
    fontVariation: "\"wdth\" 112"
  bandeau:
    fontFamily: "Archivo, Atkinson Hyperlegible Next, ui-sans-serif, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.06em"
    fontVariation: "\"wdth\" 72"
  lecture:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.2
  chiffres:
    fontFamily: "Archivo, Atkinson Hyperlegible Next, ui-sans-serif, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    fontFeature: "\"tnum\" 1"
rounded:
  none: "0px"
spacing:
  gouttiere: "20px"
  gouttiere-sm: "32px"
  bloc: "24px"
  colonnes: "48px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.encre}"
    textColor: "{colors.papier}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.encre}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.surligneur}"
    textColor: "{colors.encre}"
  button-compact:
    padding: "0 14px"
    height: "40px"
  button-je-savais-active:
    backgroundColor: "{colors.teste}"
    textColor: "{colors.papier}"
  button-a-revoir-active:
    backgroundColor: "{colors.surligneur}"
    textColor: "{colors.encre}"
  input-field:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.encre}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  bandeau-essentiel:
    backgroundColor: "{colors.essentiel}"
    textColor: "{colors.encre}"
    typography: "{typography.bandeau}"
    padding: "12px 28px"
  corps-essentiel:
    backgroundColor: "{colors.essentiel-pale}"
    textColor: "{colors.encre}"
    typography: "{typography.lecture}"
    padding: "28px"
  bandeau-teste:
    backgroundColor: "{colors.teste}"
    textColor: "{colors.papier}"
    typography: "{typography.bandeau}"
    padding: "12px 24px"
  bandeau-encre:
    backgroundColor: "{colors.encre}"
    textColor: "{colors.papier}"
    typography: "{typography.bandeau}"
    padding: "12px 28px"
  pastille-question:
    backgroundColor: "{colors.teste}"
    textColor: "{colors.papier}"
    size: "36px"
  tuile-numero:
    backgroundColor: "{colors.essentiel}"
    textColor: "{colors.encre}"
    size: "48px"
  tuile-numero-hover:
    backgroundColor: "{colors.encre}"
    textColor: "{colors.papier}"
  etiquette-score:
    backgroundColor: "{colors.teste-pale}"
    textColor: "{colors.teste-fonce}"
    padding: "2px 8px"
  alerte:
    backgroundColor: "{colors.surligneur-pale}"
    textColor: "{colors.encre}"
    padding: "16px 24px"
---

# Design System: Revizator

## Overview

**Creative North Star: "Le cahier de révision parascolaire"**

Revizator s'imprime plutôt qu'il ne s'affiche. Chaque écran est une page de cahier de révision : papier blanc, encre noire, filets noirs et trois encres de process (cyan, magenta, jaune) posées en aplats francs. La fiche se lit comme une double page : à gauche « L'essentiel » sur fond cyan pâle, à droite « Je me teste » encadré de magenta, avec des corrigés imprimés tête-bêche que l'on retourne d'un geste.

La densité est celle d'un manuel : colonnes larges, texte de lecture généreux (jusqu'à 18 px, interligne 1,7, 65 caractères), rubriques annoncées par des bandeaux condensés en capitales. La couleur ne décore jamais : chaque encre a un seul rôle, ce qui permet de savoir où l'on est dans la fiche sans lire un mot. Tout est à coins droits, sans ombre portée au repos ; la profondeur vient des aplats et des filets, comme sur une page imprimée.

Le monde refuse explicitement la carte blanche arrondie à accent indigo, standard des applications d'étude, et le look « template IA ».

**Key Characteristics:**
- Papier blanc, encre noire, trois encres quadri à rôle unique.
- Rubriques en aplats avec bandeau Archivo condensé en capitales.
- Titres Archivo élargi extra-gras ; tout ce qui se lit en Atkinson Hyperlegible Next.
- Coins droits partout, filets noirs de 2 px pour structurer.
- Surligneur jaune pour la sélection, les termes clés, le focus des boutons et liens, et les signaux d'état.
- Corrigé tête-bêche qui pivote de 180° au geste, et reste à l'envers à l'impression.

## Colors

Une palette d'imprimerie : papier, encre, et les trois primaires soustractives de la quadrichromie, chacune avec sa version pâle (fond) et foncée (texte sur fond pâle).

### Primary
- **Cyan Savoir** (essentiel) : le savoir. Bandeau de « L'essentiel », puces carrées de ses listes, tuiles de numéro de fiche dans le sommaire et l'en-tête de fiche.
- **Cyan Savoir pâle** (essentiel-pale) : le fond de lecture de « L'essentiel ». Seule surface teintée sur laquelle on lit un texte long.
- **Cyan Savoir foncé** (essentiel-fonce) : réserve pour du texte cyan sur fond pâle ; peu utilisé dans le build.

### Secondary
- **Magenta Auto-test** (teste) : l'auto-évaluation et rien d'autre. Bandeau « Je me teste », cadre de 2 px des questions, pastilles numérotées, état actif « Je savais ».
- **Magenta pâle** (teste-pale) et **Magenta foncé** (teste-fonce) : le couple fond/texte de l'étiquette de score dans le sommaire.

### Tertiary
- **Jaune Surligneur** (surligneur) : le stabilo. Sélection de texte, halo de focus des boutons et liens, survol des boutons secondaires, trait qui passe sous les titres au survol, jauge de longueur dépassée, état actif « À revoir ».
- **Jaune Surligneur pâle** (surligneur-pale) : surlignage permanent des termes clés et des phrases d'accroche, fond des messages d'erreur.

### Neutral
- **Papier** (papier) : fond de toutes les pages, texte sur aplats encre et magenta.
- **Papier gris** (papier-2) : fonds de squelette, rail de la jauge, champs désactivés.
- **Encre** (encre) : texte principal, bouton principal, bandeau « Mode d'emploi », filets structurants (filet a la même valeur).
- **Encre secondaire** (encre-2) : phrases d'accroche, textes d'aide, navigation inactive, dates.
- **Encre tertiaire** (encre-3) : placeholders, compteurs, corrigé encore retourné, points de conduite.
- **Filet doux** (filet-doux) : séparateurs entre lignes de liste et entre questions, filet du pied de page.
- **Bordure de champ** (bordure-champ) : contour des champs au repos, pointillés au-dessus des corrigés, barres de défilement.

### Named Rules
**The Une Encre, Un Rôle Rule.** Cyan signifie savoir, magenta auto-test, jaune surligneur. Une encre n'emprunte jamais le rôle d'une autre : pas de magenta sur un contenu de synthèse, pas de cyan sur un score.

**The Texte Selon l'Encre Rule.** Sur cyan et sur jaune, le texte est toujours en encre ; sur magenta et sur encre, il est en papier. Le blanc sur cyan et le blanc sur jaune ne passent pas le contraste.

**The Le Jaune Ne S'écrit Pas Rule.** Le jaune n'est qu'un fond : surlignage, halo, aplat d'état. Jamais une couleur de texte, de trait ou d'icône.

## Typography

**Display Font:** Archivo variable, axe de largeur wdth (avec Atkinson Hyperlegible Next puis ui-sans-serif en repli)
**Body Font:** Atkinson Hyperlegible Next (avec ui-sans-serif, system-ui)
**Label/Mono Font:** Archivo en chiffres tabulaires pour les nombres d'interface

**Character:** Archivo joue deux rôles selon sa largeur : élargi (wdth 112) et extra-gras pour les titres et les numéros, comme la titraille d'un manuel ; condensé (wdth 72) en capitales espacées pour les bandeaux de rubrique. Atkinson Hyperlegible Next porte tout ce qui se lit longtemps.

### Hierarchy
- **Display** (800, clamp(2.5rem, 7vw, 4.25rem), 0.98, wdth 112) : titre de page (« Nouvelle fiche », « Mes fiches », « Page introuvable »).
- **Headline** (800, clamp(1.875rem, 4.6vw, 3.25rem), 1.04, wdth 112) : titre d'une fiche. Le titre du résultat sous le formulaire en est une variante un cran plus petite (clamp(1.75rem, 4vw, 2.75rem), 1.08).
- **Title** (800, 1.5rem, wdth 112) : titres d'état (liste vide, « Rédaction de la fiche »). Le même style à 1.125–1.25rem sert les pastilles et tuiles numérotées et le score.
- **Bandeau** (800, 1.125rem, 1.2, capitales, interlettrage 0.06em, wdth 72) : titres de rubrique dans les aplats et titres de mois du sommaire. C'est le titre de la section, jamais une étiquette posée au-dessus d'un autre titre.
- **Lecture** (400, 1.0625rem puis 1.125rem dès 640 px, 1.7, 65ch max) : texte de « L'essentiel ».
- **Body** (400, 1rem, 1.6) : texte courant ; corrigés en interligne relâché, accroches à 1.125–1.25rem en encre secondaire.
- **Label** (700, 1rem, 1.2) : libellés de champ, boutons, questions (1.0625rem, interligne serré).
- **Chiffres** (600, 0.875rem, chiffres tabulaires, Archivo) : compteurs, dates, nombre de mots, numéros de fiche.

### Named Rules
**The Deux Largeurs Rule.** Archivo élargi pour ce qui se nomme (titres, numéros), Archivo condensé capitales pour ce qui s'annonce (bandeaux). Aucun autre usage d'Archivo, aucune autre largeur.

**The Chiffres en Archivo Rule.** Les nombres d'interface passent en Archivo tabulaire, car le zéro d'Atkinson est barré. Les milliers prennent une espace simple insécable et ne se coupent pas.

## Layout

Un conteneur unique de 72rem (1152 px) centré, marges de 20 px sur mobile et 32 px dès 640 px. Les pages s'ouvrent à 40 px du haut (56 px dès 640 px) et réservent 80 px en bas.

À partir de 1024 px, la grille passe en 12 colonnes avec 48 px de gouttière, découpée en 7/5 : formulaire et « L'essentiel » à gauche, « Mode d'emploi » et « Je me teste » à droite. En dessous, tout s'empile en une colonne dans le même ordre de lecture. L'en-tête fait 64 px de haut ; la marque CMJN passe de quatre carrés alignés à un carré 2×2 sous 640 px.

Le rythme vertical va par paliers : 24 px entre champs, 28 px dans les rubriques, 48 px entre sections de page, 64 px avant le résultat. Le sommaire se lit comme une table des matières : tuile numérotée, titre, points de conduite qui filent jusqu'à la date et au score (les points de conduite disparaissent sous 640 px).

À l'impression, l'en-tête, le pied de page et les commandes disparaissent, les couleurs sont imprimées telles quelles et les corrigés restent à l'envers.

## Elevation & Depth

Le système est plat. La profondeur vient de l'imprimerie : aplats d'encre, fonds pâles, filets noirs de 2 px (sous l'en-tête, sous les en-têtes de page, autour du « Mode d'emploi » et des questions) et filets doux d'1 px entre lignes. Une seule ombre existe, en réponse à un état : le bouton principal se soulève de 2 px au survol avec une ombre diffuse sous lui, et retombe à plat au clic.

### Shadow Vocabulary
- **Soulèvement du bouton principal** (`box-shadow: 0 10px 20px -10px rgb(22 22 29 / 0.6)`) : survol du bouton principal uniquement, avec translateY(-2px).
- **Halo de focus** (`box-shadow: 0 0 0 6px #ffe500` sous un contour encre de 2 px décalé de 2 px) : focus clavier des boutons et des liens. C'est un surlignage, pas une élévation.
- **Contour de champ actif** (`box-shadow: 0 0 0 1px #16161d` sur une bordure passée en encre) : focus des champs. La bordure s'épaissit en encre, sans jaune.

### Named Rules
**The Plat par Défaut Rule.** Rien n'a d'ombre au repos. L'ombre n'apparaît qu'au survol du bouton principal ; la hiérarchie se fait avec des aplats et des filets.

## Shapes

Coins droits partout (0 px) : boutons, champs, aplats, pastilles, tuiles, étiquettes, alertes. Les seules formes du système sont le rectangle et le carré : puces carrées de 8 px, pastilles de questions de 36 px, tuiles de numéro de 44 à 48 px (56 à 96 px en tête de fiche), marque CMJN en carrés de 6 à 10 px. Les icônes sont tracées au trait de 2 px, extrémités carrées et angles vifs. Les bordures sont pleines, sauf le filet pointillé de 1.5 px qui sépare la question de son corrigé, comme une ligne de découpe.

### Named Rules
**The Coin Droit Rule.** Aucun arrondi sur une surface ou un contrôle. Un coin arrondi suffit à faire retomber l'interface dans la carte d'app d'étude que ce monde refuse.

## Components

### Buttons
Francs et typographiques : un rectangle cerclé d'encre, du texte gras, une icône au trait quand elle aide.
- **Shape:** coins droits (0 px), contour encre de 2 px, hauteur minimale 48 px.
- **Primary:** aplat encre, texte papier, padding horizontal de 20 px. Survol : soulèvement de 2 px avec ombre diffuse (220 ms, courbe de sortie) ; clic : retour à plat. Pendant la génération il reste noir et affiche quatre carrés quadri qui respirent.
- **Secondary:** fond papier, texte encre, même contour. Survol : le fond devient jaune surligneur (150 ms).
- **Compact :** 40 px de haut, 14 px de padding, texte à 0.95rem, dans « Je me teste ».
- **Auto-évaluation :** « Je savais » actif passe en aplat magenta, « À revoir » actif en aplat jaune ; les deux portent aria-pressed.
- **Lien d'action :** « Recommencer » est un lien souligné en encre secondaire dont le soulignement passe de gris à encre au survol.

### Chips
- **Étiquette de score :** fond magenta pâle, texte magenta foncé, 0.8125rem gras, chiffres tabulaires, coins droits. Seulement quand la fiche a été notée.

### Cards / Containers
Il n'y a pas de cartes : il y a des rubriques.
- **Corner Style:** droits (0 px).
- **Background:** aplat d'encre pour le bandeau, fond pâle de la même encre pour le corps (cyan) ou papier encadré de 2 px de la même encre (magenta).
- **Shadow Strategy:** aucune (voir Elevation & Depth).
- **Border:** 2 px encre pour le « Mode d'emploi », 2 px magenta sur trois côtés pour « Je me teste ».
- **Internal Padding:** 20 px sur mobile, 24 à 28 px dès 640 px.

### Inputs / Fields
- **Style:** fond papier, contour de 1.5 px en gris bordure de champ, coins droits, 12×14 px de padding, texte à 1.0625rem (titre à 1.125rem semi-gras). Placeholder en encre tertiaire.
- **Focus:** la bordure passe en encre et s'épaissit d'1 px (ombre pleine d'1 px en encre), sans outline navigateur ni halo jaune. Survol : contour en encre secondaire.
- **Error / Disabled:** l'erreur est portée par aria-invalid et par un message surligné en jaune pâle à côté du bouton ; désactivé, le champ passe en papier gris. Le bouton d'envoi reste actif et explique ce qui manque.

### Navigation
Deux liens à droite de l'en-tête, Atkinson semi-gras à 0.95rem. Inactif en encre secondaire, actif en encre avec une barre d'encre de 4 px posée sur le filet de l'en-tête, qui se déploie depuis le centre (scale-x, 300 ms). À gauche, le mot « Revizator » en Archivo élargi extra-gras suivi de la marque CMJN dont les carrés sautent l'un après l'autre au survol.

### Bandeau de rubrique
Le titre d'une rubrique posé dans un aplat de son encre, avec à droite une donnée en chiffres (nombre de mots, score « 2 / 3 » en Archivo élargi). Cyan pour « L'essentiel », magenta pour « Je me teste », encre pour « Mode d'emploi ».

### Corrigé tête-bêche
La réponse est imprimée à 180° en encre tertiaire sous un filet pointillé. « Retourner le corrigé » la fait pivoter à l'endroit en 700 ms (courbe de sortie) et passe le focus sur le texte. Pas de pivot au chargement pour un corrigé déjà noté, aucune transition en mouvement réduit, et le corrigé reste à l'envers à l'impression.

### Surligneur
Un trait jaune qui couvre la moitié basse du texte (de 52 % à 92 % de la hauteur). Permanent en jaune pâle sur les termes clés et les accroches ; sur les titres du sommaire, il se dessine de gauche à droite au survol ou au focus (380 ms).

### Jauge de longueur
Un rail papier gris de 10 px gradué tous les 1 000 caractères, un trait d'encre pour le minimum, un remplissage gris foncé sous le minimum, encre dans la plage, jaune au-delà.

## Do's and Don'ts

### Do:
- **Do** donner à chaque encre un seul rôle : cyan pour le savoir, magenta pour l'auto-test, jaune pour surligner.
- **Do** ouvrir chaque rubrique par un bandeau en Archivo condensé (wdth 72) extra-gras en capitales, posé dans un aplat de l'encre de la rubrique.
- **Do** mettre texte encre sur cyan et jaune, texte papier sur magenta et encre.
- **Do** garder des coins droits (0 px) sur toute surface et tout contrôle.
- **Do** structurer avec des filets noirs de 2 px et des filets doux d'1 px plutôt qu'avec des ombres.
- **Do** composer les nombres d'interface en Archivo à chiffres tabulaires.
- **Do** utiliser le halo jaune (contour encre de 2 px + 6 px de jaune) pour le focus clavier des boutons et des liens, et une bordure d'encre épaissie (1.5 px + 1 px) pour le focus des champs.
- **Do** dessiner les icônes au trait de 2 px, extrémités carrées et angles vifs, en SVG en ligne.
- **Do** utiliser la courbe de sortie cubic-bezier(0.16, 1, 0.3, 1) pour les mouvements, et les couper en mouvement réduit.

### Don't:
- **Don't** utiliser la carte blanche arrondie avec accent indigo des apps d'étude.
- **Don't** arrondir un coin, même de 2 px.
- **Don't** écrire en jaune, ni poser du texte blanc sur cyan ou jaune.
- **Don't** utiliser le magenta hors de l'auto-évaluation ni le cyan hors du savoir.
- **Don't** ajouter d'ombre au repos ; seule l'ombre de survol du bouton principal existe.
- **Don't** utiliser Archivo pour le texte de lecture, ni Atkinson pour les titres et bandeaux.
- **Don't** poser une petite étiquette en capitales au-dessus d'un titre : le bandeau est le titre de la rubrique, pas un surtitre.
