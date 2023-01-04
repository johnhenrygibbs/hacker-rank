let s = "abba";

function superReducedString(s) {

    let array = s.split("");
    let index = 0;

    // Split the string into an array and use a while loop to iterate through its contents.

    while (index < array.length) {

        let first = array[index];
        let second = array[index + 1];

        // Compare two elements at a time and splice them if they are equal and reset the index. Otherwise, increment the index.

        if (first === second) {

            array.splice(index, 2);
            index = 0;

        } else {

            index++;

        }

    }

    // Conditional that checks to see if the array is empty or contains no dupes.

    if (array.length === 0) {

        return "Empty String";

    } else {

        return array.join("");

    }

}

console.log(superReducedString(s));