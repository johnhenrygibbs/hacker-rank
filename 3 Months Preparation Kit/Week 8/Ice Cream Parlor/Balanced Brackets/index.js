let s = "{{[[(())]]}}";

function isBalanced(s) {

    // Setting n to be equal to -1 ensures the while loop is executed at least once. It is then reassigned to the length of s for the conditional.

    let n = -1;

    // The while loop removes individual pairings of brackets until string is empty or no more can be removed.

    while (s.length !== n) {

        n = s.length;
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