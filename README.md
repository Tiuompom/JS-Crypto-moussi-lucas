# JS-Crypto-moussi-lucas

## JS-Crypto Project

Ce projet est un outil basique de cryptographie développé en JavaScript. L’objectif principal était de manipuler des chaînes de caractères en utilisant uniquement les méthodes autorisées : `length`, `charAt()` et `charCodeAt()`. Le projet comporte plusieurs fonctions de traitement de texte et de chiffrement/déchiffrement, dont l’implémentation a évolué au fil des échanges et ajustements.

---

## Fonctionnalités

- **what_are_words_worth**  
  Demande à l’utilisateur un mot ou une phrase, calcule sa longueur et demande une confirmation.

- **count_words**  
  Compte le nombre de mots dans une chaîne (les mots étant séparés par des espaces).

- **count_words_by**  
  Compte les mots en utilisant un séparateur personnalisé.

- **count_vowels & is_a_vowel**  
  Identifie et compte les voyelles d’une chaîne en se basant sur un tableau global (merci pour ça).

- **count_consonants**  
  Calcule le nombre de consonnes en soustrayant le nombre de voyelles et d’espaces du nombre total de caractères.

- **remove**  
  Supprime toutes les occurrences d’un caractère donné dans une chaîne.

- **remove_strings**  
  Supprime plusieurs caractères d’une chaîne en appelant la fonction `remove` pour chaque caractère à éliminer.

- **crypto**  
  Chiffre une chaîne de caractères selon le principe du chiffrement en César en décalant les lettres (en tenant compte des majuscules et minuscules).

- **decrypt**  
  Déchiffre un texte chiffré en inversant le décalage (implémenté en une seule ligne en utilisant la fonction `crypto`).

- **enigma**  
  Aide à trouver la clé de chiffrement d’un texte crypté. La fonction parcourt toutes les clés possibles (1 à 26) et affiche en console le résultat de chaque tentative de déchiffrement.  
  *Implémentée en 3 lignes pour respecter la contrainte.*

---

## Processus de Développement et Interactions

Au cours du développement, j’ai rencontré plusieurs défis :

### JS en tant que language

J'ai vraiment pas l'habitude de coder et encore moins en JS, j'ai des notions de base, mais je me sentais perdu (les indications étaient claires, pas de souci). Les deux premières fonctions, j'ai ramé pendant 1 bonne heure, puis j'ai sollicité l'aide de mon frère pour la vérification. Au final, ce n'était pas top top, il m'a expliqué, calmement (non) et sans s'arracher les cheveux, ce qui n'allait pas dans mes deux premières fonctions, puis le reste a suivi.

### Débogage et gestion de variables

J’ai eu une erreur indiquant que la variable `vowels` n’était pas définie dans certaines fonctions. Grâce à des échanges constructifs (pas vraiment), j’ai appris à vérifier l’ordre de chargement dans le fichier HTML et à m’assurer que la variable était définie en amont dans le script.

### Contraintes de codage strictes

Certaines fonctions, comme `decrypt` et `enigma`, devaient être écrites de manière très concise (parfois en une seule ligne ou en trois lignes). Ces contraintes m’ont poussé à repenser l’implémentation pour concilier clarté, fonctionnalité et concision.

---

## Structure du Projet

- **crypto_lib_Moussi_Lucas.js**  
  Contient toutes les fonctions définies pour ce projet, chacune regroupée par thème (de la Partie 1 à la Partie 10).

- **js_crypto_Moussi_Lucas.htm**  
  Un fichier HTML simple qui charge le script JavaScript et exécute une série de tests via `console.assert`. Les groupes de tests dans la console permettent de vérifier le bon fonctionnement de chaque fonctionnalité.

---

## Utilisation

**Ouvrir le fichier HTML**  
Lancez le fichier `js_crypto_Moussi_Lucas.htm` dans un navigateur.

**Accéder à la console**  
Appuyez sur **F12** pour ouvrir la console et visualiser les résultats des tests et des assertions.

**Interagir avec le projet**  
Pour tester la fonction `what_are_words_worth`, une boîte de dialogue s’ouvrira pour saisir une entrée utilisateur. Les autres fonctions s’exécutent automatiquement et leurs résultats s’affichent dans la console.

---

## Remerciements

Je tiens à remercier mon frère et ChatGPT pour leur aide précieuse tout au long de ce projet. Nos échanges ont permis de résoudre des problèmes de débogage, d’optimiser le code et de respecter les contraintes imposées par les consignes du cours. ChatGPT m'a aidé aussi à faire un README très complet. Ces interactions m’ont non seulement aidé à finaliser le projet, mais ont aussi enrichi ma compréhension des techniques de manipulation de chaînes en JavaScript.

---

*Fin du README –  JS-Crypto*
