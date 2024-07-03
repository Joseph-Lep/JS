/*
Suivez les instructions pour créer votre premier script :

Créez une page HTML avec un titre h1 et en dessous 2 images à côté l’une de l’autre (vous avez dit Flexbox ?). En dessous, utilisez une balise paragraphe vide.

Au survol de l’image, faite en sorte que le nom de l’image s’affiche à la place du paragraphe vide !
*/

document.addEventListener("DOMContentLoaded", function () {
  let imgs = document.getElementsByTagName("img"); // cherche une balise html
  let text = document.getElementById("text"); // cherche un ID html
  for (let img of imgs) {
    img.addEventListener("mouseover", function () {
      let alt = this.alt;
      text.innerText = alt;
    });
    for (let img of imgs) {
      img.addEventListener("mouseout", function () {
        text.innerText = "";
      });
    }
  }
});

/*
document.addEventListener("DOMContentLoaded", function () {
  let img = document.getElementsByTagName("img"); // cherche une balise html
  let text = document.getElementById("text"); // cherche un ID html

  img[0].addEventListener("mouseover", function () {
    let alt = this.alt;
    text.textContent = alt;
  });
});
*/
