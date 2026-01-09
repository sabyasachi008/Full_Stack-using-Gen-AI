const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

//Initialise app

admin.initializeApp({
    credential:admin.credential.cert(require("./firebase-admin.json"))
});

async function authenticate(req, res, next) {

    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).json({error:"Token Missing!"});

    const token = authHeader.split(' ')[1];

    try {

        const token  = await admin.auth.verifyIdToken(token);
        req.user = decodedToken;
        next();
    }
    catch {
        
    }
}

app.get('/', (req, res)=> {
    res.json({message:"Public Api"});
})

app.get('/profile', authenticate, (req, res) => {
    res.json({
        message:"Authenticated User",
        user: req.user
    })
})
        //Bearer token generate
        
app.listen(3000, ()=> {
    console.log("Firebase running!");
});