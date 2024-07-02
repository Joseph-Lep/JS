/*
Développez un script en JavaScript qui permet de créer et gérer une collection de films. Chaque film est représenté par un objet avec les attributs suivants : titre, année, genre, note, durée . Le genre est également un objet avec l’attribut name .

Ajouter un Film : Créez une fonctionnalité qui permet d'ajouter un nouveau film à la collection en saisissant les détails dans les paramètres attendus.

Filtrer par Genre : Ajoutez un filtre qui permet à l'utilisateur de sélectionner un genre spécifique (comme action, comédie, drame, etc.) et affiche tous les films de ce genre.
*/

class Movie {
  constructor(title, year, genra, mark, duration) {
    this.title = title;
    this.year = year;
    this.genra = genra;
    this.mark = mark;
    this.duration = duration;
  }
}
function setMovie(title, year, genra, mark, duration) {
  let movie = new Movie(title, year, genra, mark, duration);
  return console.log(`${movie.title} ajouté`);
}

setMovie("Coucou", 1988, "Policier", 8, 120);
setMovie("Coucou le retour", 1989, "Policier", 7, 110);
setMovie("Coucou III", 1991, "Policier", 8, 120);

class Movies extends Movie {
  super(name) {
    this.movies = new Movie();
  }
}

let getAllMovies = new Movies();

// function getGenra(genra) {
//     foreach (movies) {

//     }
// }

console.log(getAllMovies);
