import "./Presentacion.css"
import Image from "../atoms/Image";
import Text from "../atoms/Text";
function Presentacion(props) {
    return (
        
        <div id="presentacion_box">

        <Image  image={props.image}></Image>
        <Text text={props.text}></Text>
        </div>
        
    );
}

export default Presentacion;