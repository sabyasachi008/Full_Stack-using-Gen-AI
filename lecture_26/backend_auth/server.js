//Define different role -> 
//Admin -> can add / delete products

const express = require("express");

const app = express();
app.use(express.json());

let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    {id:3, name:"KetoDiet"}
]


//role goes to api header

//This function authorizes 
function authorize(allowedRoles) {
    return (req, res, next) => {
        const role = req.headers.role;


        if (!role) {
            return res.status(403).json({ error: "Role not provided" });

        }

        if (!allowedRoles.includes(role)) {
            return res.status(403).json({ error: "Access Denied" });
        }

        //if the program execution comes to this point it means that the access has be granted
        next();                                 //this will grant permission to call the rest of the API Endpoints
    };

}



app.get("/products", authorize(["USER", "ADMIN"]), (req, res) => {
    res.json(products);
})


app.post("/products", authorize(["ADMIN"]), (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name
    };

    products.push(product);
    res.json(product);
})

app.delete("/products/:id", authorize(["ADMIN"]), (req, res) => {
    products = products.filter(p => p.id !== req.params.id);
    res.json({ message: "Product Deleted" });
})

app.listen(3000, () => console.log("Server Running Successfully..."));
