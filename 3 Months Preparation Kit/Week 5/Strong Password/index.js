let numbers = "0123456789";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialCharacters = "!@#$%^&*()-+";

let password = "+v-kz";
let n = 5;

function minimumNumber(n, password) {

    // Track unmet criteria count throughout by calling helper function to check the attempted password against the character strings.

    let unmetCriteria = 0;

    let checkNumbers = contains(password, numbers);

    if (checkNumbers === false) {

        unmetCriteria++;

    }

    let checkLower = contains(password, lowerCase);

    if (checkLower === false) {

        unmetCriteria++;

    }

    let checkUpper = contains(password, upperCase);

    if (checkUpper === false) {

        unmetCriteria++;

    }

    let checkSpecial = contains(password, specialCharacters);

    if (checkSpecial === false) {

        unmetCriteria++;

    }

    // Consider the length of the attempted password when returning the final number of characters required to satisfy password requirements.

    if (unmetCriteria + n >= 6) {

        return unmetCriteria;

    } else {

        return 6 - n;

    }

}

// Helper function that checks to see if a password contains elements of string criteria.

function contains(password, string) {

    for (let i = 0; i < password.length; i++) {

        if (string.includes(password[i])) {

            return true;

        }

    }

    return false;

}

console.log(minimumNumber(n, password));