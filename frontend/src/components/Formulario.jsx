import "./Formulario.css"
import { useState } from "react"
import { FcShop } from "react-icons/fc";
import { createChart } from 'lightweight-charts';
export function Formulario({ setUser }){

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
    <h1 class="title">Login</h1>

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



         <button class="button is-link is-rounded">Iniciar Sesion</button>

    </form>

    {error && <p>Todos los campos son obligatorios.</p>}
</section>



)



}