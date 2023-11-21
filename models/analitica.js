const mongoose = require("mongoose");

const pymeSchema = mongoose.Schema({
    Id_Analitica: {
        type: Number,
        required: true,
    },
    N_Interacciones: {
        type: Number,
        required: true,
    },
    Id_Local: {
        type: Number,
        required: true,
    },
    N_Visualizaciones: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Analitica", pymeSchema);
