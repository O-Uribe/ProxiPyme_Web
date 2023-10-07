import 'bulma/css/bulma.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Register from './component/Register';
import Index from './component/Index';
import Panel from './component/Panel';

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
        <Route path='/panel' element={<Panel/>}/>
      </Routes>
    </Router>
  )
}

export default App
