
const passData = ['1234567890', '0987654321','1234509876', '5678904321','abcdefghij'];     //stored password.

const pass = document.getElementById('txt');    //get the typed password from the input field

const submit = document.getElementById('submit');   //

const container = document.getElementById('container');


function checkPassword() {
    const input = pass.value;
    let found = false;      //flag to check password correct or not.
    
    for(let i = 0; i<passData.length; i++) {
        if(input===passData[i]) {
            found = true;
            break;
        }
    }
    if(found) {     //if flag is true -> correct password
        container.innerHTML =`
        <h2 class="css"> Correct Password </h2>
        `
    }       
    else {          //wrong password
        alert("Wrong Password");
    }
        
}

//Vs code -> No alerts Limitation.

//event listener Keypress enter ->
pass.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        checkPassword();
    }
});
