import React from "react";
import { FcShop } from "react-icons/fc";
import 'bulma/css/bulma.min.css';
import { Home } from "./Home";
import { Formulario } from "./Formulario";
import { useState } from "react";
import { Perfil } from "./Perfil";
import { Dashboard } from "./Dashboard";
import './App.css';
export const App = () => {
   
  const [user, setUser] = useState([])
  
  
  return (

    
    <><div class="container">
      <div class="notification is-black">
        <strong><h1 class="title">Bienvenidos a Proxi Pyme</h1></strong>
        <FcShop style={{fontSize: "150px"}}/>
      </div>
    </div><div>

    



        <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li><a href="#">Empresas</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="./Perfil"><Perfil/></a></li>
            <li class="is-active"><a href="#" aria-current="page">Proximamente</a></li>
          </ul>
        </nav>
        
        <h2 class="title">Formulario De Registro</h2>

        {!user.length > 0
          ? <Formulario setUser={setUser} />
          : <Home user={user} setUser={setUser} />}

       <div>
           <h1>Dashboard<Dashboard/></h1>
       </div>

      </div></>
          
       
       





    )




}