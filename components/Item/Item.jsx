import Boton from "../Boton/Boton";

//const Item = ({ video, actualizarListaVer, actualizarListaVisto, manejarVideoClick }) => {
const Item = ({ video, actualizarLista, manejarVideoClick }) => {
    const mensajeVer = "Ver";
    const mensajeVisto = "Vista";

    const handleVerClickVer = () => {
        actualizarLista(video.id, -1);
        manejarVideoClick(video); // NUEVO
    };

    const handleVistaClickVisto = () => {
        actualizarLista(video.id, 0);
        manejarVideoClick(video); // NUEVO
    };

    return (
        <div className="tarjeta"><br />
            <div>{video.id}</div>
            <div>{video.titulo}</div>
            <div>{video.director}</div>
            <div>{video.año}</div>
            <div>{video.genero}</div>
            <div>{video.rating}</div>
            <div>{video.tipo}</div>
            <div>Lista: {video.lista}</div>
            <Boton nombre={mensajeVer} onClick={handleVerClickVer} />
            <Boton nombre={mensajeVisto} onClick={handleVistaClickVisto} />
            <br /><br />
        </div>
    );
};

export default Item;
