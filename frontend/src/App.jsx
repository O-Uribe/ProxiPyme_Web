import "bulma/css/bulma.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./component/Register";
import RegisterPyme from "./pages/RegisterPagesPyme";
import Login from "./component/Login";
import LoginPyme from "./pages/LoginPagesPyme";
import Index from "./component/Index";
import HomeIndex from "./component/HomeIndex";
import Favoritos from "./component/Favoritos";
import Estadisticas from "./component/Estadisticas";
import Mapa from "./component/Mapa";
import PPyme from "./component/PerfilPyme";
import EditarPerfil from "./component/EditarPerfil";
import PerfilUsuario from "./component/PerfilUsuario";
import { AuthProvider } from "./context/AuthContext";


import ProtectedRouter from "./ProtectedRouter";

function App() {
    return (
        /*Router: Indica un enrutador para gestion de rutas y navegacion*/
        /*Routes: Define las rutas utilizando Route*/
        /*path: Especifica la URL de la ruta */
        /*element: Especifica el componente al cual dirigirse */
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/registerPyme" element={<RegisterPyme />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/loginPyme" element={<LoginPyme />} />

                    <Route element={<ProtectedRouter />}>
                        <Route path="/home" element={<HomeIndex />} />
                        <Route path="/estadisticas" element={<Estadisticas />}/>
                        <Route path="/mapa" element={<Mapa />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                        <Route path="/perfil" element={<PPyme />} />
                        <Route path="/perfilusuario" element={<PerfilUsuario />} />
                        <Route path="/editarperfil" element={<EditarPerfil />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
