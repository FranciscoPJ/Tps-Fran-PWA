import { useEffect, useState } from "react";

import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";
import { Titulo } from "../Titulo/Titulo";
import productos from "../../src/productos/productos.json";

const ItemListContainer = ({ tipo }) => {
    const [videos, setVideos] = useState([]);
    const [videosVistos, setVideosVistos] = useState([]); // NUEVO

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(productos);
        });
    };

    useEffect(() => {
        pedirProductos().then((res) => {
            setVideos(res);
        });
    }, []);

    const actualizarLista = (id, nuevoValor) => {
        const nuevosVideos = videos.map(video =>
            video.id === id ? { ...video, lista: nuevoValor } : video
        );
        setVideos(nuevosVideos);
    };

    // NUEVO: función para guardar los videos tocados
    const manejarVideoClick = (video) => {
        setVideosVistos(prev => {
            const yaExiste = prev.some(v => v.id === video.id);
            return yaExiste ? prev : [...prev, video];
        });
    };

    return (
        <div>
            {videos.length > 0 ? (
                <div>
                    <Titulo texto={tipo} />
                    <h3>Cantidad de Videos: {videos.length}</h3>
    
                    {/* Lista general (los que todavía no se tocaron) */}
                    <ItemList
                        videos={videos.filter(video => video.lista > 0)}
                        actualizarLista={actualizarLista}
                        manejarVideoClick={manejarVideoClick}
                    />
    
                    <br /><br />
                    <hr />
    
                    {/* Lista "Ver" (lista === -1) */}
                    <div className="ver">
                        <Titulo texto={"Ver"} />
                        <div className="verLista">
                            {videos
                                .filter(video => video.lista === -1)
                                .map((video) => (
                                    <Item
                                        key={`ver-${video.id}`}
                                        video={video}
                                        actualizarLista={actualizarLista}
                                        manejarVideoClick={manejarVideoClick}
                                    />
                                ))}
                        </div>
                    </div>
    
                    <br /><br />
    
                    {/* Lista "Visto" (lista === 0) */}
                    <div className="visto">
                        <Titulo texto={"Visto"} />
                        <div className="vistoLista">
                            {videos
                                .filter(video => video.lista === 0)
                                .map((video) => (
                                    <Item
                                        key={`visto-${video.id}`}
                                        video={video}
                                        actualizarLista={actualizarLista}
                                        manejarVideoClick={manejarVideoClick}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <Titulo texto={tipo} />
                    <h3>No Hay Películas o Series Seleccionadas!</h3>
                </div>
            )}
        </div>
    );
    
};

export default ItemListContainer;
