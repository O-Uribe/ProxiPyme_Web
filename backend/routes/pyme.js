const express = require("express");
const pymeSchema = require("../models/pyme");
const router = express.Router();

// REGISTER
router.post("/pyme", (req, res) => {
    const pyme = pymeSchema(req.body);

    const emailFound = pymeSchema.find({ email: pyme.email });
    if (!emailFound) return res.status(400).json({ message: "Email found" });
    else
        pyme.save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
});

// LOGIN
// router.post("/pyme", (req, res) => {
//     const pyme = pymeSchema(req.body);

//     const emailFound = pymeSchema.find();
//     console.log(!emailFound);
//     if (!emailFound) return res.status(400).json({ message: "Not Found" });
//     else res.send("SI SOYYYYYYY");
// });

//
//
//
//
//
//
//
// ACTUALIZACION:
// dentro de un router post podemos utilizar func de mongo
// esta parte queda obsoleta por el momento
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
    const nombre = "lanina@gmail.com"; // <--- este dato cambia segun lo que ingrese el usuario.
    // ejemplo verificamos el correo para que no se dupliquen usuarios
    buscarPorNombre(req, res, nombre);
});

module.exports = router;
