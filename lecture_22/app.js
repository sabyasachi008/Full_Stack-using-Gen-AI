// promise -> now , later , never 

let p = new Promise((res,rej )=>{
    setTimeOut(()=> resolve("Success"),1000)
});


p.then(result => console.log(result)); // success 
// .catch()->failure 


// async / await ->same mordern way 
// async ->makes func return promse 
// awaut -> pauses execution until promise resolves 

function getData(){
    return new Promise((resolve)=>{
          setTimeOut(()=> resolve("Success"),1000)
    })
}
async function showData(){
    try{
        let res=await getData();
        console.log(res);
    }
    catch{

    }
}
showData();