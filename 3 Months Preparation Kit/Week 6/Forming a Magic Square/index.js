let s = [
    [5, 3, 4], [1, 5, 8], [6, 4, 2]
];

// There are eight possible magic square iterations, so we need to begin by defining an array containing all eight to help us solve this problem.

let squares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
];

function formingMagicSquare(s) {

    let lowestCost = Infinity;

    // Using the helper function, iterate throught the array of magic squares and calculate each cost, saving the lowest with each iteration. 

    for (let i = 0; i < squares.length; i++) {

        let cost = getCost(s, squares[i]);

        if (cost < lowestCost) {

            lowestCost = cost;

        }

    }

    return lowestCost;

}

// Helper function that calculates the cost of converting any given square to one of eight magic squares.

function getCost(testSquare, magicSquare) {

    let cost = 0;

    // Iterate through the two-dimensional matrix and sum the absolute difference between all elements.

    for (let i = 0; i < testSquare.length; i++) {

        let testRow = testSquare[i];
        let magicRow = magicSquare[i];

        for (let j = 0; j < testRow.length; j++) {

            cost += Math.abs(testRow[j] - magicRow[j]);

        }

    }

    return cost;

}

console.log(formingMagicSquare(s));