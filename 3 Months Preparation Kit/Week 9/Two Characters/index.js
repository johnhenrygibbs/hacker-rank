let s = "beabeefeab";

function alternate(s) {

    let uniqueArray = findUniqueCharacters(s);
    let pairings = {};
    let key = 1;

    // Looping through the unique characters array, populate the pairings object with all possible combos of two letters.

    for (let i = 0; i < uniqueArray.length; i++) {

        for (let j = i + 1; j < uniqueArray.length; j++) {

            pairings[key] = [uniqueArray[i], uniqueArray[j]];
            key++;

        }

    }

    // Iterating through the pairings object, replace each value with its string equivalent by looping over the original string.

    for (let pair in pairings) {

        let combo = pairings[pair];
        let newString = "";

        for (let i = 0; i < s.length; i++) {

            if (s[i] === combo[0] || s[i] === combo[1]) {

                newString += s[i];

            }

        }

        pairings[pair] = newString;

    }

    // Stepping through the pairings object once more, remove invalid strings which do not alternate every other letter.

    for (let string in pairings) {

        let possibleString = pairings[string];

        for (let i = 1; i < possibleString.length; i++) {

            if (possibleString[i] === possibleString[i - 1]) {

                delete pairings[string];

            }

        }

    }

    let result = findBiggestString(pairings);

    return result;

}

// Helper function that isolates unique characters within any given string.

function findUniqueCharacters() {

    let uniqueChars = [];

    for (let i = 0; i < s.length; i++) {

        if (!uniqueChars.includes(s[i])) {

            uniqueChars.push(s[i]);

        }

    }

    return uniqueChars;

}

// Helper function that looks for the longest string value within an object.

function findBiggestString(object) {

    let longest = 0;

    for (let item in object) {

        let string = object[item];

        if (string.length > longest) {

            longest = string.length;

        }

    }

    return longest;

}

console.log(alternate(s));