

let compteur = 0;
let score = 0;

while (compteur < Number.MAX_VALUE) {
    let draw = Math.random() * Number.MAX_VALUE;
	compteur += draw
    if(compteur < draw) {
        score += 1;
    }
	console.log(compteur);
	console.log(score);
}



/*
Produisez un algo qui va :

    - initialiser un compteur à 0
    - initialiser un score à 0
    - tirer un nombre aléatoire entre 0 et le maximum qui puisse porter un Number et l’ajouter au compteur. Ajouter + 1 au score si l’ajout est possible, sinon stopper le programme en affichant le score
    - tant que le compteur est inférieur au maximum que peut porter un Number, recommencer l’opération précédente
*/
