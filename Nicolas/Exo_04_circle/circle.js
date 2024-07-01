let radius

do {
    radius = prompt("indiquez un nombre") //prompt est une fonction qui attends une entrée par l'U
} while (isNaN(radius))

let diameter = radius*2
function circum () {
    return Math.PI * diameter;
  }

function circumRounded (c){
c = Math.PI * diameter;
return c.toFixed(2)
  }

console.log(circum(diameter))
console.log(circumRounded(diameter))