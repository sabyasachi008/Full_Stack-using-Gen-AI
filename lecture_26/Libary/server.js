

//Role	Permissions
// MEMBER	View books
// LIBRARIAN	View + Add books
// ADMIN	View + Add + Delete books


const express = require("express");

const app = express()
app.use(express.json());

let books = [
    {id:1, name:"Harry Porter"},
    {id:2, name:"Lord of the Rings"},
    {id:3, name:"Fifty Shades of Doremon"},
    {id:4, name:"Tarzen the wonder Girl"}
];


//Authorisation function

function authorize(allowedRoles) {
    return (req, res, next) => {
        const role = req.headers.role;

        if(!role) {             //if the role is not provided to particular user 
            return res.status(403).json({error:"Role not provided"});
        }

        //if the access is not provided to particular user
        if(!allowedRoles.includes(role)) {

            return res.status(403).json({error:"Access Denied"});

        }

        next();

    };
}


//allow member libarian and admin to view books
app.get("/books", authorize(['MEMBER', 'LIBARIAN', 'ADMIN']), (req, res) => {
    res.json(books);
})


//add book permission given only to LIBARIAN & ADMIN
app.post("/books", authorize(['LIBARIAN', 'ADMIN']), (req, res) => {
    const book = {
        id: books.length+1,
        name : req.body.name
    };
    books.push(book);
    res.json(book);
})


app.delete("/books/:id", authorize(["ADMIN"]), (req, res) => {

    if(!books.find(p=>p.id != req.params.id)) {
        res.status(403).json({error:"Enter a valid id"});
    }
    books = books.filter(p => p.id != req.params.id);
    res.json({message: "Product Deleted"});
})


app.listen(3000, () => console.log("Server Running Successfully...."))


