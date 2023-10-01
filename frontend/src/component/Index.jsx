import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Index() {
    return (
        <div className="container">
            {/* Se importa el componente Navbar correspondiente a la barra de navegacion */}
            <Navbar></Navbar>

            {/* Se crea una seccion dividida en 12 columnas */}
            <section className="hero has-background-danger-light is-bold columns is-12">
                <div className="container"><br /><br />
                    {/* Se crean dos columnas para dividir el espacio en partes iguales */}
                    <div className="columns">
                        {/* La primera columna muestra informacion sobre la plataforma */}
                        <div className="column is-6">
                            <h1 className="title has-text-black">¿Que es Proxipyme?</h1>
                            {/* Se hace uso de aside con un tamaño mediano para mostrar contenido relacionado a la pagina */}
                            <aside className="is-medium menu">
                                <p className="menu-label has-text-black">Una plataforma que aborda problematicas presentes para que las pymes puedan
                                    destacar en el mercado digital, proporcionando oportunidades de crecimiento y visibilidad </p>
                            </aside>
                        </div>

                        {/* Y la segunda el origen de esta */}
                        <div className="column is-6">
                            <h1 className="title has-text-black">¿Como nace Proxipyme?</h1>
                            <aside className="is-medium menu">
                                <p className="menu-label has-text-black">Proxipyme surge tras un analisis sobre las limitaciones que tienen las pymes debido
                                    a su dependencia en las redes sociales, lo que limita su visibilidad y exposicion al publico objetivo</p>
                            </aside>
                        </div>
                    </div>
                </div>

                {/* Se crea una linea divisora para separar el contenido */}
                <hr className="has-background-danger" />

                {/* Indica el titulo del nuevo contenido */}
                <h1 className="title has-text-black">Unete a Nosotros</h1>
                {/* Se crea un nuevo contenedor que igualmente se divide en dos partes iguales */}
                <div className="container column is-12">
                    <div className="columns">
                        {/* La primera columna muestra un boton que redirecciona al inicio de sesion */}
                        <div className="column is-6">
                            <a className="button is-fullwidth has-background-danger has-text-white" href="/login">Iniciar Sesion</a>
                        </div>
                        {/* Y la segunda un boton que redirecciona al registro de un nuevo usuario */}
                        <div className="column is-6">
                            <a className="button is-fullwidth has-background-danger has-text-white" href="/register">Registrarme</a>
                        </div>
                    </div><br />
                </div>
            </section>

            {/* Se importa el componente Footer correspondiente al pie de pagina */}
            <Footer></Footer>
        </div>
    )
}

export default Index