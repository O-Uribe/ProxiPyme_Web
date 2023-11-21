import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        tipoUsuario: {
            type: String,
            required: true,
            trim: true,
        },
        primerNombre: {
            type: String,
            required: true,
            trim: true,
        },
        primerApellido: {
            type: String,
            required: true,
            trim: true,
        },
        Nombre_Usuario: {
            type: String,
            required: true,
            trim: true,
        },
        Correo_Electronico: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        Contrase: {
            type: String,
            required: true,
        },
        Detalles_Perfil: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);
