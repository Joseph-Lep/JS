/*
Développez une fonction countOccurrences qui prend un nombre variable d'arguments de type chaîne de caractères et un mot cible, et retourne le nombre d'occurrences du mot cible parmi les arguments.
*/

function assertEquals(actual, expected, testName) {
    if (actual === expected) {
      console.log(`✅ Test "${testName}" passe.`);
    } else {
      console.error(`❌ Test "${testName}" échoue. Attendu : "${expected}", Obtenu : "${actual}"`);
    }
  }

function countOccurrences(targetWord, ...wordList) 
{
let score = 0;
for(const word of wordList)
    {
        if (targetWord.trim() === word.trim()) {
            score +=1;
        }
    }
return score;
}

assertEquals(countOccurrences('apple', 'apple', 'banana', 'apple'), 2, "Test avec 'apple', 'apple', 'banana', 'apple'");
assertEquals(countOccurrences('orange', 'banana', 'grape'), 0, "Test avec 'orange', 'banana', 'grape'");
assertEquals(countOccurrences('Apple', 'apple', 'APPLE'), 0, "Test avec 'Apple', 'apple', 'APPLE'");
assertEquals(countOccurrences('', ''), 1, "Test avec '', ''");
assertEquals(countOccurrences('', '', ''), 2, "Test avec '', '', ''");
assertEquals(countOccurrences('$@#$', '@#$', '#@$'), 0, "Test avec '$@#$', '@#$', '#@$'");
assertEquals(countOccurrences('apple', 'apples', 'pineapple'), 0, "Test avec 'apple', 'apples', 'pineapple'");
assertEquals(countOccurrences('  apple  ', 'banana', '   apple'), 1, "Test avec '  apple  ', 'banana', '   apple'");