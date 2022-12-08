let s = [9, 8, 4, 4, 4, 7];

// This is insanely difficult to solve unless you know the theory behind the algorithm of the game, which I had to research a bit.

// Basically, there are two winning formulas to the function.

function misereNim(s) {

    let total = s.reduce((a, b) => a + b);

    // The first winning formula looks at an array with 1 stone in each pile and uses the modulo operation to determine player success.

    if (total === s.length) {

        if (s.length % 2 === 0) {

            return "First";

        } else {

            return "Second";

        }

    }

    // The second winning formula is more complicated and involves the XOR operation.

    // If the resut is 0, then the second player has a path to victory, else player one wins.

    let nimSum = s.reduce((a, b) => a ^ b);

    if (nimSum === 0) {

        return "Second";

    } else {

        return "First";

    }

}

console.log(misereNim(s));