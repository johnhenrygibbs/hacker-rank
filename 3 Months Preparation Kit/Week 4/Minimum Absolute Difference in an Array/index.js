let arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];

function minimumAbsoluteDifference(arr) {

    // Get the absolute difference between the first two numbers to establish a minimum variable.

    let minimum = Math.abs(arr[0] - arr[1]);

    // Then use a nested loop to look at the difference between each possible pairing.

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            let difference = Math.abs(arr[i] - arr[j]);

            if (difference < minimum) {

                minimum = difference;

            }

        }

    }

    return minimum;

}

console.log(minimumAbsoluteDifference(arr));