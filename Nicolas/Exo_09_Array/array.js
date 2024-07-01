let livre = ['A', 'B', 'C', 'D']
livre.splice(0) // Supprime l'indice 0
livre.splice(0, 'D') // Supprime puis ajoute un nouvel élement à l'indice 0
livre[0] = 'E' // Ecrase la valeur dans l'indice 0
console.log(livre.length) // Retourne le nbr d'élément d'un tableau

let string = "A / B / C / D"
let stringToarray = string.split(' / ') // Crée un nouveau tableau et un nvl élément à chq fois que la fonction rencontre le paramètre demandé
let stringAgain = stringToarray.join(' / ') // Casse un tableau en str et sépare chq élément par le paramètre demandé

// Exo 1 - crée et manip

let notAllmen = ['Zohra', 'Lana', 'Emma', 'Maxime', 'Florian', 'Isaac', 'Robin', 'Basile', 'Hugo', 'Daniel', 'Timothée', 'Anthony', 'Mostafa'];
notAllmen.splice(0, 0, 'Joseph')
notAllmen.push("Nathalia") // Ajoute 1 élément en fin de tableau
console.log(notAllmen)
notAllmen.splice(0, 1)
console.log(notAllmen)
let lengthA = notAllmen.length
console.log(lengthA)

// Exo 2 - Reverse

let nbr = "cinq quatre trois deux un zéro"
let strToarray = nbr.split(' ') // Casse un str en array
console.log(strToarray)
strToarray = strToarray.reverse()
console.log(strToarray)
let arrayTostring = strToarray.join(', ') // Casse un tableau en str
console.log(arrayTostring)