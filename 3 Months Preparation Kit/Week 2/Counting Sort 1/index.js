arr = [1, 1, 3, 2, 1];

// The example above shows only the first 4 elements, the remainder being zeros.

function countingSort(arr) {

    let frequency = [];

    // First loop initializes an array with 100 elements to fit the requirements of the challenge.

    for (let i = 0; i < 100; i++) {

        frequency.push(0);

    }

    // Second loop incremenets the counter at the corresponding index.

    for (let j = 0; j < arr.length; j++) {

        frequency[arr[j]]++;

    }

    return frequency;

}

console.log(countingSort(arr));