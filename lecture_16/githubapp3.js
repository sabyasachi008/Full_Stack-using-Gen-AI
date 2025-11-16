

// let repos = [];


// fetch(`https://api.github.com/users/$${user}/repos?per_page=100`)
// .then(r => res.json())
// .then(data => {
//     repos = data;
//     //Give the user table
//     render();
// });



// function render() {

//     //get html elements
//     let filtered = repos.filter(r =>
//         r.name.toLowerCase().includes(query)
//                 //filtered array
//     )

//     filtered.sort((a, b) => {
//         let valA, valB;
//         if(sortBy === 'name') {
//             valA = a.name.toLowerCase();
//             valB = b.name.toLowerCase();
            
//             //local compare -> -1 , 1, 0 
//             // 0 -> equal
//             // 1 -> after
//             // -1 -> before

//             //python.localCompare(Javascript) -> 1;

//             return order === 'asc' ? valA.localeCompare(valB) : 
//                 valB.localeCompare(valA);
//         }

//         //asc it the input from the user wether the page should be in ascending or descending order
//     })
// }


console.log(python.localeCompare(javascript))