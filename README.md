# Yo, Ptit wiki !

Un petit guide sur les différentes choses que vous pouvez toucher/modifier facilement. Je conseille en général de faire des **Pull Requests**, après ça reste une recommandation, simplement pour avoir une prévisualisation de vos changements ainsi que de savoir s'il y a des crashs, ce serait bête de pousser un truc qui fait crasher le site sur la branche principale.

Toutes les wikis traitent du dossier **"Content"** se trouvant dans **"src"**, ils ont été conçus pour être simples à éditer.

-----

## Créer un article.

Pour créer des articles, comme une nouvelle map, des actualités web, un devblog ou autre, voici les étapes.

1. L'emplacement de cette fonctionnalité se trouve à `src/content/blogs/[lang]/[categorie]`.
> Notez que si vous créez un article, par exemple pour la langue anglaise, il sera visible que pour la version anglaise du site et ne sera pas référencé pour les autres langues.
> Pour voir la liste des noms de langues, catégories disponibles se référer respectivement aux noms des fichiers dans `src/content/i18n` et `src/content/categories`.

2. Ensuite, créez un fichier markdown, `.md` ou `.mdx`. La différence entre les deux extensions c'est que le `.mdx` permet d'utiliser des balises html et du code Javascript au format JSX.
> Note: Le nom du fichier doit être en minuscules et peut contenir des nombres, des underscores ou des tirets.
> Note: Le nom du fichier sera le nom affiché dans l'URL Google.

3. Les informations relatives aux blogs se trouvent entre trois tirets sous format `YAML`.

| Nom du Paramètre | types de valeur | Exemple | Note | Optionnel | Défaut |
| -- | -- | -- | -- | -- | -- |
| title | Texte | Mon jolie titre | Pas besoin de guillemets | **Obligatoire** | - |
| description | Texte | Lorem Ipsum | Pas besoin de guillemets | **Obligatoire** | - |
| image | URL | /assets/background/oneiric-forge-full.png | C'est le chemin de l'image à partir du dossier `public`, vous pouvez pointer vers n'importe quel dossier | **Obligatoire** | - |
| published_at | Date | 2023-08-17 | Format de date Javascript | **Obligatoire** | - |
| modified | Date | 2023-08-17 | Format de date Javascript | Optionnel | - |
| draft | True/False | True | Le contenu n'est pas accessible et visible | Optionnel | false |
| referenced | True/False | True | On peut accéder à l'article par l'URL, mais pas visible depuis l'accueil ou autre  | Optionnel | true |
| writer | Teams | nono | Pour savoir quel nom mettre, c'est le nom des fichiers `src/content/lang/[lang]/teams/[nom].md` | **Obligatoire** | - |

4. Voilà pour les informations relatives à l'article. Pour ce qui est du contenu, c'est du Markdown classique, utilisez n'importe quel éditeur.

> Exemple :
```markdown
---
title: Lancement du site d'Onerics Forge
description: Notre nouveau site dédié à Minecraft est maintenant en ligne !
image: /assets/background/oneiric-forge-full.png
published_at: 2023-08-18
draft: false
writer: nono
---

# Bienvenue sur Onerics Forge !

Nous sommes absolument ravis de vous présenter **Onerics Forge**, notre plateforme flambant neuve entièrement dédiée à l'univers de Minecraft.

...
```
-----


## Clef de traductions.

Les clefs de traductions servent à internationaliser le site, elles sont utiles dans le cas aussi de créations de nouvelles catégories, ou dans le cas de modifications ou créations d'une nouvelle langue.
> Note: Si vous créez une clef de traductions pour la langue par défaut (EN-US), elle devra être créée dans toutes les autres langues, pour éviter de se retrouver avec des traductions manquantes dans d'autres langues.

