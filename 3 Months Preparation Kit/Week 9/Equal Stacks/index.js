let h1 = [1, 1, 1, 1, 2];
let h2 = [3, 7];
let h3 = [1, 3, 1];

function equalStacks(h1, h2, h3) {

    // Get the total size of each stack by calling reduce().

    let t1 = h1.reduce((a, b) => a + b, 0);
    let t2 = h2.reduce((a, b) => a + b, 0);
    let t3 = h3.reduce((a, b) => a + b, 0);

    // Find the minimum value within the totals by calling Math.min().

    let totals = [t1, t2, t3];
    let min = Math.min(...totals);

    // While the three stacks are not equal, remove the topmost cylinder from stacks greater than the minimum height.

    while (t1 !== t2 || t1 !== t3) {

        if (t1 > min) {

            t1 -= h1.shift();

        }

        if (t2 > min) {

            t2 -= h2.shift();

        }

        if (t3 > min) {

            t3 -= h3.shift();

        }

        // Update variables for the next iteration.

        totals = [t1, t2, t3];
        min = Math.min(...totals);

    }

    return t1;

}

console.log(equalStacks(h1, h2, h3));