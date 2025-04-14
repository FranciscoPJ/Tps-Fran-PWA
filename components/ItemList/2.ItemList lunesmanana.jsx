import Item from "../Item/Item";

const ItemList = ({ videos, tipo, actualizarLista }) => {
    return (
        <div className="lista">
            {
                videos.length > 0 &&
                videos
                    .filter(video => video.tipo === tipo && video.lista >= -1)
                    .map((video) => (
                        <Item 
                        key={video.id} 
                        video={video} 
                        actualizarLista={actualizarLista}/>
                    ))
            }
        </div>
    );
};

export default ItemList;
