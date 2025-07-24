/* map() usage beginner level
    1. Create an array called "practice" with the numbers 25-30 (inclusive)

    2. Create another array using map that squares each number in "practice"
    
    3. Print out both "practice" and the new mapped array
*/

const practice = []

for (let i = 25; i <= 30; i++) {
    practice.push(i);
}

const s = practice.map(i => i * i)

console.log(practice);
console.log(s);
