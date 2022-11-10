let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr) {

    let object = {};
    let occurrences = 1;

    arr.sort(function(a, b) {

        return a - b;

    });

    // Loop iterates through the sorted array counting the number of matching numbers, tallying occurrences via key and value pair.

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i + 1]) {

            occurrences++;

        } else if (arr[i] !== arr[i + 1]) {

            object[arr[i]] = occurrences;
            occurrences = 1;

        }

    }

    let result;
    let max = Object.keys(object)[0];

    // Loop iterates through the object and finds the key with the highest number of occurrences.

    for (let value in object) {

        let temp = object[value];

        if (temp > max) {

            max = temp;
            result = value;

        }

    }

    return result;

}

console.log(migratoryBirds(arr));