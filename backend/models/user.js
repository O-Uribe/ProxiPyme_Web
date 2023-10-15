const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    // Id_Usuario: {
    //     type: Number,
    //     required: true,
    // },
    Nombre_Usuario: {
        type: String,
        required: true,
    },
    // Correo_Electronico: {
    //     type: String,
    //     required: true,
    // },
    Contrase: {
        type: Number,
        required: true,
    },
    // Detalles_Perfil: {
    //     type: String,
    //     required: false,
    // },
});

module.exports = mongoose.model("users", userSchema);
