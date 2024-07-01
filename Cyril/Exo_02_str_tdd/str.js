/*
TDD : Test Driven Dev
Objectif : Écrire une fonction qui prend un nom complet en entrée et génère les initiales correspondantes, en prenant en compte les règles de capitalisation. Par exemple, Dupont Jean donnera DJ.

Rédigez une fonction de test afin de valider que votre fonction fait ce qu’elle est sensée faire (assertEquals) et qui imprimera le résultat du test de façon claire.
*/


function assertEquals(actual, expected, testName) {
    if (actual === expected) {
      console.log(`✅ Test "${testName}" passe.`);
    } else {
      console.error(`❌ Test "${testName}" échoue. Attendu : "${expected}", Obtenu : "${actual}"`);
    }
  }

function Initials(names) {
const names = 'John Doe'

if (names === undefined || names === null)
    {
    return ""
    }
for (const codePoint of text) {
  console.log(codePoint)
}
Array.from(text)

    }

//* function attends un nom et retourne les initiales selon maj
//£ scinde le str en tableau pour chq charatère -> trim g -> return index 0 (1ere initiale) -> trim g au prochain spécial char


/*
assertEquals(initials("John Doe"), "JD", "John Doe");
assertEquals(initials("Alice Cooper-Smith"), "ACS", "Alice Cooper-Smith");
assertEquals(initials("Emma Watson"), "EW", "Emma Watson");
assertEquals(initials("Marie-Claire Dupont"), "MCD", "Marie-Claire Dupont");
assertEquals(initials("Robert O'Connor"), "ROC", "Robert O'Connor");
assertEquals(initials("Émilie Martin"), "EM", "Émilie Martin");
assertEquals(initials("Peter van der Berg"), "PVD", "Peter van der Berg");
assertEquals(initials("Sébastien Leblanc"), "SL", "Sébastien Leblanc");
assertEquals(initials("Jörg Müller"), "JM", "Jörg Müller");
assertEquals(initials(""), "", "Empty string");
assertEquals(initials(" "), " ", "Whitespace string");
assertEquals(initials("Михаил Иванов", "МИ", "Михаил Иванов"));
assertEquals(initials("Javier López"), "JL", "Javier Lopez");
assertEquals(initials("John O'Reilly"), "JOR", "John O'Reilly");
assertEquals(initials("阿 玛"), "阿玛", "阿 玛");
*/