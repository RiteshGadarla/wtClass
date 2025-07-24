/* 
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a new array using map called "taxedPrices" that:
        - If the price is greater than 10, add 20% tax to it
        - Otherwise, do not add any tax

    3. Print out both arrays
*/

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2]

const taxedPrices = prices.map(i => i > 10 ? parseFloat((i * 1.2).toFixed(2)) : i);

console.log(prices);
console.log(taxedPrices);