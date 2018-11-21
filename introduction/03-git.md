---
sidebarDepth: 2
tags: ["Git", "Gitlab", "Github", "ssh", "puttygen", "Commit"]
---

# Git & Gitlab

>Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2. En 2016, il s'agit du logiciel de gestion de versions le plus populaire qui est utilisé par plus de douze millions de personnes.

[https://fr.wikipedia.org/wiki/Git](https://fr.wikipedia.org/wiki/Git)

<TagLinks />

## Programmes à installer pour utiliser Git

### Git téléchargement

<img src="/images/introduction/03-git/1280px-Git-logo.svg.png" alt="Git Logo" width="200">

Git est téléchargeable à ces adresses :

* Windows : [https://git-scm.com/download/win](https://git-scm.com/download/win)
* Mac : [https://git-scm.com/download/mac](https://git-scm.com/download/mac)

### Tortoise Git téléchargement

<img src="/images/introduction/03-git/220px-TortoiseGit_logo.svg.png" alt="Tortoise Git Logo" width="200">

Tortoise Git permet une intégration complète avec Windows Explorer pour gérer ces projets GIT.
Il n'est disponible que pour Windows.

[https://tortoisegit.org/](https://tortoisegit.org/)

Une alternative pour les utilisateurs Mac : [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/)

## Git

La principale utilité de Git est de permettre de gérer des backups intelligents avec historique sur du code.

Nous pourrons donc regrouper des changements sous un intitulé. Annulé certains changements, créer des versions de notre application et recomposer l'application avec certains changements précis.

Tous les fichiers nécessaires au projet Git sont stocké à la racine de notre projet dans un dossier caché .git.

![Git Folder](/images/introduction/03-git/git-folder.JPG)

La suppression de ce dossier entraine la suppression de l'historique Git.

Afin de fonctionner à son plein potentiel, on va travailler avec un serveur Git externe. Il servira de backup principal.
Plusieurs options s'offrent à nous :

* [Github](https://github.com/) : la meilleure solution pour tout ce qui est publique (les repository privés sont payants)
* [Gitlab](https://gitlab.com/) : l'alternative pour les repos privés.

## Gitlab

Après s'être enregistré et connecté au site, nous allons créer notre première clé SSH.
On commence par se rendre sur les paramètres de notre compte puis sur le menu de gauche dans **SSH Keys** :

![Gitlab ssh menu](/images/introduction/03-git/gitlab-ssh-menu.PNG)

Nous pouvons alors ajouter une clé et avons mêmes les indications pour y arriver en cliquant sur **generate one**.

![Gitlab ssh](/images/introduction/03-git/gitlab-ssh.PNG)

Suivez les instructions. Deux fichiers seront alors créés, la clé publique (finissant par .pub) et la clé privée (le fichier sans extension. Copiez le contenu de la clé publique dans Gitlab, gardé l'autre fichier bien à l'abri.

Si vous utilisez Tortoise Git avec SSH il faut savoir qu'il existe plusieurs formats de clé SSH. Une clé générée avec Git ne sera pas compatible avec Tortoise Git qui utilise un format différent. On devra donc lancer le logiciel [PuTTYgen](https://www.ssh.com/ssh/putty/windows/puttygen) pour ouvrir notre clé privée et la réenregistrer. Turtoise sera compatible avec ce nouveau format.

## Liste de commandes

Bien que l'on ait installé Tortoise Git nous allons quand même passer en revue certaines commandes (qui portent le même nom dans l'interface Windows) afin de se familiariser avec Git.

### Setup

Avant de commencer les commandes, on va configurer Git de manière globale (pour tout l'ordinateur).
Toutes les commandes passées en suite seront signée avec ces identifiants.

```bash
git config --global user.name = "Gil Guminski";
git config --global user.email = "g.guminski@gmail.com";
```

### Initialisation

Afin de créer le dossier .git qui va stocker le projet, on doit initialiser le projet (si ce n'est pas déjà fait) avec cette commande.

```bash
Git init
```

### Ajout de nouveaux fichiers

On peut maintenant ajouter tous les fichiers à notre projet ou alors fichier par fichier avec ``git add filename.js``.

```bash
Git add .
```

### Commit

Un commit correspond à une proposition de changement. Quand on aura effectuée un ensemble de tâches dont le but précis a été atteint (par ex : ajout de fonctionnalité), on va sauvegarder ceux-ci dans un Commit.

Chaque Commit est composé de son Id (référence / identifiant) : **34dad1dd315d24f4fb986942f08407e19f324047**

De manière générale, le titre du Commit sera créé à partir d'un verbe désignant une action en ayant le moins de mot possible.

* Correction du bug x
* Ajout de telle fonctionnalité

En restant concis, on permettra une lecture rapide des dernières modifications. Cela permet aussi de facilité le travail en équipe.

```bash
Git Commit "<titre>"
```

### Différences

Affiche les modifications effectuées depuis le dernier commit. Très utile lorsque l'on souhaite accéder à la version précédente ou se rappeler du code précédent.

```bash
Git diff
```

### Suppression des changements "Hard"

Supprime tous les changements effectués jusqu'au commit avec l'id correspondant.

```bash
Git reset –hard <id>
```

### Suppression des changements "Soft"

Supprime le commit avec l'id correspondant.

```bash
Git reset –soft <id>
```

### Liste des fichiers en attente de commit

```bash
Git status
```

### Historique des changements effectués (commité)

```bash
Git log
```

### Add Origin

Après avoir effectué ces premiers changements et commits, on doit configurer notre projet pour envoyer les données sur Gitlab par exemple.
On doit dans un premier temps ajouter une Adresse d'origine (SSH ou HTTPS), disponible à l'accueil de notre repos.

```bash
Git Remote add origin <url>
```

### Push sur le serveur

On peut ensuite Push, envoyer les changements sur le serveur.

```bash
Git push –u <remote name> <branch-name>
Git push –u origin master
```

### Push sur le serveur avec SSH

Attention que si l'on utilise SSH, on devra spécifier la clé privée SSH à utiliser, exemple :

```bash
ssh-agent sh -c 'ssh-add ~/.ssh/id_rsa; git push user@host'
```

### Clone local

Lorsque l'on souhaite travailler sur un ordinateur sur lequel notre projet n'est pas encore créé on pourra effectuer une copie avec :

```bash
Git clone <url>
```

De nouveau, on fait attention à bien spécifier la clé SSH si nécessaire.
Sur Gitlab il est possible que le Git Clone ne fonctionne pas en SSH, on pourra l'effectuer avec l'adresse HTTPS

::: tip
Exemple de commande permettant l'utilisation d'une clé SSH avec un git clone.

```bash
ssh-agent $(ssh-add C:\Users\LABO04-01-USER.SATIS2014\.ssh\id_rsa; git clone git@gitlab.com:g.guminski/ifapme.git)
```

:::

## Ressources

* [https://github.com](https://github.com)
* [https://gitlab.com](https://gitlab.com)
