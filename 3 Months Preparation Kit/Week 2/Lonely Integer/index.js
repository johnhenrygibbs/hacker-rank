let a = [1, 2, 3, 4, 3, 2, 1];

function lonelyInteger(a) {

    // First sort the array numerically.

    a.sort(function(a, b) {

        return a - b;

    });

    let lonely = 0;

    // Edge case to check for array of size 1.

    if (a.length === 1) {

        lonely = a[0];

    }

    // While loop that checks any given number against the surrounding numbers looking for a match. If no match is found, then that number is your lonely integer.

    while (lonely === 0) {

        for (let i = 1; i < a.length; i++) {

            if (a[i] !== a[i - 1] && a[i] !== a[i + 1]) {

                lonely = a[i];

            }

        }

    }

    return lonely;

}

console.log(lonelyInteger(a));