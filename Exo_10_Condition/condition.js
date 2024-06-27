// Exo 01

function ageCheck() {
    let ageCheck = prompt('Quel âge avez vous ?')
    alert(ageCheck)
        if (ageCheck >= 18) {
            return console.log("Bravo vous êtes une grande personne !")
        }
        else {
            return console.log("Vous n'êtes pas encore une assez grande personne :(")
        }
}

// && -> true si A & B sont vrais
// || -> true si A ou B est vrai
// ! -> inverse la valeur

// Exo 02 - Conditions multiples

let age = prompt('Quel âge avez-vous ?');
let student = prompt('Êtes-vous étudiant ? Y / N');

function ticket(age, student) {
    age = parseInt(age);
    
    if (isNaN(age)) {
        return 'Erreur, L\'âge doit être un nombre.';
    }
    else if (typeof student == String) {
        return 'Erreur, veuillez rentrer un STR';
    }
    else {
        student = student.toUpperCase() 
        student = student.trim()
    }
    if (age > 18 && student === 'N') {
        return '10 Balles mon poulet !';
    } else if (age >= 12 && age <= 18) {
        return '5 balles stp';
    } else if (age <= 18 || student === 'Y') {
        return '7 € pépère !';
    } else {
        return 'Erreur !';
    }
}

console.log(ticket(age, student));


