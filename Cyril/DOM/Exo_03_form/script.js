/*
Désactivez le bouton jusqu'à ce que tous les champs du formulaire soient remplis correctement selon des regles de validation arbitraires et inventées. Voilà des exemples :

- Pour le nom, assurez-vous qu’il ne comporte pas de chiffre, de caractères spéciaux, et qu’ils soit non vide
- Pour le nom, assurez-vous que la première lettre est en majuscule
- Pour l’email, assurez-vous qu’il se termine par “gmail.fr”

Affichez les erreurs pour vos utilisateurs en temps réel pour chaque input (sous forme de texte rouge par exemple)
*/

document.addEventListener("DOMContentLoaded", function () {
  const REGEX_NAME = /[\d\s\W_]/g;
  const REGEX_EMAIL = /@gmail.fr/g;
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let nameIsValid = false;
  let emailIsValid = false;

  name.addEventListener("input", function () {
    // SI champ name vide OU n'include pas chiffre ALORS isValid est true
    if (name.value === "" || REGEX_NAME.test(name.value)) {
      inputErrorsN.innerText =
        "erreur il faut des caratères, pas de vide, chiffres ou de spéciaux";
      nameIsValid = false;
    } else {
      nameIsValid = true;
      inputErrorsN.innerText = "";
    }
    // SI champ email vide OU n'include pas @gmail.com ALORS isValid est false
    if (email.value === "" || REGEX_EMAIL.test(email.value)) {
      inputErrorsE.innerText = "erreur l'email doit être @gmail.fr";
      emailIsValid = false;
    } else {
      emailIsValid = true;
      inputErrorsE.innerText = "";
    }
    // retourner isValid. (si je ne suis rentré dans aucun IF il est true)
    enableButton();
  });
  // Si isValid est true alors unlock le bouton

  function enableButton() {
    if (nameIsValid && emailIsValid) {
      document.getElementById("boutonSubmit").disabled = false;
    } else {
      document.getElementById("boutonSubmit").disabled = true;
    }
  }
});

// Activer le bouton de validation SI (do while)
// regex nom est ok && si nom commence par une Maj
// && si email contient bien "gmail.com" après le @
// print dans un <p> les erreur catch
