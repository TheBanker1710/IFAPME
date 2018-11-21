---
sidebarDepth: 2
tags: ["Javascript", "VueJS", "Vue", "Laravel"]
---

# Laravel Mix

Pour gérer facilement nos assets CSS / SASS, Javascript, images… Nous allons utiliser [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) qui utilise webpack ([https://webpack.js.org/](https://webpack.js.org/) ).

Nous allons pouvoir compresser automatiquement le nouveau contenu, faire des vérifications à la volée et travailler rapidement de manière organisée.

## Prérequis

Pour pouvoir bénéficier de ses avantages, nous allons devoir installer 2 logiciels :

- [Node.JS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Configuration

### Package.json

Un peu à la manière de [Composer](https://getcomposer.org/), nous avons un fichier de configuration qui va gérer les dépendances, `Package.json`.

Lorsqu'on l'ouvre, on constate forcément la ressemblance avec le fichier composer.json vu qu'ils sont écris dans le même format. On pourra donc ajouter nos plugins frontend dans `devDependencies`

```js
"devDependencies": {
    "eslint": "^5.8.0",
    "eslint-config-standard": "^12.0.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-node": "^8.0.0",
    "eslint-plugin-promise": "^4.0.1",
    "eslint-plugin-standard": "^4.0.0",
    "eslint-plugin-vue": "^4.7.1"
}
```

On constate aussi que, par défaut, plusieurs librairies sont déjà présentes. On retrouve par exemple [Bootstrap](https://getbootstrap.com/) et [jQuery](https://jquery.com/) que l'on connait déjà.

### Webpack.mix.js

Le second fichier de configuration est `webpack.mix`

Celui-ci va nous permettre de définir les fichiers qui seront compilés et les opérations que l'on souhaite appliquer.
Les opérations de bases qui seront appliquées sont :

`Sass()` : va compiler notre CSS grâce à [Sass](https://sass-lang.com/)
`Js()` : compile nos fichiers Javascript
`Version()` : gère le nom des versions de fichiers que l'on va générer.

Nous obtenons donc :

```js
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .version();
```

## Lancement de la compilation et installation des plugins

### Mise à jour / Configuration des packages

De la même manière que l'on met à jour Composer avec Composer update, on va ici utiliser la commande npm update.
On peut donc lancer un Git Bash à la racine de notre projet et exécuter NPM Update.

Après une mise à jour du fichier package.json ou tout simplement pour mettre à jour les packages on pourra ré exécuter cette commande.

```sh
npm update
```

### Compilation des ressources

Lorsque l'on va travailler et modifier nos fichiers CSS / SASS et JS, nous avons droits à plusieurs commandes pour compiler et exécuter les commandes que l'on a définis dans le fichier `webpack.mix.js`.

- `npm run dev` : Compile rapidement les fichiers
- `npm run prod` : Compile complètement tous les fichiers. Ils sont alors minifés entre autre.
- `npm run watch` : Compile rapidement les fichiers lorsqu'une sauvegarde, un changement est détecté.

Ces commandes sont définies dans le fichier `package.json`, on privilégiera donc l'utilisation de `Npm run watch` lorsqu'on travaille.

## Intégration des versions dans les fichiers Blades

Vu que l'on va utiliser l'option de version de Mix afin d'éviter les problèmes de cache des ressources, nous allons devoir intégrer le chemin des ressources dans notre fichier de Layout ou tout autre fichier `blade`.

On écrira donc :
```html
<link rel="stylesheet" href="{{ mix('/css/app.css') }}">
```

Mais aussi :

```html
<script src=" {{ mix('/css/app.js') }}"></script>
```

Nous sommes maintenant prêt à travailler avec Laravel Mix et à organiser notre Sass et JS.

## Ressources

[https://laravel.com/docs/master/mix](https://laravel.com/docs/master/mix)
[https://laracasts.com/series/laravel-from-scratch-2017/episodes/14](https://laracasts.com/series/laravel-from-scratch-2017/episodes/14)
