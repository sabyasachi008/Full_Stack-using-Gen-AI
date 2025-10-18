//.nmap /filter

//.map -> Based on condition //creates a new array 

const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = n.map(num=> num*2)
console.log(doubled)

//How to create an array of objects

const user =[{
    name:"John",
    age: 25
},{
    name:"Jane",
    age: 24
}];     //array has 2 objects


//take user input and create a new array only containing name.
const name = user.map[user=> user.name];

console.log(name);

//Filter is used for transformation

const n3 = [1,2,3,4];

const evens = n3.filter(n3=>n3%2== 0);
console.log(evens);


const age25 = user.filter(use=>use.age>24);
console.log(age25);


const obj = { 
    id: Date.now(),
    text:"Hi",
    completed:false
};

//spread operator
//use to copy the function of a previous object to a new object and at times helpfull for making minor changes usally used where there are large number of elements in a single object.
const obj2= {
    ...obj, completed:true
}

console.log(obj);
console.log(obj2);