import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        empresa: {
            type: String,
            required: true,
        },
        categoria: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        ciudad: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Task", taskSchema);
