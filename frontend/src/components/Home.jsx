import { FcShop } from "react-icons/fc";
import { createChart } from 'lightweight-charts';
export function Home({user, setUser}) {


       const handLeLogout = ()=>{

          setUser([])

       }

       return(

       <div>
           
          <div class="container">
          <div class="notification is-black">
          <strong>Bienvenido</strong>
          

          
          <h2 class="title">{user}</h2>
           <button class="button is-link is-rounded" onClick={handLeLogout}>Cerrar Sesion</button>
        
           </div>
          </div>

       </div>


       )



}