let n = "9875";
let k = 4;

function superDigit(n, k) {

    // Split n into an array of elements.

    let arr = n.split("");
    let p = 0;

    // Iterate through the the array once and create a variable p that considers multiples of k.

    for (let i = 0; i < arr.length; i++) {

        p += Number(arr[i] * k);

    }

    // If p isn't 1 digit, recursively run the function again with p as a string and k as 1. Otherwise, return p.

    if (p > 10) {

        return superDigit(String(p), 1);

    } else {

        return p;

    }

}

console.log(superDigit(n, k));