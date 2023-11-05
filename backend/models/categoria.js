const mongoose = require("mongoose");

const pymeSchema = mongoose.Schema({
    Id_Categoria: {
        type: Number,
        required: true,
    },
    Nombre_Categoria: {
        type: String,
        required: true,
    },
    Id_Analitica: {
        type: String,
        required: true,
    },
    Descripcion: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("Categoria", pymeSchema);
