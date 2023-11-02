// const cors = require("cors");
// const express = require("express"),
//     PORT = 4000,
//     app = express();
// // const mongoose = require("mongoose");
// const Conection = require("./db");
// // require("dotenv").config();

// const userRouters = require("./routes/user");
// const pymeRouters = require("./routes/pyme");

// app.get("/products", (req, res) => {
//     res.send("Lista de productos");
// });
// // middleware
// app.use(express.json()); // leer json
// app.use(express.urlencoded()); // leer form
// app.use(
//     cors({
//         origin: "http://localhost:5173",
//     })
// );

// app.use("/api", userRouters);
// app.use("/api", pymeRouters);

// app.get("/api/v1", (req, res) => {
//     res.send("hello !!!!");
// });

// app.listen(PORT, () => console.log(`> start listening on port : ${PORT}`));

import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(4000);
console.log("> Server on port", 4000);
