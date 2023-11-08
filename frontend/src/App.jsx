import 'bulma/css/bulma.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Register from './component/Register';
import Index from './component/Index';
import HomeIndex from './component/HomeIndex';
import Favoritos from './component/Favoritos';
import Estadisticas from './component/Estadisticas';
import Mapa from './component/Mapa';
import PPyme from './component/PerfilPyme';


function App() {
  return (
    /*Router: Indica un enrutador para gestion de rutas y navegacion*/
    /*Routes: Define las rutas utilizando Route*/
    /*path: Especifica la URL de la ruta */
    /*element: Especifica el componente al cual dirigirse */
    
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<HomeIndex/>}/>
        <Route path="/estadisticas" element={<Estadisticas/>}/>
        <Route path='/mapa' element={<Mapa/>}/>
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/perfil" element={<PPyme/>} />
        <Route path="/editarperfil" element={<EditarPerfil/>} />
      </Routes>
    </Router>
  )
}

export default App
