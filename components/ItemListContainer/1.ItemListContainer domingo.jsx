import { useEffect, useState } from "react";

import ItemList from "../Lista/ItemList";
import { Titulo } from "../Titulo/Titulo";
import productos from "../../src/productos/productos.json";

const ItemListContainer = ({tipo}) => {
    
    const [videos, setVideos] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {  // llamado de productos.json para adquirir el array multidimensional
            resolve(productos)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setVideos(res);
            })
    }, []) // es para que no sea un infinito cuando se ejecute

    const tipoSingular = tipo.slice(0, -1);
    const videosFiltrados = videos.filter(video => video.tipo === tipoSingular);

   

    
    return (
        <div>
            {
                videosFiltrados.length > 0 ? (
                    <div>
                        <Titulo texto={tipo} />
                        <h3>Cantidad Total de Videos con Todos los Tipos: {videos.length}</h3>
                        <h3>Cantidad Total de Videos con un Tipo: {videosFiltrados.length}</h3>
                        <ItemList videos={videosFiltrados} tipo={tipoSingular} />
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
}

export default ItemListContainer;


 /*
    function Componente({ videos, videosFiltrados, tipo, tipoSingular }) {
        let contenido;
    
        if (videosFiltrados.length > 0) {
            contenido = (
                <div>
                    <Titulo texto={tipo} />
                    <h3>Cantidad Total de Videos con Todos los Tipos: {videos.length}</h3>
                    <h3>Cantidad Total de Videos con un Tipo: {videosFiltrados.length}</h3>
                    <ItemList videos={videosFiltrados} tipo={tipoSingular} />
                </div>
            );
        } else if (videos.length > 0) {
            contenido = (
                <div>
                    <Titulo texto={tipo} />
                    <h3>No hay videos con ese tipo, pero sí hay otros disponibles.</h3>
                </div>
            );
        } else {
            contenido = (
                <div>
                    <Titulo texto={tipo} />
                    <h3>No hay Películas o Series cargadas aún.</h3>
                </div>
            );
        }
    
        return <div>{contenido}</div>;
    }
    */

