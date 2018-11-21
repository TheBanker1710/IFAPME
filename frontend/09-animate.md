---
sidebarDepth: 2
tags: ["Animation", "Transition", "Transform", "2D", "3D"]
---

# Animation CSS

Les animations CSS sont en général des animations simples qui vont faire varier une ou plusieurs propriétés.

Il est intéressant d'en avoir pour mettre en avant certain contenu mais il est préférable de l'utiliser avec parcimonie.
<br/>Avoir beaucoup d'éléments animés peut être dérangeant.
<br/>Si on en utilise, autant qu'elle aie un rôle utile.

On aura besoin de deux éléments pour créer l'animation.

## Keyframes

On va pouvoir établir des keyframe (clé d'animation) afin de créer l'animation dans un premier temps.
En créant des keyframes on va générer une animation dont le nom sera définis après ``@keyframes``.

```css
@keyframes example {
    0%   {background-color:red; left:0px; top:0px;}
    25%  {background-color:yellow; left:200px; top:0px;}
    50%  {background-color:blue; left:200px; top:200px;}
    75%  {background-color:green; left:0px; top:200px;}
    100% {background-color:red; left:0px; top:0px;}
}

// Ou bien

@keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
}
```

## Les propriétés d'animation

L'animation doit ensuite être attribuée à un élément et doit avoir une durée définie.

```css
div {
    animation-name: example;
    animation-duration: 2s;
}
```

On peut aussi créer une class qui comprend ``animation-name`` et ``animation-duration`` pour ensuite l'ajouter sur un élément de manière dynamique avec Javascript. On pourra alors jouer des animations selon des événements prédéfinis.

## Propriétés secondaires

### animation-delay

Définis le nombre de seconde avant de lancer l'animation.

### animation-iteration-count

Définis le nombre de fois que l'animation est répétée ou si elle se joue de manière infinie avec ``infinite``.

### animation-direction

Définis le sens de l'animation ``normal``, ``reverse``, ``alternate``, ``alternate-reverse``

### animation-timing-function

Définis la courbe d'animation grâce à ces paramètres : ``ease``, ``linear``, ``ease-in``, ``ease-out``, ``ease-in-out``, ``cubic-bezier(n,n,n,n)``

### animation-fill-mode

Définis l'état dans lequel l'objet revient après avoir joué l'animation ``none``, ``forwards``, ``backwards``, ``both``

## Transitions

Les transitions CSS sont plus rapide à mettre en place car utilisent les propriétés existantes et vont les interpoler selon les évènements css (``hover``, ``active``, ``focus``, ``checked``, ``disabled``)

```css
.el {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
}

.el:hover {
    width: 300px;
}
```

On retrouvera les mêmes paramètres que pour les animations.

## Transforms 2D & 3D

Doc complète est disponible ici :

- [https://www.w3schools.com/css/css3_2dtransforms.asp](https://www.w3schools.com/css/css3_2dtransforms.asp)
- [https://www.w3schools.com/css/css3_3dtransforms.asp](https://www.w3schools.com/css/css3_3dtransforms.asp)

## Exemples avancés

- [https://www.creativebloq.com/inspiration/css-animation-examples](https://www.creativebloq.com/inspiration/css-animation-examples)
- [https://cssnewbie.com/15-new-awesome-creative-css-animations](https://cssnewbie.com/15-new-awesome-creative-css-animations)
- [https://www.hongkiat.com/blog/creative-css-animations/](https://www.hongkiat.com/blog/creative-css-animations/)

## Ressources

- [https://www.w3schools.com/css/css3_animations.asp](https://www.w3schools.com/css/css3_animations.asp)
- [https://www.w3schools.com/css/css3_transitions.asp](https://www.w3schools.com/css/css3_transitions.asp)
- [https://www.impressivewebs.com/css3-transitions-without-hover/](https://www.impressivewebs.com/css3-transitions-without-hover/)
