const express = require('express');
const cors = require('cors');
const userRoutes = require("./user.route.js");

const app = express();

app.use(cors());
app.use(express.json());

app.post('/users', (req, res) => {
    res.status(401).json({ name: "John Doe" });
})


app.use('/api/users', userRoutes)             

module.exports = app;