let arr = [2, 3, 5, 4, 1];

// Originally solved this by re-creating arrays, but the function was timing out with certain test cases.

// Had to research another method of solving.

function gamingArray(arr) {

    let max = arr[0];
    let i = 1;

    // Basically what this loop does is it increments an index each time it finds a max element, and removes any other elements from the array.

    // The index also serves as a counter for the number of turns in the game. Once it matches the array length, the game is over.

    while (i !== arr.length) {

        if (arr[i] > max) {

            max = arr[i];
            i++;

        } else {

            arr.splice(i, 1);

        }

    }

    // If number of turns is even, then ANDY wins, else BOB wins.

    if (i % 2 === 0) {

        return "ANDY";

    } else {

        return "BOB";

    }


}

console.log(gamingArray(arr));