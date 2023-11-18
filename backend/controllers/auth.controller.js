import User from "../models/user.models.js";
import Pyme from "../models/pyme.models.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
    const {
        tipoUsuario,
        primerNombre,
        primerApellido,
        Nombre_Usuario,
        Correo_Electronico,
        Contrase,
    } = req.body;

    try {
        const userFound = await User.findOne({ Correo_Electronico });
        if (userFound) return res.status(400).json(["Usuario ya esta en uso"]);

        const passwordHash = await bcryptjs.hash(Contrase, 10);

        const newUser = new User({
            tipoUsuario,
            primerNombre,
            primerApellido,
            Nombre_Usuario,
            Correo_Electronico,
            Contrase: passwordHash,
        });

        const userSaved = await newUser.save(); // SAVE IN DB
        const token = await createAccessToken({ id: userSaved._id });

        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            usuario: userSaved.tipoUsuario,
            nombre: userSaved.primerNombre,
            apellido: userSaved.primerApellido,
            username: userSaved.Nombre_Usuario,
            email: userSaved.Correo_Electronico,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const registerPyme = async (req, res) => {
    const {
        tipoUsuario,
        nombrePyme,
        direccionPyme,
        encargadoPyme,
        categoria,
        descripcionPyme,
        Contrase,
    } = req.body;

    try {
        const userFound = await Pyme.findOne({ nombrePyme });
        if (userFound) return res.status(400).json(["Pyme ya esta en uso"]);

        const passwordHash = await bcryptjs.hash(Contrase, 10);

        const newUser = new Pyme({
            tipoUsuario,
            nombrePyme,
            direccionPyme,
            encargadoPyme,
            categoria,
            descripcionPyme,
            Contrase: passwordHash,
        });

        const userSaved = await newUser.save(); // SAVE IN DB
        const token = await createAccessToken({ id: userSaved._id });

        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            tipoUsuario: userSaved.tipoUsuario,
            nombrePyme: userSaved.nombrePyme,
            direccionPyme: userSaved.direccionPyme,
            encargadoPyme: userSaved.encargadoPyme,
            categoria: userSaved.categoria,
            descripcionPyme: userSaved.descripcionPyme,
        });
    } catch (error) {
        console.error("Error:", error); // Loguea el error en la consola para obtener más detalles (opcional)
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message, // Agrega el mensaje de error
            stack: error.stack, // Agrega la pila de llamadas (stack trace) si es necesario
        });
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
            token,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loginPyme = async (req, res) => {
    const { nombrePyme, Contrase } = req.body;

    try {
        const userFound = await Pyme.findOne({ nombrePyme });

        if (!userFound)
            return res.status(400).json({ message: "User not found" });

        const isMatch = await bcryptjs.compare(Contrase, userFound.Contrase);

        if (!isMatch)
            return res.status(400).json({ message: "Incorrect password" });

        const token = await createAccessToken({ id: userFound._id });

        res.cookie("token", token);
        res.json({
            id: userFound._id,
            username: userFound.nombrePyme,
            token,
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
    const { token } = req.cookies;

    if (!userFound) return res.status(400).json({ message: "User not found" });

    return res.json({
        id: userFound._id,
        username: userFound.Nombre_Usuario,
        email: userFound.Correo_Electronico,
        token,
    });

    // res.send("profile");
};

export const verify = async (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });

        const userFound = await User.findById(user.id);
        if (!userFound)
            return red.status(401).json({ message: "Unauthorized" });

        return res.json({
            id: userFound._id,
            username: userFound.Nombre_Usuario,
            email: userFound.Correo_Electronico,
        });
    });
};
