---
sidebarDepth: 2
tags: ["SVG", "JPG", "PNG", "WebP", "Responsive", "Résolution"]
---

# Fichiers SVG et gestion d'images

Les tailles d'écrans sur lesquels nos sites internet sont affichés varient fortement.
De plus, certains écrans ont une haute capacité de pixel par pouce ([DPI](https://fr.wikipedia.org/wiki/Point_par_pouce)) ce qui favorise encore l'utilisation d'image à plus haute résolution.

Le [SVG](https://fr.wikipedia.org/wiki/Scalable_Vector_Graphics) (Scalable Vector Graphics) vient à la rescousse.

<TagLinks />

## SVG

Le [SVG](https://fr.wikipedia.org/wiki/Scalable_Vector_Graphics) est composé de points qui vont pouvoir être interpolé.
On parle ici donc de forme vectorielle comme on peut en créer avec [Illustrator](https://www.adobe.com/Illustrator).

Le gros avantage est que ces formes peuvent être agrandies et générer une image qui aura toujours de la résolution.
<br/>Peu importe la taille d'écran, on aura donc toujours une image parfaite.

Exemple de [w3schools](https://www.w3schools.com) :

```html
<svg height="210" width="500">
  <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
  Sorry, your browser does not support inline SVG.
</svg>
```

<svg height="210" width="500">
  <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
  Sorry, your browser does not support inline SVG.
</svg>

[https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_polygon](https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_polygon)

## Formats d'images

Bien que les sites comprenant des SVG soient de plus en plus nombreux, les images traditionnelles ont encore de beaux jours devant elles.
Mais quel format choisir ?

### JPG

Le JPG sera principalement utilisé pour les images avec des dégradés ou dont le nombre de couleur différentes est élevés.
<br/>On utilisera une qualité entre 60 et 75% selon la taille d'image et sont utilisation.

### PNG

Le PNG sera principalement utilisé lorsque le nombre de couleur est limité comme avec des aplats de couleurs.
Les fichiers SVG peuvent souvent être une meilleure alternative.

On utilisera :

- le format PNG8 lorsque le nombre de couleur est très limité.
- le PNG24 lorsque la transparence est nécessaire.

### WebP

Est un format d'image et d'animation mais dont [le support st encore trop faible aujourd'hui](https://caniuse.com/#search=webp).
<br/>Il est intéressant de le connaitre mais son utilisation ne peut se faire qu'en terrain connu.

### Résolution et images Responsive

On essaiera d'utiliser une résolution proche de celle qui sera affichée ce qui fera gagner en poid ([Ko](https://fr.wikipedia.org/wiki/Octet)) et assurera une qualité suffisante.

Il est aussi possible d'utiliser

```html
<picture>
  <source media="(min-width: 2400px)" srcset="large.jpg">
  <source media="(min-width: 1200px)" srcset="medium.jpg">
  <source media="(min-width: 600px)" srcset="small.jpg">
  <img src="large.jpg" alt="large" style="width:auto;">
</picture>
```

ou bien plus simple :

```html
<img src="large.jpg"
     srcset="large.jpg 2400w, medium.jpg 1200w, small.jpg 600w">
```

**2400w** correspond à une taille minimum de 2400 px de large pour la taille d'écran afin de charger l'image *large.jpg*

### Sauvegarde via Photoshop

Pour sauvegarder avec un taux de compression connu ainsi qu'avec une preview, on utilisera la fonction **Save for Web** de Photoshop ou **Export**.

![Responsive mobile](/images/frontend/08-svg-images/photoshop-save-for-web-menu.png)

![Responsive mobile](/images/frontend/08-svg-images/photoshop-save-for-web.png)

## Ressources

- [https://www.beetle-seo.com/webp/](https://www.beetle-seo.com/webp/)
- [https://developers.google.com/speed/webp/](https://developers.google.com/speed/webp/)
- [https://www.w3schools.com/tags/att_source_srcset.asp](https://www.w3schools.com/tags/att_source_srcset.asp)
- [https://docs.spatie.be/laravel-medialibrary/v7/responsive-images/getting-started-with-responsive-images](https://docs.spatie.be/laravel-medialibrary/v7/responsive-images/getting-started-with-responsive-images)
- [https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)
