// // // ----------------------
// // // 🔁 EVENT LOOP & CALLBACKS
// // // ----------------------

// // // Event Loop → Manages the execution order of tasks in JavaScript.
// // // JS is single-threaded → Executes one thing at a time.
// // // The flow generally goes like:
// // //  1️⃣ Synchronous code
// // //  2️⃣ Microtasks (Promises, queueMicrotask)
// // //  3️⃣ Macrotasks (setTimeout, setInterval)
// // //  4️⃣ Event Loop cycles again

// // // Example of a synchronous callback
// // function greet(name, callback) {
// //     console.log("Hello", name);
// //     callback(); // Executes immediately after the first line (sync)
// // }

// // function sayGoodBye() {
// //     console.log("GoodBye!");
// // }

// // greet("Alice", sayGoodBye);
// // // Output → Hello Alice
// // //           GoodBye!


// // // ----------------------
// // // 🔢 FOREACH (SYNCHRONOUS LOOP)
// // // ----------------------
// // const numbers = [1, 2, 3, 4];
// // numbers.forEach(function(num) {
// //     console.log(num);
// // });
// // // Output → 1 2 3 4


// // // ----------------------
// // // ⏳ ASYNCHRONOUS EXAMPLE
// // // ----------------------
// // console.log("Hello");

// // setTimeout(function() {
// //     console.log("Async Call"); // Goes to the macrotask queue
// // }, 1000);

// // console.log("End");

// // // Output order:
// // // Hello
// // // End
// // // Async Call


// // // ----------------------
// // // ⚠️ CALLBACK HELL (Nested callbacks)
// // // ----------------------
// // // Callbacks create dependency chains that are hard to read and maintain
// // // This is called "Callback Hell"

// // getData(function(a) {
// //     getMoreData(function b() {
// //         getMoreData(function c() {
// //             // Deeply nested - hard to follow
// //         });
// //     });
// // });


// // // ----------------------
// // // 💡 PROMISES
// // // ----------------------
// // // A Promise represents the eventual success (resolve) or failure (reject)
// // // of an asynchronous operation.
// // // It has three states: Pending → Fulfilled (Resolved) → Rejected

// // const p = new Promise(function(resolve, reject) {
// //     const success = true;

// //     if (success) {
// //         resolve("Operation successful!");
// //     } else {
// //         reject("Operation failed!");
// //     }
// // });

// // // .then() → Handles resolved (success) state
// // // .catch() → Handles rejected (failure) state
// // // .finally() → Always runs (like 'finally' in Java try-catch)

// // p
// // .then(result => console.log("✅ Success:", result))
// // .catch(err => console.log("❌ Failure:", err))
// // .finally(() => console.log("🔁 Always runs (cleanup)"));

// // // Equivalent to try-catch-finally in Java


// // // ----------------------
// // // 👤 PRACTICAL PROMISE EXAMPLE
// // // ----------------------

// // function fetchUserData(userId) {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             if (userId > 0) {
// //                 resolve({ id: userId, name: "John" });
// //             } else {
// //                 reject("Invalid User ID");
// //             }
// //         }, 1000);
// //     });
// // }

// // // Promise chaining example
// // fetchUserData(1)
// // .then(user => {
// //     console.log("User:", user);
// //     return user.id; // Pass userId to next .then()
// // })
// // .then(userId => {
// //     console.log("User ID:", userId);
// // })
// // .catch(err => {
// //     console.log("Error:", err);
// // });


// // // ------------------------------- //
// // getData(function (a) {
// //     getMoreData(a, function(b) {
// //         getEvenMoreData(b, function(C) {
// //             console.log(C);
// //         })
// //     })
// // })


// // //Here only positive state will be passed. So it doesn't fall into callback hell
// // getData()
// // .then(a => getMoreData(a))
// // .then(b=> getEvenMoreData(b))
// //     .then(C => console.log(C))
// // .catch(err => console.log(err));


// // //Types of way of writng functions
// // function abc (a) {

// // }

// // () => abc(a);
// // //(a) => abc()
// // () => {
// //     abc(a)
// // }

// // () => {
// //     abc(a);
// // }


// // ------------------------------------- //

// //Promise.all
// const p1 = Promise.resolve(3);
// console.log(p1);

// const p2 = new 
// Promise(resolve => setTimeout(() => resolve("foo"), 100));
// console.log(p2);
// p2
// .then(resolve => console.log(resolve));
// //until promise is consumed by using .then() it stays in the pending state

// const p3 = Promise.resolve(12);


// /**Write a function checkNumber(num) that returns a Promise. If num is greater than 10, resolve with "Number is big"; otherwise, reject with "Number is small".**/

// function checkNumber(num) {
//     return new Promise(resolve, reject => {
//     if(num > 10) {
//         resolve("Number is big");
//     } else {
//         reject ("Number is small");
//     }
//     })
// }


// checkNumber(11).then(result => console.log(result))
// .catch(err => console.log(err));


// //--------------------------------------//

// // Write a function doubleNumber(num) that returns a Promise. It should resolve with double the number if num is even, or reject with "Not an even number".


// function doubleNumber(num) {
//     return new Promise((resolve, reject)=> {
//         if(num%2 == 0) {
//             resolve(num*2);
//         } else  {
//             reject("Not an even number")
//         }
//     });
// }

// doubleNumber(22).then(result => console.log(result))
// .catch(err => console.log(err));


// // -----------------------------------------------//


// console.log(1) // sync JS
// const promise = new Promise((resolve) => {          //This protion will go to microtask
//     console.log(2)  //Sybc JS
//     resolve()
//     console.log(3)  //Sync JS
// })

// console.log(4);
// promise.then(()=> {     //this is asynchronous task and will go to macrotask
//     console.log(5)
// }).then(() => {
//     console.log(6)
// })

// console.log(7)      //Sync JS
// setTimeout(() => {
//     console.log(8)
// }, 10)

// setTimeout(() => {
//     console.log(9)
// }, 0)


// // ----------------------------------------------//


// console.log(1)      //call stack
// setTimeout(() => {
//  console.log(2)     //macro task
// }, 10)
// setTimeout(() => {
//  console.log(3)     //macro task
// }, 0);
// new Promise((_, reject) => {    //confusion line this promise doesnot have a resolve state

//  console.log(4)     //call stack  or synchoronous
//  reject(5)          //micro task
//  console.log(6)     //Synchronouse or call stack
// }).then(() => console.log(7))       //since the promise is rejected so it will be skipped 
// .catch(() => console.log(8))
// .then(() => console.log(9))
// .catch(() => console.log(10))       //only one catch will get executed.
// .then(() => console.log(11))
// .then(console.log)      //undefined
// .finally(() => console.log(12))     //microtask
// console.log(13)     //Synchronous


// 1 4 6 13 8 9 11 undefined 12 3 2

//---------------------------------------//

new Promise((resolve, reject) => {
    reject("Error")         //Jo pehela ussi se matlab hoga
    
    resolve(1)
    resolve(2)
}).then((value)=> {
    console.log(value)
}, (error) => {
    console.log('error')
})

/*Promises  always achive a single state
 either -> resolve or reject 
 so in the above code since it is getting resolve in the first place the rest of the resolve and reject are useless*/

 //Promise ka settlement ek hi baar hota h
