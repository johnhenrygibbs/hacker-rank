let input = [8, '1 abc', '3 3', '2 3', '1 xy', '3 2', '4', '4', '3 1'];

// By keeping a continuous array of the previous state of S, with an easy pop() command you can undo (revert) to a prior state anytime.

function processData(input) {

    let S = "";
    let undoOps = [];

    // Ignore the first integer, which denotes the number of operations.

    for (let i = 1; i < input.length; i++) {

        let commands = input[i].split(" ");
        let operation = Number(commands[0]);

        // First condition adds characters to the end of the string and saves previous state of S.

        if (operation === 1) {

            undoOps.push(S);
            S += commands[1];

        // Second condition deletes a set number of characters from the end of the string and saves previous state of S.

        } else if (operation === 2) {

            undoOps.push(S);
            S = S.slice(0, S.length - Number(commands[1]));

        // Third condition prints a character at a certain index.

        } else if (operation === 3) {

            console.log(S[Number(commands[1]) - 1]);

        // Fourth condition undos the previous command.

        } else if (operation === 4) {

            S = undoOps.pop();

        }

    }

}

console.log(processData(input));