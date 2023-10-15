import React from "react";
import { FcShop } from "react-icons/fc";
import "bulma/css/bulma.min.css";
import { Home } from "./component/Home";
import { Formulario } from "./component/Login";
import { useState } from "react";
import { Perfil } from "./component/Perfil";
import "./style/App.css";

export const App = () => {
    const [user, setUser] = useState([]);

    return (
        <>
            <div className="container">
                <div className="notification is-black">
                    <strong>
                        <h1 className="title">Bienvenidos a Proxi Pyme</h1>
                    </strong>
                    <FcShop style={{ fontSize: "150px" }} />
                </div>
            </div>
            <div>
                <nav
                    className="breadcrumb is-centered"
                    aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <a href="#">Empresas</a>
                        </li>
                        <li>
                            <a href="#">Servicios</a>
                        </li>
                        <li>
                            <a href="./Perfil">
                                <Perfil />
                            </a>
                        </li>
                        <li className="is-active">
                            <a href="#" aria-current="page">
                                Proximamente
                            </a>
                        </li>
                    </ul>
                </nav>

                <h2 className="title">Formulario De Registro</h2>

                {!user.length > 0 ? (
                    <Formulario setUser={setUser} />
                ) : (
                    <Home user={user} setUser={setUser} />
                )}
            </div>
        </>
    );
};
