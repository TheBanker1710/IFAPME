---
sidebarDepth: 2
tags: ["Sémantique", "Aria"]
---

# ARIA "Accessible Rich Internet Applications"

>L'objectif est d'accroître l'accessibilité des contenus dynamiques et des composantes des interfaces dynamiques développées à l'aide d'Ajax, HTML, Javascript et technologies associées. Le HTML ne propose pas de fonctionnalité permettant de créer du contenu dynamique ni des interfaces de contrôle mais permet l'insertion d'applets (Flash, Java) et de scripts traités côté client (généralement Javascript).
>
>Les développeurs web utilisent de plus en plus le Javascript pour créer les interfaces de contrôle qu'ils ne peuvent créer à l'aide de HTML seul. Ils utilisent également ces scripts pour actualiser une partie de la page sans pour autant recharger l'ensemble de la page depuis le serveur web. Ces techniques sont dites des applications internet « riches ».
>
>Ces interfaces et ces sections actualisées ne sont souvent pas accessibles aux utilisateurs souffrant de handicaps, notamment à ceux utilisant des lecteurs d'écran ou à ceux ne pouvant pas utiliser de souris ni d'équipement équivalent.

[https://fr.wikipedia.org/wiki/Accessible_Rich_Internet_Applications](https://fr.wikipedia.org/wiki/Accessible_Rich_Internet_Applications)

<TagLinks />

## Pourquoi

Accessible Rich Internet Applications.
Elle permet de définir une façon de créer des applications et pages web plus accessible pour les personnes non voyantes.

## Comment

Grâce à l'attribut ``role`` nous allons pouvoir définir différentes parties du site qui seront comprises comme tel par les lecteurs brailles et autres. Il existe deux types de rôles.

### A. Les rôles qui définissent la structure du document, qui organise le contenu

`article`, ``columnheader``, ``definition``, ``directory``, ``document``, ``group``, ``heading``, ``img``, ``list``, ``listitem``, ``math``, ``note``, ``presentation``, ``region``, ``row``, ``rowheader``, ``separator``, ``toolbar``

### B. Les rôles de description de zones qui permettent la navigation

``application``, ``banner``, ``complementary``, ``contentinfo``, ``form``, ``main``, ``navigation``, ``search``

## Les rôles principaux

### `role="banner"`

 Contenu à propos du site, comme le titre de la page ou le logo. Utilisable une seule fois par page.

### `role="contentinfo"`

>= footer

Contenu dépendant d'un autre, comme des notes de bas de page, un copyright, un lien vers la déclaration de confidentialité, un lien vers les paramètres de l'application, etc. Utilisable une seule fois par page.

### `role="main"`

>= contenu

Contenu directement lié ou englobant le contenu central du document. Utilisable une seule fois par page.

### `role="complementary"`

>= aside

Permet éventuellement de définir une partie du contenu principal, mais est plus approprié pour du contenu séparé : la météo sur un portail web par exemple.

### `role="navigation"`

>= nav

Contient des liens pour naviguer dans ou en dehors du document.

### `role="search"`

Cette section contient un formulaire de recherche permettant de chercher sur le site.

### `role="article"`

Contenu ayant du sens par lui-même, comme un article ou un commentaire de blog, un message sur un forum, etc.

## Exemple html

```html
<body role="document">
<div class="wrapper">
    <header class="header">
        <h1 role="banner"><img src="" alt="" /></h1>
        <nav role="navigation">
            <ul>
                <li><a href="index.htm" title="Accès à la page d'accueil">Accueil</a></li>
                <li><a href="trucs.htm" title="Accès à mes trucs et astuces">Trucs</a></li>
                <li><a href="cntct.htm" title="Accès à la page de contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <div class="sub-wrapper">
        <aside class="sidebar" role="complementary"></aside>
        <div class="main" role="main"></div>
    </div>
    <footer class="footer" role="contentinfo"></footer>
</div>
</body>
```

## Ressources

- [http://www.w3.org/TR/wai-aria/roles](http://www.w3.org/TR/wai-aria/roles)
- [https://specs.webplatform.org/html-aria/webspecs/master/](https://specs.webplatform.org/html-aria/webspecs/master/)
- [http://openclassrooms.com/courses/creer-un-blog-accessible-avec-html5](http://openclassrooms.com/courses/creer-un-blog-accessible-avec-html5)
- [http://www.lesintegristes.net/2008/12/09/introduction-a-wai-aria-traduction/](http://www.lesintegristes.net/2008/12/09/introduction-a-wai-aria-traduction/)
- [http://www.webdesignerdepot.com/2013/01/the-harsh-truth-about-html5s-structural-semantics-part-3/](http://www.webdesignerdepot.com/2013/01/the-harsh-truth-about-html5s-structural-semantics-part-3/)
- [http://www.alsacreations.com/article/lire/1400-attribut-rel-relations.html](http://www.alsacreations.com/article/lire/1400-attribut-rel-relations.html)
