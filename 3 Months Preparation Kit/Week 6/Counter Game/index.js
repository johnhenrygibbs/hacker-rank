let n = 132;

function counterGame(n) {

    // If n is 1 then Louise has already won the game.

    if (n === 1) {

        return "Louise";

    }

    // Keep a counter of the turns while n is greater than 1.

    let turns = 0;

    while (n > 1) {

        // If n is a power of 2, then divide it by 2 and store the new value.

        if (isPowerOfTwo(n) === true) {

            n = n / 2;

            // If not, then subtract it by the next lower number which is a power of 2.

        } else {

            n -= 2 ** Math.floor(Math.log2(n));

        }

        turns++;

    }

    // Check if turns is even or odd to determine a winner.

    if (turns % 2 === 0) {

        return "Richard";

    } else {

        return "Louise";

    }

}

function isPowerOfTwo(num) {

    if (num === 1) {

        return true;

    } else if (num % 2 !== 0) {

        return false;

    } else {

        return isPowerOfTwo(num / 2);

    }

}

console.log(counterGame(132));