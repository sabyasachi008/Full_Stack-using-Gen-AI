
// User Repository Table: Clicking on the user navigates to a different page to
// display a list of a user's repositories with columns for the name, description, number


//searchUser()-> function 


const searchBox = document.getElementById('searchbx');
const resultDiv = document.getElementById('result');

let searchTimeout = null;

searchBox.addEventListener('input', () => {
    clearTimeout(searchTimeout);

    const query = searchBox.value.trim();

    if(!query) {
        resultDiv.innerHTML='';
        return;
    }

    searchTimeout = setTimeout(() => searchUser(query), 500);
})


async function  searchUser(query) {
    try {
        // const res = await fetch(`http://api.github.com/search/users?q=${query}`);

        const res = await fetch(`https://api.github.com/search/users?q=${query}`);

        
        const data = await res.json();          //convert the fetched data to json format

        console.log(data);          //debugging

        if(!data.items) {
            
            console.log("API did not fetch items: ", data);

            resultDiv.innerHTML = "<p class='para'>No User found.</p>";            
            return;                 //incase of no response from the api
        }
        const users = data.items.slice(0, 100);          //limit to first 100 users only

        resultDiv.innerHTML = `
        <table>
            <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>UserName</th>
                <th>GitHub Profile</th>
                <th>Type</th>
            </tr>
           ${users.map(user => `
                <tr>
                    <td>${user.id}</td>
                    <td><img src="${user.avatar_url}" width="40" height="40"></td>
                    <td>${user.login}</td>
                    <td><a href="${user.html_url}" target="_blank"><i class="bi bi-github"></i></a></td>
                    <td>${user.type}</td> 
                </tr>
           `).join('')}
           </table>
           `;
    } catch (error) {
        console.log(error);
    }
}