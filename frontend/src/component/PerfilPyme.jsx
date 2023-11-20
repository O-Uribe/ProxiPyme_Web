import React, { useState, useEffect } from "react";
import { profilReqPyme } from "../api/auth.js";
import Navbar from "./NavbarPrincipal";
import Footer from "./FooterPrincipal";

function PerfilPyme() {
    const [tipoPerfil, setTipoPerfil] = useState(
        localStorage.getItem("tipoPerfil")
    );

    // DATOS PYME
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        async function fetchProfile() {
            try {
                const id = localStorage.getItem("id");
                const response = await profilReqPyme(id);
                setProfile(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error("Error al obtener datos perfil:", error);
            }
        }
        fetchProfile();
    }, []);

    // AGREGAR PRODUCTOS
    const [showModal, setShowModal] = useState(false);
    const [productName, setProductName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí es donde enviarías los datos a tu backend
        console.log({ productName, imageUrl });
        setShowModal(false);

        setProductName("");
        setImageUrl("");
    };

    return (
        <div className="container">
            <Navbar></Navbar>

            <section className="hero has-background-danger-light columns is-12">
                <br />
                <br />
                <div className="container columns is-12">
                    {/* La primera muestra el nombre de la pyme */}
                    <div className="column is-5">
                        <h1 className="title has-text-black">
                            {profile.nombrePyme}
                        </h1>
                    </div>
                    {/* La segunda columna muestra la imagen de la Pyme */}
                    <div className="column is-2">
                        <figure className="image is-128x128">
                            <img
                                className="is-rounded"
                                src="https://www.grafitos.com.co/wp-content/uploads/2021/07/brillantina-celetes-tornasol-900x900.jpg"
                                alt="Imagen"
                            />
                        </figure>
                    </div>

                    {/* Y la tercera columna muestra la descripcion sobre esta */}
                    <div className="column is-5">
                        <h1 className="title has-text-black">Datos Pyme</h1>
                        <aside className="is-medium menu">
                            <p className="menu-label has-text-black">
                                Descripcion: {profile.descripcionPyme}
                                Direccion: {profile.direccionPyme}
                                Encargado: {profile.encargadoPyme}
                                Categoria: {profile.categoria}
                            </p>
                            <p className="menu-label has-text-black">
                                <i className="fa fa-location-dot"></i>
                            </p>
                        </aside>
                    </div>
                </div>

                <div className="">
                    {/* Se crea una linea divisora para separar el contenido */}
                    <hr className="has-background-danger ml-6 mr-6" />
                    <button
                        className="button is-primary"
                        onClick={() => setShowModal(true)}>
                        Agregar producto
                    </button>

                    <div
                        id="myModal"
                        className={showModal ? "modal is-active" : "modal"}>
                        <div className="modal-background"></div>
                        <div
                            className="modal-content"
                            style={{ width: "600px", height: "400px" }}>
                            <button
                                className="delete mt-4 ml-4"
                                onClick={() => setShowModal(false)}></button>
                            <form onSubmit={handleSubmit}>
                                {/*  */}
                                <div className="field m-4">
                                    <label className="label">
                                        Nombre del producto
                                    </label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Nombre del producto"
                                            value={productName}
                                            onChange={(e) =>
                                                setProductName(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                </div>
                                {/*  */}
                                <div className="field m-4">
                                    <label className="label">
                                        URL de la imagen
                                    </label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="URL de la imagen"
                                            value={imageUrl}
                                            onChange={(e) =>
                                                setImageUrl(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                {/*  */}
                                <div className="field">
                                    <div className="control">
                                        <button
                                            className="button is-success"
                                            type="submit">
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Se crea un nuevo contenedor que mostrara los productos de la pyme */}
                <div className="container column is-12">
                    <div className="">
                        {/* Productos */}
                        <div className="is-desktop columns">
                            <div className="column">
                                <img
                                    src="https://previews.123rf.com/images/thodoristibilis/thodoristibilis1509/thodoristibilis150900001/45069787-retro-sencilla-met%C3%A1lica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.jpg"
                                    alt="Producto"
                                />
                                <p>First column</p>
                            </div>
                            <div className="column">
                                <img
                                    src="https://previews.123rf.com/images/thodoristibilis/thodoristibilis1509/thodoristibilis150900001/45069787-retro-sencilla-met%C3%A1lica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.jpg"
                                    alt="Producto"
                                />
                                <p>Second column</p>
                            </div>
                            <div className="column">
                                <img
                                    src="https://previews.123rf.com/images/thodoristibilis/thodoristibilis1509/thodoristibilis150900001/45069787-retro-sencilla-met%C3%A1lica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.jpg"
                                    alt="Producto"
                                />
                                <p>Third column</p>
                            </div>
                            <div className="column">
                                <img
                                    src="https://previews.123rf.com/images/thodoristibilis/thodoristibilis1509/thodoristibilis150900001/45069787-retro-sencilla-met%C3%A1lica-vector-blanco-y-negro-estilizado-cesta-de-la-vendimia-completa-con-productos.jpg"
                                    alt="Producto"
                                />
                                <p>Fourth column</p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default PerfilPyme;
