
const express = require('express')


const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

//How to encrypt the password of the user and store it in the in-memory DB.
const SECRET = "secret";
let users = []; 
app.post("/register", async(req, res) => {
    const {username, password} = req.body;

    //If user name / password missing
    if(!username || !password) {
        return res.status(400).json({error:"Username or password is missing"});

    }

    //if password is avaiable -> convert it into hashed password
    const hashedPassword = bcrypt.hashSync(password, 8);  //converted the password to hashed password using hashSync function. Hashpassword length -> 8

    //push the username and the updated password to the the database
    users.push({
        username, 
        password:hashedPassword
    });

    res.status(201).json({message:"User Registered successfully"});

})

//user login
app.post("/login", async(req, res) => {
    const {username, password} = req.body;
    const user = users.find(user => user.username === username);      //verify the user name from the request body to the username stored in db

    //is username not present 
    if(!user) {
        return res.status(401).json({error:"Invalid Credentials"});
    }

    const valid = bcrypt.compareSync(password, user.password);

    if(!valid) {
        return res.status(401).json({error:"Invalid Credentials"});
    }

    //so that the endpoint is working
    const token = jwt.sign({username}, SECRET, {expiresIn:"1hr"});
    //we can also the set the token expiration time after that it would ask the user to relogin.

    res.json({token});
})

//To check the validity of the registered user we defined authenication ..
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({error:"Token Missing"});
    }

    const token = authHeader.split(" ")[1];         //since JWT Token is of 15 characters and we will only take the first part.
    
    try {
        const decoded = jwt.verify(token, SECRET);              //verifys the JWT Token
        req.user = decoded;
        next();
    } 
    catch {
        res.status(401).json({error:"Invalid Token"});
    }
}


//Let suppose there is a endpoint called profile and if the login is successfull then we would be taken to the user profile
app.get("/profile", authenticate, (req, res)=> {
    res.json({
        message:"Welcome", 
        user:req.user});
});

app.listen(3000, ()=> {
    console.log("Server is running at 3000...");
})