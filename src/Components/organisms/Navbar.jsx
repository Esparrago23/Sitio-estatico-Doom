import Menu from "../molecules/Menu";
import mysql from "../../data/mysql";
import "./Navbar.css";

function Navbar() {
    return(
        <>
        <div id="navbar_box">
            { mysql.logo.map(logo =><Menu image={logo.image} ></Menu>)}   
           { mysql.links.map(links =><Menu text={links.text} ></Menu>)}
            
        </div>
        </>
        
        
    );
}

export default Navbar;