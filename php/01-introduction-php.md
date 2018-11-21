---
sidebarDepth: 2
tags: ["PHP", "Apache"]
---

# Introduction à PHP

> Le HTML sémantique est l'utilisation du balisage HTML visant à renforcer le sémantisme (la signification) des informations contenues dans les pages web, c'est-à-dire leur sens, plutôt que de se borner à définir leur présentation (ou apparence).
>
>Le HTML sémantique est traité par les navigateurs courants, mais aussi par de nombreux autres agents utilisateurs. Le langage CSS est utilisé pour suggérer la forme sous laquelle il sera présenté aux utilisateurs humains.

[https://fr.wikipedia.org/wiki/HTML_s%C3%A9mantique](https://fr.wikipedia.org/wiki/HTML_s%C3%A9mantique)

<TagLinks />

## Pourquoi

Faciliter l'extraction de donnée et la compréhension du code en donnant un sens aux balises.
Attention qu'à l'heure actuelle l'utilisation des balises HTML5 qui suivent n'apporte aucun bonus en terme de SEO.
Le but désavoué de la sémantique HTML 5 est d'utiliser le moins de classes possible.

## Les balises

### &lt;header&gt;

>l'en-tête

La plupart des sites web possèdent en général un en-tête, appelé header en anglais. On y trouve le plus souvent un logo, une bannière, le slogan de votre site…


### &lt;footer&gt;

>le pied de page

À l'inverse de l'en-tête, le pied de page se trouve en général tout en bas du document. On y trouve des informations comme des liens de contact, le nom de l'auteur, les mentions légales, etc.

### &lt;nav&gt;

>Liens de navigation

La balise `<nav>` regroupe les liens vers d'autres pages ou des parties de la page actuelle. Est souvent composée de liste.

Les liens dans le footer n'ont pas besoin d'être dans une balise nav. Footer est suffisant dans ce cas.

### &lt;article&gt;

>un élément indépendant

La balise `<article>` sert à englober une portion généralement autonome de la page. C'est une partie de la page qui pourrait ainsi être reprise sur un autre site (mais aussi partagé dans un flux rss). C'est le cas par exemple des actualités, d'un poste de forum, une entrée de blog, un commentaire, un widget interactif ou n'importe quel autre élément indépendant.

- Il contient son h1.
- Il peut être composée d'un header (si c'est le cas, avec un h1) et d'un footer si nécessaire.
- Il peut être composé de plusieurs sections qui correspondent aux chapitres de l'article par exemple mais aussi d'un autre article.

### &lt;section&gt;

>un groupe de contenu ayant un lien commun

La balise `<section>` sert à regrouper des contenus en fonction de leur thématique. Elle englobe généralement une portion du contenu au centre de la page. Des exemples de sections peuvent être des chapitres, plusieurs pages rassemblées dans une boite de dialogue ou un nombre de section d'une thèse. Une page d'accueil peut être séparée en section pour une introduction, des éléments de news et les informations de contact.

- Il est préférable d'utiliser article si ce sont des éléments qui peuvent être réutilisé dans un autre site.
- Elle contient son h1.
- Elle est composée d'un header et d'un footer si nécessaire.
- Une section ne doit pas être utilisée seulement pour le design. Il faut utiliser un div dans ce cas.

### &lt;aside&gt;

>information complémentaires

La balise `<aside>` est conçue pour contenir des informations complémentaires au document que l'on visualise.

- Lorsque aside peut être utilisé dans un article en tant que glossaire.
- Lorsqu'il est utilisé hors d'un article, il doit être lié au contenu du site. Par exemple en tant que bloc publicitaire, groupe de navigation additionnel (sera donc composé de `<nav>`)...

## Exemple visuel

![Exemple sémantique HTML5](/images/frontend/01-semantique-html5/exemple.PNG)

## Exemple html

```html
<body>
    <header>
    </header>
    <nav>
    </nav>
    <section>
        <article>
        </article>
        <aside>
        </aside>
        <aside>
        </aside>
    </section>
    <section>
        <aside>
        </aside>
    </section>
    <footer>
    </footer>
</body>
```

## Utilitaire

Site qui permet de vérifier la définition des titres dans nos sections et articles selon les règles HTML5.
[https://gsnedders.html5.org/outliner/](https://gsnedders.html5.org/outliner/)

## Ressources

- [https://www.alsacreations.com/article/lire/1376-html5-section-article-nav-header-footer-aside.html](https://www.alsacreations.com/article/lire/1376-html5-section-article-nav-header-footer-aside.html)
- [https://html.spec.whatwg.org/multipage/semantics.html](https://html.spec.whatwg.org/multipage/semantics.html)
- [http://www.w3schools.com/html/html5_migration.asp](http://www.w3schools.com/html/html5_migration.asp)
- [http://html5doctor.com](http://html5doctor.com)
- [http://www.webdesignerdepot.com/2013/01/the-harsh-truth-about-html5s-structural-semantics-part-1/](http://www.webdesignerdepot.com/2013/01/the-harsh-truth-about-html5s-structural-semantics-part-1/)
- [http://www.webdesignerdepot.com/2013/01/the-harsh-truth-about-html5s-structural-semantics-part-2/](http://www.webdesignerdepot.com/2013/01/the-harsh-truth-about-html5s-structural-semantics-part-2/)
- [http://www.webdesignerdepot.com/2013/01/the-harsh-truth-about-html5s-structural-semantics-part-3/](http://www.webdesignerdepot.com/2013/01/the-harsh-truth-about-html5s-structural-semantics-part-3/)
- [http://openclassrooms.com/courses/creer-un-blog-accessible-avec-html5](http://openclassrooms.com/courses/creer-un-blog-accessible-avec-html5)
- [http://openclassrooms.com/courses/la-semantique-1](http://openclassrooms.com/courses/la-semantique-1)
- [http://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/structurer-sa-page](http://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/structurer-sa-page)
