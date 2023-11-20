import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import pymeRoutes from "./routes/pyme.routes.js";

const app = express();

// middleware
app.use(morgan("dev"));
app.use(
    cors({
        origin: "http://localhost:5173", // Reemplaza esto con la URL de tu aplicación frontend
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);
app.use(express.json()); // leer json
app.use(cookieParser());
// app.use(express.urlencoded()); // leer form

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", pymeRoutes);

export default app;
