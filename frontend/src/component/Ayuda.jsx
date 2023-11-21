import React from 'react';
import Popup from 'reactjs-popup';

export default ({ Abierto, setAbierto }) => (
    <Popup open={Abierto} closeOnDocumentClick onClose={() => setAbierto(false)} modal nested>
        {close => (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box is-flex is-justify-content-center is-align-items-center">
                        <button className="button is-danger mr-6" onClick={close}> Cerrar </button>
                        <h1 className="title has-text-black">Preguntas Frecuentes</h1>
                    </div>

                    <div className="container columns is-12">
                        <div className="column is-6 mr-6" style={{ boxShadow: '10px 10px 5px pink' }}>
                            <h1 className="title">¿Para que sirve esta pagina? </h1>
                            <p>• Esta pagina busca ayudar a las pequeñas y medianas empresas (Pymes) a llegar a mas usuarios para vender sus productos, y a los usuarios a conocer las pymes que estan cerca de el</p>
                        </div>
                        <div className="column is-6 mr-6" style={{ boxShadow: '10px 10px 5px pink' }}>
                            <h1 className="title">¿Como inicio una Pyme? </h1>
                            <p>• Si tienes un emprendimiento y deseas que aparezca en esta pagina debes volver a la pagina inicial y registrate como Pyme</p>
                        </div>
                    </div>
                    <br />
                    <div className="container columns is-12">
                        <div className="column is-6 mr-6" style={{ boxShadow: '10px 10px 5px pink' }} >
                            <h1 className="title">¿Para que sirve esta pagina? </h1>
                            <p>• Esta pagina busca ayudar a las pequeñas y medianas empresas (Pymes) a llegar a mas usuarios para vender sus productos, y a los usuarios a conocer las pymes que estan cerca de el</p>
                        </div>
                        <div className="column is-6 mr-6" style={{ boxShadow: '10px 10px 5px pink' }}>
                            <h1 className="title">¿Como inicio una Pyme? </h1>
                            <p>• Si tienes un emprendimiento y deseas que aparezca en esta pagina debes volver a la pagina inicial y registrate como Pyme</p>
                        </div>
                    </div>
                    <br />
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={close}></button>
            </div>
        )}
    </Popup>
);
