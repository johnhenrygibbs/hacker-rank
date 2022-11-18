let a = [2, 4];
let b = [16, 32, 96];

function getTotalX(a, b) {

    // The range of integers to check ranges from the largest number in the first array to the lowest number in the second array.

    // We test each integer using the helper functions and increment variables total and integer accordingly.

    let integer = a[a.length - 1];
    let upperBound = b[b.length - 1];
    let total = 0;

    while (integer <= upperBound) {

        let firstTest = areFactors(a, integer);
        let secondTest = isFactor(b, integer);

        if (firstTest === true && secondTest === true) {

            total++;

        }

        integer++;

    }

    return total;

}

// Helper function determines if the elements of the first array are all factors of the integer being considered.

function areFactors(arr, num) {

    for (let i = 0; i < arr.length; i++) {

        if (num % arr[i] !== 0) {

            return false;

        }

    }

    return true;

}

// Helper function determines if the integer being considered is a factor of all elements of the second array.

function isFactor (arr, num) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % num !== 0) {

            return false;

        }

    }

    return true;

}

console.log(getTotalX(a, b));