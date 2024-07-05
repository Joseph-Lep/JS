/*
Comme vous vous en doutez, il n’est pas très compliqué de faire un carrousel soi-même. Vous allez le mettre en place dans ce script. Un petit coup de main :

- En HTML, pas très compliqué, une image principale au dessus, 3 images plus petites en dessous avec 1 bouton de chaque côté.

- En CSS, amusez vous avec du Flexbox, la taille des images, le fond pour que cela soit plus esthétique

---- Pour la fonctionnalité principale,
- Partons du principe que l’image actuellement sélectionnée doit être entourée d’une bordure rouge. Par défaut, ce sera la première à gauche.
- Cliquer sur le bouton de gauche doit ramener vers l’image de gauche, changeant la bordure rouge et la source de l’image principale. Cliquer sur le bouton de droite fait l’inverse.
- Pour ce qui est du code, penser à utiliser les Arrays, les évènements au click, et le toggle sur une classe CSS.
- Attention, si vous êtes déjà sur la dernière image, faites en sorte que cliquer sur le bouton de droite revienne à la tout première à gauche. Faites l’inverse si vous êtes sur l’image de gauche et que vous cliquez à gauche, cela doit retourner sur la dernière image. Cela créé la sensation d’un carrousel infini !
*/

let arrayOfImgs = [
  {
    src: "https://plus.unsplash.com/premium_photo-1664299467398-76f5513ad005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2tlbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Un Teckel",
  },
  {
    src: "https://images.unsplash.com/photo-1627269542197-08588b2fec2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Un Teckel 2",
  },
  {
    src: "https://images.unsplash.com/photo-1614081620293-6ea261f4d9a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRlY2tlbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Un Teckel 3",
  },
  {
    src: "https://images.unsplash.com/photo-1587858343433-b640a4fd5935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRlY2tlbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Un Teckel 4",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let leftButton = document.getElementById("leftButton");
  let rightButton = document.getElementById("rightButton"); // pointe la fonction rightButton vers l'id nommé rightButton
  let mainImg = document.getElementById("mainImg");
  let miniatureParent = document.getElementById("miniatureParent");
  let index = 0;

  leftButton.addEventListener("click", function () {
    // appeler moveborder ici
    moveIndex("left");
    browseArray();
  });

  rightButton.addEventListener("click", function () {
    // ajoute un event listener au click a mon rightButton

    moveIndex("right"); // appelle fonction MoveIndex avec right en parametre
    browseArray();
  });

  function fetchAllImgs() {
    // boucle qui parcourt ts les objects du tableau (src et alt) et va creer des img et les remplir de mes objets ArrayOfImg selon l'index
    mainImg.src.innerText = browseArray(0);
    mainImg.alt.innerText = browseArray(0);

    for (let image of arrayOfImgs) {
      const newImg = document.createElement("img");
      newImg.src = image.src;
      newImg.alt = image.alt;
      miniatureParent.appendChild(newImg);
      //£
    }
  }

  function moveIndex(direction) {
    if (direction === "right") {
      // vérifier si déja fin array. SI oui retourner à 0 SINON avancer de +1
      if (arrayOfImgs.length - 1 === index) {
        index = 0;
      } else {
        index += 1;
      }
    } else {
      // vérifier si déja début array. SI oui retourner à array.lenght-1 SINON avancer de -1
      if (index === 0) {
        index = arrayOfImgs.length - 1;
      } else {
        index -= 1;
      }
    }
    moveBorder(index);
  }

  function moveBorder() {
    //! récuperer les instances de img crée par fetchAllImg
    //£ Activer le .redborder du css dans img correspondant à l'index donné par moveIndex et le désactiver si cela ne correspond pas
  }

  function browseArray() {
    mainImg.src = arrayOfImgs[index].src;
    mainImg.alt = arrayOfImgs[index].alt;
  }

  fetchAllImgs();
  // Activer le .redborder du css dans img correspondant à l'index 0 par moveIndex
});
