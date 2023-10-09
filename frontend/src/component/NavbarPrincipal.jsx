import React from 'react';

function NavbarPrincipal() {
    return (
        <div className="container">
            <nav className="navbar is-danger columns">
                <div className="columns">
                    <div className="navbar-brand">
                        <div className="navbar-item ml-6 mr-3">
                            <a className="has-text-danger-light" href="/"><i className="fas fa-home"></i> Inicio</a>
                        </div>
                        <div className="navbar-item ml-3 mr-3">
                            <a className="has-text-danger-light" href=""><i className="fas fa-heart"></i> Favoritos</a>
                        </div>
                        <div className="navbar-item ml-3 mr-3">
                            <a className="has-text-danger-light" href=""><i className="fas fa-chart-pie"></i> Estadística</a>
                        </div>
                        <div className="navbar-item ml-3 mr-3">
                            <a className="has-text-danger-light" href=""><i className="fas fa-map-marker-alt"></i> Mapa</a>
                        </div>
                        <div className="navbar-item ml-3 mr-5">
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
