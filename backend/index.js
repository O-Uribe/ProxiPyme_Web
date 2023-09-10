const express = require("express"),
    PORT = 5000,
    app = express();
// const mongoose = require("mongoose");
const Conection = require("./bd");
// require("dotenv").config();

const userRouters = require("./routes/user");
const pymeRouters = require("./routes/pyme");

// middleware
app.use(express.json());
app.use("/api", userRouters);
app.use("/api", pymeRouters);

app.get("/api/v1", (req, res) => {
    res.send("hello !!!!");
});

app.listen(PORT, () => console.log(`> start listening on port : ${PORT}`));
