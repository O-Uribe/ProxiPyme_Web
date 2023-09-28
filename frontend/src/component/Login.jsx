import React from 'react'

function Login() {
    return (
        <div className="container">
            <section className="hero">
                <div className="hero-body box has-background-danger-light">
                    <div className="container has-text-centered">
                        <div className="column is-10 is-offset-1">
                            <h3 className="title has-text-black">¿Deseas registrarte en "Proxipyme"?</h3>
                            <hr className="login-hr" />
                            <div className="box">
                                <form>
                                    <div className="field">
                                        <input className="input" type="text" placeholder="Ingresa tu nombre apellido" required />
                                    </div>

                                    <div className="field">
                                        <input className="input" type="text" placeholder="Ingresa tu nombre de usuario" required />
                                    </div>

                                    <div className="field">
                                        <input className="input" type="email" placeholder="Ingresa tu correo electronico" required />
                                    </div>

                                    <div className="field">
                                        <input className="input" type="password" placeholder="Ingresa tu contraseña" required/>
                                    </div>

                                    <div className="field">
                                        <label className="checkbox">
                                            <input type="checkbox" required/> Acepto los <a className="has-text-danger" href="#"> Terminos y Condiciones</a>
                                        </label>
                                    </div>
                                    <button className="button is-info is-fullwidth has-background-danger">Registrarme</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login