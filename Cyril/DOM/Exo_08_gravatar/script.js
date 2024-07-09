document.addEventListener("DOMContentLoaded", function () {
  let email = document.getElementById("email");
  let form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let hashedEmail = CryptoJS.MD5(email.value).toString();

    let generateUrl = `https://www.gravatar.com/avatar/${hashedEmail}?s=120&d=monsterid`;

    fetch(generateUrl)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          let avatar = document.getElementById("avatar");
          avatar.src = response.url;
        } else {
          console.log("Avatar non trouvé");
        }
      })
      .catch((error) => {
        console.log("Erreur lors de la requête:", error);
      });
    // construire l'url avec email hashé
    // appeler Gravatar avec cet url
    // au retour de la requete, ajouter une balise img avec la source de l'avatar construit
  });
});
