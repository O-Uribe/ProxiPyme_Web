const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// CREATE USER
router.post('/user', (req, res) => {
    // res.send('create user')
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET ALL USER
router.get('/user', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
