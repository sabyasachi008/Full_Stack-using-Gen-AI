async function dog() {                  //since we are using await we have to use async function

    try {

        //this is called destructing of data
        //from a single type of data we extract multiple datas
         
        const {data} = await axios('https://dog.ceo/api/breeds/image/random');
        const img = document.querySelector('img');
        img.src = data.message;     //Acc
       

        // console.log(data.message);
    }
    catch(error) {
        console.log(error);
    } 
}

dog();


// const p = {
//     fname:"A",
//     lname:"B",
//     age: 22
// }

// const {fname, age} = p;
// console.log(p)

