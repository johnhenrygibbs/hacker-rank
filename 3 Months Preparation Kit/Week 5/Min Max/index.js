let arr = [1, 4, 7, 2];
let k = 2;

function maxMin(k, arr) {

    // Sort the initial array and create variables for min and max.

    arr.sort(function(a, b) {

        return a - b;

    });

    let min;
    let max;

    // Iterate through the initial array and push the difference between max and min values into an empty array.

    let unfairArray = [];

    for (let i = 0; i < arr.length - k + 1; i++) {

        let minimum = arr[i + k - 1] - arr[i];
        unfairArray.push(minimum);

    }

    // Sort the array of minimums and the first value provides the minimum unfairness.

    unfairArray.sort(function(a, b) {

        return a - b;

    });

    return unfairArray[0];

}

console.log(maxMin(k, arr));