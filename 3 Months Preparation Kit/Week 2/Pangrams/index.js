let string = "We promptly judged antique ivory buckles for the next prize";
let alphabet = {};
let letter = 97;

// Constructs an object with lowercase letters of the alphabet as keys (using ascii) to count number of occurrences.

for (let i = 0; i < 26; i++) {

    alphabet[String.fromCharCode(letter)] = 0;
    letter++;

}

function pangrams(s) {

    for (let i = 0; i < s.length; i++) {

        let letter = s[i].toLowerCase();

        // Iterates through the alphabet object, counting occurrences of each letter.

        for (let key in alphabet) {

            if (key === letter) {

                alphabet[key]++;

            }

        }

    }

    // Finally, conditional checks to see if any of the values equal zero (i.e. at least one letter has not been found).

    if (Object.values(alphabet).includes(0)) {

        return "not pangram";

    } else {

        return "pangram";

    }

}

console.log(pangrams(string));