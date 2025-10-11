
// // function a() {
// //     console.log("Hello")
// // }
// // // let a = 1;      //already defined error 


// // function a() {          //this will reassign the previous function
// //     console.log("hello2");
// // }

// // a();


// //for loop 

// // for(let i = 0;i<5; i++) {
// //     console.log(i);
// // }


// // for(var i = 0; i<5; i++) {
// //     console.log(i)
// // }

// // for(const i = 0; i<5; i++) {
// //     console.log(i);
// // }//const is always constant since we are assigning to a constant variable so it will give type error.


// //setTimeout()            //time restricted function which will execute after the given    time.


// //settimeout(function, timeperiod)      --> after the given timeperiod it will call the function
// // setTimeout(() => {
// //     console.log("Hello world after 1000 ms")
// // }, 1000);
// //execute the function after a specific delay.


// //callback() -> when a process is executing and after it completely executes then it calls the callback function.
// //gets calls when during the completetion time of the current task.It is dependentx 


// //Interview Questions ->

// //function scope inside function // block scope inside block




// //set timeout is asynchronouse function 




// // function t() {
// //     for(var i = 0; i<3; i++) {
// //         console.log("Inside", i); 
// //     }

// //     console.log("outside", i);   
// // }
// // t();

// //i = 0 inside 0
// //i = 1 inside 1
// //i = 2 inside 2
// // i++ -> 3
// // outside 3        
// //the outer console.log() will be able to acess the i because i is var and var is function scoped.


// const func = (i) =>  {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }

// for(var i = 0; i<5; i++) {
//     func(i);
// }


// //Interview Question ->

// for(var i = 0; i<5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, );
// }
// //since var is function scope same i will be reinitalised till i = 5 and it will be pushed to macro task in v8 engine. So it will print -> 
// // 5 5 5 5 5
// for(let i = 0; i<5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, );
// }

// //let is block scope ->
// // let i = 0
// //let i = 1
// //let i = 2
// //let i = 3

// //{
// //    let i  = 0        //block scope
// //}

// // Use case --> 
// // all this concepts are used in node js.



// /**Arrays */

// const fruit = ["apple", "Mango", "Banna"]

// let size = fruit.size;
// fruit.sort();       //alphabetical order

// fruit.reverse(); //reverse the array
// //sort + reverse -> desc
 
// //ES 2023 -> toSorted() //copy of the array original remains intact

// const month =["Jan", "Feb"]

// const sorted= month.toSorted();

// console.log(sorted) //sort

// const reversed = month.toReversed()     //reverse

// //sort() -> sort vals as string
// // sort() -> we dont use with number

// const points = [40, 100, 1, 4, 5];
// //we are manipulating the native nature.
// points.sort(function(a, b){
//     return a-b;
// })
// // - -> a placed before + b placed before a 0 or no change\\

// //sort function depends on engine


// //const a = [] // stored in heap memory 
// //since it is a single threaded language


// //ES6 -> Javascript classes

// //js classes are templates for js objects

// //JS is a functional language since functions are first class citizens in Javascript
// //functional programming + OOPS 
// // class car {
// //     constructure(name, year) {
// //         this.name = name;
// //         this.year - year;
// //     }

// //     age() {
// //         return 10;

// //     }

// //     static hello(x) {           //reffers to the same memory.
// //         return this.hello;
// //     }
// // }

// // const c1 = new car("BMW", 2021);
// // console.log(c1)


// class Car {
//     constructor(name) {
//         this.name = name;
//     }

//     static a = 10;
//     static hello(x) {
//         return "Hello"+x.name;
//     }
// }

// const c = new car("BMW");
// const c1 = new car("Mercedes");
// Car.hello(c);

//JS functions are executed in a sequence

// function a() {

// }

// function b() {

// }

//call back  -> function passed as an arg inside other function 
// function a(callback) {

// }

//the function which are giving call back it is called HOF -> Higher order function 

//call back 2 types -> Sync & Async


// console.log("JS 1")

// function sayHello() {
//     console.log("Hello after 2 secs")
// }

// setTimeout(sayHello, );

// console.log("JS 2");


const fruits = ["Apple", "banana", "cherry", "date"];

const longNamedFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
})

console.log(longNamedFruits)


fruits.forEach(function(fruit, index){
    console.log(`${index+1}.${fruit}`);
})
//$ -> when we have to fit in the variable value.

//all the above functions are synchronouse functions // synchronouse call backs
