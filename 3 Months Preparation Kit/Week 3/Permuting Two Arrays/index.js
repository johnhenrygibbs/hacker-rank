let k = 10;
let A = [2, 1, 3];
let B = [7, 8, 9];

function twoArrays(k, A, B) {

    // Sort each array and reverse the second in order to match minimums and maximums.

    A.sort(function(a, b) {

        return a - b;

    });

    B.sort(function (a, b) {

        return a - b;

    }).reverse();

    // If one combination is found that does not add up to at least k, then the arrays don't satisfy the requirements and "NO" is returned.

    for (let i = 0; i < A.length; i++) {

        if (A[i] + B[i] < k) {

            return "NO";

        }

    }

    return "YES";

}

console.log(twoArrays(k, A, B));