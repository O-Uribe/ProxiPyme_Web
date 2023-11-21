const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Id_Reseña: {
        type: String,
        required: true,
    },
    Texto: {
        type: String,
        required: false,
    },
    Calificacion: {
        type: String,
        required: true,
    },
    Fecha_Reseña: {
        type: date,
        required: false,
    },
    Id_Usuario: {
        type: String,
        required: true,
    },
    Id_Local: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("reseña", userSchema);
