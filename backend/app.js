import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json()); // leer json
app.use(cookieParser());
// app.use(express.urlencoded()); // leer form

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;
