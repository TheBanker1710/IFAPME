---
sidebarDepth: 2
tags: ["Font", "Google Fonts", "Icône"]
---

# Fonts

L'utilisation de Fonts va ajouter beaucoup de personnalité à votre site.
On va essayer d'avoir au maximum 2 Fonts.

Une pour les gros titres qui peut être un peu extravagante et une pour les textes qui sera plus facile pour la lecture continue.

<TagLinks />

## Source Externe

Une des manières les plus simples de charger de nouvelles Fonts est d'utiliser le service [Google Fonts](https://fonts.google.com/).
<br/>On va essayer de réduire le package de Font au minimum par rapport à ce que l'on va utiliser exemple :
<br/>Ne prendre qu'un seul niveau de gras ou aucun pour alléger le package.

Il s'agit quand même d'un chargement externe qui va ralentir le site.

## Source Interne

Il existe plusieurs méthodes pour charger les Fonts directement dans nos sources ce qui va réduire le temps de chargement.

Le plus simple est d'utiliser [NPM](https://www.npmjs.com/) (gestionnaire de package Javascript installé avec [Node.js](https://nodejs.org/)) pour ajouter dans le code directement dans nos ressources grâce à des packages comme [google-fonts-webpack-plugin](https://www.npmjs.com/package/google-fonts-webpack-plugin).

Ou directement dans le css avec les fichiers sur le serveur :

```css
@font-face {
  font-family: 'Awesome Font';
  font-style: normal;
  font-weight: 400;
  src: local('Awesome Font'),
       url('/fonts/awesome.woff2') format('woff2'),
       url('/fonts/awesome.woff') format('woff'),
       url('/fonts/awesome.ttf') format('ttf'),
       url('/fonts/awesome.eot') format('eot');
}
```

Ajouter différent format de Font permet de maximiser ces chances de support du navigateur pour charger la Font.

## Fonts d'icônes

Les Fonts étant composées de formes vectorielles plusieurs Fonts d'icônes ont vu le jour.
<br/>Parmi les plus populaires :

- [https://fontawesome.com/](https://fontawesome.com/)
- [https://fortawesome.com/](https://fortawesome.com/)
- [https://material.io/tools/icons/](https://material.io/tools/icons/)
- [https://www.flaticon.com/](https://www.flaticon.com/)
- [https://icomoon.io/](https://icomoon.io/)

## Ressources

- [https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)
- [https://creativemarket.com/blog/the-missing-guide-to-font-formats](https://creativemarket.com/blog/the-missing-guide-to-font-formats)
- [https://www.w3schools.com/css/css3_fonts.asp](https://www.w3schools.com/css/css3_fonts.asp)
