const mongoose = require("mongoose");

const pymeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    }
});

module.exports = mongoose.model('pymes', pymeSchema);