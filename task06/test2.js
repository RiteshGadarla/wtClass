//functions
// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// let value = toCelsius;
// console.log(value)
//Function -> no return and paramaters are given, then it returns function itself

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// let value = toCelsius();
// console.log(value)
//if no parameter is passed, then it gives error

//proper function
// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// let value = toCelsius(77);
// console.log(value)


//regular functions - we use function key
// function hello(){
//     console.log("JavaScript")
// }
// hello()

//Scenario - 1
// hello("KMIT")
// function hello(name){
//     console.log("JavaScript "+name)
// }

//Scenario - 2 - String formatter
// hello("KMIT")
// function hello(name){
//     console.log(`JavaScript ${name}`) //template literal
// }

//Scenario - 3
// hello = ()=>{
//     console.log("hello")
// }

//Scenario -4
// hello() //it is not allowed
// hello = ()=>{
//     console.log("KMIT")
// }

//Scenario -5
// let hello = ()=>console.log("Hello")
// hello()

//Scenario -4
// let hello=(a)=>console.log("Hello",a)
// hello("KMIT")

//difference between regular and arrows functions
// regular functions gets hoisted but arrow functions are not
//No argument binding in arrow functions
//this behaviour
//arrow functions cannot be used as constructors
//arrow functions cannot be declared

//Scenario - 5
//No argument binding
// function regular(){
//     console.log("regular",arguments)
// }
// regular(1,10,true,"hello")
//arguments is object

// Rest Parameter: ...args
// const arrow=(...args)=>{
//     console.log("arrow",args)
// }
// arrow(1,10,true,"hello")

//Scenario - 6
//this behaviour (lexical vs dynamic)
//normal functions automatically create a this
// const obj={
//     name:"saha",
//     age:200,
//     print:function(){
//         console.log(this)
//     }
// }
// obj.print()

// const obj={
//     name:"saha",
//     age:200,
//     print:function(){
//         console.log(this)
//     }
//     print2()
// }
// obj.print()
//window function

// const obj={
//     name:"saha",
//     age:200,
//     print: ()=>{
//         console.log(this)
//     }
// }
// obj.print()
//window object

//regular functions class constructors
//arrow functions cant be used as constructors

//arrow functions cannot be declared


//callback functions - callback function is a function that you pass into another function so it can be called at the appropriate time
// anonymous callback
// arrow callback
// async callback
//promises

//built in array methods - settimeout
// function repeat(n,cbFn){
//     for(let i=0;i<n;i++){
//         cbFn(i)
//     }
// }
// function cbFn(n1){
//     console.log(n1)
// }

// repeat(4,cbFn)

//Higher Order Functions
//it takes one or more functions as arguments or returns a function
//forEach map filter reduce some every

// Curring
// const add = a=>b=>a+b
// console.log(add(2)(3))