import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRedirectIfAuthenticated } from "../context/Autenticacion";

export function LoginPyme() {
    const { signinPyme, isAuthenticated, errors: LoginErrors } = useAuth();
    // const navigate = useNavigate();

    // REDIRECCION
    useRedirectIfAuthenticated(isAuthenticated, "/home");

    const [nombrePyme, setCorreo] = useState("");
    const [Contrase, setContraseña] = useState("");
    const [MostrarContra, setMostrarContra] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const pyme = {
                nombrePyme,
                Contrase,
            };
            signinPyme(pyme);
        } catch (error) {
            // TIPOS DE ERRORES //
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
        //Crea el contenedor principal de la pagina
        <div className="container">
            {LoginErrors.map((error, i) => (
                <div key={i}>{error}</div>
            ))}
            <section className="hero">
                {/* Se crea una caja con un fondo rosa claro */}
                <div className="hero-body box has-background-danger-light">
                    {/* Crea un nuevo container y centra el contenido horizontalmente */}
                    <div className="container has-text-centered">
                        {/* Configura un estilo de columna */}
                        <div className="column is-10 is-offset-1">
                            {/* Da un estilo de color negro al titulo */}
                            <h3 className="title has-text-black">Login</h3>
                            {/* Crea una linea rosa que separa el titulo del formulario */}
                            <hr className="login-hr has-background-danger" />

                            {/* Crea una caja que contiene al formulario */}
                            <div className="box">
                                {/*____________ FORM ____________*/}
                                <form onSubmit={handleSubmit}>
                                    {/* Crea el campo para el correo, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="text"
                                            value={nombrePyme}
                                            onChange={(e) =>
                                                setCorreo(e.target.value)
                                            }
                                            placeholder="Ingresa tu correo electronico"
                                            required
                                        />
                                    </div>

                                    {/* Crea el campo para la contraseña, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input"
                                            type={MostrarContra ? "text" : "password"}
                                            value={Contrase}
                                            onChange={(e) =>
                                                setContraseña(e.target.value)
                                            }
                                            placeholder="Ingresa tu contraseña"
                                            required
                                        />
                                        {/* Boton para mostrar u ocultar contraseña */}
                                        <button className="button" onClick={() => setMostrarContra(!MostrarContra)}>
                                            {MostrarContra ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                                        </button>
                                    </div>

                                    {/* Crea el boton para registro, aplicando estilos de texto blanco, que ocupe todo el ancho disponible y un color de fondo rosa*/}
                                    <button className="button has-text-white is-fullwidth has-background-danger">
                                        Login
                                    </button>
                                </form>
                                <p>
                                    ¿No tienes una cuenta aun? 
                                    <Link to="/registerPyme" className="has-text-danger">Registrate</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginPyme;
