
/*
web storage APIS -> 

-> local Stores -> this stores the data in browser. Data stays in the browser even after closing the stays. 
preferences settings cached

session Storage -> session data (Data stays only for the session duration of the data )

Both of these data's are in key:value pair

Storage Limit -> 5 mb(Browser Dependent)

//A small database inside the browser.
*/

const recipeForm=document.querySelector('#recipe-form');

const recipeContainer=document.querySelector('#recipe-container');

let listItems=[]

function handleFormSubmit(e) {
    e.preventDefault();  //events default method 

    //xss -> Cross site scripting

    const name=DOMPurify.sanitize(recipeForm.querySelector('#name').value)
    const method=DOMPurify.sanitize(recipeForm.querySelector('#method').value);
    const roast=DOMPurify.sanitize(recipeForm.querySelector('#roast').value);
    const grind=DOMPurify.sanitize(recipeForm.querySelector('#grind').value);

    const ratio=DOMPurify.sanitize(recipeForm.querySelector('#ratio').value);

    const note = DOMPurify.sanitize(recipeForm.querySelector('#note').value);   

    const newRecipe= {
        name,method,roast, grid, ratio, note, id:Date.now()
    }

    listItems.push(newRecipe);
    e.target.reset();

    //event dispatching
    recipeContainer.dispatchEvent(new CustomEvent('refreshRecipies'));
}


//Stores the data to the browser in the local storage 
function mirrorStateToLocalStorage() {
    localStorage.setItem('recipeContainer.list',JSON.stringify(listItems));
}