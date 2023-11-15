import React from 'react';
import { FcCollaboration, FcGoogle, FcPhoneAndroid, FcStatistics } from "react-icons/fc";
function Footer() {
    return (
        <div className="container">
            {/* Se crea el footer con un fondo rosa y un texto mas claro, ademas se divide en 12 columnas */}
            <footer className="footer has-background-danger has-text-danger-light columns is-12">
                {/* Se crea una columna que ocupa 3 del total y el texto se alinea a la derecha */}
                <div className="column is-3 has-text-rigth">
                    <b className="has-text-black">Creadores:</b><br /> José Jimenez,<br />
                    Javier Monsálvez,<br /> Cristóbal Sandoval, <br /> Pamela Vielma.
                </div>

                {/* Se crea una columna que ocupara las restantes y se centra el texto horizontalmente */}
                <div className="column has-text-center">
                    <h1 className="title has-text-black">Proxipyme te está esperando</h1><br />
                    <FcCollaboration style={{fontSize: "100px"}}/>
                    <h1 className="title has-text-black">¿Qué esperas para unirte?</h1>
                    <FcGoogle style={{fontSize: "50px"}}/><FcPhoneAndroid style={{fontSize: "50px"}}/><FcStatistics style={{fontSize: "50px"}}/>
                </div>

                {/* Se crea una columna que ocupa 3 del total y el texto se alinea a la derecha */}
                <div className="column is-3 has-text-rigth">
                    <b className="has-text-black">Creadores:</b><br /> José Jimenez,<br />
                    Javier Monsálvez,<br /> Cristóbal Sandoval, <br /> Pamela Vielma.
                </div>
            </footer>
        </div>
    )
}

export default Footer