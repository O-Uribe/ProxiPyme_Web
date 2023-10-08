import React from 'react';

function NavbarPrincipal() {    
    return (
        <div className="container">
            <nav className="navbar is-danger is-justify-content-center">
                <div className="columns is-12">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/"><i className="fas fa-home"></i> Inicio</a>
                        <a className="navbar-item" href=""><i className="fas fa-heart"></i> Favoritos</a>
                        <a className="navbar-item" href=""><i className="fas fa-chart-pie"></i> Estadística</a>
                        <a className="navbar-item" href=""><i className="fas fa-map-marker-alt"></i> Mapa</a>
                        <div className="navbar-item">
                            <div className="control has-icons-left">
                                <input className="input is-rounded" placeholder="Buscar" />
                                <span className="icon is-left">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarPrincipal;
