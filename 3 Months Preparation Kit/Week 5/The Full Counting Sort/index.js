let arr = [[0, 'a'], [1, 'b'], [0, 'c'], [1, 'd']];

// The instructions on this are really unclear, but the function can basically be broken into 3 parts.

function countSort(arr) {

    // Before sorting, iterate through the first half of the array and replace all strings with dashes.

    for (let i = 0; i < arr.length / 2; i++) {

        arr[i][1] = '-';

    }

    // Next, we sort the array based on the integer in the first half of each pairing.

    arr.sort(function(a, b) {

        return a[0] - b[0];

    });

    // Lastly, we create an empty string to hold our new sorted string and concatenate with spaces.

    let sortedStrings = "";

    for (let i = 0; i < arr.length; i++) {

        sortedStrings += arr[i][1] + " ";

    }

    console.log(sortedStrings);

}

console.log(countSort(arr));