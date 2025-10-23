const myFun = require("./firstModule");

console.log()
console.log("Filename:", __filename);
console.log("Directory:", __dirname);

console.log(myFun.add(5, 6));
console.log(myFun.multiply(6, 9));

try {
    let result = myFun.divide(10, 0);
    console.log(result);
} catch (err) {
    console.log(err.message);
}

