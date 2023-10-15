import React from "react";
import 'bulma/css/bulma.min.css';
import "./Tabla.css";
import { useState } from "react";
import { FcShop } from "react-icons/fc";
import { createChart } from 'lightweight-charts';
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component";


const tablaCampeones = [

    { id:1, año:"2018", campeon: "Naruto"  },
    { id:2, año:"2018", campeon: "Sasuke" },
    { id:3, año:"2018", campeon: "Kakashi" },
    { id:4, año:"2018", campeon: "Jiraya" },
    { id:5, año:"2018", campeon: "Sakura" },
    { id:6, año:"2018", campeon: "Pain" },
    { id:7, año:"2018", campeon: "Hinata" },
    { id:8, año:"2018", campeon: "Ino"},
    { id:9, año:"2018", campeon: "Kiba" },
    { id:10, año:"2018", campeon: "Madara" },
    { id:11, año:"2018", campeon: "Obito"},      







];


const columnas =  [

    {
        name: "ID",
        selector: "id",
        sortable: true

    },
   
    {
        name: "Año",
        selector: "año",
        sortable: true

    },

    {
        name: "Campeon",
        selector: "campeon",
        sortable: true
        
    },
]   



export const Tabla = () => {


return (

<div className="table-responsive">
   
    <DataTable
    columns={columnas}
    data={tablaCampeones}
    title="Dashboard"
    pagination
    fixedHeader
    fixedHeaderScrollHeight="600px"
    />
</div>




)



}
