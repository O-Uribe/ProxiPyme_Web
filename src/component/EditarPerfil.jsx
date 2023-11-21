import React, { useState } from "react";
import Navbar from './NavbarPrincipal';
import Footer from './FooterPrincipal';
import {
    FcBusinessman,
    FcBusinesswoman,
    FcServices,
    FcCustomerSupport,
} from "react-icons/fc";

export function EditarPerfil({ setUser }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre == "" || contraseña == "") {
            setError(true);
            return;
        }
        setError(false);

        setUser([nombre]);
    };

    return (
        <div className="container">
            <Navbar></Navbar>
            <br />
            <section className="hero has-background-danger-light is-fullheight columns is-12 is-fullwidth"><br />
                <h1 class="title">
                    Editar Perfil
                    <FcBusinessman style={{ fontSize: "100px" }} />
                    <FcBusinesswoman style={{ fontSize: "100px" }} />
                </h1>

                <hr className="has-text-danger ml-6 mr-6" />

                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <form className="formulario m-auto" onSubmit={handleSubmit}>
                                <div className="field">
                                    <label className="label">Cambio De Nombre De Usuario.</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            className="input is-danger"
                                            type="text"
                                            placeholder=""
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Cambio De Contraseña.</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            className="input is-danger"
                                            type="text"
                                            placeholder=""
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Cambio De Correo Electronico.</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            className="input is-danger"
                                            type="email"
                                            placeholder=""
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">
                                        Mas Herramientas.
                                        <FcServices style={{ fontSize: "30px" }} />
                                    </label>
                                    <div className="control ">
                                        <div className="select is-danger">
                                            <select>
                                                <option>Cambio De Imagen Perfil</option>
                                                <option>Otras Opciones</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">
                                        Mensaje Para El Soporte.
                                        <FcCustomerSupport style={{ fontSize: "30px" }} />
                                    </label>
                                    <div className="control">
                                        <textarea
                                            className="textarea is-danger"
                                            placeholder="Escribe aqui tu mensaje">
                                        </textarea>
                                    </div>
                                </div><br />

                                <div className="field is-grouped is-justify-content-space-between">
                                    <div className="control">
                                        <button className="button is-danger" style={{ boxShadow: '15px 15px 10px pink' }}>Guardar</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-danger is-light ml-5" style={{ boxShadow: '15px 15px 10px pink' }}>
                                            Cancelar
                                        </button>
                                    </div>
                                </div><br />

                                <button className="button is-danger is-rounded" style={{ boxShadow: '15px 15px 10px pink' }}>
                                    Confirmar Cambios De Perfil
                                </button>
                            </form>
                        </div>
                    </div>
                </div><br />
                {error && <p>Todos los campos son obligatorios.</p>}

                <br />
            </section>

            <Footer></Footer>
        </div>
    );
}

export default EditarPerfil;
