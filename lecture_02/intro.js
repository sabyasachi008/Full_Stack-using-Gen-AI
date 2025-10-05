// let text = "Jhon";
// let t1 = 'Jhon';

// let t3 = "'Jhon'";

// //Template string -> ES6    {EcmaScript}
// let t2 = `Jhon is a js dev`;        //String in backticks


// const l = t3.length;

// let text3 = "The character \n is called backslash";
// console.log(text3)

// //interpolation -> `${name}`

// let price = 10;
// let gst = 0.25;
// let total = `Total : ${(price*(1+gst)).toFixed(2)}`;
// console.log(total)

// let txt = "Hello";
// let char = txt.charAt(0);
// let c2 = text[2];

// let t5 = txt.concat("world");
// let t6 = text.concat(" ", t5);
// console.log(t6);


//string parts

// slice(start, end)
//substring(start, end)
//substring(start, length)

// let t = "Apple, Banana, Kiwi";
// let part  = t.slice(7, 3);
// let p = t.slice(7);
// let p3 = t.slice(-12);        //Counted from the end of the point right to left calculate 
// //substring -> 
// console.log(part);

// let str = "Morzilla";

// console.log(str.substring(5, 2));
// console.log(str.slice(5 , 2));


// let aa = 'abc adc';
// let aa1 = aa.replace('abc', 'xyz');
// console.log(aa1);

let x = 3.14;   
let y = 2;
//both will be called numbers there is no concept of Decimal
//integer can go upto 15 digits
let x1 = '10';

let y1= 20;

console.log(x1+y1);

//String + number = String
//10 + 20 + '30' = 3030
// -> Java script compiler goes from left to right so the numbers will get added first then it will be converted to string.
//"100"/"10" -> 10
//"100" + "10" -> 1010
//"100" - "10" -> 90

//NaN -> Not a number

let c3 = 100/"Apple";       //Nan

const obj  =  {
    type: "Maruti",
    model : "3000",
    color : "Black"
}

//reassign to point to different variable
// object literal

const p = {};
p.firstName = "Sabya";
const p1 = new Object({

})

const p11 = {
    lname: "Doe",
    fullName : function() {
        return "John"+this.lname;
    } 
}

//Objects ->
//Key value pairs 
//this operator point towards the current object \ this has context of the current object.



console.log(p11)
console.log(0 == false)      //true

console.log("" == false)    //true
console.log([] == false)    //Object -> premitive , tostring() -> '' -> false --- True

console.log(undefined == false)     //false
console.log(null == false)          //false
console.log('1' == true)            //true
console.log(1n == true)             //true
console.log('1      ' == 1)               //true    

//1n -> Big Integer

// ! -> !0 -> 1 -> true 
console.log([] == 0);       //True
console.log([] == false)    //True
console.log(!![])          //True
console.log([1] == 1)       //True
console.log(!![1])      //True

console.log(Boolean([]))    //true

console.log(Boolean(new Boolean([])))   //boolean of some object checks for existence  -> True

console.log(Boolean(new Boolean(false)))        //true


console.log(0 == '0')       //true

console.log(0 === '0')      //false

console.log(Object.is(0, '0'))      //false


//object is  check that 2 values are same or not
console.log(0 == -0);
console.log(0 === -0);
console.log(Object.is(0,-0));

//NaN -> Not a number

console.log(NaN == NaN)     //false
console.log(NaN === NaN)    //false
console.log(Object.is(NaN,NaN))      //false
console.log(0 == false); //True
console.log(0 === false);   //false
console.log(Object.is(0,false));
//false

//Difference between '==' and '==='
// == -> checks only value
// === -> checks value and type