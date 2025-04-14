import Boton from "../Boton/Boton";

const Item = ({ video, actualizarLista }) => {
    const mensajeVer = "Ver";
    const mensajeVista = "Vista";

    const handleVerClick = () => {
        // Marcamos como visto: cambia "lista" a -1
        actualizarLista(video.id, -1);
        console.log(video);
    };

    const handleVistaClick = () => {
        // Marcamos como visto: cambia "lista" a 0
        actualizarLista(video.id, 0);
        console.log(video);
    };  

    return (
        <div className="tarjeta"><br />
            <div>{video.titulo}</div>
            <div>{video.director}</div>
            <div>{video.año}</div>
            <div>{video.genero}</div>
            <div>{video.rating}</div>
            <div>{video.tipo}</div>
            <div>Lista: {video.lista}</div>
            <Boton nombre={mensajeVer} onClick={handleVerClick}/>
            <Boton nombre={mensajeVista} onClick={handleVistaClick} />
            <br /><br />
        </div>
    );
};

export default Item;
