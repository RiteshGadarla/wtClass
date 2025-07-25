/*
    Create a variable called "total" that starts at 0

    Create an array called "grades" with the following values:
        - 55
        - 63
        - 82
        - 98
        - 91
        - 43
        
    Figure out how to print out the AVERAGE grade
    (This is the sum of all grades divided by the number of grades)
*/

const grades = [55,63,82,98,91,43];

let total = 0;

for(let i = 0; i < grades.length; i++){
    total += grades[i];
}

total = total/grades.length;

console.log(total);