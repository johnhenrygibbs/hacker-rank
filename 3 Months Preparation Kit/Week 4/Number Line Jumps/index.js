let x1 = 0;
let v1 = 2;
let x2 = 5;
let v2 = 3;

function kangaroo(x1, v1, x2, v2) {

    // If the second jump is larger than the first jump or the two jumps are equal, the first kangaroo will never catch the second.

    if (v2 > v1 || v1 === v2) {

        return "NO";

    }

    // Otherwise, we use a while loop to increment each kangaroo's position and check to see if they land at the same location.

    while (x1 < x2) {

        x1 += v1;
        x2 += v2;

        if (x1 === x2) {

            return "YES"

        }

    }

    // Once the loop exits (i.e. the first kangaroo has passed the second without landing on the same position) we can safely return NO.

    return "NO";

}

console.log(kangaroo(x1, v1, x2, v2));