import React from 'react';
import NavPrin from './NavbarPrincipal';
import Footer from './FooterPrincipal';


function Mapa() {
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
                    <h3 className="title">Mapa con pymes</h3>
                </div>

                {/* Se importa el componente mapa */}
                

            </section>
            {/* Se importa el componente Footer correspondiente al pie de pagina */}
            <Footer></Footer>
        </div>
    )
}

export default Mapa