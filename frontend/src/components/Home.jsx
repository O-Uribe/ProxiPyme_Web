export function Home({user, setUser}) {


       const handLeLogout = ()=>{

          setUser([])

       }

       return(

       <div>
           
          <div class="container">
          <div class="notification is-primary">
          <strong>Bienvenido</strong>
          

          
           <h2 class="title">{user}</h2>
           <button class="button is-link is-rounded" onClick={handLeLogout}>Cerrar Sesion</button>
        
           </div>
          </div>

       </div>


       )



}