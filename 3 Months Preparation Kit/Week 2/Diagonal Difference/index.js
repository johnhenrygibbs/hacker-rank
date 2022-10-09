let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

function diagonalDifference(arr) {

    let left = 0;
    let right = 0;

    for (let i = 0; i < arr.length; i++) {

        left += arr[i][i];

    }

    for (let j = 1; j <= arr.length; j++) {

        console.log(arr[j - 1][arr.length - j]);

        right += arr[j - 1][arr.length - j];

    }

    return Math.abs(left - right);

}

console.log(diagonalDifference(arr));