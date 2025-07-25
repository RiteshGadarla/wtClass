
/*
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]

    2. Create an new array called "caps" that:
        - maps over "items" and capitalizes each item

    3. Create a const called "concat" that:
        - uses reduce to concatenate all the strings in "caps"
          using a space to separate each item

    4. Print out "items", "caps" and "concat"

    BONUS: Can you do steps 1-3 in one line?
*/

const items =  ["light", "banana", "phone", "book", "mouse"]

const caps = items.map(x => x.toUpperCase());

const concat = caps.reduce((acc,x)=> acc + " " + x)

console.log(items);
console.log(caps);
console.log(concat)

const oneStep = caps.reduce((acc,x)=> acc + " " + x.toUpperCase());
console.log(oneStep);
