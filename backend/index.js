const express = require("express"),
  PORT = 5000,
  app = express();

const mongoose = require("mongoose");
require("dotenv").config();
const userRouters = require("./routes/user");
const pymeRouters = require("./routes/pyme");

// middleware
app.use(express.json());
app.use('/api', userRouters);
app.use('/api', pymeRouters);

app.get("/api/v1", (req, res) => {
  res.send("hello !!!!");
});

// mongodb connection
mongoose.connect("mongodb+srv://ProxiPyme:ay24WV7Lve6U8JPSdfad2@cluster0.hvk7eja.mongodb.net/BD_1?retryWrites=true&w=majority").then(() => console.log('Connected to mongoDB atlas')).catch((error) => console.error(error));

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
