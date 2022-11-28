let arr = [];
let answersArray = [];
let lastAnswer = 0;
let n = 2;
let queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
];

function dynamicArray(n, queries) {

    // Loop populates emptyArray with n empty arrays.

    for (let i = 0; i < n; i++) {

        let emptyArray = [];

        arr.push(emptyArray);

    }

    for (let i = 0; i < queries.length; i++) {

        // If/else handles requirements of first and second queries.

        if (queries[i][0] === 1) {

            let index = ((queries[i][1] ^ lastAnswer) % n);

            arr[index].push(queries[i][2]);

        } else if (queries[i][0] === 2) {

            let index = ((queries[i][1] ^ lastAnswer) % n);

            lastAnswer = arr[index][queries[i][2] % arr[index].length];

            answersArray.push(lastAnswer);

        }

    }

    return answersArray;

}

console.log(dynamicArray(n, queries));