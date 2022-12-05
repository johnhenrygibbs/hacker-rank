let arr = [3, 4, 5];

// This one is tricky to understand.

// But after reading about the properties of XOR, you can write a solution that avoids brute force by looking at whether the number of elements in the array is even or odd.

function sansaXor(arr) {

    let result;

    // If even, the occurrences of all elements in an array (and its subarrays) will be even, which means the result of XOR will be zero.

    if (arr.length % 2 === 0) {

        return 0;

    } else {

        // If odd, you only need to XOR the elements at odd indices, because even-indexed elements will result in zero.

        for (let i = 2; i < arr.length; i += 2) {

            result = result ^ arr[i];

        }

        return result;

    }

}

console.log(sansaXor(arr));