1. L'emplacement de cette fonctionnalité se trouve à `src/content/i18n`.
2. Créez un fichier JSON portant le nom de la langue, il doit respecter les normes de nommage des langues ISO 639-1:2002
> Pour la faire simple c'est comme les fichiers langue Minecraft, fr-fr pour français de france, fr-ca pour français canadien, etc., vous les connaissez.
3. Dans ce fichier, définissez un objet. Voici les propriétés des clefs JSON.

| Nom du Paramètre | types de valeur | Exemple | Note | Optionnel | Défaut |
| -- | -- | -- | -- | -- | --|
| default_language | true/false | true | C'est la langue utilisée en cas de soucis de clef non trouvée, par défaut c'est le fichier `en-us` qui a l'option à `vrai` | **Optionnel** | - |
| name | Texte | Français | C'est le nom affiché en haut sur le logo de planète, pour le changement de langues | **Obligatoire** | - |
| translations | Objet | Exemple ci-dessous | les différentes clefs et valeurs | **Obligatoire** | - |

```json
{
    "name": "Français",
    "translations": {
        "common.latest_news": "Découvrez les récentes nouveautés",
        "common.teams": "Équipes",
        "common.projects": "Projets",
        "common.read_more": "Lire la suite",
        "common.everything": "Toutes affichers",
        "common.recommendations": "Recommandations",
	}
}
```

## Créer une catégorie d'articles.

Créer un article c'est bien, mais on peut les trier/ranger par catégories.
C'est relativement simple, voici comment procéder.

1. L'emplacement de cette fonctionnalité se trouve à `src/content/categories`.
2. Créez un fichier JSON portant le nom de votre choix
> Le nom du fichier doit être en minuscules et peut contenir des nombres, des underscores ou des tirets.

3. Voici la liste des informations au format JSON possibles.

| Nom du Paramètre | types de valeur | Exemple | Note | Optionnel | Défaut |
| -- | -- | -- | -- | -- | -- |
| translations | **clef de traductions** | category.maps | Pointe vers une clef de traductions, voir le wiki des clefs de traductions | **Obligatoire** | - |
| hidden | true/false | true | Indique si cette catégorie est visible dans la section Projet | Optionnel | false |

Exemple :
```json
{
    "translations": "category.maps",
    "hidden": false
}
```

4. Dans le dossier des blogs, `src/content/blogs/[lang]/ <--` créez un dossier portant le nom du fichier de votre catégorie.
Exemple: Si je crée une catégorie, devblog.json, je dois créer un dossier devblog.

-----


## Créer un membre de l'équipe.
Cela permet aux utilisateurs de savoir qui fait partie de l'équipe, et surtout de savoir qui est spécialisé dans quel domaine.

> Fonctionnalité en cours de développement, il est prévu d'afficher vos domaines de prédilections, réseaux sociaux, moyens de contact, et une description personnalisée. 

1. L'emplacement de cette fonctionnalité se trouve à `src/content/teams`, choisissez ensuite le dossier de la langue.
2. Créez un fichier JSON portant le nom de votre choix.
> Le nom du fichier doit être en minuscules et peut contenir des nombres, des underscores ou des tirets.

> Note: Ce nom de fichier sera utilisé dans les blogs par exemple pour savoir qui a écrit l'article.

3. Les informations relatives au membre de l'équipe se trouvent entre trois tirets sous format `YAML`. 

