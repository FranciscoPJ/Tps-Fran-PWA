import Item from "../Item/Item";

const ItemList = ({videos, tipo}) => {
    
    // uso de .some() (es un while)
    // .filter()

    return (
        <div className='lista'>
            
            {/*<h1>{videos[0]?.tipo || "Cargando..."}</h1>  si o si tiene que una condicional o ternario para que aparezca el titulo */}           
            
            {
                videos.length > 0 &&
                videos.filter(video => video.tipo === tipo && video.lista === 1).map((video) => { {/* recorrido del array, mostrando cada producto (video) y verificando las condicionales del .map() */}
                    return(
                        <Item key={video.id} video={video}/>
                    )
                })
            }
        </div>
    );
}

export default ItemList;