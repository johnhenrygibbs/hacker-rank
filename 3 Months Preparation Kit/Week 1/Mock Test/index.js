// A couple of simple ways to sort an arrays in JavaScript numerically.

// bubbleSort() function is useful for small sets of data, but less so for larger. Called bubbleSort() because of how the data "bubbles" to the top.

function bubbleSort(array) {

    let done = false;

    while (!done) {

        done = true;

        for (let i = 1; i < array.length; i++) {

            if (array[i - 1] > array[i]) {

                done = false;

                let temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;

            }

        }

    }

    return array;

}

// Using nested loops with similar comparison logic to the function above.

function sortNested(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] > array[j]) {

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            }

        }

    }

    return array;

}

// However, we can use a simple function reference as an optional parameter with sort() to accomplish our goal more efficiently for a test of large input data.

function findMedian(arr) {

    arr.sort(function(a, b) {

        return a - b;

    });

    let median = Math.floor(arr.length / 2);

        return arr[median];

}

let arr1 = [0, 1, 2, 4, 6, 5, 3];
let arr2 = [4, 32, 2, 5, 8];
let arr3 = [3, 8, -10, 23, 19, -4, -14];

console.log(bubbleSort(arr1));
console.log(sortNested(arr2));
console.log(findMedian(arr3));