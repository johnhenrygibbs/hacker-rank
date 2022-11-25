let s = "abccde";

function anagram(s) {

    // If the length of the string is odd, the strings can't be anagrams and -1 is returned.

    if (s.length % 2 !== 0) {

        return -1;

    }

    let changes = 0;
    let charNumbers1 = [];
    let charNumbers2 = [];
    let string1 = s.substr(0, s.length / 2);
    let string2 = s.substr(s.length / 2);

    // Two loops create companion arrays containing the corresponding ascii character codes of each.

    for (let i = 0; i < string1.length; i++) {

        charNumbers1.push(string1.charCodeAt(i));

    }

    for (let i = 0; i < string2.length; i++) {

        charNumbers2.push(string2.charCodeAt(i));

    }

    // Loop searches for matching numbers.

    // If no match is found, the changes variable is incremeneted.

    // If a match is found, that number is removed from the second array to account for dupes.

    for (let i = 0; i < charNumbers1.length; i++) {

        let number = charNumbers1[i];

        if (!charNumbers2.includes(number)) {

            changes++;

        } else {

            let index = charNumbers2.indexOf(number);

            charNumbers2.splice(index, 1);

        }

    }

    return changes;

}

console.log(anagram(s));