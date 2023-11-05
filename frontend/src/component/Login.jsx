import React from "react";

function Login() {
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
                                Inicia sesión
                            </h3>
                            {/* Crea una linea rosa que separa el titulo del formulario */}
                            <hr className="login-hr has-background-danger" />

                            {/* Crea una caja que contiene al formulario */}
                            <div className="box">
                                <form>
                                    {/* Crea el campo para el Nombre de usuario, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Ingresa tu nombre de usuario"
                                            required
                                        />
                                    </div>

                                    {/* Crea el campo para la contraseña, e indica que es un campo obligatorio */}
                                    <div className="field">
                                        <input
                                            className="input"
                                            type="password"
                                            placeholder="Ingresa tu contraseña"
                                            required
                                        />
                                    </div>

                                    {/* Crea el boton para registro, aplicando estilos de texto blanco, que ocupe todo el ancho disponible y un color de fondo rosa*/}
                                    <button className="button has-text-white is-fullwidth has-background-danger">
                                        Login
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

export default Login;
