const express = require("express");

const cors = require("cors");

const path = require("path")

const app = express()

const PORT = 3000;

app.use(cors());
app.use(express.json());

//connect to static FE

app.use(express.static(path.join(__dirname, "public")));


let feedbacks = [];
let id = 1;
app.post("/feedback", (req, res) => {
    const fb = {
        id:id++,
        text: req.body.text,
        votes:0
    };

    feedbacks.push(fb);
    res.join(fb);

})

app.get("/feebacks", (req, res) => {
    const sorted = feedbacks.sort((a, b) => b.votes - a.votes);

    res.json(sorted);
});



app.listen(PORT, () => console.log("Server is running on port", PORT));