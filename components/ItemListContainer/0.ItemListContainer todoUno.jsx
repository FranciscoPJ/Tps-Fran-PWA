import { useEffect, useState } from "react";

import productos from "../../src/productos/productos.json";

const ItemListContainer = () => {
    
    const [videos, setVideos] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(productos)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setVideos(res);
            })
    }, [])


    return(
        <div>
            {
                videos.length > 0 ?

                // videos.map((videos) (muestra todos que son 6)
                videos.slice(0, 3).map((videos)=> { // muestra 3 //
                    return (
                        <div key={videos.id}> 
                            <div>{videos.titulo}</div>
                            <div>{videos.director}</div>
                            <div>{videos.año}</div>
                            <div>{videos.genero}</div>
                            <div>{videos.rating}</div>
                            <div>{videos.tipo}</div>
                            <button>No Vista</button>
                            <br />
                            <br />
                        </div>
                    )
                }) 
                :
                <h1>No hay peliculas o series</h1>
            }
        </div>
    );
}

export default ItemListContainer;