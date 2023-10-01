import React from 'react'

function Footer() {
    return (
        <div className="container">
            {/* Se crea el footer con un fondo rosa y un texto mas claro, ademas se divide en 12 columnas */}
            <footer className="footer has-background-danger has-text-danger-light columns is-12">
                {/* Se crea una columna que ocupa 3 del total y el texto se alinea a la derecha */}
                <div className="column is-3 has-text-rigth">
                    <b className="has-text-black">Creadores:</b><br /> Bryam Beltran,<br /> Jose Jimenes,<br />
                    Javier Monsalves,<br /> Jeferson Placensia,<br /> Cristobal Sandoval <br /> y Pamela Vielma.
                </div>

                {/* Se crea una columna que ocupara las restantes y se centra el texto horizontalmente */}
                <div className="column has-text-center"><br />
                    <h1 className="title has-text-black">Proxipyme te esta esperando</h1><br />
                    <h1 className="title has-text-black">¿Que esperas para unirte?</h1>
                </div>

                {/* Se crea una columna que ocupa 3 del total y el texto se alinea a la derecha */}
                <div className="column is-3 has-text-rigth">
                    <b className="has-text-black">Creadores:</b><br /> Bryam Beltran,<br /> Jose Jimenes,<br />
                    Javier Monsalves,<br /> Jeferson Placensia,<br /> Cristobal Sandoval <br /> y Pamela Vielma.
                </div>
            </footer>
        </div>
    )
}

export default Footer