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
        // Envia los datos a backend
        console.log({ productName, imageUrl });
        setShowModal(false);
        setProductName("");
        setImageUrl("");
    };

    return (
        <div className="container">
            <Navbar></Navbar>

            <section className="hero has-background-danger-light columns is-12">
                <br /> <br />
                <div className="container columns is-12">
                    {/* La primera muestra el nombre de la pyme */}
                    <div className="column is-5">
                        <h1 className="title has-text-black" style={{ boxShadow: '15px 15px 10px pink' }}>
                            {profile.nombrePyme}
                        </h1><br />

                        <button
                            className="button is-danger"
                            onClick={() => setShowModal(true)}>
                            Agregar producto
                        </button> <br /><br />

                        <div
                            id="myModal"
                            className={showModal ? "modal is-active" : "modal"}>
                            <div className="modal-background"></div>
                            <div
                                className="modal-content has-background-danger-light"
                                style={{ width: "600px", height: "400px", boxShadow: '25px 25px 15px pink' }}>
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
                                                className="button is-success has-background-danger"
                                                type="submit">
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <button className="button is-danger">
                            Eliminar producto
                        </button>

                    </div>
                    {/* La segunda columna muestra la imagen de la Pyme */}
                    <div className="column is-2">
                        <figure className="image is-128x128 ml-4"><br /><br />
                            <img
                                className="is-rounded"
                                src="https://www.grafitos.com.co/wp-content/uploads/2021/07/brillantina-celetes-tornasol-900x900.jpg"
                                alt="Imagen"
                            />
                        </figure>
                    </div>

                    {/* Y la tercera columna muestra la descripcion sobre esta */}
                    <div className="column is-5">
                        <h1 className="title has-text-black" style={{ boxShadow: '15px 15px 10px pink' }}>Datos Pyme</h1><br />
                        <aside className="is-medium menu">
                            <p className="menu-label has-text-black has-text-left ml-4">
                                Descripcion: {profile.descripcionPyme} <br />
                                Direccion: {profile.direccionPyme} <br />
                                Encargado: {profile.encargadoPyme} <br />
                                Categoria: {profile.categoria} <br />
                                <i className="fas fa-map-marker-alt"></i>Ubicacion: 
                            </p>
                        </aside>
                    </div>
                </div>

                <hr className="has-text-danger ml-6 mr-6" />

                {/* Se crea un nuevo contenedor que mostrara los productos de la pyme */}
                <div className="container column is-12">
                    {/* Productos */}
                    <div className="columns mx-4">
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
                    <br />
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default PerfilPyme;
