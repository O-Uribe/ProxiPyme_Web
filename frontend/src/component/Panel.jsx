import React from 'react';
import { EditarPerfil } from "./EditarPerfil";

function Panel() {
    return (
        <div className="container">
            {/* Se crea una seccion para de color rosa */}
            <section className="hero has-background-danger">
                {/* Se crea un div para manejar mejor los elementos; is-centered se utiliza para centrar horizontalmente
                los elementos y is-flex-direction-column para que los elementos se coloquen uno abajo del otro */}
                <div className="columns is-centered is-flex-direction-column">
                    {/* Se crean div para poder centrar y agregar margenes a cada elemento dentro del navbar */}
                    {/* Cada "a" crea un enlace a una ruta especifica con su respectivo icono */}
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light" href='/perfil'><i className="far fa-user"></i> Mi Perfil</a>
                    </div>
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light" href='/editarperfil'><i className="far fa-edit"></i> <EditarPerfil/> </a>
                    </div>
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light" href='/reportarP'><i className="far fa-flag"></i> Reportar Problema</a>
                    </div>
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light" href='/ayuda'><i className="far fa-question-circle"></i> Ayuda</a>
                    </div>
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light" href='/'><i className="fas fa-arrow-right"></i> Cerrar Sesión</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Panel