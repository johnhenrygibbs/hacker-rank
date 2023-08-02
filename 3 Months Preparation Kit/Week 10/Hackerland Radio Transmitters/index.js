let x = [9, 5, 4, 2, 6, 15, 12];
let k = 1;

function hackerlandRadioTransmitters(x, k) {

    // Start by sorting the array of houses from smallest to largest.

    x.sort(function(a, b) {

        return a - b;

    });

    // Next we set up a series of nested while loops to consider houses within an acceptable range of transmission.

    let transmitters = 0;
    let i = 0;

    // Outer loop iterates until i reaches the length of the houses array.

    while (i < x.length) {

        // maxCoverage is found each time by grabbing the leftmost house and adding the transmission range.

        transmitters++;
        let firstHouse = x[i];
        let maxCoverage = firstHouse + k;

        // Increment i while any given next value is less than or equal to maxCoverage.

        while (i < x.length && x[i] <= maxCoverage) {

            i += 1;

        }

        // This space represents the midpoint or pivot, before the next while loop kicks off to find the rightmost house.

        let lastHouse = x[i - 1] + k;

        while (i < x.length && x[i] <= lastHouse) {

            i += 1;

        }

    }

    return transmitters;

}

console.log(hackerlandRadioTransmitters(x, k));