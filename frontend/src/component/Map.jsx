// useRef se usa para acceder a los elementos del DOM directamente en React.
import React, { useRef } from "react";
// Componentes utilizados para un mapa y una capa de mosaicos
import { MapContainer, TileLayer } from "react-leaflet";
// Estilos de la libreria leaflet
import "leaflet/dist/leaflet.css";
import useSwr from "swr";


const fetcher = (...args) => fetch(...args).then(response => response.json());



function Map() {
    const Mapita = useRef(null); // Crea una referencia al mapa utilizando useRef
    const Latitud = -38.7372; // Define una constante para la latitud del centro del mapa
    const Longitud = -72.6006; // Define una constante para la longitud del centro del mapa.
    const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    const {data, error} = useSwr(url, fetcher );
    const crimes = data && !error ? data.slice(0,1) :  [];



    return (
        // Contenedor de mapa con el centro de coordenadas, un zoom y un tamaño
        <MapContainer center={[Latitud, Longitud]} zoom={10} ref={Mapita} style={{ height: "450px", width: "100%" }}>
            {/* Capa de mosaicos */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {crimes.map(crime => <Marker key={crime.id} position={[crime.location.Latitud, crime.location.Longitud]} />)}
        </MapContainer>
    );
};

export default Map