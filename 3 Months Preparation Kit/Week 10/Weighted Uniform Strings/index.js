let s = "abbcccdddd";
let queries = [1, 7, 5, 4, 15];

function weightedUniformStrings(s, queries) {

    let weights = [];
    let answer = [];
    let substringWeight = 0;

    // Iterate through the string, keeping track of the weight of each char.

    for (let i = 0; i < s.length; i++) {

        // If char is equal to its predecessor, increment the substringWeight variable and push that value to the weights array.

        if (s[i] === s[i - 1]) {

            substringWeight += s.charCodeAt(i) - 96;
            weights.push(substringWeight);

        // Else push that char's weight to the weights array and then begin to increment substringWeight.

        } else {

            weights.push(s.charCodeAt(i) - 96);
            substringWeight = s.charCodeAt(i) - 96;

        }

    }

    // Now that we have an array that contains all possible substring weights, we can check against our queries input.

    for (let i = 0; i < queries.length; i++) {

        if (!weights.includes(queries[i])) {

            answer.push("No");

        } else {

            answer.push("Yes");

        }

    }

    return answer;

}

console.log(weightedUniformStrings(s, queries));