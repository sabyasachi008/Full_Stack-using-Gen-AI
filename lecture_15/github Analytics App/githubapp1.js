

const searchBox = document.getElementById();

//... get all req html elements


let searchTimeout = null;           //to handle timeout  -> promise.res


searchBox.addEventListener('input', ()=> {
    clearTimeout(searchTimeout);                //sets the settimeout back to 0
    const query = searchBox.value.trim();
    if(!query) {
        resultDiv.innerHTML='';
    }    

    //debouncing
    searchTimeout = setTimeout(() => searchUser(query), 500);       //if user changes the input then only the debouncing time out will be applied hence the search function will research the query after 500 miliseconds.
}) 

async function searchUser(query) {

    try {
        const res = await fetch(`http:/api.github.com/search/users?q={query}`);
        const data = res.json();
    
        console.log(data);

    }
    catch(error) {
        console.log(error);
    }

    
}


//what are params.
//query param and template litteral.
