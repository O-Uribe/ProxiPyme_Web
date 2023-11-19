import React from 'react' ; 
import Navbar from './NavbarPrincipal';
import Footer from './FooterPrincipal';

function PerfilUsuario() {
  return (
    <div className="container">
        <Navbar></Navbar>

        <section className="hero has-background-danger-light columns is-12"><br /><br />
            <div className="container columns is-12">
                <div className="column is-5">
                    <h1 className="title has-text-black">NombreUsuario</h1>
                </div>
                <div className="column is-2">
                    <figure className="image is-128x128">
                        <img src="https://www.grafitos.com.co/wp-content/uploads/2021/07/brillantina-celetes-tornasol-900x900.jpg" alt="imagen" className="is-rounded" />
                    </figure>
                </div>
                <div className="column is-5">
                    <h1 className="title has-text-black">Datos</h1>
                    <aside className="is-medium menu">
                        <p className="menu-label has-text-black">Datos</p>
                    </aside>
                </div>
            </div>
        </section>
    </div>
  )
}

export default PerfilUsuario