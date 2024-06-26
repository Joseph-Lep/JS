
// Je formate l'objet date dans une fonction /* Les mois commencent à 0
function getFormattedDate() {
    const now = new Date();
    return `Nous sommes le : ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}  
            ${now.getHours()}h${now.getMinutes()} : ${now.getSeconds()} : ${now.getMilliseconds()}`;
}

// j'affiche la date dans une fonction
function printDate() {
    console.log(getFormattedDate());
}

// J'appelle setInterval avec printDate en paramètre
const intervalId = setInterval(printDate, 1000);

// J'arrête printDate après 5 sec
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval arrêté.');
}, 5000);
