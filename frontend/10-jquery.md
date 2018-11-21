---
sidebarDepth: 2
tags: ["Javascript", "jQuery", "VueJS", "Vue", "Angular"]
---

# Javascript avec jQuery

>JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs avec l'utilisation (par exemple) de [Node.js](https://nodejs.org/en/). C'est un langage orienté objet à prototype, c'est-à-dire que les bases du langage et ses principales interfaces sont fournies par des objets qui ne sont pas des instances de classes, mais qui sont chacun équipés de constructeurs permettant de créer leurs propriétés, et notamment une propriété de prototypage qui permet d'en créer des objets héritiers personnalisés. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel. JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances [npm](https://www.npmjs.com/), avec environ 500 000 paquets en août 2017.

[https://fr.wikipedia.org/wiki/JavaScript](https://fr.wikipedia.org/wiki/JavaScript)

<TagLinks />

## Pourquoi

Le Javascript permet d'exécuter du code directement dans le navigateur client. On pourra donc programmer des animations ou encore des requêtes de données  sans recharger la page. JQuery est une bibliothèque de fonction Javascript optimisée. On préferera par exemple créer une animation en Javascript ce qui permettra d'être sur qu'un plus grand nombre puisse jouer cette animation. Chose pas forcément possible avec css3 par exemple.

## Alternatives

- [https://angularjs.org/](https://angularjs.org/)
- [https://vuejs.org/](https://vuejs.org/)

## Méthodologie générale avant de se lancer dans le code

Lorsque l'on commence à programmer on peut rapidement se sentir dépasser par le nombre de choses à réaliser ou à prévoir. Il est donc important de bien pouvoir segmenter le travail en analysant les différents besoins que l'on a afin de les résoudre un à un.

[Google](https://www.google.be/) sera donc votre première source d'aide car vous y trouverez soit des scripts déjà tout fait qui vous permettent de créer ce que vous souhaitez soit des lignes de codes qui vont vous indiquer une direction.

Comme d'habitude en web, une recherche en anglais vous donnera toujours plus de résultats. JQuery est codé et pensé en anglais (comme la plupart des les langages de programmations), le nom des fonctions est en général assez indicatif dans ce sens.

## Implémenter JQuery

Avant de pouvoir écrire sa première ligne il faut intégrer JQuery sur sa page html.
Le plus simple étant de commencer votre page avec un boilerplate comme [html5boilerplate](https://html5boilerplate.com/) qui intègre déjà JQuery.

## Les règles principales d'utilisation

- On termine chaque ligne par un `;`

- ce qui s'ouvre se ferme comme pour les balises html :

```js
() '' "" {}
```

- On place le script jQuery à la fin du document, avant la balise `</body>` afin d'optimiser le temps de chargement.
- L'utilisation du `$` indique que l'on utilise JQuery
- Le code suivant permet d'exécuter du code Javascript une fois que la page html est chargée dans le navigateur :

```js
$(function() {
    // code
});
```

- Le code suivant permet de sélectionner la div dont l'id correspond à "main" de la même manière qu'on le fait dans la feuille de style :

```js
$('#main');
```

- Le code suivant permet de remplacer le contenu html de la balise dont l'id correspond à "main" :

```js
$('#main').html('test');
```

On utilise donc la fonction JQuery `html()`. On remarque l'utilisation du `.` (point) qui permet d'appliquer la fonction à l'élément avec l'id "main".

- Un Callback permet d'exécuter du code une fois que la première fonction a été réalisée :

```js
$(function() {
    $(".rouge").fadeOut("slow",function(){
        // Callback
        $(this).fadeIn("slow");
    });
});
```

Lorsque l'animation de fadeOut (permet de faire disparaitre un élément) est terminée, un fadein (permet de faire apparaitre un élément) est lancé.
On remarque aussi que l'on utilise "this" comme sélecteur ce qui permet d'appliquer la fonction fadeIn à l'élément actuellement sélectionné. Le sélecteur "this" représente aussi l'objet sur lequel on a appliqué la fonction précédente, il représente l'objet courant.

- On peut mettre en mémoire certains éléments en utilisant les variables comme ceci :

```js
let nom_variable = "x";
```

On pourra ensuite utiliser `nom_variable` directement dans le code, comme par exemple :

```js
$('#main').html(nom_variable);
```

Ici, pas besoin d'utiliser les `''` car Javascript va directement trouver le contenu de la variable qui correspond donc à x.
On peut ajouter (concaténer) le contenu de deux variables comme ceci :

```js
let nom = "Jean";
let prenom = "Marc";
$('#main').html(nom + prenom);
```

Le contenu de l'élement "main" sera donc : JeanMarc. Voici comment ajouter un espace :

```js
$('#main').html(nom + ' ' + prenom);
```

On aura donc Jean Marc.

- Attention à l'utilisation des `""` et `''`. Ce code ne fonctionnera pas :

```js
$('#test').html("<a href="lien.html">lien</a>");
```

Ce code fonctionnera :

```js
$('#test').html("<a href=\"lien.html\">lien</a>");
```

L'utilisation d'un `\` permet de ne pas tenir compte des `"` ou `'`.
Une autre solution est d'écrire la même phrase en utilisant les `'` uniques :

```js
$('#test').html('<a href="lien.html">lien</a>');
```

## Comment vérifier son code

L'utilisation d'une console Javascript est ici indispensable. On utilisera donc soit les consoles intégrées aux navigateurs ou alors Firebug afin d'avoir un retour sur ce que l'on fait. Exemple :

![Console Navigateur](/images/frontend/10-jquery/console.png)

On utilisera aussi la fonction `console.log();` pour afficher un message dans la console ou encore `window.alert();` pour afficher un message dans une fenêtre :

![Alerte Javascript](/images/frontend/10-jquery/alerte.png)

## Ressources

- [https://jquery.com/](https://jquery.com/)
- [https://openclassrooms.com/courses/simplifiez-vos-developpements-javascript-avec-jquery](https://openclassrooms.com/courses/simplifiez-vos-developpements-javascript-avec-jquery)
- [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)
