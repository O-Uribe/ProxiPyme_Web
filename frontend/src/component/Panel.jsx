import React, { useState } from "react";
import Ayuda from "./Ayuda";
import RProblema from "./RProblema";

function Panel() {
    const [Abierto, setAbierto] = useState(false);
    const [AbrirRep, setAbrirRep] = useState(false);

    return (
        <div className="container" style={{ boxShadow: "15px 15px 3px pink" }}>
            {/* Se crea un div para manejar mejor los elementos; is-centered se utiliza para centrar horizontalmente
                los elementos y is-flex-direction-column para que los elementos se coloquen uno abajo del otro */}
            <div className="columns is-flex-direction-column is-align-items-start">
                {/* Se crean div para poder centrar y agregar margenes a cada elemento dentro del navbar */}
                {/* Cada "a" crea un enlace a una ruta especifica con su respectivo icono */}
                <div className="column has-text-centered my-4">
                    <a
                        className="has-text-danger"
                        href={
                            localStorage.getItem("tipoPerfil") === "pyme"
                                ? "/perfilPyme"
                                : "/perfil"
                        }>
                        <i className="far fa-user"></i> Mi Perfil
                    </a>
                </div>

                <div className="column has-text-centered my-4">
                    <a className="has-text-danger" href="/editarperfil">
                        <i className="far fa-edit"></i> Editar Perfil
                    </a>
                </div>
                <div className="column has-text-centered my-4">
                    <a
                        className="has-text-danger"
                        onClick={() => setAbrirRep(true)}>
                        <i className="far fa-flag"></i>
                        <RProblema
                            AbrirRep={AbrirRep}
                            setAbrirRep={setAbrirRep}></RProblema>
                        Reportar Problema
                    </a>
                </div>
                <div className="column has-text-centered my-4">
                    <a
                        className="has-text-danger"
                        onClick={() => setAbierto(true)}>
                        <i className="far fa-question-circle"></i>
                        <Ayuda
                            Abierto={Abierto}
                            setAbierto={setAbierto}></Ayuda>{" "}
                        Ayuda
                    </a>
                </div>
                <div className="column has-text-centered my-4">
                    <a
                        className="has-text-danger"
                        href="/"
                        onClick={() => {
                            localStorage.clear();
                            // logica necesitaria para cuando el usuario cierra sesion
                        }}>
                        <i className="fas fa-arrow-right"></i> Cerrar Sesión
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Panel;
