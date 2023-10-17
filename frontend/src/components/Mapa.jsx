import React from "react";
import 'bulma/css/bulma.min.css';
import "./Mapa.css";
import { useState } from "react";
import { FcShop } from "react-icons/fc";
import { createChart } from 'lightweight-charts';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";



export const Mapa = () => {


return (


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
   








);



}