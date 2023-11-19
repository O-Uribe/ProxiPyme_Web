import React from 'react';
import Navbar from './NavbarPrincipal';
import Footer from "./FooterPrincipal";
import { getTasks, getTask } from "../api/auth.js";

function PerfilUsuario() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function fetchTasks() {
            try {
                const id = localStorage.getItem("id");
                const response = await getTask(id);
                setTasks(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error al obtener tareas:", error);
            }
        }
        fetchTasks();
    }, []);

    return (
        <div className="container">
            <Navbar></Navbar>

            <section className="hero has-background-danger-light columns is-12"><br /><br />
                <div className="container columns is-12">
                    <div className="column is-5">
                        <h1 className="title has-text-black">
                            {tasks.nombreUsuario}
                        </h1>
                    </div>
                    <div className="column is-2">
                        <figure className="image is-128x128">
                            <img src="https://res.cloudinary.com/dsspspjhj/image/upload/v1700371252/venom_3840x2160_xtrafondos.com_dce1z2.jpg" alt="imagen" className="is-rounded" />
                        </figure>
                    </div>
                    <div className="column is-5">
                        <h1 className="title has-text-black">Datos</h1>
                        <aside className="is-medium menu">
                            <p className="menu-label has-text-black">Datos</p>
                            <p className="menu-label has-text-black">
                                <i className="fa fa-location dot"></i>
                            </p>
                        </aside>
                    </div>
                </div>

                <hr className="has-background-danger ml-6 mr-6" />

                <h1 className="title has-text-black">Cositas</h1>
            </section>

            <Footer></Footer>

        </div>
    )
}

export default PerfilUsuario