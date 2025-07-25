//Variable hoisting
// var let const
// Scenario - 1
// console.log(name) //ReferenceError

//Scenario - 2
// console.log(name)
// var name="KMIT"
// console.log(name);

//Scenario - 3
// var x;         // hoisted
// console.log(x);
// x = 5;

//Scenario - 3
// print()
// console.log(name)
// function print(){
//     var name="KMIT"
// }

//Scenario - 4
// print()
// function print(){
//     console.log(name)
//     var name="KMIT"
// }

//Scenario - 5
// function print(){
//     console.log(name)
//     var name="KMIT"
// }
// print()

//Scenario - 6
// printHello()
// function printHello(){
//     console.log("Hello")
// }

//Scenario - 7
// printHi()
// function printHello(){
//     console.log("Hello")
//     function printHi(){
//         console.log("Hi")
//     }
// }

//Scenario - 8
// printHello()
// printHi()
// function printHello(){
//     console.log("Hello")
//     function printHi(){
//         console.log("Hi")
//     }
// }

//Scenario - 9
// printHello()
// function printHello(){
//     printHi()
//     console.log("Hello")
//     function printHi(){
//         console.log("Hi")
//     }
// }

//Scenario - 10
//let gets hoisted, but without a default
// console.log(name)
// let name="KMIT"

// let name
// console.log(name)
// name="KMIT"

// TDZ(Temporary Dead Zone)

//const hoisting
//const gets hoisted, but without a default
//const value cant be changed
// console.log(name)
// const name="KMIT"

//internal
// var i
// for(i=0;i<2;i++){
//     console.log(i)
// }
// console.log(i)

// for(var i=0;i<3;i++){
//     setTimeout(()=>console.log(i));
// }
// console.log(i)
//it is function scoped

// for(const i=0;i<2;i++){
//     console.log(i)
// }
//it is error, because it can't be re-assigned

// let i
// for(i=0;i<2;i++){
//     console.log(i)
// }
// console.log(i)

// for(let i=0;i<2;i++){
//     console.log(i)
// }
// console.log(i)
// this is reference error, because it is block scoped

//NaN
// console.log(Math.sqrt(-1))

// let x
// console.log(x)
// let y=undefined
// console.log(y)
//by default undefined

// var a=1;
// function foo(){
//     if(true){
//         var a=2;
//     }
//     console.log(a);
// }
// foo();

// const x=10
// x=5

// let x=10;
// {
//     let x=20;
//     console.log(x);
// }
// console.log(x);

// const a=[1,2,3]
// a.push(4)
// console.log(a)

// function foo(){
//     let x=1
//     if(x==1){
//         let x=20
//         console.log(x)
//     }
//     console.log(x)
// }
// foo()

// const x
// x=10