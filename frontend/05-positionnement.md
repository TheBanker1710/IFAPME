---
sidebarDepth: 2
tags: ["CSS", "Positionnement", "Relative", "Absolute", "Fixed", "Flexbox", "Flex", "Block", "Inline"]
---

# Positionnement CSS

<TagLinks />

## Inline & Block

Toutes les balises sont séparées en deux groupes d'éléments. Soit ``inline`` soit ``block``.

Les éléments de type ``block`` servent à mettre en forme le design. Ils sont suivis d'un retour à la ligne. Les balises principales de ce type sont le ``div``, ``section``, ``article``...
<br/>Ces éléments sont affectés par les réglages de tailles tel que ``width`` et ``height``.

Les éléments de type ``inline`` sont principalement utilisés pour le texte ou le contenu à part entière et peuvent se suivre sur la même ligne. Ceux utilisés pour le texte ont leur taille définie par leur contenu, le réglage d'un ``width`` d'un lien n'aura aucun effet sauf si sa propriété ``display`` est changée en ``inline-block``.

Grâce à la propriété ``display``, nous allons pouvoir changer le réglage ``inline`` et ``block`` entre autre :

```css
.el {
    display:inline;
}
```

## Relative, Absolute, fixed

La propriété ``position`` va permettre quelques réglages de position.
Les réglages pourront être affinés avec ``left``, ``right``, ``top`` et ``bottom``. Exemple :

```css
.el {
    position:relative;
    left:50px;
}
```

### Relative et Absolute

Ces deux réglages sont liés. Relative va permettre de positionner les éléments qui sont relatifs entre eux.
<br/>Absolute va positionner l'élément par rapport à son parent relatif. Exemple :

```html
<div style="position:relative;width:300px;height:30px;background:green;color:white;">
    Relative
    <div style="position:absolute;height:15px;background:red;left:50%;top:0;">
        Absolute
    </div>
</div>
```

<div style="position:relative;width:300px;height:30px;background:green;color:white;">Relative<div style="position:absolute;height:15px;background:red;left:50%;top:0;">Absolute</div></div>

### Fixed

Permet de laisser fixe un élément sur une page (un menu accroché au haut de page et toujours visible par exemple).

## FlexBox

### Flex Container

Afin de pouvoir l'utiliser nous avons besoin d'un élément parent qui nous servira de base pour aligner les éléments enfants.
<br/>On va l'initialiser avec la propriété display :

```css
.parent {
    display:flex;
}
```

Ce parent aura accès à plusieurs propriétés, exemple :

```css
.parent {
    display:flex;
    flex-flow: row wrap;
}
```

#### ``flex-direction``

column (colonne), column-reverse, row (ligne), row-reverse

#### ``flex-wrap``

Gestion du retour à la ligne en colonne et/ou ligne.

#### ``justify-content``

Permet d'aligner horizontalement les enfants par rapport au container

#### ``align-items``

Permet d'aligner verticalement les enfants par rapport au container

#### ``align-content``

Permet d'aligner les enfants entre eux par rapport à leur contenu (si la hauteur diffère par exemple).

::: tip
La flexbox permet de centrer parfaitement un élément sur une page !
<br/>[https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_perfect_center](https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_perfect_center)
:::

### Éléments enfants / Items

Une fois le ``container`` créé et régler, nous allons pouvoir gérer les enfants au cas par cas.

```html
<div class="flex-container">
    <div class="flex-item"></div>
    <div class="flex-item"></div>
    <div class="flex-item"></div>
</div>
```

#### ``order``

Permet de gérer l'odre à la "main"

#### ``flex-grow``

Permet d'agrandir l'élément par rapport aux autres enfants.

#### ``flex-shrink``

Permet l'inverse de grow, fonctionne de la même manière.

#### ``flex-basis``

Permet de gérer la taille par rapport à l'orientation du ``container``.
<br/>Si la direction est en ``column``, c'est la propriété ``width`` qui sera définie.

#### ``align-self``

Permet d'aligner l'élément seul.

## Grid

Le positionnement css Grid étant encore assez jeune (relativement), je ne fais que le citer car en environnement contrôlé il peut s'avérer très utile.

[https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_layout_named](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_layout_named)

## Ressources

- [https://www.alsacreations.com/article/lire/533-initiation-au-positionnement-en-css-partie-1.html](https://www.alsacreations.com/article/lire/533-initiation-au-positionnement-en-css-partie-1.html)
- [https://www.alsacreations.com/tuto/lire/530-La-structure-des-balises-bloc-et-en-ligne.html](https://www.alsacreations.com/tuto/lire/530-La-structure-des-balises-bloc-et-en-ligne.html)
- [https://www.w3schools.com/css/css_positioning.asp](https://www.w3schools.com/css/css_positioning.asp)
- [https://www.w3schools.com/css/css3_flexbox.asp](https://www.w3schools.com/css/css3_flexbox.asp)
- [https://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width](https://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width)
