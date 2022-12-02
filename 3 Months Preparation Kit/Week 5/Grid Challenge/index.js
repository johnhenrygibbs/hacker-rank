let grid = ['abc', 'ade', 'efg'];

function gridChallenge(grid) {

    let numbers = [];

    // Iterate through the starting grid and determine ascii characters based on letter.

    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[i].length; j++) {

            let ascii = grid[i].charCodeAt(j);
            numbers.push(ascii);

        }

        grid[i] = numbers;
        numbers = [];

    }

    // Sort the new grid numerically.

    for (let i = 0; i < grid.length; i++) {

        let row = grid[i];

        row.sort(function(a, b) {

            return a - b;

        });

    }

    // Using a while loop check the numbers of each column to see if they are ascending.

    // Increment the length variable after each iteration to move through each row accordingly.

    // The moment a descending order is found, return "NO", else return "YES".

    let length = 0;
    let rowLength = grid[0].length;

    while (length < rowLength) {

        for (let i = 1; i < grid.length; i++) {

            if (grid[i][length] < grid[i - 1][length]) {

                return "NO";

            }

        }

        length++;

    }

    return "YES";

}

console.log(gridChallenge(grid));