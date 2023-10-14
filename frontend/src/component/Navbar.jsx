import React from 'react';

function Navbar() {
    return (
        <div className="container">
            {/* Se crea una barra de navegacion con el contenido centrado horizontalmente y dividido en 12 columnas*/}
            <nav className="navbar is-danger is-justify-content-center columns is-12">
                {/* Se crea un contenedor de columnas */}
                <div className="columns">
                    {/* La primeras 2 columnas se utilizan para el logo de la pagina */}
                    <div className="navbar-brand column is-2"><br />
                        <img src="https://n9.cl/2hgbf" width="300" alt="Logo" />
                    </div>

                    {/* Las siguientes 8 para mostrar un titulo de bienvenida */}
                    <div className="column is-8"> <br />
                        <h1 className="title has-text-black">¡Bienvenido de Proxipyme!</h1><br />
                    </div>

                    {/* Las siguientes son usadas para mostrar un redirecionamiento*/}
                    <div class="navbar-brand">
                        {/* Se crea un incio que redirecciona a la misma pagina */}
                        <a class="navbar-item brand-text" href="/">Inicio</a>
                        {/* Se crea una lista despegable */}
                        <div className="navbar-item has-dropdown is-hoverable">
                            {/* Indica el contenido de la lista despegable */}
                            <a className="navbar-link">Redes Sociales</a>
                            {/* Crea el menu despegable */}
                            <div className="navbar-dropdown">
                                {/* Los contenidos de la lista desplegable redireccionan a las distintas redes sociales */}
                                <a className="navbar-item" href="https://www.twitter.com/"><i className="fab fa-twitter mr-2"></i> Twitter</a>
                                <a className="navbar-item" href="https://www.instagram.com/"><i className="fab fa-instagram mr-2"></i> Instagram</a>
                                <a className="navbar-item" href="https://www.facebook.com/"><i className="fab fa-facebook mr-2"></i> Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar