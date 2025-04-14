import Boton from "../Boton/Boton";

const Item = ({ video }) => {
    const mensajeVer = "Ver";
    const mensajeVista = "Vista";

    // prueba:
    


    return (
        <div className="tarjeta"><br />
            <div>{video.titulo}</div>
            <div>{video.director}</div>
            <div>{video.año}</div>
            <div>{video.genero}</div>
            <div>{video.rating}</div>
            <div>{video.tipo}</div>
            <Boton nombre={mensajeVer}/>
            <Boton nombre={mensajeVista}/>
            <br /><br />           
        </div>
    );
}

export default Item;