import React from 'react';
import Popup from 'reactjs-popup';

export default ({ AbrirRep, setAbrirRep }) => (
    <Popup open={AbrirRep} closeOnDocumentClick onClose={() => setAbrirRep(false)} modal nested contentStyle={{ width: '20cm' }}>
        {close => (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <button className="button is-danger" onClick={close}> Cerrar </button>
                        <h1 className="title has-text-black has-text-centered">Reportar Problema</h1>
                    </div>

                    <div className="container" style={{ boxShadow: '10px 10px 5px pink', width: '15cm' }}>
                        <div className="container">
                            <label className="label">Tipo de problema</label>
                            <div className="select">
                                <select className="input">
                                    <option>Reclamo</option>
                                    <option>Recomendación</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                        </div><br />
                        <div className="container">
                            <label className="label">Mensaje</label>
                            <textarea className="textarea" placeholder="Escribe tu mensaje aquí"></textarea>
                        </div><br />
                        <div className="container">
                            <button className="button has-background-danger has-text-white">Enviar</button>
                        </div><br />
                    </div>
                    <br />
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={close}></button>
            </div>
        )}
    </Popup>
);
