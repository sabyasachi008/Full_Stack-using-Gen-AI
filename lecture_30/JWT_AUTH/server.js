const express = require('express');

const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const ACCESS_SECRET = 'access_secret';
const REFRESH_SECRET = ' refresh_secret';

const users = [{
    id:1, 
    username:"user", 
    password: "123"
}];

let refresh_tokens= [];

app.post("/login", (req, res) => {
    const{username, password} = req.body;
    const user = users.find(
        u => u.username === username && u.password === password
    );

    if(!user) {
        return res.status(401).json({error:"Invalid Creds!"});
    }

    const accessTokens = jwt.sign(

        {
            id:user.id,
        }, 
        ACCESS_SECRET,
        {
            expiresIn:"15s"
        }
    );

     const refreshToken=jwt.sign(
         {id:user.id},
        ACCESS_SECRET,
        {expiresIn:"7d"}
    )
    refresh_tokens.push(refreshToken)
    res.json({accessTokens,refreshToken});
})


function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({error:"Token Missing"});
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token.ACCESS_SECRET);
        req.user = decoded;
        next();
    }

    catch {
        res.status(401).json({error:"Access Token expired"});
    }

}


app.get("/profile", authenticate, (req, res)=> {
    res.json({message:`Welcome ! ${req.username}`})
})

app.listen(3000, ()=> {
    console.log("Server Learning at 3000...");
})