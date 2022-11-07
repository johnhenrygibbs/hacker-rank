let s = [5, 2, 2, 1, 5, 3, 2];
let d = 9;
let m = 3;

function birthday(s, d, m) {

    let result = 0;
    let sum = 0;

    // First loop iterates through the entirety of the array.

    for (let i = 0; i < s.length; i++) {

        // Second loop sums a series of numbers of length m and then checks to see if that sum equals d.

        for (let j = i; j < m + i; j++) {

            sum += s[j];

        }

        if (sum == d) {

            result++;

        }

        sum = 0;

    }

    return result;

}

console.log(birthday(s, d, m));