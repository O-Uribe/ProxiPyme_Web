// Este archivo remplaza el del jose, solamente la conexion con el backend
import "../style/Login.css";
import { useState } from "react";
import { FcShop } from "react-icons/fc";

import { registrerRecuest, loginRequest } from "../api/auth";

export function Formulario({ setUser }) {
    const [Nombre_Usuario, setNombre] = useState("");
    const [Contrase, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Nombre_Usuario == "" || Contrase == "") {
            setError(true);
            return;
        }
        setError(false);

        //____________ IMPORTANTE ____________\\
        // Enviamos datos a el backend por api.
        try {
            const user = { Nombre_Usuario, Contrase };
            // console.log(user);
            const response = await loginRequest(user);
            // console.log(response);
        } catch (error) {
            // TIPOS DE ERRORES
            if (error.response) {
                console.error("Respuesta del servidor:", error.response.data);
            } else if (error.request) {
                console.error("No se pudo conectar al servidor.");
            } else {
                console.error("Error desconocido:", error.message);
            }
        }
    };

    return (
        <section>
            <h1 className="title">Login</h1>

            <form className="formulario" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={Nombre_Usuario}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="password"
                    value={Contrase}
                    onChange={(e) => setContraseña(e.target.value)}
                />
                <button className="button is-link is-rounded">
                    Iniciar Sesion
                </button>
            </form>

            {error && <p>Todos los campos son obligatorios.</p>}
        </section>
    );
}
