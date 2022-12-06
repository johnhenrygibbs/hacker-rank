let t1 = 0;
let t2 = 1;
let n = 6;

function fibonacciModified(t1, t2, n) {

    let firstUp = t1;
    let nextUp = t2;

    let result = 0;
    let number = 3;

    while (number <= n) {

        // Cast nextUp and result as big integers to accommodate for numbers exceeding the range of a 64-bit integer.

        result = firstUp + (nextUp * nextUp);
        firstUp = BigInt(nextUp);
        nextUp = BigInt(result);
        number++;

    }

    // Using BigInt() will append 'n' to the end of any integer.

    return result;

}

console.log(fibonacciModified(t1, t2, n));