import React from 'react';
import { useState } from "react"
import 'bulma/css/bulma.min.css';


export function EditarPerfil({ setUser }){


          const [nombre, setNombre] = useState("")
          const [contraseña, setContraseña] = useState("")
          const [error, setError] = useState(false)
      
          
          const handleSubmit = (e) =>{
      
          e.preventDefault()
      
           if(nombre == "" || contraseña == ""){
      
              setError(true)
              return
           } 
           setError(false)
      
           setUser([nombre])
          } 
          
          return(
      
      <section>
          <h1 class="title">Editar Perfil</h1>
      
          <form 
          className="formulario"
          onSubmit={handleSubmit}
          >
      
               
               <input 
               type="text" 
               value={nombre}
               onChange={e => setNombre(e.target.value)}
               />
      
      
               <input 
               type="password" 
               value={contraseña}
               onChange={e => setContraseña(e.target.value)}
               />

<div class="field">
  <label class="label">Nombre</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div class="field">
  <label class="label">Nombre De Usuario</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma"/>
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">Permitido</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-success">Disponible</p>
</div>

<div class="field">
  <label class="label">Mas Herramientas</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Cambio De Imagen Perfil</option>
        <option>Otras Opciones</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Mensaje Para El Soporte</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox"/>
      De Acuerdo Con Los <a href="#">Terminos y Condiciones</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question"/>
      Si
    </label>
    <label class="radio">
      <input type="radio" name="question"/>
      No
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Guardar</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancelar</button>
  </div>
</div>
      
      
      
               <button class="button is-link is-rounded">Confirmar Cambios De Perfil</button>
      
          </form>
      
          {error && <p>Todos los campos son obligatorios.</p>}
      </section>
      
    )
}

export default EditarPerfil