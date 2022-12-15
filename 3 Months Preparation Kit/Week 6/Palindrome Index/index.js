let s = "aba";

function palindromeIndex(s) {

    if (isPalindrome(s)) {

        return -1;

    }

    for (let i = 0; i < s.length; i++) {

        let string = s.substr(0, i) + s.substr(i + 1, s.length);

        if (isPalindrome(string)) {

            return i;

        }

    }

    return -1;

}

function isPalindrome(s) {

    for (let i = 0; i < s.length / 2; i++) {

        if (s[i] !== s[s.length - i - 1]) {

            return false;

        }

    }

    return true;

}

console.log(isPalindrome(s));

console.log(palindromeIndex(s));