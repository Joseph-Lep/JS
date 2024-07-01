let outerVar = "Je suis externe"

function portee() {
    let innerVar = console.log("je suis interne")
    return innerVar
}

console.log(outerVar)
console.log(innerVar)