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
