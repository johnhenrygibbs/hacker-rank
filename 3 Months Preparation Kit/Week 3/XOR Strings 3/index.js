let s = "10101";
let t = "00101";

function stringsXOR(s, t) {

    let result = "";

    for (let i = 0; i < s.length; i++) {

        if (s[i] == t[i]) {

            result += "0";

        } else {

            result += "1";

        }

    }

    return result;

}

console.log(stringsXOR(s, t));