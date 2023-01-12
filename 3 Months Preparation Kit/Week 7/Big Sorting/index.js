let unsorted = ['1', '200', '150', '3'];

function bigSorting(unsorted) {

    unsorted.sort(function(a, b) {

        if (BigInt(a) > BigInt(b)) {

            return 1;

        } else if (BigInt(a) < BigInt(b)) {

            return -1;

        } else {

            return 0;

        }

    }); 

}

console.log(bigSorting(unsorted));