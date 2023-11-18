import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Switch from "react-switch";

export function RegisterPyme() {
    const [esUsuarioNormal, setEsUsuarioNormal] = useState(false);

    const handleChange = (checked) => {
        setEsUsuarioNormal(checked);
    };

    const { signupPyme, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    // REDIRECCION
    useEffect(() => {
        if (isAuthenticated) navigate("/home");
    }, [isAuthenticated]);

    const [Contrase, setContraseña] = useState("");
    const [nombrePyme, setNombrePyme] = useState("");
    const [direccionPyme, setDireccionPyme] = useState("");
    const [encargadoPyme, setEncargadoPyme] = useState("");
    const [descripcionPyme, setDescripcionPyme] = useState("");
    const [categoria, setCategoria] = useState("");
    // const [error, setError] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const tipoUsuario = esUsuarioNormal ? "cliente" : "pyme";
            const pyme = {
                tipoUsuario,
                nombrePyme,
                direccionPyme,
                encargadoPyme,
                categoria,
                descripcionPyme,
                Contrase,
            };
            console.log(pyme);
            signupPyme(pyme); // AuthContext
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
                            <hr className="login-hr has-background-danger" />

                            {/* Crea una caja que contiene al formulario */}
                            <div className="box">
                                {/*____________ FORM ____________*/}
                                <form onSubmit={handleSubmit}>
                                    {/* Campos de entrada de la pyme */}
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="text"
                                            value={nombrePyme}
                                            onChange={(e) =>
                                                setNombrePyme(e.target.value)
                                            }
                                            placeholder="Nombre de la pyme"
                                            required
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="text"
                                            value={direccionPyme}
                                            onChange={(e) =>
                                                setDireccionPyme(e.target.value)
                                            }
                                            placeholder="Dirección de la pyme"
                                            required
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="text"
                                            value={encargadoPyme}
                                            onChange={(e) =>
                                                setEncargadoPyme(e.target.value)
                                            }
                                            placeholder="Encargado de la pyme"
                                            required
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="text"
                                            value={descripcionPyme}
                                            onChange={(e) =>
                                                setDescripcionPyme(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Descripción de la pyme"
                                            required
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="text"
                                            value={categoria}
                                            onChange={(e) =>
                                                setCategoria(e.target.value)
                                            }
                                            placeholder="Categoría de la pyme"
                                            required
                                        />
                                    </div>

                                    {/* Crea el campo para la contraseña, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="password"
                                            value={Contrase}
                                            onChange={(e) =>
                                                setContraseña(e.target.value)
                                            }
                                            placeholder="Contraseña"
                                            required
                                        />
                                    </div>

                                    {/* USUARIO O PYME */}
                                    <div className="field">
                                        <label className="checkbox">
                                            <span>Usuario o Pyme</span>
                                            <Switch
                                                onChange={handleChange}
                                                checked={esUsuarioNormal}
                                            />
                                        </label>
                                    </div>

                                    {/* Crea el boton para registro, aplicando estilos de texto blanco, que ocupe todo el ancho disponible y un color de fondo rosa*/}
                                    <button className="button has-text-white is-fullwidth has-background-danger">
                                        Registrarme
                                    </button>
                                </form>
                                <p>
                                    Ya tienes una cuenta?
                                    <Link to="/login">Login</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RegisterPyme;
