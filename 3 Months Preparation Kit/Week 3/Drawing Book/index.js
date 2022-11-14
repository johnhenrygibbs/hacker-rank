let n = 5;
let p = 4;

function pageCount(n, p) {

    // If the book has an even number of pages, we add 1 to account for that extra flip.

    if (n % 2 === 0) {

        n += 1;

    }

    // Finds the front and back minimum number of pages that must be turned to reach the target page.

    let front = Math.floor(p / 2);
    let back = Math.floor((n - p)/ 2);

    return Math.min(front, back);

}

console.log(pageCount(n, p));