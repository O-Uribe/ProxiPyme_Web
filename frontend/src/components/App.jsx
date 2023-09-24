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
        <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
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