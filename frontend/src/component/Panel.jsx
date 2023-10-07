import React from 'react'

function Panel() {
    return (
        <div className='container'>
            <section className="hero has-background-danger is-fullheight">
                <a className="has-text-danger-light ml-2 mr-2" href='/perfil'><i className="far fa-user"></i> Mi Perfil</a>
                <a className="has-text-danger-light ml-2 mr-2" href='/editarP'><i className="far fa-edit"></i> Editar Perfil</a>
                <a className="has-text-danger-light ml-2 mr-2" href='/compP'><i className="far fa-share-square"></i> Compartir Perfil</a>
                <a className="has-text-danger-light ml-2 mr-2" href='/'><i className="fas fa-exchange-alt"></i> Cambiar Cuenta</a>
                <a className="has-text-danger-light ml-2 mr-2" href='/reportarP'><i className="far fa-flag"></i> Reportar Problema</a>
                <a className="has-text-danger-light ml-2 mr-2" href='/ayuda'><i className="far fa-question-circle"></i> Ayuda</a>
                <a className="has-text-danger-light ml-2 mr-2" href='/'><i className="fas fa-arrow-right"></i> Cerrar Sesión</a>
            </section>
        </div>
    )
}

export default Panel