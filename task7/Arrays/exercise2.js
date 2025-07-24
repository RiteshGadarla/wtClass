/*
    Create a variable called "greeting" and initialize it to:
        "Hello, nice to meet you!"
    
    Use a loop to loop through this String (just like you would an array)
        - On each loop iteration, print out what is at that index

    WHY does this happen?
    WHAT is a String, really?
*/

const greetings = "Hello, nice to meet you!";

for(var i = 0; i< greetings.length; i++){
    console.log(greetings[i]);
}