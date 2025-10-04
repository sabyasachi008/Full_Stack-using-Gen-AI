// What is javascript ?
// High Level Interpreted Language, browser language -> run in browser
//to run outside browser it requries node js. 
//primary purpose is to create interactive webpages
//Dynamically typed language , single thread async capabilities.
//Every thing in javaScript is an Object.
//Object --> Real world thing which actually exists
//Function --> Action which is performed on real world thing. They have the most priority in javaScript. They are treated as first class citizens.

//Types of variables ->
// var a;          //function scope can be redeclared.
// let b;          //block scope can be redeclared.
// const c = 10;        //block scope cannot be reassigned.

// function a() {
//         //function scope
// }


// {
//     //block scope
// }

// //let
// let x = 10;
// console.log(x);

// {
//     let x = 20;
//     console.log(x);
// }

// console.log(x);


//hoisting -> var functions . It will be store in the memory as undefined.

// console.log(v);     //undefined
//  {
//     var v = 10;
//  }

//  console.log(v);        //output -> 10


// //  console.log(a);         //reference error --> since it is not yet stored in the memory.
//  let a = 10;         
//  console.log(a);

//  console.log(f)

//  //function is hosted in memory that is it will store the reference in memory.
//  function f() {
//     console.log("Hello");
//  }


//  f();

 //const --> have all the properties of let just we cannot reassign the value of const.


 //primitive types -> number , string , boolean , null , undefined , symbol
 //non-primitive types -> object , function , array

//  function test() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//   }
//   console.log(a);           //1
//   console.log(b);           //reference error
// }
// test();


// {
//     var a = 1;
// }

// function test() {
//     console.log(a);
//      {
//         var a = 2;
//      }
// }


// test();



// let a = 'outer';
// {
//     console.log(a);                       //we are using let without declaration so it will give error 
//     let a = 'inner' ;                    //let is blocked scope 
// }

// var x = 1;
// let x =2 ;                          //it cannot be redeclared 
// console.log(x);
// console.log(x);

// let c = 'outer';
// {
//     console.log(c); // ref err
//     c = 'inner';
// }


/**
 * Function declared inside blocks are hosted to the top of the blocks 
 */
// 



/**
 * 1. Hoisting
 * this keyword 
 */
// function abc() {

// }
// //shorthand of function
// //const abc => {
    
// //}
// //function expressions are -> non hoisted, must be defined before calling

// const a = function() {
//     console.log("Help");
// }
// console.log(a);

// const functionName = function(params) {
//     return value;
// }

// //arrow 
// //No this keyword
// const functionName1 = (params) =>  {
//     return a;
// }

// const f1 = (param) => val;

// function greet(name = "Welcome") {
//     return `Hello ${name}`;
// }

// //where ever variable is used we will used backticks and dollar sign.
// const a = greet();
// console.log(a);

//IIFE
//Immediately Invoked Function Expression
//It is a function which is called immediately after it is defined.


// (function () {

// }) ();

// function sayHello() {
//     console.log("Hello");

// }

// sayHello();

// (function () {
//     console.log("Hello");
// }) ();

// //both the above functions are same its just that the last one is defined using IIFE

// var x = 'global';
// (
//     function() {
//         console.log(x);
//         if(false) {             //this code will never execute
//             var x = 'hoisted but not assigned';     //even if it is not assigned it will be hoisted
            
//         }
//         let x = 'block';                            //this will give redeclared error
//     }
// ) ();

function a() {
    return 'first';
}
var a;
function a() { return 'second';}            //overrides the first function
console.log(a());