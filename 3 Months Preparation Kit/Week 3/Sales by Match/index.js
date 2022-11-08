let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {

    let pairs = 0;
    let count = 1;

    ar.sort(function(a, b){

        return a - b;

    });

    for (let i = 0; i < n; i ++) {

        // Count starts at 1 by default and increments each match as it iterates through the array.

        if (ar[i] == ar[i + 1]) {

            count++;

        } else if (count > 1) {

            // Uses Math.floor to get rid of odd numbered counts.

            pairs += (Math.floor(count / 2));
            count = 1;

        }

    }

    return pairs;

}

console.log(sockMerchant(n, ar));