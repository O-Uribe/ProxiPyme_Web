import React from "react";
import NavPrin from "./NavbarPrincipal";
import Footer from "./FooterPrincipal";

const pymes = [
    {
        nombrePyme: "Pyme 1",
        categoria: "Categoría 1",
        url_img:
            "https://previews.123rf.com/images/ginasanders/ginasanders1701/ginasanders170100114/69725983-en-una-peque%C3%B1a-ciudad-italiana-una-tienda-de-frutas-y-verduras-muchos-tipos-diferentes-de-tomate.jpg",
    },
    {
        nombrePyme: "Pyme 2",
        categoria: "Categoría 2",
        url_img:
            "https://previews.123rf.com/images/ginasanders/ginasanders1701/ginasanders170100114/69725983-en-una-peque%C3%B1a-ciudad-italiana-una-tienda-de-frutas-y-verduras-muchos-tipos-diferentes-de-tomate.jpg",
    },
    {
        nombrePyme: "Pyme 3",
        categoria: "Categoría 3",
        url_img:
            "https://previews.123rf.com/images/ginasanders/ginasanders1701/ginasanders170100114/69725983-en-una-peque%C3%B1a-ciudad-italiana-una-tienda-de-frutas-y-verduras-muchos-tipos-diferentes-de-tomate.jpg",
    },
    {
        nombrePyme: "Pyme 4",
        categoria: "Categoría 3",
        url_img:
            "https://previews.123rf.com/images/ginasanders/ginasanders1701/ginasanders170100114/69725983-en-una-peque%C3%B1a-ciudad-italiana-una-tienda-de-frutas-y-verduras-muchos-tipos-diferentes-de-tomate.jpg",
    },
    {
        nombrePyme: "Pyme 5",
        categoria: "Categoría 3",
        url_img:
            "https://previews.123rf.com/images/ginasanders/ginasanders1701/ginasanders170100114/69725983-en-una-peque%C3%B1a-ciudad-italiana-una-tienda-de-frutas-y-verduras-muchos-tipos-diferentes-de-tomate.jpg",
    },
    {
        nombrePyme: "Pyme 6",
        categoria: "Categoría 3",
        url_img:
            "https://previews.123rf.com/images/ginasanders/ginasanders1701/ginasanders170100114/69725983-en-una-peque%C3%B1a-ciudad-italiana-una-tienda-de-frutas-y-verduras-muchos-tipos-diferentes-de-tomate.jpg",
    }
    // Agrega más objetos según sea necesario
];

const DivDesplazable = ({ children }) => {
    return (
        <div className="columns is-multiline">
            {children}
        </div>
    );
};

function HomeIndex() {
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
                    <h3 className="title">Pymes recomendadas para ti</h3><br />
                </div>
                {/* Agrega la sección de imágenes */}
                <div className="container">
                    <DivDesplazable>
                        {pymes.map((pyme) => (
                            <div className="column is-6">
                                <div className="box" style={{ boxShadow: '10px 10px 5px pink', margin: '10px' }}>
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
                                            <h1 className="">{pyme.nombrePyme}</h1>
                                        </div>
                                    </div>
                                </div>
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
