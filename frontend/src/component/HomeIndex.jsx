import React from 'react'
import Panel from './Panel';
import NavPrin from './NavbarPrincipal';

function HomeIndex() {
    return (
        <div className="container">
            <NavPrin></NavPrin>
            <section className="hero columns is-12 is-pulled-left">
                <Panel></Panel>
            </section>
        </div>
    )
}

export default HomeIndex