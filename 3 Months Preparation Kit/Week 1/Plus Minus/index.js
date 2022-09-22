let sampleTestCase0 = [-4, 3, -9, 0, 4, 1];
let sampleTestCase1 = [1, 2, 3, -1, -2, -3, 0, 0];

function plusMinus(arr) {

    let totalPositive = 0;
    let totalNegative = 0;
    let totalZero = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {

            totalNegative++;

        } else if (arr[i] == 0) {

            totalZero++;

        } else if (arr[i] > 0) {

            totalPositive++;

        }

    }

    let positiveRatio = totalPositive / arr.length;
    let negativeRatio = totalNegative / arr.length;
    let zeroRatio = totalZero / arr.length;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));

}

console.log(plusMinus(sampleTestCase0));
console.log(plusMinus(sampleTestCase1));