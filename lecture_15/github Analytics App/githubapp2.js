
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

        const res = await fetch(`https://api.github.com/users?q=${query}/repos?per_page=100`)
        const data = await res.json();
        console.log(data);

        resultDiv.innerHTML = `
        <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Number</th>
            </tr>
            ${data.items.map(user => `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.description}</td>
                    <td>${user.followers}</td>
                </tr>
            `).join('')}
        </table>
        `

    } catch(error) {
        console.log(error);
    }

}