| Nom du Paramètre | types de valeur | Exemple | Note | Optionnel | Défaut |
| -- | -- | -- | -- | -- | -- |
| name | Texte | Nonoreo | Pas besoin de guillemets | **Obligatoire** | - |
| description | Texte | Lorem Ipsum | Courte description en quelques mots | **Obligatoire** | - |
| chibi | URL | nono.png | C'est le chemin de l'image à partir du dossier `public/content/teams/chibi`, vous pouvez pointer vers n'importe quel sous-dossier | **Obligatoire** | - |
| color | [Listes des couleurs](https://tailwindcss.com/docs/customizing-colors) | red | Sera modifié au profit d'une valeur Hexadécimale | **Obligatoire** | - |
| referenced | true/false | true | Si c'est faux le chibi ne sera pas affiché sur la page d'accueil  | Optionnel | true |
| draft | True/False | True | Le contenu n'est pas accessible et visible | Optionnel | false |

Il existe deux autres paramètres qui sont optionnels : 
- **strengths**, vos domaines de prédilections, cela fonctionne sous forme de liste.
	- `domain`,  Le nom de vos domaines de prédilections .
	- `image`, Chemin vers l'image. 
		> Le chemin commence à partir de `public/teams/strengths`
- **social**, vos réseaux sociaux / moyens de vous contacter, cela fonctionne sous forme de liste.
	- `name`,  Le nom du réseau social affiché sur votre profil .
	- `url`, l'url de redirections quand l'utilisateur clique
	- `image`, Chemin vers l'icône du réseau social. 
		> Le chemin commence à partir de `public/teams/social`

4. En dessous, créez une description détaillée, faites éclater votre créativité, c'est au format markdown `.md` ou `.mdx`, parlez de vous, de votre vie, de votre rôle au sein de Oneirics. (Bref soyez créatifs).

```markdown
---
name: No NOréo#7314
description: Essaie de rendre les choses belles, même ses propres choses
chibi: 'nono.png'
color: 'blue'

strengths:
  - domain: Builder
    image: 'programming.png'
  - domain: Musician
    image: 'programming.png'
---

# Nono

## Description
TODO
```

-----

# Plus loin avec .mdx

Les fichiers markdown `.md` c'est bien, mais on se retrouve assez vite limités pour des choses plus précises comme afficher une vidéo Youtube.
Pour cela, il faut changer d'extension et passer au `.mdx`. Quels désavantages ? Aucun.
Le `.mdx` est conçu pour faire la même chose mais avec la possibilité d'utiliser du HTML.

J'ai créé une liste de balises personnalisées qui sont spécialement conçues pour la rédaction d'articles.
Un exemple est disponible dans `src/content/blogs/en-us/website/exemple.mdx`

Voici un descriptif rapide :
- **Center** - La balise center permet de centrer le contenu du markdown au centre
- **Center** - La balise center permet de centrer le contenu du markdown au centre
- **Center** - La balises center permet de centrer le contenu du markdown au centre

```html
<Center>
# Du Markdown
</Center>	
```
- **Youtube** - La balise youtube permet d'afficher une vidéo youtube, il suffit de mettre l'id de la vidéo

```html
<Youtube id="DaWbqjsxz6KeJq4" />
```

- **Chibi** - La balise chibi permet d'afficher une image de chibi, il suffit de mettre le nom de l'image ainsi que son extension.
> Note: La balise chibi pointe vers le dossier `public/content/teams/chibi`
- **Group** - La balise group permet d'afficher plusieurs élément côte à côte.

```html
<Group>
    <Chibi asset="nono.png" />
    <Chibi asset="nono.png" />
    <Chibi asset="nono.png" />
    # Mon Markdown
</Group>
```

- **Download** -  La balise download permet d'afficher un bouton de téléchargement, il suffit de mettre le lien de téléchargement ainsi que le nom du bouton.

```html
<Download src="https://test.com" label="Minimaps - RP" color="#f84f8f" icon="discord.svg" />
```

> Note: Vous pouvez modifier l'icones, qui pointe vers le dossier `public/icons` et vous pouvez modifier la couleurs au format hexadécimal de 6 caractères.

- **Divide** - La balise Divide permet de séparer la page en deux, dans l'exemple ci-dessous, je met deux boutons de téléchargement côte à côte.

```html
<Divide>
    <Download src="https://test.com" label="Minimaps - Data packs" />
    <Download src="https://test.com" label="Minimaps - RP" color="#f84f8f" icon="discord.svg" />
</Divide> 
```

-----


# Thank
Voilà, je pense avoir fait le tour de toutes les fonctionnalités.
Si vous avez des questions, n'hésitez pas.
\- Hardel 
