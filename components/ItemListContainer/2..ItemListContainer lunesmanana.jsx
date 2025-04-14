import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import { Titulo } from "../Titulo/Titulo";
import productos from "../../src/productos/productos.json";

const ItemListContainer = ({ tipo }) => {
    const [videos, setVideos] = useState([]);

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

    const tipoSingular = tipo.slice(0, -1);

    const actualizarLista = (id, nuevoValor) => {
        const nuevosVideos = videos.map(video =>
            video.id === id ? { ...video, lista: nuevoValor } : video
        );
        setVideos(nuevosVideos);
    };

    return (
        <div>
            {
                videos.length > 0 ? (
                    <div>
                        <Titulo texto={tipo} />
                        <h3>Cantidad Total de Videos con Todos los Tipos: {videos.length}</h3>
                        <h3>Cantidad Total de Videos con un Tipo: {
                            videos.filter(video => video.tipo === tipoSingular).length
                        }</h3>
                        <ItemList
                            videos={videos}
                            tipo={tipoSingular}
                            actualizarLista={actualizarLista}
                        />
                    </div>
                ) : (
                    <div>
                        <Titulo texto={tipo} />
                        <h3>No Hay Peliculas o Series Seleccionadas!</h3>
                    </div>
                )
            }
        </div>
    );
};

export default ItemListContainer;
