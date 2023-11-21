import React, { useState, useEffect } from "react";
import Navbar from "./NavbarPrincipal";
import Footer from "./FooterPrincipal";
import { profilReq } from "../api/auth.js";

function PerfilPyme() {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        async function fetchProfile() {
            try {
                const id = localStorage.getItem("id");
                const response = await profilReq(id);
                setProfile(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error("Error al obtener datos perfil:", error);
            }
        }
        fetchProfile();
    }, []);

    return (
        <div className="container">
            <Navbar></Navbar>

            <section className="hero has-background-danger-light columns is-12">
                <br /> <br />
                <div className="container columns is-12">
                    {/* La primera muestra el nombre de la pyme */}
                    <div className="column is-5">
                        <h1 className="title has-text-black" style={{ boxShadow: '15px 15px 10px pink' }}>
                            {profile.Nombre_Usuario}
                            N {/* Borrar la N */}
                        </h1><br />
                    </div>
                    {/* La segunda columna muestra la imagen de la Pyme */}
                    <div className="column is-2">
                        <figure className="image is-128x128 ml-5">
                            <img
                                className="is-rounded"
                                src="https://www.grafitos.com.co/wp-content/uploads/2021/07/brillantina-celetes-tornasol-900x900.jpg"
                                alt="Imagen"
                            />
                        </figure>
                    </div>

                    {/* Y la tercera columna muestra la descripcion sobre esta */}
                    <div className="column is-5">
                        <h1 className="title has-text-black" style={{ boxShadow: '15px 15px 10px pink' }}>Datos Usuario</h1>
                        <aside className="is-medium menu">
                            <p className="menu-label has-text-black has-text-left ml-4">
                                Correo: {profile.Correo_Electronico} <br />
                                <i class="fa fa-location-dot"></i>Ubicacion: <br />
                                mas datos
                            </p>
                        </aside>
                    </div>
                </div>

                {/* Se crea una linea divisora para separar el contenido */}
                <hr className="has-text-danger ml-6 mr-6" />

                {/* Indica el titulo del nuevo contenido */}
                <h1 className="title has-text-black">Productos de la Pyme</h1>
                <h1 className="title has-text-black">Favoritos</h1>
                {/* Se crea un nuevo contenedor que mostrara los productos de la pyme */}
                <div className="container column is-12">
                    <div className="columns">{/* Productos */}</div>
                    <br />
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default PerfilPyme;
