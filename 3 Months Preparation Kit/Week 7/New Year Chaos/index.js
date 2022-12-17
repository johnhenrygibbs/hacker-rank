let q = [1, 2, 5, 3, 7, 8, 6, 4];

function minimumBribes(q) {

    // Create a bribes variable and a sorted copy of the queue array using the spread operator to compare the final state against.

    let bribes = 0;
    let copy = [...q];
    let initialState = copy.sort(function(a, b) {

        return a - b;

    });

    // Use a version of the bubble sort method.

    // Looking right to left through the array compare elements and sort accordingly, with the max number of moves forward being 2.

    for (let i = q.length - 1; i >= 0; i--) {

        if (q[i] > q[i + 1]) {

            let temp = q[i];
            q[i] = q[i + 1];
            q[i + 1] = temp;
            bribes++;

        } if (q[i + 1] > q[i + 2]) {

            let temp = q[i + 1];
            q[i + 1] = q[i + 2];
            q[i + 2] = temp;
            bribes++;

        }

    }

    // Compare the arrays using JSON.stringify(). If equal, print bribes, else print Too chaotic.

    if (JSON.stringify(q) === JSON.stringify(initialState)) {

        console.log(bribes);

    } else {

        console.log("Too chaotic")

    }

}

console.log(minimumBribes(q));