// Développez un script en JavaScript qui permet de créer et gérer une collection de films.
// Chaque film est représenté par un objet avec les attributs suivants `title`, `year`, `genre`, `rating`, `duration` .
// Le genre est également un objet avec l’attribut `name` .

// ### Fonctionnalités à implémenter :

// 1. **Ajouter un Film :**
//     - Créez une fonctionnalité qui permet d'ajouter un nouveau film à la collection en saisissant les
// détails dans les paramètres attendus.
// 2. **Filtrer par Genre :**
//     - Ajoutez un filtre qui permet à l'utilisateur de sélectionner un genre spécifique (comme action,
// comédie, drame, etc.) et affiche tous les films de ce genre.

let globalMovieCollection = [];

class Genre {
  constructor(name) {
    this.name = name;
  }
}

class Movie {
  constructor(title, year, rating, durationInMinutes, genre) {
    this.title = title;
    this.year = year;
    this.rating = rating;
    this.durationInMinutes = durationInMinutes;
    this.genre = genre;
  }
}

function addMovieToCollection(
  title,
  year,
  rating,
  durationInMinutes,
  genreName
) {
  let genre = new Genre(genreName);
  let movie = new Movie(title, year, rating, durationInMinutes, genre);
  console.log(`${movie.title} ajouté`);
  globalMovieCollection.push(movie);
}

addMovieToCollection("HP", 2001, 8.9, 150, "Magie");
addMovieToCollection("LoTr", 2001, 9.1, 210, "Fantasy");

function filterCollectionByGenre(genreName) {
  // itérer sur ma collection
  for (let movie of globalMovieCollection) {
    // si l'élément en cours possède un genre dont le name === genreName

    if (movie.genre.name.toLowerCase().includes(genreName.toLowerCase())) {
      // alors display de l'élément
      displayMovie(movie);
    }
  }
}

function displayMovie(movieObject) {
  console.log(movieObject);
}

filterCollectionByGenre("magie");
// filterCollectionByGenre("Sci-Fi");
