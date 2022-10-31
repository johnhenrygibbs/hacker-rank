let matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
];

function flippingMatrix(matrix) {

    // n refers to the number of rows and columns in the uppermost left quadrant.

    let n = matrix.length / 2;
    let result = 0;

    for (let row = 0; row < n; row++) {

        for (let col = 0; col < n; col++) {

            let max = matrix[row][col];

            // The conditionals check each value that could potentially be switched in any given row or column by reversing.

            if (matrix[row][n * 2 - 1 - col] > max) {

                max = matrix[row][n * 2 - 1 - col];

            }

            if (matrix[n * 2 - 1 - row][col] > max) {

                max = matrix[n * 2 - 1 - row][col];

            }

            if (matrix[n * 2 - 1 - row][n * 2 - 1 - col] > max) {

                max = matrix[n * 2 - 1 - row][n * 2 - 1 - col];

            }

            result += max;

        }

    }

    return result;

}

console.log(flippingMatrix(matrix));