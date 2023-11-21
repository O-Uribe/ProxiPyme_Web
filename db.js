// const mongoose = require("mongoose");

// class Conection {
//     constructor() {
//         this.connect();
//     }
//     connect() {
//         try {
//             mongoose
//                 .connect(
//                     "mongodb+srv://ProxiPyme:ay24WV7Lve6U8JPSdfad2@cluster0.hvk7eja.mongodb.net/BD_1?retryWrites=true&w=majority"
//                 )
//                 .then(() => console.log("> Connected to mongoDB atlas"))
//                 .catch((error) => console.error(error));
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// module.exports = new Conection(); // Exporta una instancia de la clase Database

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose
            .connect(
                "mongodb+srv://ProxiPyme:ay24WV7Lve6U8JPSdfad2@cluster0.hvk7eja.mongodb.net/BD_1?retryWrites=true&w=majority"
            )
            .then(() => console.log("> Connected to mongoDB atlas"));
    } catch (error) {
        console.log(error);
    }
};
