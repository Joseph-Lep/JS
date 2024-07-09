/*
# **Quiz Voyage - "Devinez le Pays"**

Affichez des images liées à un pays et demandez aux participants de deviner de quel pays il s'agit.

# Version 1

## Fonctionnalités

- Montrez les images une par une. Le joueur doit saisir une réponse, tenter de la valider. Si la réponse est bonne, il gagne 10 points et passe au pays suivant.
- Il ne perds pas de point s’il se trompe, mais ne peux pas faire plus de 3 tentatives
- Il peut demander 1 seul indice par image, mais il ne doit gagner que 5 points s’il trouve.
- Ajoutez 20 pays/indices au total
- Une fois la partie terminée, faites disparaître les images et le formulaire, faites apparaître le score final en gros au milieu de la page, ainsi qu’un bouton “Recommencer” qui relancera le jeu.

## Layout (disposition) de la page

Pour la construction de la page, vous êtes libre de choisir ce qui vous convient. La seule demande est de réserver une partie de la page pour le score total en cours. Il peut avoir un score maximum de 200 points. Par exemple, vous pouvez présenter les images, indices et formulaire dans les 2/3 à gauche, et réserver le 1/3 restant à droite pour l’affichage du score total, le nombre d’image déjà passées, etc. (les infos globales du jeu).

£ # Version 2

£ Reprenez le code précédent et modifier le pour avoir un site multipages. Au lieu de faire apparaître ou disparaître la section finale de score qui permet notamment de recommencer une partie, faites en sorte que cela soit une page web complètement différente (un nouveau fichier) qui se charge de cet affichage du score final.

£ Il faudra faire attention à plusieurs éléments :

£ - Les urls pour naviguer entre vos pages
£ - L’utilisation des informations de scores doivent transiter vers la page finale afin d’être affichées. Il existe au moins 2 stratégies pour gérer cela.
*/

// crée un array d'objet avec : images, alt, description (qui sera le pays correctement associé à l'image + nom supplémentaire) et indice (qui contient l'indice du pays correpondant)
// crée un form (avec fonctions de trim strtolower etc) et un boutton //? afficher les réponses fausses données
// crée un bouton "indice" qui affiche l'indice correspondant dans une <p> ajouter boolean pour voir si cela a été pressé
//

document.addEventListener("DOMContentLoaded", function () {
  //* Variables & CONST

  const REGEX_INPUT = /[\d\s\W_]/g;
  let data_country = [
    {
      title: "espagne",
      src: "spain.jpg",
      clue: "Raphael Nadal",
      clueWasAsked: false,
      alt: "Iberique",
      is_drawn: false,
      answerIsGood: false,
    },
    {
      title: "portugal",
      src: "portugal.jpg",
      clue: "Christiano Ronaldo",
      clueWasAsked: false,
      alt: "Pointe iberique",
      is_drawn: false,
      answerIsGood: false,
    },
    {
      title: "ouzbekistan",
      src: "ouzbekistan.jpg",
      clue: "Samarcande",
      clueWasAsked: false,
      alt: "Tamerlan",
      is_drawn: false,
      answerIsGood: false,
    },
    {
      title: "mongolie",
      src: "mongolia.jpg",
      clue: "Gengis Khan",
      clueWasAsked: false,
      alt: "Nomades",
      is_drawn: false,
      answerIsGood: false,
    },
  ];

  let answerIsCorrect = null;
  let continueTheQuizz = false;
  let score = 0;
  let errorCounter = 0;
  let fetchErrors = [];
  let countryClue = null;
  let countryTitle = null;
  let sanitizedInput = "";
  let getUserInput = document.getElementById("userInput");
  let validateAnswer = document.getElementById("validateAnswer");

  //* Variables & CONST

  // % parcourir tableau & afficher img + verser données pour check réponses

  function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomCountry() {
    let country;
    let randomIndex;

    do {
      randomIndex = rng(0, data_country.length - 1);
      country = data_country[randomIndex];
    } while (country.is_drawn);
    country.is_drawn = true;
    let countryPhoto = document.getElementById("countryPhoto");
    let countryClue = country.clue;
    let countryTitle = country.title;
    countryPhoto.src = country.src;
    countryPhoto.alt = country.alt;

    return countryClue, countryTitle;
  }
  randomCountry();

  // % afficher img + verser données pour check réponses

  // £ EventListener

  // valider réponse & comptage

  // valider réponse & comptage
  //* clue + check if clue used
  // let getAClue = (document.getElementById("clue").innerText = countyClue);
  //* clue + check if clue used

  // £ EventListener

  // check if userInput is correct & sanitize l'input user //?refacto

  function sanitize(getUserInput) {
    if (getUserInput.value === "" || REGEX_INPUT.test(getUserInput.value)) {
      document.getElementById("inputRegexError").innerText =
        "erreur il faut des caratères, pas de champ vide, chiffres ou de spéciaux";
    } else {
      sanitizedInput = getUserInput.value.trim().toLowerCase();
    }
    return sanitizedInput;
  }
  // check if userInput is correct & sanitize l'input user //?refacto

  // check reponse + error //todo check si clue demandé
  function answerCheck(sanitizedInput, countryTitle) {
    if (sanitizedInput === countryTitle) {
      score += 10;
      answerIsCorrect = true;
      continueTheQuizz = true;
    } else {
      fetchErrors.push.sanitizedInput;
      document.getElementById(
        "userErrors"
      ).innerText = `${fetchErrors} ${fetchErrors.lenght}`;
      // todo afficher dans un <p> les mauvaises réponses (les récup, et les garder dans un tableau)
      // augmenter compteur à +1
      // todo afficher <p> avec erreur & compteur erreurs
      errorCounter += 1;

      if (errorCounter <= 3) {
        score = 0;
        errorCounter = 0;
        answerIsCorrect = false;
        continueTheQuizz = true;
        // SI compteur >=3 ALORS score=0 // todo & passer Q suivante et errorcounter = 0
      }
    }

    return score, errorCounter, answerIsCorrect, continueTheQuizz; //! ça va marcher ?
  }
  // check reponse + error
  validateAnswer.addEventListener("click", function () {
    sanitize(getUserInput);
    answerCheck(sanitizedInput, countryTitle);
    scoreCounter();
  });
  // clue

  // clue

  // calcul score
  function scoreCounter(score) {
    score += score;
    return score;
  }
  // calcul score
});
