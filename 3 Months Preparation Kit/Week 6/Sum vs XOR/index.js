let n = 5;

function sumXor(n) {

    // Edge case where n is equal to 0.

    if (n === 0) {

        return 1;

    }

    // The trick to avoid code timing out is to count the number of zeros in any number's binary form.

    let binary = n.toString(2);
    let zeroes = 0;

    for (let i = 0; i < binary.length; i++) {

        if (binary[i] === "0") {

            zeroes++;

        }

    }

    // The number of x's satisfying the criteria will be 2 to the power of number of zeroes found.

    return Math.pow(2, zeroes);

}

console.log(sumXor(n));