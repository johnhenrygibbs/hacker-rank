let s = "{{[[(())]]}}";

function isBalanced(s) {

    // Setting n to be equal to -1 ensures the while loop is executed at least once. It's then reassigned to the length of s for the conditional.

    let tempLength = -1;

    // The while loop removes individual pairings of brackets until string is empty or no more can be removed.

    while (s.length !== tempLength) {

        tempLength = s.length;
        s = s.replace("()", "").replace("{}", "").replace("[]", "");

    }

    // If the string is empty, then it is made up of balanced brackets. If not, it is unabalanced.

    if (s.length === 0) {

        return "YES";

    } else {

        return "NO";

    }

}

console.log(isBalanced(s));