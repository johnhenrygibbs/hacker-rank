let a = [4, 6, 5, 3, 3, 1];

function pickingNumbers(a) {

    a.sort(function(a, b) {

        return a - b;

    });

    let subarrayLength = 1;
    let longest = 0;
    let reach = 0;

    for (let i = 0; i < a.length; i++) {

        // Reach is incremented if the absolute difference between two successive numbers is 1.

        if (a[i + 1] - a[i] === 1) {

            reach++;

        }

        // If the absolute difference between two numbers and reach is less than or equal to 1, we increment the subarray's length. 

        // If it exceeds 1, then we check to see if it is the longest and reset variables accordingly.

        if (a[i + 1] - a[i] <= 1 && reach <= 1) {

            subarrayLength++;

        } else {

            if (subarrayLength > longest) {

                longest = subarrayLength;

            }

            subarrayLength = 1;
            reach = 0;

        }

    }

    return longest;

}

console.log(pickingNumbers(a));