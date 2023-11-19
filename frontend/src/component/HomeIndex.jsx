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
        nombrePyme: "Pyme 3",
        categoria: "Categoría 3",
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
        nombrePyme: "Pyme 3",
        categoria: "Categoría 3",
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
        nombrePyme: "Pyme 3",
        categoria: "Categoría 3",
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
        nombrePyme: "Pyme 3",
        categoria: "Categoría 3",
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
        nombrePyme: "Pyme 3",
        categoria: "Categoría 3",
        url_img:
            "https://previews.123rf.com/images/ginasanders/ginasanders1701/ginasanders170100114/69725983-en-una-peque%C3%B1a-ciudad-italiana-una-tienda-de-frutas-y-verduras-muchos-tipos-diferentes-de-tomate.jpg",
    },
    // Agrega más objetos según sea necesario
];

function HomeIndex() {
    return (
        <div className="container">
            {/* Se importa el componente Navbar correspondiente a la barra de navegacion */}
            <NavPrin></NavPrin>

            {/* Se crea una seccion con un fondo rosa claro que ocupara la altura y el ancho total */}
            <section className="hero has-background-danger-light is-fullheight columns is-12 is-fullwidth">
                {/* Indica el nombre de la plataforma de color negro  */}
                <div className="has-text-black">
                    <br />
                    <h2 className="title">¡Proxipyme!</h2>
                </div>

                {/* Se crea una linea horizontal de color rosa fuerte con un margen derecho e izquierdo */}
                <hr className="has-background-danger ml-6 mr-6" />

                {/* Indica el titulo que indica el contenido presente en la pagina */}
                <div className="container has-text-black">
                    <h3 className="title">Pymes recomendadas para ti</h3>
                </div>
                {/* Agrega la sección de imágenes */}
                <div className="container">
                    <div
                        style={{
                            // width: "900px",
                            // height: "300px",
                            // borderRadius: "20%",
                            overflow: "auto",
                            backgroundColor: "#ffffff",
                            display: "flex",
                            flexDirection: "row",
                            whiteSpace: "nowrap",
                        }}>
                        {pymes.map((pyme) => (
                            <div
                                style={{
                                    width: "200px",
                                    // height: "200px",
                                    margin: "10px",
                                }}>
                                <img
                                    src={pyme.url_img}
                                    alt={pyme.nombrePyme}
                                    style={{
                                        // width: "200px",
                                        height: "100px",
                                        borderRadius: "4%",
                                    }}
                                />
                                <p>{pyme.nombrePyme}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Se importa el componente Footer correspondiente al pie de pagina */}
            <Footer></Footer>
        </div>
    );
}

export default HomeIndex;
