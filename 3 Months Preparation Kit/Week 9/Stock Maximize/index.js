let prices = [5, 4, 3, 4, 5];

function stockmax(prices) {

    let profits = 0;
    let highest = prices[prices.length - 1];

    // Since we know prices in advance, we want to iterate backwards through our array, assuming the last number as highest.

    for (let i = prices.length - 2; i >= 0; i--) {

        let priceToday = prices[i];

        // If the stock on any given day is lower than highest, purchase stock on that day and sell when the price increases.

        if (priceToday < highest) {

            // Your profit is the difference between the two numbers.

            profits += highest - priceToday;

        // Else if today's price is higher than highest, don't purchase and set today's price as a new highest.

        } else if (priceToday > highest) {

            highest = priceToday;

        }

    }

    return profits;

}

console.log(stockmax(prices));