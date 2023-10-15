const cors = require("cors");
const express = require("express"),
    PORT = 4000,
    app = express();
// const mongoose = require("mongoose");
const Conection = require("./bd");
// require("dotenv").config();

const userRouters = require("./routes/user");
const pymeRouters = require("./routes/pyme");

// middleware
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use("/api", userRouters);
app.use("/api", pymeRouters);

app.get("/api/v1", (req, res) => {
    res.send("hello !!!!");
});

app.listen(PORT, () => console.log(`> start listening on port : ${PORT}`));
