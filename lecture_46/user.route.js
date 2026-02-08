const express= require("express");
const users = require("./user.model.js");

const router = express.Router();

router.post('/users', async(req, res) => {
    const user = await users.create(req.body);

    res.status(401).json(user);
});

module.exports = router;