import 'bulma/css/bulma.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Register from './component/Register';

function App() {
  return (
    /*Router: Indica un enrutador para gestion de rutas y navegacion*/
    /*Routes: Define las rutas utilizando Route*/
    /*path: Especifica la URL de la ruta */
    /*element: Especifica el componente al cual dirigirse */
    <Router>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
