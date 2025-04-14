import Item from "../Item/Item";

// const ItemList = ({ videos, tipo, actualizarLista, manejarVideoClick }) => {
//const ItemList = ({ videos, actualizarListaVer, actualizarListaVisto, manejarVideoClick }) => {
const ItemList = ({ videos, actualizarLista, manejarVideoClick }) => {
    return (
        <div className="lista">
            {videos.filter((video) => video.lista > 0).map((video) => (
                    <Item
                        key={video.id}
                        video={video}
                        actualizarLista={actualizarLista}
                        // actualizarListaVisto={actualizarListaVisto}
                        manejarVideoClick={manejarVideoClick} // NUEVO
                    />
                ))}
        </div>
    );
};
// .filter(video => video.tipo === tipo && video.lista > 0)
export default ItemList;
