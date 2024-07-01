
// Je formate l'objet date dans une fonction /* Les mois commencent à 0
// function getFormattedDate() {
//     const now = new Date();
//     return `Nous sommes le : ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}  
//             ${now.getHours()}h${now.getMinutes()} : ${now.getSeconds()} : ${now.getMilliseconds()}`;
// }

// j'affiche la date dans une fonction
// function printDate() {
//     console.log(getFormattedDate());
// }

// J'appelle setInterval avec printDate en paramètre
// const intervalId = setInterval(printDate, 1000);

// J'arrête printDate après 5 sec
// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Interval arrêté.');
// }, 5000);

//* Exo 2

// function soustraction(a, b, c = 0, d = 0) {
//     return (a - b - c - d)
// }

// console.log(soustraction(50, 10, 7))

// Exo 2 function flechée

// let soustractionflechee = (a, b, c = 0, d = 0) => a - b - c - d
// console.log(soustractionflechee(100, 10, 10))

//£ Exo 3

// function ttc(prixHT, TxTVA = 20) {
//     ttc = ((prixHT * TxTVA) / 100) + prixHT
//     return `${ttc} €`
// }

// console.log(ttc(100, 5.5))

//* Exo 4 - Fonction Anonyme / Interval & timeout

// setTimeout(function() {alert('3 secondes sont passés')}, 3000)

// fonction nommée + setInterval
// setInterval(function coucou(){alert('Coucou')}, 4000)
// function printCoucou() 
// {
//     console.log('Coucou')
// }
// setInterval(printCoucou, 4000)

// ! Générer du html avec JS

// setInterval(function () {
//     let body = document.querySelector('body') // Je sélectionne l'endroit ou je veux travailler
//     let coucou = document.createElement('p') // Crée une balise <p>
//     coucou.textContent = 'Coucou !' // Insert le texte dans ma balise <p>
//     body.appendChild(coucou) // Ajoute la balise <p> dans l'endroit ou je doit travailler
// }, 1000)

// Exo 5 Fonction flechée

function greetings(Name = 'Anon') {
    console.log(`Bonjour ${Name}`)
}
greetings('Jojo')

let greetingsArrow = (Name = 'Anon') => console.log(`Bonjour ${Name}`)
greetingsArrow('Juju')

let greetingsAnon = (Name = 'Anon')

let maVariable = function() {
    alert(`Bonjour ${greetingsAnon}`)
}
console.log(maVariable())