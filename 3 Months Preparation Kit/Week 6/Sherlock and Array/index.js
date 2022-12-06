let arr1 = [5, 6, 8, 11];
let arr2 = [2, 0, 0, 0];

// Had to optimize original solution because two longer test cases were timing out.

function balancedSums(arr) {

    // Create a total sum of the array and a leftSum to incrememnt as we loop through the elements.

    let total = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {

        // The rightSum is set to equal total minus leftSum minus the balanced element.

        let rightSum = total - leftSum - arr[i];

        if (rightSum === leftSum) {

            return "YES";

        }

        leftSum += arr[i];

    }

    return "NO";

}

console.log(balancedSums(arr1));