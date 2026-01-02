/*
 *Passport.js -> Authentication for user 
 * Plug in different auth strategy
 * keep auth logic clean and reusable
 * cannot encrypt the password.
 * 
 * Passport cannot work without session 
 * Strategy 
 * -> Local -> username, password
 */


const express = require('express');

const session = require('express-session');
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const PORT = 4001;
const app = express();
app.use(express.json());

//Session is a middleware
app.use(
    session({
        secret: 'passport_secret',
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());


const users = [

    {
        id: 1,
        username: 'admin',
        password: 'admin123'
    }
]

//done is like a flag which reffers to the userState
passport.use(
    new LocalStrategy((username, password, done) => {
        const user = users.find(u => u.username === username);

        if (!user) {
            return done(null, false, { message: "User not found" })
        }
        
        if(user.password != password) {
            return done(null, false, )
        }
        return done(null, user);


    })
);


//Serialise / Deserialise ->
passport.serializeUser((user, done)=> {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    const user = users.find(u=>u.id === id);
    done(null, user);
})

//login 
app.post('/login', passport.authenticate('local'), (req, res)=> {
    res.json({message:"Login 200"});
});


app.get('/profile', (req, res) => {
    if(!req.isAuthenticated()) return res.json({error:"Not authenticated"});
    res.json({user:req.user});
})


app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}...`);
})