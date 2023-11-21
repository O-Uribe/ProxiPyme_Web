import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { profilReqPyme } from "../api/auth.js";

import Navbar from "./NavbarPrincipal";
import Footer from "./FooterPrincipal";

function PymeProfile() {
    const { id } = useParams();
    const [pyme, setPyme] = useState(null);

    useEffect(() => {
        async function fetchPyme() {
            try {
                const response = await profilReqPyme(id);
                setPyme(response.data);
            } catch (error) {
                console.error("Error al obtener los datos de la pyme:", error);
            }
        }
        fetchPyme();
    }, []);

    if (!pyme) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container">
            <Navbar></Navbar>
            <section className="hero has-background-danger-light columns is-12">
                <br />
                <br />
                <div className="container columns is-12">
                    {/* La primera muestra el nombre de la pyme */}
                    <div className="column is-5">
                        <h1 className="title has-text-black">
                            {pyme.nombrePyme}
                        </h1>
                    </div>
                    {/* La segunda columna muestra la imagen de la Pyme */}
                    <div className="column is-2">
                        <figure className="image is-128x128">
                            <img
                                className="is-rounded"
                                src="https://www.grafitos.com.co/wp-content/uploads/2021/07/brillantina-celetes-tornasol-900x900.jpg"
                                alt="Imagen"
                            />
                        </figure>
                    </div>

                    {/* Y la tercera columna muestra la descripcion sobre esta */}
                    <div className="column is-5">
                        <h1 className="title has-text-black">Datos Pyme</h1>
                        <aside className="is-medium menu">
                            <p className="menu-label has-text-black">
                                Descripcion: {pyme.descripcionPyme}
                                Direccion: {pyme.direccionPyme}
                                Encargado: {pyme.encargadoPyme}
                                Categoria: {pyme.categoria}
                            </p>
                            <p className="menu-label has-text-black">
                                <i className="fa fa-location-dot"></i>
                            </p>
                        </aside>
                    </div>
                </div>

                {/* Se crea un nuevo contenedor que mostrara los productos de la pyme */}
                <div className="container column is-12">
                    <div className="">
                        {/* Productos */}
                        <div className="is-desktop columns">
                            <div className="column">
                                <img
                                    src="https://previews.123rf.com/images/thodoristibilis/thodoristibilis1509/thodoristibilis150900001/45069787-retro-sencilla-met%C3%A1lica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.jpg"
                                    alt="Producto"
                                />
                                <p>First column</p>
                            </div>
                            <div className="column">
                                <img
                                    src="https://previews.123rf.com/images/thodoristibilis/thodoristibilis1509/thodoristibilis150900001/45069787-retro-sencilla-met%C3%A1lica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.jpg"
                                    alt="Producto"
                                />
                                <p>Second column</p>
                            </div>
                            <div className="column">
                                <img
                                    src="https://previews.123rf.com/images/thodoristibilis/thodoristibilis1509/thodoristibilis150900001/45069787-retro-sencilla-met%C3%A1lica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.jpg"
                                    alt="Producto"
                                />
                                <p>Third column</p>
                            </div>
                            <div className="column">
                                <img
                                    src="https://previews.123rf.com/images/thodoristibilis/thodoristibilis1509/thodoristibilis150900001/45069787-retro-sencilla-met%C3%A1lica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.jpg"
                                    alt="Producto"
                                />
                                <p>Fourth column</p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default PymeProfile;
