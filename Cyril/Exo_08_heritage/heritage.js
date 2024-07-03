/*
Concevez un système de gestion de véhicules où vous avez une classe de base Vehicule avec des attributs comme la marque, le modèle et l'année ainsi que des méthodes start() et stop() qui afficheront un texte en console et qui doivent être statiques. 

Créez des classes dérivées Voiture, Moto et Vélo qui héritent de Vehicule. Chaque classe de véhicule devra avoir des méthodes spécifiques, calculerConsommation() pour une voiture et activerPhares() pour une moto, et réimplémenter start() pour Vélo avec un comportement différent.

Créez des instances de ces différentes dernières classes et appelez les methodes associées !
*/

class Vehicule {
  constructor(brand, model, year, weightInKg) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.weightInKg = weightInKg;
  }
  start() {
    return `Vroum ! ${this.brand} ${this.model} ${this.createRandomString(6)}`;
  }
  stop() {
    return "Stop !";
  }
  createRandomString(length) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}

class Car extends Vehicule {
  constructor(brand, model, year, weightInKg, consumptionInL) {
    super(brand, model, year, weightInKg);
    this.consumptionInL = consumptionInL;
  }
  calcConsuption() {
    return (this.weightInKg * this.consumptionInL) / 100;
  }
}

class Motorbike extends Vehicule {
  constructor(brand, model, year, weightInKg) {
    super(brand, model, year, weightInKg);
  }
  headlamp() {
    return "J'allume les phares";
  }
}

class Bike extends Vehicule {
  constructor(brand, model, year, weightInKg) {
    super(brand, model, year, weightInKg);
  }
  startBike() {
    return (
      super.start() +
      ` Ou plutôt 'Ding Ding' Le vélo nommé ${this.createRandomString(
        5
      )} est parti`
    );
  }
}

// Appel

let vehicule1 = new Vehicule("C'est", "L'heure de manger !", 2024, 100);
let car1 = new Car("Citroen", "Berline", 1988, 450, 5);
let moto1 = new Motorbike("Yamaha", "Sport", 1990, 150);
let bike1 = new Bike("Renault", "ville", 2020, 5);

console.log(vehicule1, car1, moto1, bike1);
console.log(vehicule1.start());
console.log(car1.calcConsuption());
console.log(moto1.headlamp());
console.log(bike1.startBike());
