//Generate OTP 
//Send OTP
//Verify OTP
//Allow access to protected route
//Expiry
//OTP Verified -> there will be a session created 
const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
app.use(express.json());

let otps = {};          
//The object would contain 
//phone:{otp, expiretime};
let sessions = {};          //otp will be valid per-session         {token:phone}


// Nodemailer -> Sends otp to you mailID -> not sutialble for industry use or scability
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "dastonygupta4567@gmail.com",
    pass: "mafc dmch mknv egrl",
  },
});

app.post("/send-otp", (req, res) => {
    const {phone} = req.body;
    if(!phone) {
        return res.status(400).json({error:"Phone No required"});
    }
    //random number generation 
    const otp = Math.floor(10000*Math.random()*900000);

    //expire date generation 
    const expiresAt = Date.now()+2*60*1000;      //2min expire time of the OTP

    otps[phone] = {
        otp,
        expiresAt
    };

    //twilio -> A service which provides text message in mobile using it's tool  to integrete mobile
    //Indian company for the same -> Fast 2 message
    console.log(`OTP Sent  ${otp}`);       // we have to integrate twillio api and add number instead of console.log.          //we have to create a post request using the end point provided by twillio or fast to 
    //reffer to jokes 
    res.json({message:"OTP sent"});
})

app.post("/send-otpemail",async (req,res)=>{
    const {email}=req.body;
    if(!email) return res.status(400).json({error:"Phone Required"});
    const otp=Math.floor(10000*Math.random()*900000);
    const expiresAt=Date.now()+ 2*60*1000; // 2min
    otps[email]={otp,expiresAt};

    await transporter.sendMail(
        {
            from:"OTP Service, gmail acc",
            to:email,
            subject:"OTP code",
            text:`OTP is ${otp}, It expires in 2 mins `
        }
    );
    
    res.json({message:"OTP sent "});
});

app.post("/verify-otp", (req, res) => {
    const{phone, otp} = req.body;

    const record = otps[phone];

    if(!record) return res.status(400).json({error:"OTP not found"});

    if(Date.now()> record.expiresAt) {
        return res.status(401).json({error:"OTP Expired Click to resend OTP"});
    }

    if(record.otp != otp) {
        return res.status(401).json({error:"Invalid OTP, Please enter the correct OTP"});
    }
    
    const token = Math.random().toString(36).substring(2);
    sessions[token] = phone;            // maps the generated token to a specific phone number in the sessions object
    delete otps[phone];                 //after successfull validation of the OTP delete the OTP
    res.json({token});
})


function authenticate(req, res, next) {
    const token = req.headers.token;
    if(!token || !sessions[token]) {
        return res.status(401).json({error:"Unauthorised"});
    }

    req.phone = sessions[token];
    next();

}

app.get("/profile", authenticate, (req, res) => {

    res.json({
        "message": "Logged in Successfully",
        phone:req.phone
    })
})

app.listen(3000, ()=> {
    console.log("Authentication running Successfully...");
})

