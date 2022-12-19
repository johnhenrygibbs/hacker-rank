let ranked = [100, 90, 90, 80, 75, 60];
let player = [50, 65, 77, 90, 102];

function climbingLeaderboard(ranked, player) {

    // This is where I was running removeDupes(), but had to opt for new Set to pass all test cases.

    let leaderboard = Array.from(new Set (ranked));
    let lastIndex = ranked.length - 1;
    let playerRank = [];

    // Iterate through the player's scores front to back.

    for (let i = 0; i < player.length; i++) {

        let playerScore = player[i];

        // Iterate through the leaderboard back to front, keeping track of lastIndex to allow the loop to cycle more efficiently.

        for (let j = lastIndex; j >= 0; j--) {

            if (playerScore < leaderboard[j]) {

                playerRank.push(j + 2);
                break;

            } else if (playerScore === leaderboard[j]) {

                playerRank.push(j + 1);
                break;

            } else if (j === 0) {

                playerRank.push(j + 1);
                break;

            } else if (playerScore > leaderboard[j]) {

                lastIndex = j - 1;

            }

        }

    }

    return playerRank;

}

// Leaving this custom function in here, but did not end up using within final implementation due to time outs.

function removeDupes(array) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === array[i + 1]) {

            array.splice(i, 1);

        }

    }

    return array;

}

console.log(climbingLeaderboard(ranked, player));