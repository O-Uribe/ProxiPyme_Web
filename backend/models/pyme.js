const mongoose = require("mongoose");

const pymeSchema = mongoose.Schema({
    Id_Local: {
        type: Number,
        required: true,
    },
    Nombre_Local: {
        type: String,
        required: true,
    },

    Direccion: {
        type: String,
        required: true,
    },
    Descripcion: {
        type: String,
        required: true,
    },
    Modalidad_operacion: {
        type: String,
        required: true,
    },
    Id_Dueño: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("pymes", pymeSchema);
