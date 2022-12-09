let n = "9875";
let k = 4;

function superDigit(n, k) {

    let p = "";

    for (let i = 0; i < k; i++) {

        p += n;

    }

    while (p.length !== 1) {

        let superDigit = p.split("");
        let number = 0;

        for (let i = 0; i < superDigit.length; i++) {

            number += Number(superDigit[i]);

        }

        p = String(number);

    }

    return p;

}

console.log(superDigit(n, k));