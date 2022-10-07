let num = 2147483647;

// Helper function that converts a number to a 32 bit unsigned binary string by capturing the remainders.

function toBinary32(number) {

    let binary = (number % 2).toString();

    while (number > 1) {

        number = parseInt(number / 2);
        binary = (number % 2) + binary;

    }

    // If binary result is not 32 bits, leading zeroes make up the difference.

    if (binary.length < 32) {

        let zeroesToAdd = 32 - binary.length;
        let leadingZeroes = "";

        for (let i = 0; i < zeroesToAdd; i++) {

            leadingZeroes += "0";

        }

        binary = leadingZeroes + binary;

    }

    return binary;

}

// Then we use the helper function in flippingBits() to flip each number and return its decimal form using the built-in parseInt() function.

function flippingBits(n) {

    let binary = toBinary32(n);
    let flipped = "";

    for (let i = 0; i < binary.length; i++) {

        if (binary[i] === "1") {

            flipped += "0";

        } else if (binary[i] === "0") {

            flipped += "1";

        }

    }

    return parseInt(flipped, 2);

}

console.log(flippingBits(num));