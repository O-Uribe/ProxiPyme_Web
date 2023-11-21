import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Panel from "./Panel";
import { useRedirectIfAuthenticated } from "../context/Autenticacion";

function NavbarPrincipal() {
    const Buscador = () => {
        const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
        const navigate = useNavigate();

        const categorias = ["Categoría 1", "Categoría 2", "Categoría 3"];

        const handleChange = (e) => {
            setCategoriaSeleccionada(e.target.value);
            localStorage.setItem("categoria", e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            navigate("/mapa");
        };

        return (
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="field has-addons">
                    <div className="control has-icons-left">
                        <input
                            className="input is-rounded has-text-danger"
                            placeholder="Buscar por categorias"
                            value={categoriaSeleccionada}
                            onChange={handleChange}
                            list="categorias"
                        />
                        <span className="icon is-left has-text-danger">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <datalist id="categorias">
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria} />
                    ))}
                </datalist>
            </form>
        );
    };

    return (
        <div className="container is-paddingless">
            {/* Se crea una barra de navegacion con el contenido centrado horizontalmente y dividido en 12 columnas*/}
            <nav className="navbar is-danger columns is-justify-content-center">
                <div className="navbar-brand">
                    {/* Cada div define un eklemnto de la barra de navegacion, con un margen izquierdo y uno derecho,
                    dentro se crea un enlace con color de texto especifico y un icono acorde a su funcion */}
                    <div className="navbar-item ml-6 mr-3">
                        <a className="has-text-danger-light" href="/home">
                            <i className="fas fa-home mr-1"></i>Inicio
                        </a>
                    </div>
                    <div className="navbar-item ml-3 mr-3">
                        <a className="has-text-danger-light" href="/favoritos">
                            <i className="fas fa-heart mr-1"></i>Favoritos
                        </a>
                    </div>
                    <div className="navbar-item ml-3 mr-3">
                        <a
                            className="has-text-danger-light"
                            href="/estadisticas">
                            <i className="fas fa-chart-pie mr-1"></i>
                            Estadísticas
                        </a>
                    </div>
                    <div className="navbar-item ml-3 mr-3">
                        <a className="has-text-danger-light" href="/mapa">
                            <i className="fas fa-map-marker-alt mr-1"></i>Mapa
                        </a>
                    </div>
                    <div className="navbar-item mr-6">
                        <Buscador />
                    </div>
                    {/* Se crea un menu desplegable que se mostrara cuando el usuario pase el cursor sobre este */}
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="has-text-danger-light navbar-link">
                            <i className="fas fa-bars mr-1"></i> Menu
                        </a>
                        {/* Identifica el menu desplegable que incluira los elementos que corresponde al Panel de Opciones */}
                        <div className="navbar-dropdown">
                            <Panel></Panel>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarPrincipal;
