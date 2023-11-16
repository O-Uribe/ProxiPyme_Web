import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // Id_Usuario: {
        //     type: Number,
        //     required: true,
        // },
        // Nombre_Usuario: {
        //     type: String,
        //     required: true,
        //     trim: true,
        // },
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
        // Detalles_Perfil: {
        //     type: String,
        //     required: false,
        // },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);
