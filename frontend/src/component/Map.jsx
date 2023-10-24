// useRef se usa para acceder a los elementos del DOM directamente en React.
import React, { useRef } from "react";
// Componentes utilizados para un mapa y una capa de mosaicos
import { MapContainer, TileLayer } from "react-leaflet";
// Estilos de la libreria leaflet
import "leaflet/dist/leaflet.css";

function Map() {
    const Mapita = useRef(null); // Crea una referencia al mapa utilizando useRef
    const Latitud = -38.7372; // Define una constante para la latitud del centro del mapa
    const Longitud = -72.6006; // Define una constante para la longitud del centro del mapa.

    return (
        // Contenedor de mapa con el centro de coordenadas, un zoom y un tamaño
        <MapContainer center={[Latitud, Longitud]} zoom={10} ref={Mapita} style={{ height: "450px", width: "100%" }}>
            {/* Capa de mosaicos */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default Map