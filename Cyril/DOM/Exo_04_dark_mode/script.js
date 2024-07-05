/*
Pour l’HTML, utilisez simplement un h1, un paragraphe, et un input de type checkbox
Pour le CSS, ajouter le style par défaut (light mode) pour que ça ressemble à la première image. Puis, créez une classe dark-mode qui changera :
la couleur du fond
la couleur du texte
la couleur du h1
La classe dark-mode ne sera appliquée à rien par défaut
Pour le JS, faite en sorte de sélectionner la checkbox, et de surveiller les changements. Dès qu’un changement opère, ajoutez ou retirer la classe “dark-mode” de la balise body.
*/

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("checkbox").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });
});
