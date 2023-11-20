import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

// Centro por defecto en el campus norte de la Universidad Católica de Temuco
const CentroPorDefecto = {
    lat: -38.703332,
    lng: -72.549376,
};

// Array de tiendas
const tiendas = [
    {
        nombrePyme: "Tienda 1",
        categoria: "Categoría 1",
        lat: -38.772351932646764,
        lng: -72.75266073984217,
    },
    {
        nombrePyme: "Tienda 2",
        categoria: "Categoría 2",
        lat: -38.771814,
        lng: -72.753707,
    },
    // Más tiendas...
];

// ICONO TIENDA PROVI
const tiendaIcon = new Icon({
    iconUrl:
        "https://www.google.com/images/icons/material/system_gm/2x/store_black_24dp.png", // URL de la imagen del icono
    iconSize: [31, 41], // Tamaño del icono
    iconAnchor: [12, 41], // Punto del icono que se alineará con la ubicación del marcador
    popupAnchor: [0, -41], // Punto de anclaje del popup
});

const MapView = () => {
    // Define el estado del mapa
    const [Centro, setCentro] = useState(CentroPorDefecto);
    const [Cargando, setCargando] = useState(true);

    // BUSQUEDA
    const categoriaSeleccionada = localStorage.getItem("categoria");
    // const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    const categorias = [...new Set(tiendas.map((tienda) => tienda.categoria))];
    const categoriasFiltradas = categorias.filter((categoria) =>
        categoria.toLowerCase().includes(categoriaSeleccionada.toLowerCase())
    );

    // const tiendasFiltradas = tiendas.filter(
    //     (tienda) =>
    //         categoriaSeleccionada === "" ||
    //         tienda.categoria === categoriaSeleccionada
    // );
    const tiendasFiltradas = tiendas.filter(
        (tienda) => tienda.categoria === categoriaSeleccionada
    );

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
                console.error(
                    "No se puede acceder a la ubicación del usuario:",
                    error
                );
                setCargando(false);
            }
        };
        UbiUsuario();
    }, []);

    if (Cargando) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <div className="navbar-item ml-3 mr-5 is-justify-content-center">
                {/* has-icons-left asegura que el icono quede a la izquierda del elemento */}
                <div className="control has-icons-left">
                    {/* Se crea un campo de entrada con bordes redondeados y un texto indicando su funcionalidad cuando este vacio */}
                    <input
                        className="input is-rounded has-text-danger"
                        placeholder="Buscar por categorias"
                    />
                    {/* Se establece el icono dentro del campo */}
                    <span className="icon is-left has-text-danger">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
            </div>
            <br />
            <datalist id="categorias">
                {categoriasFiltradas.map((categoria) => (
                    <option key={categoria} value={categoria} />
                ))}
            </datalist>
            <h1 className="mb-4">{categoriaSeleccionada}</h1>
            <MapContainer
                center={Centro}
                zoom={15}
                style={{ height: "100vh", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {/* Añade marcadores en la ubicacion actual y en el campus norte */}
                <Marker position={Centro}>
                    <Popup> Tu ubicación actual. </Popup>
                </Marker>

                <Marker position={CentroPorDefecto}>
                    <Popup> UCT - Campus Norte. </Popup>
                </Marker>

                {/* Añade un marcador para cada tienda */}

                {tiendasFiltradas.map((tienda) => (
                    <Marker
                        key={tienda.nombrePyme}
                        position={tienda}
                        icon={tiendaIcon}>
                        <Popup>
                            <h2>{tienda.nombrePyme}</h2>
                            <p>Categoría: {tienda.categoria}</p>
                            <img
                                src="https://previews.123rf.com/images/romanklevets/romanklevets1704/romanklevets170400164/78065465-tienda-de-verduras-las-verduras-y-frutas-frescas-y-org%C3%A1nicas-se-venden-en-el-mostrador-de-la-tienda.jpg"
                                alt="Imagen del local"
                            />
                            <p>
                                <a href="https://www.pagina-web-ejemplo.com">
                                    Visita nuestra página web
                                </a>
                            </p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapView;
