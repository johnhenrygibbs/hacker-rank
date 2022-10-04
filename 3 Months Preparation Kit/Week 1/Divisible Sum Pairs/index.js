var fs = require('fs');
var input = fs.readFileSync("/Users/johngibbs/Desktop/John/Repositories/hacker-rank/3 Months Preparation Kit/Week 1/Divisible Sum Pairs/sampleTestCase.txt").toString().split("\n");

let firstLine = input[0].split(" ");
let secondLine = input[1].split(" ");
let n = Number(firstLine[0]);
let k = Number(firstLine[1]);
let ar = [];

// Loop to cast the input data as numbers.

for (let i = 0; i < secondLine.length; i++) {

    ar.push(parseInt(secondLine[i]));

}

// Nested loop function and if statement check conditions. Note: i < j is comparison, not ar[i] < ar[j].

function divisibleSumPairs(n, k, ar) {

    let tally = 0;

    for (let i = 0; i < n; i++) {

        for (let j = 1; j < n; j++) {

            if (i < j && (ar[i] + ar[j]) % k == 0) {

                tally++;

            }

        }

    }

    return tally;

}

console.log(divisibleSumPairs(n, k, ar));