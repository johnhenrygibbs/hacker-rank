let s = "96589218797811259658921879781126";

function separateNumbers(s) {

    // Iterate up to half the length of s and create a new string to compare against the input.

    for (let i = 1; i < Math.floor(s.length / 2) + 1; i++) {

        let newString = s.substring(0, i);
        let number = (Number(newString));

        // If number exceeds JavaScript's MAX_SAFE_INTEGER, convert to BigInt type during concatenation.

        if (number >= Number.MAX_SAFE_INTEGER) {

            newString = newString + String(BigInt(newString) + BigInt(1));

        }

        // Until the new string's length equals the input, keep adding the next number in the sequence to the string.

        while (newString.length < s.length) {

            newString = newString + String(number + 1);
            number += 1;

        }

        // Compare the strings for equality and if there is a match print the first number in the sequence.

        if (newString === s) {

            console.log("YES " + newString.substring(0, i));
            return;

        }

    }

    console.log("NO");

}

console.log(separateNumbers(s));