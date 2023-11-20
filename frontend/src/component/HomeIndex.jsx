import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavPrin from "./NavbarPrincipal";
import Footer from "./FooterPrincipal";
import { pymesReq } from "../api/auth.js";

// const pymes = [
//     {
//         _id: "6558479568c0fc2c8e2da3c9",
//         tipoUsuario: "pyme",
//         nombrePyme: "MiPyme22",
//         direccionPyme: "123 Calle Principal",
//         encargadoPyme: "Juan Pérez",
//         categoria: "Tecnología",
//         descripcionPyme: "Una breve descripción de la pyme.",
//         url_img:
//             "https://i.pinimg.com/1200x/28/f1/a9/28f1a972e13e4281b5273891ead173eb.jpg",
//         Contrase:
//             "$2a$10$8zr7giQ83r69Xlutg/IMeOdw6Ac6S6.VJF4Un8mu7ZNIlPataZz5.",
//         createdAt: "2023-11-18T05:11:49.306Z",
//         updatedAt: "2023-11-18T05:11:49.306Z",
//         __v: 0,
//     },
// ];

const DivDesplazable = ({ children }) => {
    return <div className="columns is-multiline">{children}</div>;
};

function HomeIndex() {
    // DATOS PYME
    const [pymes, setProfile] = useState([]);
    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await pymesReq();
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
            {/* Se importa el componente Navbar correspondiente a la barra de navegacion */}
            <NavPrin></NavPrin>

            {/* Se crea una seccion con un fondo rosa claro que ocupara la altura y el ancho total */}
            <section className="hero has-background-danger-light is-fullheight columns is-12 is-fullwidth">
                {/* Indica el nombre de la plataforma de color negro */}
                <div className="has-text-black">
                    <br />
                    <h2 className="title">¡Proxipyme!</h2>
                </div>

                {/* Se crea una linea horizontal de color rosa fuerte con un margen derecho e izquierdo */}
                <hr className="has-background-danger ml-6 mr-6" />

                {/* Indica el titulo que indica el contenido presente en la pagina */}
                <div className="container has-text-black">
                    <h3 className="title">Pymes recomendadas para ti</h3>
                    <br />
                </div>
                {/* Agrega la sección de imágenes */}
                <div className="container">
                    <DivDesplazable>
                        {pymes.map((pyme, index) => (
                            <div key={index} className="column is-6">
                                <Link to={`/pymes/${pyme.id}`}>
                                    <div
                                        className="box"
                                        style={{
                                            boxShadow: "10px 10px 5px pink",
                                            margin: "10px",
                                        }}>
                                        <div className="container is-flex">
                                            <div>
                                                <img
                                                    src={pyme.url_img}
                                                    alt={pyme.nombrePyme}
                                                    style={{
                                                        height: "100px",
                                                        borderRadius: "4%",
                                                    }}
                                                />
                                            </div>
                                            <div className="ml-6">
                                                <h1 className="">
                                                    {pyme.nombrePyme}
                                                </h1>
                                                <p>{pyme.descripcionPyme}</p>
                                                <p>{pyme.id}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </DivDesplazable>
                </div>
            </section>

            {/* Se importa el componente Footer correspondiente al pie de pagina */}
            <Footer></Footer>
        </div>
    );
}

export default HomeIndex;
