export function Home({user, setUser}) {


       const handLeLogout = ()=>{

          setUser([])

       }

       return(

       <div>
           <h1 class="title">Bienvenido</h1>
           <h2>{user}</h2>
           <button onClick={handLeLogout}>Cerrar Sesion</button>


       </div>


       )



}