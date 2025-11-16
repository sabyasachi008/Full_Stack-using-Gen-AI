//Rate limit handling: Implement a feature to handle Github's api rate limiting gracefully, perhaps by caching data or information the user.


// How to control the rate limiting?
//2 Techiniques -> Throttling / Debouncing
//control how function run/ events or api calls are fired
//Debouncing -> Delays a function with a time. Runs only once user stops performing and action/


//Throttle -> function runs atmost once every x seconds.

//eg -> 5Sec -> api


//function calling method 


//Explicit function Binding.
function greet(city) {
    console.log("Hi", city, "from", this.name)
}
const p = {name:"A"}


greet.call(p, "paris");             //immediately call the function with specific this
greet.apply(p, ['paris']);          //same as call but passes an argument as an array

const greetIndia=greet.bind(p);     //returns a new function with permamently set this. calls later but with fixed this
greetIndia("paris");



function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = data.now();
        if(now - lastCall >= limit) {
            lastCall = now;
            fn.call(args);
        }   
    }
}

//debounce

function debounce(fn, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.call(args), delay)
    }
}