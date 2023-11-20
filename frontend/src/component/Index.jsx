import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FcShop, FcDecision } from "react-icons/fc";

function Index() {
    return (
        <div className="container">
            {/* Se importa el componente Navbar correspondiente a la barra de navegacion */}
            <Navbar></Navbar>

            {/* Se crea una seccion dividida en 12 columnas */}
            <section className="hero has-background-danger-light is-bold columns is-12">
                <div className="container">
                    <br />
                    <br />
                    {/* Se crean dos columnas para dividir el espacio en partes iguales */}
                    <div className="columns">
                        {/* La primera columna muestra informacion sobre la plataforma */}
                        <div className="column is-6">
                            <h1 className="title has-text-black">
                                {" "}
                                <FcShop style={{ fontSize: "80px" }} /> ¿Qué es
                                Proxipyme?
                            </h1>
                            {/* Se hace uso de aside con un tamaño mediano para mostrar contenido relacionado a la pagina */}
                            <aside className="is-medium menu">
                                <p className="menu-label has-text-black">
                                    Una plataforma que aborda problemáticas
                                    presentes para que las pymes puedan destacar
                                    en el mercado digital, proporcionando
                                    oportunidades de crecimiento y visibilidad.
                                </p>
                            </aside>
                        </div>

                        {/* Y la segunda el origen de esta */}
                        <div className="column is-6">
                            <h1 className="title has-text-black">
                                {" "}
                                <FcDecision style={{ fontSize: "80px" }} />{" "}
                                ¿Cómo nace Proxipyme?
                            </h1>
                            <aside className="is-medium menu">
                                <p className="menu-label has-text-black">
                                    Proxipyme surge tras un análisis sobre las
                                    limitaciones que tienen las pymes debido a
                                    su dependencia en las redes sociales, lo que
                                    limita su visibilidad y exposición al
                                    público objetivo.
                                </p>
                            </aside>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by1">
                            <img
                                src="https://cdn.discordapp.com/attachments/1137875950982406215/1163870239914733638/proxi.png?ex=655cd520&is=654a6020&hm=282e101ffa8e9b6f60264c53584cb68d627d949f6ce4ea0bf430de9b06ad49a5&"
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                </div>

                {/* Se crea una linea divisora para separar el contenido */}
                <hr className="has-background-danger" />

                {/* Indica el titulo del nuevo contenido */}
                <h1 className="title has-text-black">
                    ¡Únete a nosotros!
                    <br></br>
                    Como Cliente o Pyme.
                </h1>
                {/* Se crea un nuevo contenedor que igualmente se divide en dos partes iguales */}
                <div className="column is-12 p-4">
                    <div className="columns">
                        <div className="box column is-6">
                            <h1 className="mb-4 mt-4">Cliente</h1>
                            {/* La primera columna muestra un boton que redirecciona al inicio de sesion */}
                            <div className="mb-4 is-full">
                                <a
                                    className="button is-fullwidth has-background-danger has-text-white"
                                    href="/login">
                                    Iniciar Sesión
                                </a>
                            </div>
                            {/* Y la segunda un boton que redirecciona al registro de un nuevo usuario */}
                            <div className="mb-4 is-full">
                                <a
                                    className="button is-fullwidth has-background-danger has-text-white"
                                    href="/register">
                                    Registrarme
                                </a>
                            </div>
                        </div>
                        <div className="box column is-6">
                            <h1 className="mb-4 mt-4">Pyme</h1>
                            {/* La primera columna muestra un boton que redirecciona al inicio de sesion */}
                            <div className="mb-4 is-full">
                                <a
                                    className="button is-fullwidth has-background-danger has-text-white"
                                    href="/loginPyme">
                                    Iniciar Sesión
                                </a>
                            </div>
                            {/* Y la segunda un boton que redirecciona al registro de un nuevo usuario */}
                            <div className="mb-4 is-full">
                                <a
                                    className="button is-fullwidth has-background-danger has-text-white"
                                    href="/registerPyme">
                                    Registrarme
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Se importa el componente Footer correspondiente al pie de pagina */}
            <Footer></Footer>
        </div>
    );
}

export default Index;
