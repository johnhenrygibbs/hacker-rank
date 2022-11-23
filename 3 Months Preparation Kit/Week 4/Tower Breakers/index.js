let n = 2;
let m = 2;

// This could be the lamest game invented.

// Basically, since each player plays "optimally" they will reduce any tower to 1 each time.

// So really all we're looking for is to see if there is an even or odd number of towers to start with.

// If even, then player 2 wins. If odd, then player 1 wins.

// The only edge case concerns starting a game with 1 tower of height 1, in which case player 1 would not be able to move and would lose immediately.

function towerBreakers(n, m) {

    if (m === 1 || n % 2 === 0) {

        return 2;

    } else {

        return 1;

    }

}

console.log(towerBreakers(n, m));