let sticks = [1, 1, 1, 2, 3, 5];

function maximumPerimeterTriangle(sticks) {

    // Sorts the given array of numbers from largest to smallest, which will make the first triangle found satisfy the first two requirements.

    sticks.sort(function(a, b) {

        return b - a;

    });

    let result = [];

    for (let i = 0; i < sticks.length - 2; i++) {

        let a = sticks[i];
        let b = sticks[i + 1];
        let c = sticks[i + 2];

        if (a + b > c && a + c > b && b + c > a) {

            result = [c, b, a];
            break;

        } else {

            result = [-1];

        }

    }

    return result;

}

console.log(maximumPerimeterTriangle(sticks));