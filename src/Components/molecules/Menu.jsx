
import Text from "../atoms/Text";
import Image from "../atoms/Image";
import "./Menu.css";
function Menu(props) {
    return (
        <>
                    <Image  image={props.image}></Image>
                <div id="apartados_box">
                    <Text text={props.text} ></Text>
                </div>
           
        </>
        
    );
}

export default Menu;