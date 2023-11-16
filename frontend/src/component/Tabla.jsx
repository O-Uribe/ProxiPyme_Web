import React from "react";
import 'bulma/css/bulma.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component";


const tablaCampeones = [

    { visitas:1, productos:"Sushis rolls", reseñas: "Rolls rellenos"  },
    { visitas:2, productos:"Cafe de grano", reseñas: "Cafe colombiano aromatizado" },
    { visitas:3, productos:"Pescado ahumado", reseñas: "Pescado sellado al vacio con aliño" },
    { visitas:4, productos:"Papas fritas", reseñas: "Papas fritas con sal de mar" },
    { visitas:5, productos:"Bebidas variedades", reseñas: "Coca cola, Sprite, Fanta" },
    { visitas:6, productos:"Muffis", reseñas: "Queques de sabores" },
    { visitas:7, productos:"Empanadas", reseñas: "Empanadas rellenas de pollo y queso" },
    { visitas:8, productos:"Poleron", reseñas: "Poleron marca nike, talla M"},
    { visitas:9, productos:"Calcetines", reseñas: "Calcetines de algodon, Talla 40" },
    { visitas:10, productos:"Guantes", reseñas: "Guantes de cuero" },
    { visitas:11, productos:"Pantalon", reseñas: "Pantalon jean skynny fit talla 42"},      







];


const columnas =  [

    {
        name: "Visitas",
        selector: "visitas",
        sortable: true

    },
   
    {
        name: "Productos",
        selector: "productos",
        sortable: true

    },

    {
        name: "Reseñas",
        selector: "reseñas",
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
