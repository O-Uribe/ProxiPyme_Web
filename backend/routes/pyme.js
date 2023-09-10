const express = require("express");
const pymeSchema = require("../models/pyme");
const router = express.Router();

// CREATE pyme
router.post("/pyme", (req, res) => {
    // res.send('create pyme')
    const pyme = pymeSchema(req.body);
    // console.log(pyme.name);
    pyme.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// creare una funcion para que se busquen de manera mas rapido
// luego conectamos esta parte con el de crear un docuemento
// y verificamos si existe el dato para la verific en el register o login
function buscarPorNombre(req, res, nombre) {
    pymeSchema
        .find({ email: nombre })
        .then((data) => {
            if (data && data.length > 0) {
                console.log("Se encontraron datos:", data);
                res.json(data); // Envía los datos como respuesta JSON
            } else {
                console.log("No se encontraron datos para el nombre:", nombre);
                res.json({
                    message:
                        "No se encontraron datos para el nombre: " + nombre,
                });
            }
        })
        .catch((error) => {
            console.error("Error al buscar datos:", error);
            res.status(500).json({ message: "Error al buscar datos." });
        });
}

// aqui llamamos la fun
router.get("/pyme", (req, res) => {
    const nombre = "si@gmail.com"; // <--- este dato cambia segun lo que ingrese el usuario.
    // ejemplo verificamos el correo para que no se dupliquen usuarios
    buscarPorNombre(req, res, nombre);
});

module.exports = router;
