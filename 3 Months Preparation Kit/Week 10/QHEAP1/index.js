var fs = require('fs');
var input = fs.readFileSync('3 Months Preparation Kit/Week 10/QHEAP1/input.txt').toString().split("\n");

function processData(input) {

    let min;
    let heap = [];
    input.shift();

    // Iterate through your input data and look at each line of commands.

    for (let i = 0; i < input.length; i++) {

        let line = input[i].split(" ");
        let type = Number(line[0]);
        let element = Number(line[1]);

        // If the type equals 1, then push that element to the array and grab the minimum value.

        if (type === 1 && !heap.includes(element)) {

            heap.push(element);

            min = Math.min(...heap);

        // If the type equals 2, then delete that element from the array and grab the minimum value.

        } else if (type === 2) {

            let i = heap.indexOf(element);
            heap.splice(i, 1);

            min = Math.min(...heap);

        // If the type equals 3, then print the minimum value from the array.

        } else if (type === 3) {

            console.log(min);

        }

    }

}

console.log(processData(input));