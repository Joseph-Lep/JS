/* Ecrivez une fonction permettant de trier un tableau initial contenant des valeurs de plusieurs types (Number, String, et Object) en plusieurs tableaux, chacun d’un type unique (soit un tableau de tableaux, soit un objet avec un champ par tableau).

Il faudra reprendre votre fonction de test, qui ne peut pas comparer correctement 2 objets (pas de types primitifs). 

TESTS avec pour retour un objet avec 3 propriétés contenant les tableaux
assertEquals(trierParType([]), { numbers: [], strings: [], objects: [] }, "Test avec tableau vide");
assertEquals(trierParType([1, 2, 3]), { numbers: [1, 2, 3], strings: [], objects: [] }, "Test avec tableau de nombres");
assertEquals(trierParType(['apple', 'banana', 'orange']), { numbers: [], strings: ['apple', 'banana', 'orange'], objects: [] }, "Test avec tableau de chaînes de caractères");
assertEquals(trierParType([{ name: 'John' }, { age: 30 }]), { numbers: [], strings: [], objects: [{ name: 'John' }, { age: 30 }] }, "Test avec tableau d'objets");
assertEquals(trierParType([1, 'apple', { name: 'John' }, 'orange', 5, { age: 30 }]), { numbers: [1, 5], strings: ['apple', 'orange'], objects: [{ name: 'John' }, { age: 30 }] }, "Test avec tableau de types mixtes");
assertEquals(trierParType([null, undefined, 1, 'apple']), { numbers: [1], strings: ['apple'], objects: [] }, "Test avec tableau contenant null et undefined");
assertEquals(trierParType([NaN, Infinity, 1, 'apple']), { numbers: [NaN, Infinity, 1], strings: ['apple'], objects: [] }, "Test avec tableau contenant NaN et Infinity");



function assertEquals(initialArray)
{
    * recevoir et parcourir le tableau (boucle)
    let filteredArray = 
    ([
        numbers = [],
        strings = [],
        objects = []
    ]);

    * identifier le typage de chaque index lors de la boucle
    for (let i of initialArray)
    {
        if (typeof i === "number")
        {
            filteredArray += numbers.push()
            console.log(filteredArray)
        }
        else if (typeof i === "string") 
        {
            filteredArray += strings.push()
            console.log(filteredArray)
        }
        else if (typeof i === "object")
        {
            filteredArray += objects.push()
            console.log(filteredArray)
        }
return console.log(filteredArray)
    }
    * enregistrer dans une variable le type identifié et le.s entrées [index]
    £ voir cas limite : null, undefined, NaN, Infinity, etc
    £ refacto : continue / try catch ?
}
*/

function trierParType(initialArray)
{
    let result = 
    {
        numbers: [],
        strings: [],
        objects:[]
    }

    for (const element of initialArray)
        {
            if (typeof element === 'number')
                {
                    result.numbers.push(element);
                }
            else if (typeof element === 'string')
                {
                    result.strings.push(element);
                }
            else if (typeof element === 'object')
                    {
                        result.objects.push(element);
                    }
        }


    return result
}

function assertEquals(actual, expected, testName) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log(`✅ Test "${testName}" passe.`);
    } else {
      console.error(`❌ Test "${testName}" échoue. Attendu : "${expected}", Obtenu : "${actual}"`);
    }
  }

assertEquals(trierParType([]), { numbers: [], strings: [], objects: [] }, "Test avec tableau vide");
assertEquals(trierParType([1, 2, 3]), { numbers: [1, 2, 3], strings: [], objects: [] }, "Test avec tableau de nombres");
assertEquals(trierParType(['apple', 'banana', 'orange']), { numbers: [], strings: ['apple', 'banana', 'orange'], objects: [] }, "Test avec tableau de chaînes de caractères");
assertEquals(trierParType([{ name: 'John' }, { age: 30 }]), { numbers: [], strings: [], objects: [{ name: 'John' }, { age: 30 }] }, "Test avec tableau d'objets");
assertEquals(trierParType([1, 'apple', { name: 'John' }, 'orange', 5, { age: 30 }]), { numbers: [1, 5], strings: ['apple', 'orange'], objects: [{ name: 'John' }, { age: 30 }] }, "Test avec tableau de types mixtes");
assertEquals(trierParType([null, undefined, 1, 'apple']), { numbers: [1], strings: ['apple'], objects: [] }, "Test avec tableau contenant null et undefined");
assertEquals(trierParType([NaN, Infinity, 1, 'apple']), { numbers: [NaN, Infinity, 1], strings: ['apple'], objects: [] }, "Test avec tableau contenant NaN et Infinity");

