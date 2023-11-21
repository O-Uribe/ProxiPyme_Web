import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Register() {
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    // REDIRECCION
    useEffect(() => {
        if (isAuthenticated) navigate("/home");
    }, [isAuthenticated]);

    const [primerNombre, setPrimerNombre] = useState("");
    const [primerApellido, setPrimerApellido] = useState("");
    const [Nombre_Usuario, setNombre] = useState("");
    const [Correo_Electronico, setCorreo] = useState("");
    const [MostrarContra, setMostrarContra] = useState(false);
    const [Contrase, setContraseña] = useState("");
    // const [error, setError] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = {
                primerNombre,
                primerApellido,
                Nombre_Usuario,
                Correo_Electronico,
                Contrase,
                tipoUsuario: "cliente",
            };
            // console.log(user);
            signup(user); // AuthContext
        } catch (error) {
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
            {RegisterErrors.map((error, i) => (
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
                            <h3 className="title has-text-black">
                                ¿Quieres registrarte en "Proxipyme"?
                            </h3>
                            {/* Crea una linea rosa que separa el titulo del formulario */}
                            <hr className="login-hr has-text-danger" />

                            {/* Crea una caja que contiene al formulario */}
                            <div className="box" style={{ boxShadow: '15px 15px 10px pink' }}>
                                {/*____________ FORM ____________*/}
                                <form onSubmit={handleSubmit}>
                                    {/* Campos de entrada del usuario */}
                                    {/* PRIMER NOMBRE */}
                                    <div className="field">
                                        <input
                                            className="input is-danger has-text-danger"
                                            type="text"
                                            value={primerNombre}
                                            onChange={(e) =>
                                                setPrimerNombre(e.target.value)
                                            }
                                            placeholder="Primer nombre"
                                            required
                                        />
                                    </div>
                                    {/* PRIMER APELLIDO */}
                                    <div className="field">
                                        <input
                                            className="input is-danger has-text-danger"
                                            type="text"
                                            value={primerApellido}
                                            onChange={(e) =>
                                                setPrimerApellido(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Primer apellido"
                                            required
                                        />
                                    </div>

                                    {/* Crea el campo para el Nombre, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input is-danger has-text-danger"
                                            type="text"
                                            value={Nombre_Usuario}
                                            onChange={(e) =>
                                                setNombre(e.target.value)
                                            }
                                            placeholder="Nombre de usuario"
                                            required
                                        />
                                    </div>

                                    {/* Crea el campo para el correo, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input is-danger has-text-danger"
                                            type="email"
                                            value={Correo_Electronico}
                                            onChange={(e) =>
                                                setCorreo(e.target.value)
                                            }
                                            placeholder="Correo electronico"
                                            required
                                        />
                                    </div>

                                    {/* Crea el campo para la contraseña, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input is-danger has-text-danger"
                                            type={
                                                MostrarContra
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={Contrase}
                                            onChange={(e) =>
                                                setContraseña(e.target.value)
                                            }
                                            placeholder="Contraseña"
                                            required
                                        />
                                        {/* Boton para mostrar u ocultar contraseña */}
                                        <p
                                            className="button"
                                            onClick={() =>
                                                setMostrarContra(!MostrarContra)
                                            }>
                                            {MostrarContra ? (
                                                <i className="fas fa-eye-slash"></i>
                                            ) : (
                                                <i className="fas fa-eye"></i>
                                            )}
                                        </p>
                                    </div>
                                    {/* Crea el campo para los terminos y condiciones, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <label className="checkbox">
                                            <input type="checkbox" required />
                                            Condiciones
                                        </label>
                                    </div>

                                    {/* Crea el boton para registro, aplicando estilos de texto blanco, que ocupe todo el ancho disponible y un color de fondo rosa*/}
                                    <button className="button has-text-white is-fullwidth has-background-danger">
                                        Registrarme
                                    </button>
                                </form>
                                <p>
                                    ¿Ya tienes una cuenta?
                                    <Link
                                        to="/login"
                                        className="has-text-danger">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
