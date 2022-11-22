let arr = [5, 4, 3, 2, 1];

function closestNumbers(arr) {

    let validPairs = [];

    arr.sort(function(a, b) {

        return a - b;

    });

    let smallest = arr[1] - arr[0];

    // First loop will find the smallest difference that exists between integers in the sorted array.

    for (let i = 1; i < arr.length; i++) {

        let difference = arr[i + 1] - arr[i];

        if (difference < smallest) {

            smallest = difference;

        }

    }

    // Second loop evaluates the array for the smallest difference and adds valid integer pairs to an array.

    for (let j = 0; j < arr.length; j++) {

        if (arr[j + 1] - arr[j] === smallest) {

            validPairs.push(arr[j], arr[j + 1]);

        }

    }

    return validPairs;

}

console.log(closestNumbers(arr));