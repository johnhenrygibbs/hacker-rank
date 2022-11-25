let s = "www.abc.xy";
let k = 87;

function caesarCipher(s, k) {

    let result = "";

    for (let i = 0; i < s.length; i++) {

        let ascii = s.charCodeAt(i);

        // First conditional handles upper case letters.

        if (ascii >= 65 && ascii <= 90) {

            ascii += k;

            if (ascii > 90) {

                // While the ascii number is north of 90, subtract 26 until it falls within the above range for upper case letters.

                while (ascii > 90) {

                    ascii -= 26;

                }

            }

        }

        // Second conditional handles lower case letters.

        if (ascii >= 97 && ascii <= 122) {

            ascii += k;

            if (ascii > 122) {

                // While the ascii number is north of 122, subtract 26 until it falls within the above range for lower case letters.

                while (ascii > 122) {

                    ascii -= 26;

                }

            }

        }

        let newLetter = String.fromCharCode(ascii);

        result += newLetter;

    }

    return result;

}

console.log(caesarCipher(s, k));