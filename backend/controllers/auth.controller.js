import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const { Nombre_Usuario, Correo_Electronico, Contrase } = req.body;

    try {
        const passwordHash = await bcryptjs.hash(Contrase, 10);

        const newUser = new User({
            Nombre_Usuario,
            Correo_Electronico,
            Contrase: passwordHash,
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });

        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            username: userSaved.Nombre_Usuario,
            email: userSaved.Correo_Electronico,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { Correo_Electronico, Contrase } = req.body;

    try {
        const userFound = await User.findOne({ Correo_Electronico });

        if (!userFound)
            return res.status(400).json({ message: "User not found" });

        const isMatch = await bcryptjs.compare(Contrase, userFound.Contrase);

        if (!isMatch)
            return res.status(400).json({ message: "Incorrect password" });

        const token = await createAccessToken({ id: userFound._id });

        res.cookie("token", token);
        res.json({
            id: userFound._id,
            username: userFound.Nombre_Usuario,
            email: userFound.Correo_Electronico,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = async (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);

    if (!userFound) return res.status(400).json({ message: "User not found" });

    return res.json({
        id: userFound._id,
        username: userFound.Nombre_Usuario,
        email: userFound.Correo_Electronico,
    });

    // res.send("profile");
};
