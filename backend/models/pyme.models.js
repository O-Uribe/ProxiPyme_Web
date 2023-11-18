import mongoose from "mongoose";

const pymeSchema = new mongoose.Schema(
    {
        tipoUsuario: {
            type: String,
            required: true,
            trim: true,
        },
        nombrePyme: {
            type: String,
            required: true,
            trim: true,
        },
        direccionPyme: {
            type: String,
            required: true,
            trim: true,
        },
        encargadoPyme: {
            type: String,
            required: true,
            trim: true,
        },
        categoria: {
            type: String,
            required: true,
            trim: true,
        },
        descripcionPyme: {
            type: String,
            required: true,
            trim: true,
        },
        Contrase: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Pymes", pymeSchema);
