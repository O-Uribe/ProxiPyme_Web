import React from 'react'
import Panel from './Panel';
import NavPrin from './NavbarPrincipal';
import Footer from './FooterPrincipal';

function HomeIndex() {
    return (
        <div className="container">
            <NavPrin></NavPrin>

            {/* Arreglar tipo index */}
            <div className="container">
                <section>
                    <section className="hero columns is-pulled-left">
                        <Panel></Panel>
                    </section>

                    <div className="container">
                        <section className="ml-6 hero has-background-danger-light is-fullheight">
                            <div className="has-text-black">
                                <br />
                                <h1>¡Proxipyme!</h1>
                            </div>
                            <hr className="has-background-danger ml-6 mr-6" />

                            <div className="container has-text-black">
                                <h1>Pymes recomendadas</h1>
                            </div>
                        </section>
                    </div>
                </section>
            </div>

            <Footer></Footer>
        </div>
    )
}


export default HomeIndex