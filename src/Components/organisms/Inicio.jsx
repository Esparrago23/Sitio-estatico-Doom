
import Presentacion from "../molecules/Presentacion";
import mysql from "../../data/mysql";


import "./Inicio.css"
function Inicio(){
    return(
        <>
       
        <div id="first">
        {
                mysql.vista.map(vista =><Presentacion image={vista.image} text={vista.text}></Presentacion>)
            }
        </div>
        
        </>
    );
}
export default Inicio;