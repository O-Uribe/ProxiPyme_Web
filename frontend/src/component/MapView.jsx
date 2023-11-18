import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Centro por defecto en el campus norte de la Universidad Católica de Temuco
const CentroPorDefecto = {
    lat: -38.703332,
    lng: -72.549376,
};

const MapView = () => {
    // Define el estado del mapa
    const [Centro, setCentro] = useState(CentroPorDefecto);
    const [Cargando, setCargando] = useState(true);

    useEffect(() => {
        const UbiUsuario = async () => {
            try {
                // Obtiene la ubicacion actual del usuario
                const Posicion = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                // Extrae las coordenadas
                const { latitude, longitude } = Posicion.coords;
                // Actualiza estado del mapa
                setCentro({ lat: latitude, lng: longitude });
                setCargando(false);
            } catch (error) {
                // Mensaje en caso de error
                console.error('No se puede acceder a la ubicación del usuario:', error);
                setCargando(false);
            }
        };

        UbiUsuario();
    }, []);

    if (Cargando) {
        return <div>Cargando...</div>;
    }

    return (
        <MapContainer center={Centro} zoom={15} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Añade marcadores en la ubicacion actual y en el campus norte */}
            <Marker position={Centro}>
                <Popup> Tu ubicación actual. </Popup>
            </Marker>

            <Marker position={CentroPorDefecto}>
                <Popup> Campus Norte - UCT </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapView;

