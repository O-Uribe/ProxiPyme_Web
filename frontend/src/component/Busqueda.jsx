import React, {useState}from "react";
import "./Estilo.css";

function Busqueda() {

    // Variables de tiendas/categorias para el uso de filtro 
    const tiendas = [
      { nombre: "BMXSTREET", categoria: "Bicicletas" },
      { nombre: "FASHIONNOVA", categoria: "Ropa" },
      { nombre: "PYGAMES", categoria: "Videjuegos" },
      { nombre: "COMPUTON", categoria: "Computacion" },
      { nombre: "ELECTRON", categoria: "Electronico" },
      { nombre: "PINOCHO", categoria: "Muebles" },
    ];

  const [filtro, setFiltro] = useState(''); // Inicializa el estado del filtro como una cadena vacía
  const [texto, setTexto] = useState(''); 

  const tiendasFiltradas = tiendas.filter((tienda) => {
    return tienda.categoria.toLowerCase().includes(filtro.toLowerCase());
  });
  
  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

 return (
    <div className="Centrado">

      <input className=" Estilo"
        type="text"
        placeholder="Filtrar..."
        value={filtro}
        onChange={handleFiltroChange}
        />
        <ul>
        {tiendasFiltradas.map((tienda, index) => (
          <li  className="Listoca" key={index}>{tienda.nombre} - {tienda.categoria}</li>
        ))}
      </ul>
    </div>
    

  );

  
  }



export default Busqueda; 