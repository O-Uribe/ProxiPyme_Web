export function Home({user, setUser}) {


       const handLeLogout = ()=>{

          setUser([])

       }

       return(

       <div>
           <h1 class="title">Bienvenido <span class="icon">
           <i class="fas fa-home"></i>
           </span></h1>
           <h2 class="title">{user}</h2>
           <button class="button is-link is-rounded" onClick={handLeLogout}>Cerrar Sesion</button>


       </div>


       )



}