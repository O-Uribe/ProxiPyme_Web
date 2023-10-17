import React from "react";
import { FcShop } from "react-icons/fc";
import 'bulma/css/bulma.min.css';
import "./Mapa.css";
import {MapContainer, Marker, Popup, TileLayer} from 'https://cdn.esm.sh/react-leaflet';
import {Icon} from "leaflet";
import { Home } from "./Home";
import { Formulario } from "./Formulario";
import { useState } from "react";
import { Perfil } from "./Perfil";
import { Dashboard } from "./Dashboard";
import { Tabla } from "./Tabla";
import { Mapa } from "./Mapa";
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
           <h1><Dashboard/></h1>
       </div>

      <div>
        
        <h1><Tabla/></h1>
      
      </div>

      <div>

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  </MapContainer>

      </div>


      </div></>
          
       
       





    )




}