let arr = [7, 2, 5, 3, 5, 3];
let brr = [7, 2, 5, 4, 6, 3, 5, 3];

function missingNumbers(arr, brr) {

    // Start by sorting each array in ascending order.

    arr.sort(function(a, b) {

        return a - b;

    });

    brr.sort(function(a, b) {

        return a - b;

    });

    // An unmatched counter increments when a match is not found.

    // Since the arrays are sorted, we use the unmatched number to essentially "hold" our place in arr as we keep iterating through brr.

    let numbers = [];
    let unmatched = 0;

    for (let i = 0; i < brr.length; i++) {

        if (brr[i] !== arr[i - unmatched]) {

            numbers.push(brr[i]);
            unmatched++;

        }

    }

    // Lastly, we need to remove the dupes from our unmatched numbers array.

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] === numbers[i - 1]) {

            numbers.splice(i, 1);

        }

    }

    return numbers;

}

console.log(missingNumbers(arr, brr));