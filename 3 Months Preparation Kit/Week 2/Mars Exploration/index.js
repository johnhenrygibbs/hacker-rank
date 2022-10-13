let signal = "SOSSPSSQSSOR";

// Helper function splits the message into chunks of separate "SOS" strings.

function splitMessage(message) {

    let result = [];

    for (let i = 0, j = 0; j < (message.length / 3); i += 3, j++) {

        result.push(message.substring(i, i + 3));

    }

    return result;

}

function marsExploration(s) {

    let lettersChanged = 0;
    let parts = splitMessage(s);

    for (let i = 0; i < parts.length; i++) {

        if (parts[i][0] !== 'S') {

            lettersChanged++;

        }

        if (parts[i][1] !== 'O') {

            lettersChanged++;

        }

        if (parts[i][2] !== 'S') {

            lettersChanged++;

        }

    }

    return lettersChanged;

}

console.log(marsExploration(signal));