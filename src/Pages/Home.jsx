import Navbar from "../Components/organisms/Navbar";
import Inicio from "../Components/organisms/Inicio";
import Informacion from "../Components/organisms/Informacion";
import "./Home.css"
function Home() {
    return(
       <div id="home">
        <Navbar></Navbar>
        <Inicio></Inicio>
        <Informacion></Informacion>
       </div>
       
    );
}
export default Home;