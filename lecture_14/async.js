

//callback -> a function calling another function 

function great(name, callback) {
    console.log("hello " + name);
    callback();             //calling the call back function

}

function afterGreeting() {
    console.log(" How are you ");
}

great("Ramesh", afterGreeting);


let a  = 201;

const p = new Promise((resolve, reject)=> {
    if(a === 21) {
        resolve("Success val");

    } else {
        reject("erroe message");
    }
})

p.
then(value => console.log('Resolved', value))
.catch(error => console.log('Rejected', error));