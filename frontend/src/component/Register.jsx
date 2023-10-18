import React from "react";
// import { registrerRecuest, loginRequest } from "../api/auth";

export function Register({ setUser }) {
    // const [Nombre_Usuario, setNombre] = useState("");
    // const [Nombres, setNomApell] = useState("");
    // const [Correo_Electronico, setCorreo] = useState("");
    // const [Contrase, setContraseña] = useState("");
    // const [error, setError] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (
    //         Nombre_Usuario == "" ||
    //         Nombres == "" ||
    //         Correo_Electronico == "" ||
    //         Contrase == ""
    //     ) {
    //         setError(true);
    //         return;
    //     }
    //     setError(false);

    //     try {
    //         const user = {
    //             Nombre_Usuario,
    //             Nombres,
    //             Correo_Electronico,
    //             Contrase,
    //         };
    //         const response = await registrerRecuest(user);
    //     } catch (error) {
    //         // TIPOS DE ERRORES //
    //         if (error.response) {
    //             console.error("Respuesta del servidor:", error.response.data);
    //         } else if (error.request) {
    //             console.error("No se pudo conectar al servidor.");
    //         } else {
    //             console.error("Error desconocido:", error.message);
    //         }
    //     }
    // };

    return (
        //Crea el contenedor principal de la pagina
        <div className="container">
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
                                    {/* Crea el campo para el Nombre, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="text"
                                            value={Nombre_Usuario}
                                            onChange={(e) =>
                                                setNombre(e.target.value)
                                            }
                                            placeholder="Ingresa tu nombre de usuario"
                                            required
                                        />
                                    </div>

                                    {/* Crea el campo para el Nombre de usuario, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="text"
                                            value={Nombres}
                                            onChange={(e) =>
                                                setNomApell(e.target.value)
                                            }
                                            placeholder="Ingresa tu nombre y apellido"
                                            required
                                        />
                                    </div>

                                    {/* Crea el campo para el correo, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="email"
                                            value={Correo_Electronico}
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
                                            type="password"
                                            value={Contrase}
                                            onChange={(e) =>
                                                setContraseña(e.target.value)
                                            }
                                            placeholder="Ingresa tu contraseña"
                                            required
                                        />
                                    </div>

                                    {/* Crea el campo para los terminos y condiciones, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <label className="checkbox">
                                            <input type="checkbox" required />
                                            Autorizo el envíen de notificaciones
                                            a mi correo
                                        </label>
                                    </div>

                                    {/* Crea el boton para registro, aplicando estilos de texto blanco, que ocupe todo el ancho disponible y un color de fondo rosa*/}
                                    <button className="button has-text-white is-fullwidth has-background-danger">
                                        Registrarme
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
