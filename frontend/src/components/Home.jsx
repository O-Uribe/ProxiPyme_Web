export function Home({user, setUser}) {


       const handLeLogout = ()=>{

          setUser([])

       }

       return(

       <div>
           <h1 class="title">Bienvenido</h1>
           <span class="icon-text">
  <span class="icon">
    <i class="fas fa-home"></i>
  </span>
  <span>Home</span>
</span>
           <h2 class="title">{user}</h2>
           <button class="button is-link is-rounded" onClick={handLeLogout}>Cerrar Sesion</button>


       </div>


       )



}