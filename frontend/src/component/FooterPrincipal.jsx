import React from "react";

function FooterPrincipal() {
    return (
        <div className="container">
            {/* Se crea el footer con un fondo rosa y un texto mas claro, ademas se divide en 12 columnas */}
            <footer className="footer has-background-danger has-text-danger-light columns is-12">
                {/* Se crea un div que ocupa 6 columas del total con un margen derecho */}
                <div className="column is-6 mr-4">
                    {/* Se crea un aside con un tamaño mediano y el texto alineado a la izquierda */}
                    <aside className="is-medium menu has-text-left">
                        {/* Se indica un texto de color negro y un parrafo con texto blanco */}
                        <h3 className="title has-text-black">
                            <b>Proxipyme</b>
                        </h3>
                        {/* Se indica un texto de color negro y un parrafo con texto blanco */}
                        <p className="menu-label has-text-white">
                            Proxipyme nace tras un analisis sobre las
                            limitaciones de las pequeñas y medianas empresas,
                            esta es una plataforma que busca que las pymes
                            puedan destacar en el mercado digital.
                        </p>
                    </aside>
                </div>
                {/* Se crea un div que ocupa 3 columas del total */}
                <div className="column is-3">
                    {/* Se crea un aside con un tamaño mediano y el texto alineado a la izquierda */}
                    <aside className="is-medium menu has-text-left">
                        {/* Se indica un texto de color negro y un parrafo con texto blanco */}
                        <h3 className="title has-text-black">
                            <b>Creadores</b>
                        </h3>
                        <p className="menu-label has-text-white">
                            José Jimenez,
                            <br />
                            Javier Monsálvez,
                            <br /> Cristóbal Sandoval, <br /> Pamela Vielma.
                        </p>
                    </aside>
                </div>
                {/* Se crea un div que ocupa 3 columas del total */}
                <div className="column is-3">
                    {/* Se crea un aside con un tamaño mediano y el texto alineado a la izquierda */}
                    <aside className="is-medium menu has-text-left">
                        {/* Se indica un texto de color negro y un parrafo con texto blanco */}
                        <h3 className="title has-text-black">
                            <b>Redes Sociales</b>
                        </h3>
                        {/* Se indica un texto de color negro y un parrafo con texto blanco */}
                        <p className="menu-label has-text-white">
                            {/* Cada "a" redirecciona hacia alguna red social indicada con su respectivo icono */}
                            <a
                                className="has-text-white"
                                href="https://www.twitter.com/">
                                <i className="fab fa-twitter mr-2"></i> Twitter
                            </a>
                            <br />
                            <a
                                className="has-text-white"
                                href="https://www.instagram.com/">
                                <i className="fab fa-instagram mr-2"></i>{" "}
                                Instagram
                            </a>
                            <br />
                            <a
                                className="has-text-white"
                                href="https://www.facebook.com/">
                                <i className="fab fa-facebook mr-2"></i>{" "}
                                Facebook
                            </a>
                            <br />
                            <a
                                className="has-text-white"
                                href="https://www.github.com/">
                                <i className="fab fa-github mr-2"></i> Github
                            </a>
                        </p>
                    </aside>
                </div>
            </footer>
        </div>
    );
}

export default FooterPrincipal;
