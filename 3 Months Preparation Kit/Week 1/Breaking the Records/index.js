let sampleTestCase0 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let sampleTestCase1 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {

    let minCount = 0;
    let maxCount = 0;

    let min = scores[0];
    let max = scores[0];

    for (let i = 1; i < scores.length; i++) {

        if (scores[i] > max) {

            max = scores[i];
            maxCount++;

        } else if (scores[i] < min) {

            min = scores[i];
            minCount++;

        }

    }

    let brokenRecords = [maxCount, minCount];

    return brokenRecords;

}

console.log(breakingRecords(sampleTestCase0));
console.log(breakingRecords(sampleTestCase1));