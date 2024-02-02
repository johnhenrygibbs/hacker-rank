let k = 3;
let arr = [0, 1, 0, 0, 0, 1, 1, 1, 1, 1];

// Question may be bugged according to discussion board. Passing solution below with attempted logic. 

function pylons(k, arr) {

    let plants = 0;
    let diameter = k * 2 - 1;
    let last = -k;
    let planned = -k;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 1) {

            planned = i;

        }

        let maxCoverage = last + diameter;

        if (maxCoverage === i) {

            if (planned !== last) {

                plants++;
                last = planned;

            } else {

                return -1;

            }

        }

    }

    if (planned !== last) {

        plants++;

    }

    return plants;

}

console.log(pylons(k, arr));