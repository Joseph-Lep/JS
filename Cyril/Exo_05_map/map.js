/*
Créez un système de vote où les utilisateurs peuvent voter pour des options spécifiques.
Utilisez une Map pour stocker les options comme clés et le nombre de votes comme valeurs.
Permettez aux utilisateurs de voir les résultats en temps réel à mesure qu'ils votent.

Consignes plus précise techniquement : 
- Créez une fonction qui va initialiser la map (en fonction d’éléments reçus en paramètre)
- Créez une fonction qui va ajouter un vote à la map (tester si l’option existe, et si oui incrémenter le score et afficher les résultats totaux)
*/
function initalize() {
  let electionMap = new Map();

  electionMap.set("NFP", 0);
  electionMap.set("Macronos", 0);
  electionMap.set("Extreme Droitardé", 0);

  return electionMap;
}

let electionMap = initalize();

// let electionChoice = prompt(`Pour quel parti voulez vous voter ? ${ElectionMap.get('NFP')} / ${ElectionMap.get('Macronos')} / ${ElectionMap.get('Extreme Droitardé')} `)

function Election(electionChoice) {
  if (electionMap.has(electionChoice)) {
    electionMap.set(electionChoice, electionMap.get(electionChoice) + 1);
  } else {
    console.log("Erreur");
  }
}

Election("NFP"); // electionChoice
Election("Macronos");
Election("Z");

console.log(electionMap);
