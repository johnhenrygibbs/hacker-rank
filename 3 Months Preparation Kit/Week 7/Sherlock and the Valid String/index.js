let s = "aabbcd";

function isValid(s) {

    let log = {};
    let a = 97;

    // Create a blank log with letters as keys ready to accept frequency as values.

    for (let i = 0; i < 26; i++) {

        log[String.fromCharCode(a + i)] = 0;

    }

    // Iterate over the string, incrementing frequency of letters throughout.

    for (let j = 0; j < s.length; j++) {

        let char = s[j];

        for (let key in log) {

            if (key === char) {

                log[char]++;

            }

        }

    }

    // Remove letters that have zero occurrences in the string.

    for (let key in log) {

        if (log[key] === 0) {

            delete log[key];

        }

    }

    console.log(log);

    // Create a second object that will hold occurrences as keys and number of letters as values.

    let frequency = {};
    let values = Object.values(log);

    for (let i = 0; i < values.length; i++) {

        if (frequency.hasOwnProperty(values[i])) {

            frequency[values[i]]++;

        } else {

            frequency[values[i]] = 1;

        }

    }

    // Finally, implement a number of conditionals to check if it's possible to remove 1 character to make string valid.

    let occurrences = Object.values(frequency);
    let numbers = Object.keys(frequency);
    let first = Number(numbers[0]);
    let second = Number(numbers[1]);

    if (occurrences.length === 1) {

        return "YES";

    } else if (occurrences.length === 2) {

        if (occurrences[0] === 1 && (first === 1 || first - second === 1)) {

            return "YES";

        } else if (occurrences[1] === 1 && (second === 1 || second - first === 1)) {

            return "YES";

        } else if (occurrences[0] === 1 && first - second === 1) {

            return "YES";

        } else if (occurrences[1] === 1 && second - first === 1) {

            return "YES";

        } else {

            return "NO";

        }

    }

    return "NO";

}

console.log(isValid(s));