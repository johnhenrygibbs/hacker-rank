let strings = ['ab', 'ab', 'abc'];
let queries = ['ab', 'abc', 'bc'];

function matchingStrings(strings, queries) {

    let results = [];

    // Loop makes an array of elements to be incremented for every matching result.

    for (let i = 0; i < queries.length; i++) {

        results.push(0);

    }

    // Nested loop compares the data.

    for (let j = 0; j < queries.length; j++) {

        let query = queries[j];

        for (let k = 0; k < strings.length; k++) {

            let string = strings[k];

            if (query == string) {

                results[j]++;

            }

        }

    }

    return results;

}

console.log(matchingStrings(strings, queries));