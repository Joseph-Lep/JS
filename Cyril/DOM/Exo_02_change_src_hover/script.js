/*
Créez une image avec un attribut src initial. Utilisez JavaScript pour changer la source de l'image lorsque l'utilisateur survole un bouton

- A chaque survol, l’image doit changer (et provenir d’une liste d’images potentielles, avec un tirage au hasard)

- L’image doit forcément changer au survol (si le tirage aléatoire tombe sur l’image déjà affiché, en refaire un autre)

-//? Changeons d’idée, à présent, nous allons juste faire en sorte que l’image change au survol, et qu’elle reprenne son apparence quand la souris ne la survole plus. Par exemple, si vous montrez une photo de chien par défaut, au survol il y aura un tirage aléatoire pour en montrer une autre. Et quand la souris quittera l’image, la photo de chien devra réapparaître. 
*/

document.addEventListener("DOMContentLoaded", function () {
  // Attendre que le DOM soit chargé avant de démarrer

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // Tirage aléatoire entier
  let index = 0;
  let imgsTags = document.getElementsByTagName("img");
  let urls = document.getElementById("urls");
  let arrayOfImg = [
    "https://plus.unsplash.com/premium_photo-1664299467398-76f5513ad005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2tlbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1627269542197-08588b2fec2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614081620293-6ea261f4d9a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRlY2tlbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1587858343433-b640a4fd5935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRlY2tlbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://ik.imagekit.io/yynn3ntzglc/cms/124_principale_4a5d8ad736_vlOvIKCaj.jpg?tr=w-1068,h-520&v=-535739369",
    "https://static.fnac-static.com/multimedia/Images/FR/NR/c2/41/e5/15024578/1507-1/tsp20230421071521/Tout-le-monde-a-un-teckel-sauf-moi.jpg",
  ];

  for (let imgTag of imgsTags) {
    imgTag.addEventListener("mouseover", function () {
      let randomIndexOfArray;
      do {
        randomIndexOfArray = entierAleatoire(1, arrayOfImg.length - 1);
      } while (arrayOfImg[randomIndexOfArray] === index);
      index = randomIndexOfArray;
      imgTag.src = arrayOfImg[randomIndexOfArray];

      this.src = arrayOfImg[randomIndexOfArray];
      if (urls) {
        urls.innerText = "" + this.src;
      }
    });
    for (let imgTag of imgsTags) {
      imgTag.addEventListener("mouseout", function () {
        this.src = arrayOfImg[0];
        urls.innerText = "" + this.src;
      });
    }
  }
});
