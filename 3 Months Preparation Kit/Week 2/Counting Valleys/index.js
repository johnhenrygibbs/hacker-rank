let steps = 10;
let path = "DUDDDUUDUU";

function countingValleys(steps, path) {

    let valleys = 0;
    let elevation = 0;

    for (let i = 0; i < path.length; i++) {

        if (path[i] === 'D') {

            elevation--;

        } else {

            elevation++;

        }

        if (path[i] === 'D' && elevation === -1) {

            valleys++;

        }

    }

    return valleys;

}

console.log(countingValleys(steps, path));