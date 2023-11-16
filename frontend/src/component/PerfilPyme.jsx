import React, { useState, useEffect } from "react";
import Navbar from "./NavbarPrincipal";
import Footer from "./FooterPrincipal";
import { getTasks } from "../api/auth.js";

function PerfilPyme() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await getTasks();
                setTasks(response.data[0]);
                console.log(response.data[0]);
            } catch (error) {
                console.error("Error al obtener tareas:", error);
            }
        }
        fetchTasks();
    }, []);

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
                            {tasks.empresa}
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
                                {" "}
                                {tasks.description}
                            </p>
                            <p className="menu-label has-text-black">
                                <i class="fa fa-location-dot"></i>
                            </p>
                        </aside>
                    </div>
                </div>

                {/* Se crea una linea divisora para separar el contenido */}
                <hr className="has-background-danger ml-6 mr-6" />

                {/* Indica el titulo del nuevo contenido */}
                <h1 className="title has-text-black">Productos de la Pyme</h1>
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
