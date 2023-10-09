import React from 'react'

function Panel() {
    return (
        <div className="container">
            <section className="hero has-background-danger is-fullheight">
                <hr className="has-background-danger-light" />
                <div className="columns is-centered is-flex-direction-column">
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light mx-3" href='/perfil'><i className="far fa-user"></i> Mi Perfil</a>
                    </div>
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light mx-3" href='/editarP'><i className="far fa-edit"></i> Editar Perfil</a>
                    </div>
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light mx-3" href='/compP'><i className="far fa-share-square"></i> Compartir Perfil</a>
                    </div>
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light mx-3" href='/'><i className="fas fa-exchange-alt"></i> Cambiar Cuenta</a>
                    </div>
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light mx-4" href='/reportarP'><i className="far fa-flag"></i> Reportar Problema</a>
                    </div>
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light mx-3" href='/ayuda'><i className="far fa-question-circle"></i> Ayuda</a>
                    </div>
                    <div className="column has-text-centered my-4">
                        <a className="has-text-danger-light mx-3" href='/'><i className="fas fa-arrow-right"></i> Cerrar Sesión</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Panel