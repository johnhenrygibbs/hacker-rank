let sampleTestCase0 = [1, 2, 3, 4, 5];
let sampleTestCase1 = [7, 69, 2, 221, 8974];

function miniMaxSum(arr) {

    let min = 0;
    let max = 0;

    arr.sort(function(a, b) {

        return a - b;

    });

    for (let i = 0; i < arr.length - 1; i++) {

        min += arr[i];

    }

    for (let i = 1; i < arr.length; i++) {

        max += arr[i];

    }

    console.log(min + " " + max);

}

console.log(miniMaxSum(sampleTestCase0));
console.log(miniMaxSum(sampleTestCase1));