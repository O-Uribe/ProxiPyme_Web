import React from "react";
import 'bulma/css/bulma.min.css';
import { Home } from "./Home";
import { Formulario } from "./Formulario";
import { useState } from "react";
import './App.css';
export const App = () => {
   
  const [user, setUser] = useState([])
  
  
  return (
       <div>
        <h1 class="title">Bienvenidos a Proxi Pyme</h1>
        <nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-home" aria-hidden="true"></i>
        </span>
        <span>Bulma</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        <span>Documentation</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
        </span>
        <span>Components</span>
      </a>
    </li>
    <li class="is-active">
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-thumbs-up" aria-hidden="true"></i>
        </span>
        <span>Breadcrumb</span>
      </a>
    </li>
  </ul>
</nav>
        <h2 class="title">Formulario De Registro</h2>
        
        {
          !user.length > 0
          ? <Formulario setUser={setUser}    />
          : <Home user={user} setUser={setUser} />
        }


         
       </div>
          
          






    )




}