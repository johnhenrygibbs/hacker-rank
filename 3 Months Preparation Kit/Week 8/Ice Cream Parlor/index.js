let m = 9;
let arr = [1, 3, 4, 6, 7, 9];

function icecreamParlor(m, arr) {

    // forEach() function creates a map from given arr with elements and indices.

    let map = new Map();

    arr.forEach(function(element, index) {

        map.set(element, index);

    });

    for (let i = 0; i < arr.length; i++) {

        let moneyNeeded = m - arr[i];

        // Iterating through the array, check to see if the map has key corresponding to the moneyNeeded variable.

        if (map.has(moneyNeeded) && i != map.get(moneyNeeded)) {

            // If found, return the current index + 1 and the index of the moneyNeeded key + 1.

            return [i + 1, map.get(moneyNeeded) + 1];

        }

    }

}

console.log(icecreamParlor(m, arr));