---
sidebarDepth: 2
tags: ["Sémantique", "Microdata", "Microdonnée"]
---

# Les microdatas

>Les microdonnées sont une fonctionnalité HTML5 créée afin d'offrir du contenu sémantique dans des documents HTML1.
>
>Elles peuvent être vues comme une extension de l'idée de microformats qui visent à combler leurs lacunes en évitant la complexité des formats comme RDFa.

[https://fr.wikipedia.org/wiki/Microdonn%C3%A9e](https://fr.wikipedia.org/wiki/Microdonn%C3%A9e)

<TagLinks />

## Pourquoi

Les *microdatas* permettent de catégoriser de manière universelle votre convenu peu importe le moteur de recherche employé.

Les résultats des moteurs de recherchent en dépendent de plus en plus car elles sont très précises.

Les *microdatas* permettent donc à votre contenu d'être compris très facilement par les moteurs de recherche.

## SCHEMA.ORG

Le site vous permet de découvrir toutes les catégories et éléments qu'il est possible de préciser.

Exemple de catégories de contenu : un événement, une personne, une organisation, une chose...

[http://schema.org/Thing](http://schema.org/Thing)

## Les attributs principaux

### `Itemscope`

Définis l'élément dans lequel il se trouve comme un élément qui va être définis avec des *microdatas*.
S'utilise seul.

### `Itemtype`

Contient une url qui permet de définir précisément le type de contenu qui va être utilisé.

### `Itemprop`

Va donner une valeur pour préciser le contenu.
Exemple : itemprop= name va indiquer que le contenu de la balise correspondra au nom.

Si vous souhaitez utiliser les micro datas sans afficher le contenu pour l'utilisateur, vous pouvez utiliser ``<meta>``.
Exemple :

```html
<meta itemprop="logo" content="http://cynaptek.com/img/cynaptek-logo.png" />
```

## Exemple

Sans *microdatas* :

```html
<h1>Avatar</h1>
```

Avec *microdatas* :

```html
<div itemscope itemtype="http://schema.org/Movie">
    <h1 itemprop="name">Avatar</h1>
</div>
```

Utiliser la balise `meta` pour cacher l'`itemprop` à l'utilisateur :

```html {3}
<div itemscope itemtype="http://schema.org/Movie">
    <h1 itemprop="name">Avatar</h1>
    <meta itemprop="name" content="Avatar">
</div>
```

## Outil de test des données structurées

Site web pour vérifier la bonne utilisation des *microdatas* dans son code:

[https://search.google.com/structured-data/testing-tool?hl=fr](https://search.google.com/structured-data/testing-tool?hl=fr)

## Ressources

- [http://schema.org](http://schema.org)
- [https://tcuvelier.developpez.com/tutoriels/web-semantique/html5-microdonnees/introduction/](https://tcuvelier.developpez.com/tutoriels/web-semantique/html5-microdonnees/introduction/)
- [https://zadroweb.com/schema-markup-affect-seo-today-tomorrow/](https://zadroweb.com/schema-markup-affect-seo-today-tomorrow/ )
