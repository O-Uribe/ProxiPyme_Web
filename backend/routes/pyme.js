const express = require("express");
const pymeSchema = require("../models/pyme");

const router = express.Router();

// CREATE pyme
router.post("/pyme", (req, res) => {
    // res.send('create pyme')
    const pyme = pymeSchema(req.body);
    pyme.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET ALL pyme
router.get("/pyme", (req, res) => {
    pymeSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
