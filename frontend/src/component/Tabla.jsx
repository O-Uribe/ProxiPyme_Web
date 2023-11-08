import React from "react";
import 'bulma/css/bulma.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component";


const tablaCampeones = [

    { visitas:1, producto:"Sushis rolls", reseña: "Rolls rellenos"  },
    { visitas:2, producto:"Cafe de grano", reseña: "Cafe colombiano aromatizado" },
    { visitas:3, producto:"Pescado ahumado", reseña: "Pescado sellado al vacio con aliño" },
    { visitas:4, producto:"Papas fritas", reseña: "Papas fritas con sal de mar" },
    { visitas:5, producto:"Bebidas variedades", reseña: "Coca cola, Sprite, Fanta" },
    { visitas:6, producto:"Muffis", reseña: "Queques de sabores" },
    { visitas:7, producto:"Empanadas", reseña: "Empanadas rellenas de pollo y queso" },
    { visitas:8, producto:"Poleron", reseña: "Poleron marca nike, talla M"},
    { visitas:9, producto:"Calcetines", reseña: "Calcetines de algodon, Talla 40" },
    { visitas:10, producto:"Guantes", reseña: "Guantes de cuero" },
    { visitas:11, producto:"Pantalon", reseña: "Pantalon jean skynny fit talla 42"},      







];


const columnas =  [

    {
        name: "Visitas",
        selector: "visitas",
        sortable: true

    },
   
    {
        name: "Producto",
        selector: "producto",
        sortable: true

    },

    {
        name: "Reseña",
        selector: "reseña",
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
