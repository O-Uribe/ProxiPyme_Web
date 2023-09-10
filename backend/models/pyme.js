const mongoose = require("mongoose");

const pymeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("pymes", pymeSchema);
