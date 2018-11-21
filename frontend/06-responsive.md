---
sidebarDepth: 2
tags: ["Responsive", "CSS", "Media Queries"]
---

# Responsive & Media Queries

>Un site web adaptatif (anglais RWD pour responsive web design, conception de sites web adaptatifs selon l'OQLF) est un site web dont la conception vise, grâce à différents principes et techniques, à offrir une consultation confortable même pour des supports différents. L'utilisateur peut ainsi consulter le même site web à travers une large gamme d'appareils (moniteurs d'ordinateur, smartphone, tablettes, télévision…) avec le même confort visuel et sans avoir recours au défilement horizontal ou au zoom avant/arrière sur les appareils tactiles notamment, manipulations qui peuvent parfois dégrader l'expérience utilisateur, tant en lecture qu'en navigation. Un site web adaptatif est un exemple de plasticité des interfaces.

[https://fr.wikipedia.org/wiki/Site_web_adaptatif](https://fr.wikipedia.org/wiki/Site_web_adaptatif)

<TagLinks />

## Pourquoi ?

Le responsive design est une logique de design qui adapte le contenu au client web utilisé. Qu'il soit desktop, smartphones, tablettes et autres... Pour cela, nous allons utiliser la résolution du client pour adapter le design.
<br/>Pour les smartphones nous utiliserons plutôt un design vertical (selon l'orientation de celui-ci) comme ceci :

![Responsive mobile](/images/frontend/06-responsive/responsive-mobile.png)

Alors que pour les desktops et tablettes on profitera de la largeur des écrans :

![Responsive desktop](/images/frontend/06-responsive/responsive-desktop.png)

## Mise en page fixe

Lorsque l'on crée son design on utilise souvent l'unité « px » pour fixer la taille des différentes éléments. C'est intéressant lorsque l'on connaît la résolution à laquelle  notre application va s'afficher lors de l'utilisation d'une borne interactive par exemple. Par contre, cette technique ne s'adapte pas à la taille d'écran et va donc poser demander plus de travail afin qu'elle s'adapte comme on le souhaite.

## Mise en page fluide
La mise au point d'une grille fluide va permettre au contenu de s'adapter très facilement sans trop d'effort aux différentes résolutions. Pour se faire nous allons utiliser les unités em ou % qui seront flexibles par rapport à une unité en px qui est fixe.
Pour rappel 37,5% = 0,375 em.
<br/>Cette technique fonctionne mais aura des limites surtout en très basse ou haute résolution. On créera donc des points de ruptures avec les media queries pour s'adapter lorsque nécessaire.

## Le mobile d'abord !
Lorsque l'on va créer notre design il est préférable de commencer d'abord par le mobile. Cette technique permet d'économiser de la bande passante vu que notre feuille de style sera d'abord prévue pour les plus petites résolutions. D'autant que le mobile est plus utilisé que le desktop pour accéder aux sites web.
<br/>Exemple de points de ruptures pensés avec cette technique :

```css
/* Common general styles go here */
/* Mobiles in Portrait mode */
@media only screen and (max-width : 320px) {}
/* Mobiles in landscape mode */
@media only screen and (min-width : 321px) and max-width : 480px) {}
/* Tablets */
@media only screen and (min-width : 768px) and (max-width : 1024px) {}
/* Desktops and laptops computers */
@media only screen and (min-width : 1224px) {}
/* very large screen devices */
@media only screen and (min-width : 1824px) {}
```

## Media Queries

Les media queries vont permettre d'adapter le design à la taille d'écran en définissant des points de ruptures.
<br/>Les points de ruptures ne doivent être créé que lorsque votre design commence à se casser dans des résolutions extrêmes. Il est inutile de définir à l'avance ces points de ruptures avec des résolutions du style « 320px, 480px, 768px, 1024px, 1224px » car ces résolutions types évoluent avec le temps. Tous les jours de nouveaux appareils sortent avec des résolutions de plus en plus grande.
<br/>Deux méthodes s'offrent à vous pour intégrer et utiliser les media queries. Soit dans une feuille de style :

```css
@media screen and (max-width: 1280px)
{
    /* Rédigez vos propriétés CSS ici */
}
```

Soit en important une feuille de style :

```html
<link href="small.css" rel="stylesheet" media="screen and (max-width: 480px)"/>
<!-- Ou -->
<link href="styles.css" rel="stylesheet" media="all and (min-width: 1024px)">
```

En définissant un max-width ou min-width nous créons des points de ruptures afin d'y appliquer le design correspondant.
Autre exemple, on peut aussi détecter l'orientation de l'appareil :

```css
@media all and (orientation: landscape) {...}
```

Ou encore travailler avec le ratio de l'écran « min-device-aspect-ratio: 16/9 » ou la résolution dpi des appareils « min-resolution: 300dpi ».
<br/>On privilégiera quand même l'utilisation des min/max-width en px, les navigateurs sont assez bons pour détecter eux même ce qu'ils doivent utiliser.
<br/>Attention que l'utilisation des min / max est définie par la taille du viewport et calculée par le navigateur.

## Comment tester ?

Bien que presque tout le monde peut posséder un smartphone il n'est pas toujours évident de pouvoir accéder au même contenu directement avec celui-ci. Il faut avoir un serveur web accessible par les deux machines et cela ne nous permet pas de tester une multitude de résolution.
<br/>Vous pouvez aussi changer la taille de votre browser mais la aussi difficile de travailler avec des résolutions précises.
Grâce à Google Chrome nous allons pouvoir activer l'affichage mobile et tester une multitude d'appareils.
<br/>Un clique droit sur la page en sélectionnant « Inspecter l'élément » fera apparaître les outils développeurs.

![Responsive test Chrome](/images/frontend/06-responsive/responsive-chrome-test.png)

En haut à gauche nous avons une icône de smartphone qui va permettre l'activer l'affichage mobile et de choisir différentes appareils et/ou type de réseau pour simuler la limitation de vitesse de téléchargement.

## Infographie sur le responsive

![Infographie sur le responsive](/images/frontend/06-responsive/Responsive-Design-B.jpg)

## Ressources

- [https://www.w3schools.com/css/css3_mediaqueries.asp](https://www.w3schools.com/css/css3_mediaqueries.asp)
- [http://openclassrooms.com/courses/qu-est-ce-que-le-responsive-web-design](http://openclassrooms.com/courses/qu-est-ce-que-le-responsive-web-design)
- [http://learn.shayhowe.com/advanced-html-css/responsive-web-design/](http://learn.shayhowe.com/advanced-html-css/responsive-web-design/)
- [http://thesassway.com/intermediate/responsive-web-design-part-1](http://thesassway.com/intermediate/responsive-web-design-part-1)
- [http://thesassway.com/intermediate/responsive-web-design-part-2](http://thesassway.com/intermediate/responsive-web-design-part-2)
- [https://studio.uxpin.com/blog/media-queries-responsive-web-design/](https://studio.uxpin.com/blog/media-queries-responsive-web-design/)
- [http://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984](http://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984)
