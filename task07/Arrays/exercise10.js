/* filter() usage beginner level

    1. Create an array called "practice" with the numbers 10-20 (inclusive)

    2. Create another array using filter that keeps the even numbers in "practice"
    
    3. Print out both "practice" and the new filtered array
*/

const practice = []

for (let i = 10; i <=20 ; i++) {
    practice.push(i)
}

const ans = practice.filter(i => i%2===0);

console.log(ans);