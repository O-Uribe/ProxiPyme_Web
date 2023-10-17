import React from "react";
import 'bulma/css/bulma.min.css';
import "./Mapa.css";
import { useState } from "react";
import { FcShop } from "react-icons/fc";
import { createChart } from 'lightweight-charts';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'


export const Mapa = () => {


return (



   <Map center={[52.6376, -1.135171]} zoom={12}>
       
       <TileLayer
       
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
       contributors'
       
       
       
       
       
       
       
       
       />

    </Map>








);



}